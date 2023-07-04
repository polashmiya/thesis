import React, { useEffect, useState } from 'react'
import NavMenu from './NavMenu'
import Footer from './Footer'
import useAxiosGet from '../hooks/useAxiosGet';
import { Button, Card, Select } from 'antd';
import { batchList } from '../utils';
import useAxiosPost from '../hooks/useAxiosPost';

const CE = ({isAuth, authSetter}) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const [submission, getSubmissions] = useAxiosGet([]);
    const [batch, setBatch] = useState({ value: "All", label: "All" });
    const [status, updateStatus] = useAxiosPost({});

    useEffect(() => {
        getSubmissions("/submission/Civil/All/null");
      }, []);

  return (

    <div style={{ width: "100%" }}>
    <NavMenu className='navbar' isAuth={isAuth} authSetter={authSetter} />
    <div className="row mt-2">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <Card title="Submission Of CE Department" bodyStyle={{padding:"12px"}}>
          {/* <div className={scroll && 'changeBG stick'}> */}

            <div className="d-flex w-100">

              <div
                style={{
                  width: "50%",
                }}
                className="mb-2"
              >
                <div className="mr-1">Select Batch</div>
                <Select
                  style={{
                    width: "100%",
                  }}
                  value={batch}
                  onChange={(value) => {
                    setBatch(value);
                    getSubmissions(
                      `/submission/CE/${value}/null`
                    );
                  }}
                  options={[{ value: "All", label: "All" }, ...batchList]}
                  placeholder="Select Batch"
                />
              </div>
            </div>
          {/* </div> */}


          {submission?.length > 0 &&
            submission?.map(
              (item) =>
                (user?.firstName === "Admin" ? true : item?.isApproved) && (
                  <div className="border p-2">
                    <p className="d-flex justify-content-between align-items-center">
                      <span>
                        <b>Theses Name :</b> {item?.thesesName}{" "}
                      </span>
                      <div>
                        {!item?.isApproved &&
                          user?.firstName === "Admin" && (
                            <Button
                              onClick={() => {
                                updateStatus(
                                  "/submission/updatestatus",
                                  {
                                    isApproved: true,
                                    thesisId: item?._id,
                                  },
                                  () => {
                                    getSubmissions(
                                      `/submission/Civil/${batch?.label === "All"
                                        ? "All"
                                        : batch
                                      }/null`
                                    );
                                  },
                                  true
                                );
                              }}
                              size="small"
                              type="primary"
                            >
                              Approve
                            </Button>
                          )}
                      </div>
                    </p>
                    <p>
                      <b>Status : </b>
                      <span
                        style={{
                          color: item?.isApproved ? "green" : "red",
                        }}
                      >
                        {item?.isApproved ? "Approved" : "Unapproved"}
                      </span>
                    </p>
                    <p>
                      <b>Batch :</b> {`${item?.batch}`}
                    </p>
                    <p>
                      <b>Department :</b> {item?.department}
                    </p>
                    <p>
                      <b>Team mate first name :</b>{" "}
                      {item?.teammateFirstName}
                    </p>
                    <p>
                      <b>Team mate second name :</b>{" "}
                      {item?.teammateSecondName}
                    </p>
                    <p>
                      <b>Team mate third name :</b>{" "}
                      {item?.teammateThirdName}
                    </p>
                    <p>
                      <b>Team mate fourth name :</b>{" "}
                      {item?.teammateFourthName}
                    </p>
                    <p>
                      <b>Supervisor name :</b> {item?.superVisorName}
                    </p>
                    <p
                      onClick={(e) => {
                        window.open(item?.coverPage, "_blank");
                      }}
                      style={{ cursor: "pointer", color: "blue" }}
                    >
                      <b>
                        {item?.coverPage
                          ? "View Cover page"
                          : "Not found cover page"}
                      </b>
                    </p>
                    <p
                      onClick={(e) => {
                        window.open(item?.pdf, "_blank");
                      }}
                      style={{ cursor: "pointer", color: "blue" }}
                    >
                      <b>{item?.pdf ? "View PDF" : "Not found pdf"}</b>
                    </p>
                  </div>
                )
            )}
        </Card>
      </div>
      <div className="col-md-3"></div>
    </div>
  </div>
  )
}

export default CE