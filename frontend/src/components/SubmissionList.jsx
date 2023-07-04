import { Badge, Button, Card, Input, Select } from "antd";
import React, { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import useAxiosGet from "./../hooks/useAxiosGet";
import { departmentList, batchList } from "../utils";
import useAxiosPost from "../hooks/useAxiosPost";
import { SearchOutlined } from "@ant-design/icons";
import '../css/submissionList.css'

const SubmissionList = ({ isAuth, authSetter }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [submission, getSubmissions] = useAxiosGet([]);
  const [status, updateStatus] = useAxiosPost({});
  const [search, setSearch] = useState(null);
  const [department, setDepartment] = useState({ value: "All", label: "All" });
  const [batch, setBatch] = useState({ value: "All", label: "All" });
  const [scroll, setscroll] = useState(false);

  useEffect(() => {
    getSubmissions("/submission/All/All/null");
  }, []);

  const scrollingOnYAxis = () => {
    if (window.scrollY >= 5) {
      setscroll(true)
    }
    else {
      setscroll(false)
    }
  }

  window.addEventListener('scroll', scrollingOnYAxis)

  return (
    <>
      <div style={{ width: "100%" }}>
        <NavMenu className='navbar' isAuth={isAuth} authSetter={authSetter} />
        <div className="row mt-2">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <Card title="Submission List" bodyStyle={{padding:"12px"}}>
              <div className={scroll && 'changeBG stick'}>
                <div className="d-flex">
                  <div style={{ width: "50%", marginRight: "2px" }}>
                    <div className="mr-1">Search</div>
                    <Input
                      value={search}
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                  </div>
                  <div style={{ width: "50%", marginTop: "22px" }}>
                    <Button
                      icon={
                        <SearchOutlined
                          style={{ transform: "translateY(-2px)" }}
                        />
                      }
                      onClick={(e) => {
                        if (search?.length > 0) {
                          setDepartment({ value: "All", label: "All" })
                          setBatch({ value: "All", label: "All" })
                          getSubmissions(`/submission/All/All/${search}`);
                        }
                      }}
                    >
                      Search
                    </Button>
                    <Button
                      onClick={(e) => {
                        setSearch(null);
                        getSubmissions("/submission/All/All/null");
                      }}
                      style={scroll ? {
                        color: "white",
                        marginLeft: "2px",
                        background: 'grey',
                        transition: "ease-in-out 0.8s"
                      } : { marginLeft: "2px" }}

                      disabled={!(search?.length > 0)}
                    >
                      Clear
                    </Button>
                  </div>
                </div>
                <div className="d-flex w-100">
                  <div
                    style={{
                      width: "50%",
                    }}
                    className="mb-2 mr-1"
                  >
                    <div className="mr-1">Select Department</div>
                    <Select
                      style={{
                        width: "100%",
                      }}
                      value={department}
                      onChange={(value) => {
                        setSearch(null);
                        setDepartment(value);
                        getSubmissions(
                          `/submission/${value}/${batch?.label === "All" ? "All" : batch
                          }/null`
                        );
                      }}
                      options={[
                        { value: "All", label: "All" },
                        ...departmentList,
                      ]}
                      placeholder="Select Department"
                    />
                  </div>
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
                        setSearch(null);
                        setBatch(value);
                        getSubmissions(
                          `/submission/${department?.label === "All" ? "All" : department
                          }/${value}/null`
                        );
                      }}
                      options={[{ value: "All", label: "All" }, ...batchList]}
                      placeholder="Select Batch"
                    />
                  </div>
                </div>
              </div>


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
                                          `/submission/${department?.label === "All"
                                            ? "All"
                                            : department
                                          }/${batch?.label === "All"
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
    </>
  );
};

export default SubmissionList;
