/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../../components/Header/Header";
import Question from "../../components/Question/Question";

const Home = () => {
  return (
    <>
      <Header />
      <section className="bg-body-tertiary">
        <div className="d-flex justify-content-around pt-5">
          <button className="btn btn-primary fw-bold px-5 action-btn">
            <a className="text-white text-decoration-none" href="/">
              Ask Question
            </a>
          </button>
          <p className="fw-semi">
            <span className="text-warning">Welcome,</span> Walid Yusuf
          </p>
        </div>
        <div className="container">
          <h2>Questions</h2>
          <Question />
          <Question />
          
        </div>
      </section>
    </>
  );
};

export default Home;
