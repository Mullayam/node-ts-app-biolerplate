import React, { useState } from "react";
import { Col, Row, Modal, ModalBody, Input, Label } from "reactstrap";
import { Link } from "react-router-dom";

//Job Images
import jobImage1 from "../../../assets/images/featured-job/img-01.png";
import jobImage2 from "../../../assets/images/featured-job/img-02.png";
import jobImage3 from "../../../assets/images/featured-job/img-03.png";

const JobVacancyPost = () => {
  //Apply Now Model
  const [modal, setModal] = useState(false);
  const openModal = () => setModal(!modal);

  const jobVacancyPost = [
    {
      id: 1,
      companyImg: jobImage1,
      jobDescription: "HTML Developer",
      experience: "0-2 Yrs Exp.",
      companyName: "Jobcy Technology Pvt.Ltd",
      location: "California",
      salary: "$250 - $800 / month",
      fullTime: true,
      timing: "Full Time",
      addclassNameBookmark: true,
      badges: [
        {
          id: 1,
          badgeclassName: "bg-warning-subtle text-warning",
          badgeName: "Urgent"
        },
        {
          id: 2,
          badgeclassName: "bg-info-subtle text-info",
          badgeName: "Private"
        }
      ]
    },
    
  ];
  return (
    <React.Fragment>
      {jobVacancyPost.map((jobVacancyPostDetails, key) => (
        <div
          key={key}
          className={
            jobVacancyPostDetails.addclassNameBookmark === true
              ? "job-box bookmark-post card mt-4"
              : "job-box card mt-4"
          }
        >
          <div className="p-4">
            <Row>
              <Col lg={1}>
                <Link to="/companydetails">
                  <img
                    src={jobVacancyPostDetails.companyImg}
                    alt=""
                    className="img-fluid rounded-3"
                  />
                </Link>
              </Col>
              <Col lg={10}>
                <div className="mt-3 mt-lg-0">
                  <h5 className="fs-17 mb-1">
                    <Link to="/jobdetails" className="text-dark">
                      {jobVacancyPostDetails.jobDescription}
                    </Link>{" "}
                    <small className="text-muted fw-normal">
                      ({jobVacancyPostDetails.experience})
                    </small>
                  </h5>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <p className="text-muted fs-14 mb-0">
                        {jobVacancyPostDetails.companyName}
                      </p>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted fs-14 mb-0">
                        <i className="mdi mdi-map-marker"></i>
                        {jobVacancyPostDetails.location}
                      </p>
                    </li>
                    <li className="list-inline-item">
                      <p className="text-muted fs-14 mb-0">
                        <i className="uil uil-wallet"></i>{" "}
                        {jobVacancyPostDetails.salary}
                      </p>
                    </li>
                  </ul>
                  <div className="mt-2">
                    <span
                      className={
                        jobVacancyPostDetails.fullTime === true
                          ? "badge bg-success-subtle text-success fs-13 mt-1 mx-1"
                          : jobVacancyPostDetails.partTime === true
                          ? "badge bg-danger-subtle text-danger fs-13 mt-1 mx-1"
                          : jobVacancyPostDetails.freeLance === true
                          ? "badge bg-primary-subtle text-primary fs-13 mt-1 mx-1"
                          : jobVacancyPostDetails.internship === true
                          ? "badge bg-blue-subtle text-blue fs-13 mt-1"
                          : ""
                      }
                    >
                      {jobVacancyPostDetails.timing}
                    </span>
                    {(jobVacancyPostDetails.badges || []).map(
                      (badgeInner, key) => (
                        <span
                          className={`badge ${badgeInner.badgeclassName} fs-13 mt-1`}
                          key={key}
                        >
                          {badgeInner.badgeName}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </Col>
            </Row>
            <div className="favorite-icon">
              <Link to="#">
                <i className="uil uil-heart-alt fs-18"></i>
              </Link>
            </div>
          </div>
          <div className="p-3 bg-light">
            <div className="row justify-content-between">
              <Col md={8}>
                <div>
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">
                      <i className="uil uil-tag"></i> Keywords :
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="primary-link text-muted">
                        Ui designer
                      </Link>
                      ,
                    </li>
                    <li className="list-inline-item">
                      <Link to="#" className="primary-link text-muted">
                        developer
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col md={3}>
                <div className="text-md-end">
                  <Link
                    to="#applyNow"
                    onClick={openModal}
                    className="primary-link"
                  >
                    Apply Now <i className="mdi mdi-chevron-double-right"></i>
                  </Link>
                </div>
              </Col>
            </div>
          </div>
        </div>
      ))}

      <div className="text-center mt-4">
        <Link to="/joblist" className="primary-link form-text">
          View More <i className="mdi mdi-arrow-right"></i>
        </Link>
      </div>

      <div
        className="modal fade"
        id="applyNow"
        tabIndex="-1"
        aria-labelledby="applyNow"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <Modal isOpen={modal} toggle={openModal} centered>
            <ModalBody className="modal-body p-5">
              <div className="text-center mb-4">
                <h5 className="modal-title" id="staticBackdropLabel">
                  Apply For This Job
                </h5>
              </div>
              <div className="position-absolute end-0 top-0 p-3">
                <button
                  type="button"
                  onClick={openModal}
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="mb-3">
                <Label for="nameControlInput" className="form-label">
                  Name
                </Label>
                <Input
                  type="text"
                  className="form-control"
                  id="nameControlInput"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <Label for="emailControlInput2" className="form-label">
                  Email Address
                </Label>
                <Input
                  type="email"
                  className="form-control"
                  id="emailControlInput2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <Label for="messageControlTextarea" className="form-label">
                  Message
                </Label>
                <textarea
                  className="form-control"
                  id="messageControlTextarea"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <div className="mb-4">
                <Label className="form-label" for="inputGroupFile01">
                  Resume Upload
                </Label>
                <Input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send Application
              </button>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
};

export default JobVacancyPost;
