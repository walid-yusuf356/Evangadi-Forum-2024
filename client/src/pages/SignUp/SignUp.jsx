import React from 'react'

const SignUp = ({setCurrentPage}) => {
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
            <form action="" className="d-flex flex-column gap-3">
                <div>
                    <input
                        type="text"
                        className="form-control p-3"
                        placeholder="Username"
                    />
                </div>
                <div className="d-flex gap-4">
                    <input
                        type="text"
                        className="form-control p-3"
                        placeholder="First Name"
                    />

                <input type="text" className="form-control p-3" placeholder="Last Name" />
                </div>
                <div>
                        <input type="email" className="form-control p-3" placeholder="Email Address" />
                </div>
                <div>
                    <input
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
