import React from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
  return (
    <>
      <h3 className="text-center">Blogs</h3>
      <div className="row m-2">
        <div className="col-md-3 my-2">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Notification infrastructure</Card.Title>
              <Card.Text>
                Building a notification system is complicated. At first, it
                seems like just sending an email, but in reality, it's just the
                beginning. Users today expect a multi-channel
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 my-2">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                Data from API and Display HTML Table in Angular
              </Card.Title>
              <Card.Text>
                In this tutorial, We will learn how to get/fetch data from APIs
                and display it in the html table in angular 14 apps. Use the
                following steps to get/fetch data from APIs and display it in
                the table in angular 14 apps:
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 my-2">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                AWS Lambda to Create PDFs & Convert Documents
              </Card.Title>
              <Card.Text>
                Serverless LibreOffice Show Me the Code Some quick example text
                to build on the card title and make up the bulk of the card's
                content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 my-2">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Cloud-native Apps</Card.Title>
              <Card.Text>
                A fast & fun way to build portable cloud-native applications
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 my-2">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>React Blog</Card.Title>
              <Card.Text>
                React blog app project. React blog website application tutorial
                for beginners. Create a full-stack app using React, Hygraph CMS
                , GraphQL. You'll also learn how to work with GraphCMS. GraphCMS
                is a headless content
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 my-2">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Mark down</Card.Title>
              <Card.Text>
                Markdown Editor Tutorial A tutorial for building a beautiful
                Markdown editor
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 my-2">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>React Story</Card.Title>
              <Card.Text>
                Ladle is an environment to develop, test, and share your React
                components faster.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-3 my-2">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>C++ Liabrary</Card.Title>
              <Card.Text>
                nbind is a set of headers that make your C++11 library
                accessible from JavaScript. With a single #include statement,
                your C++ compiler generates the necessary
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Blogs;
