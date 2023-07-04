import React, { useRef, useState } from "react";
import NavMenu from "./NavMenu";
import { Button, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { batchList, departmentList } from "../utils";
import { toast } from "react-toastify";
import useAxiosPost from "./../hooks/useAxiosPost";
import { FaPlus, FaMinus } from "react-icons/fa";

const Submission = ({ authSetter, isAuth }) => {
  const [_, saveAction] = useAxiosPost();
  const [teammateInputs, setTeammateInputs] = useState(1)




  const [state, setState] = useState({
    thesesName: null,
    batch: null,
    department: null,
    teammateFirstName: null,
    teammateSecondName: null,
    teammateThirdName: null,
    teammateFourthName: null,
    superVisorName: null,
    coverPage: null,
    pdf: null,
  });



  const props = {
    name: "file",
    action: "http://localhost:3000/uploads",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
      }
      if (info.file.status === "done") {
        setState({ ...state, coverPage: info?.file?.response?.file?.url });
      } else if (info.file.status === "error") {
      }
    },
  };
  const propsTwo = {
    name: "file",
    action: "http://localhost:3000/uploads",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
      }
      if (info.file.status === "done") {
        setState({ ...state, pdf: info?.file?.response?.file?.url });
      } else if (info.file.status === "error") {
      }
    },
  };

  const {
    thesesName,
    batch,
    department,
    teammateFirstName,
    teammateSecondName,
    teammateThirdName, teammateFourthName,
    superVisorName,
    coverPage,
    pdf,
  } = state;


  const teammateContainerRef = useRef(null)
  const submitHandler = () => {
    if (!coverPage || !pdf) return toast.warn("Please select file");

    if (
      !thesesName ||
      !batch ||
      !department ||

      !superVisorName
    )
      return toast.warn("Please enter all fields");
    const payload = {
      thesesName,
      batch,
      department,
      teammateFirstName,
      teammateFourthName,
      teammateSecondName,
      teammateThirdName,
      superVisorName,
      coverPage,
      pdf
    };
    saveAction(`/submission`, payload, null, true);
  };

  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };

  let teammateArray = [];
  const handleonchangename = (event) => {
    const container = teammateContainerRef.current.children
    Array.from(container).forEach(el => {
      const input = el.querySelector('input')
      teammateArray.push(input.value);

    })

    setState({
      ...state,
      teammateFirstName: teammateArray[0],
      teammateSecondName: teammateArray[1],
      teammateThirdName: teammateArray[2],
      teammateFourthName: teammateArray[3]
    })

  }

  // console.log(teammateArray)
  const handleDelete = (value) => {
    const AfterFilter = teammateInputs.filter((el, index) => index !== value)
    setTeammateInputs(AfterFilter)
  }

  console.log("state", state)

  return (
    <>
      <NavMenu isAuth={isAuth} authSetter={authSetter} />
      <div className="row mt-3">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div>
            <div className="mr-1">Theses Name</div>
            <Input
              onChange={(e) =>
                handleChange("thesesName", e.target.value)
              }
              value={state?.thesesName}
              className="mb-1"
              placeholder="Theses Name"
            />
          </div>
          <div>
            <div className="mr-1">Select Batch</div>
            <Select
              style={{
                width: "100%",
              }}
              value={state?.batch}
              onChange={(value) => handleChange("batch", value)}
              options={batchList}
              placeholder="Select Batch"
            />
          </div>
          <div>
            <div className="mr-1">Select Department</div>
            <Select
              style={{
                width: "100%",
              }}
              onChange={(value) => handleChange("department", value)}
              options={departmentList}
              placeholder="Select Department"
              value={state?.department}
            />
          </div>
          <div>
            <div className="mr-1">Team Mates Name</div>
            <div ref={teammateContainerRef} >

              {
                Array.from(Array(teammateInputs))?.map((el, idx) => {
                  return (
                    <div className="d-flex">

                      <Input
                        name={'teammate-' + idx}
                        onChange={handleonchangename}
                        // value={state?.teammateFirstName}
                        className="mb-1"

                      />


                      {

                        Array(teammateInputs).length === idx + 1 ?

                          <>
                            <Button
                              onClick={() => setTeammateInputs(p => p + 1)}
                              disabled={teammateInputs===4}
                            ><FaPlus></FaPlus></Button>
                          </>
                          :
                          <Button
                            onClick={() => setTeammateInputs(p => p - 1)}
                          ><FaMinus></FaMinus></Button>
                      }
                    </div>
                  );
                }
                )
              }
            </div>

            {/* <Input
              onChange={(e) =>
                handleChange("teammateSecondName", e.target.value)
              }
              value={state?.teammateSecondName}
              className="mb-1"
              placeholder="Second Name"
            />
            <Input
              onChange={(e) =>
                handleChange("teammateThirdName", e.target.value)
              }
              value={state?.teammateThirdName}
              className="mb-1"
              placeholder="Third Name"
            />
            <Input
              onChange={(e) =>
                handleChange("teammateFourthName", e.target.value)
              }
              value={state?.teammateFourthName}
              className="mb-1"
              placeholder="Fourth Name"
            /> */}
          </div>
          <div>
            <div className="mr-1">Supervisor Name</div>
            <Input
              onChange={(e) => handleChange("superVisorName", e.target.value)}
              value={state?.superVisorName}
              className="mb-1"
              placeholder="Supervisor Name"
            />
          </div>
          <div className="mb-1">
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Upload Cover Page</Button>
            </Upload>
          </div>
          <div className="mb-1">
            <Upload {...propsTwo}>
              <Button icon={<UploadOutlined />}>Upload PDF</Button>
            </Upload>
          </div>
          <div className="text-center">
            <Button onClick={(e) => submitHandler()} type="primary">
              Submit
            </Button>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
};

export default Submission;
