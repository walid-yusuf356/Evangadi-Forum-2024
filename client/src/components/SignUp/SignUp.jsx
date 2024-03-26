import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosConfig";

const SignUp = ({setCurrentPage}) => {

    const navigate = useNavigate();
  const usernameDom = useRef(null);
  const firstnameDom = useRef(null);
  const lastnameDom = useRef(null);
  const emailDom = useRef(null);
  const passwordDom = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !usernameDom.current.value ||
      !firstnameDom.current.value ||
      !lastnameDom.current.value ||
      !emailDom.current.value ||
      !passwordDom.current.value
    ) {
      alert("Please provide all the required information");
      return;
    }

    const usernameValue = usernameDom.current.value;
    const firstnameValue = firstnameDom.current.value;
    const lastnameValue = lastnameDom.current.value;
    const emailValue = emailDom.current.value;
    const passwordValue = passwordDom.current.value;

    try {
      await axios.post("/api/users/register", {
        userName: usernameValue,
        firstName: firstnameValue,
        lastName: lastnameValue,
        email: emailValue,
        password: passwordValue,
      });

      alert("Registration successful. Please login to continue.");
      navigate("/login");
    } catch (error) {
      alert("Something went wrong. Please try again later.");
      console.log(error.response);
    }
  }

    return (
        <div className="col card p-5 m-5 text-center">
            <h3 className="m-3">Join the network</h3>
            <div className={""}> {/* moved the comment inside braces */}
                <p>
                    Already have an account{" "}
                    <a
                        href="/"
                        onClick={() => setCurrentPage("login")}
                        className="fw-semibold text-decoration-none"
                        style={{ color: "#fe8402" }}
                    >
                        Sign in
                    </a>
                </p>

            </div>
            <form onSubmit={handleSubmit} action="" className="d-flex flex-column gap-3">
                <div>
                    <input
                        ref={usernameDom}
                        type="text"
                        className="form-control p-3"
                        placeholder="Username"
                    />
                </div>
                <div className="d-flex gap-4">
                    <input
                        ref={firstnameDom}
                        type="text"
                        className="form-control p-3"
                        placeholder="First Name"
                    />

                <input ref={lastnameDom} type="text" className="form-control p-3" placeholder="Last Name" />
                </div>
                <div>
                    <input ref={emailDom} type="email" className="form-control p-3" placeholder="Email Address" />
                </div>
                <div>
                    <input
                        ref={passwordDom}
                        type="password"
                        className="form-control p-3"
                        placeholder="Password"
                    />
                </div>
                    <div className="p-2">
                        <small>I agree to the privacy policy and terms of service.</small>
                    </div>
                <div className="d-grid">
                    <button
                        type="submit"
                        className="button btn btn-primary action-btn fw-bold form-control text-white"
                    >
                        Agree and Join
                    </button>
                <div className="p-2">
                <p className="d-flex justify-content-center">
                    <a
                        href="/"
                        className="fw-semibold text-decoration-none"
                        style={{ color: "#fe8402" }}
                    >
                        Already have an account?
                    </a>
                </p>
                </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
