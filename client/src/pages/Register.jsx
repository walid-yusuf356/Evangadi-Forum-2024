// import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../axiosConfig";

// function Register() {
//   const navigate = useNavigate();
//   const usernameDom = useRef(null);
//   const firstnameDom = useRef(null);
//   const lastnameDom = useRef(null);
//   const emailDom = useRef(null);
//   const passwordDom = useRef(null);

//   async function handleSubmit(e) {
//     e.preventDefault();

//     if (
//       !usernameDom.current.value ||
//       !firstnameDom.current.value ||
//       !lastnameDom.current.value ||
//       !emailDom.current.value ||
//       !passwordDom.current.value
//     ) {
//       alert("Please provide all the required information");
//       return;
//     }

//     const usernameValue = usernameDom.current.value;
//     const firstnameValue = firstnameDom.current.value;
//     const lastnameValue = lastnameDom.current.value;
//     const emailValue = emailDom.current.value;
//     const passwordValue = passwordDom.current.value;

//     try {
//       await axios.post("/api/users/register", {
//         userName: usernameValue,
//         firstName: firstnameValue,
//         lastName: lastnameValue,
//         email: emailValue,
//         password: passwordValue,
//       });

//       alert("Registration successful. Please login to continue.");
//       navigate("/login");
//     } catch (error) {
//       alert("Something went wrong. Please try again later.");
//       console.log(error.response);
//     }
//   }

//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <span>username :---</span>
//           <input ref={usernameDom} type="text" placeholder="username" />
//         </div>
//         <br />
//         <div>
//           <span>first name :---</span>
//           <input ref={firstnameDom} type="text" placeholder="first name" />
//         </div>
//         <br />
//         <div>
//           <span>last name :---</span>
//           <input ref={lastnameDom} type="text" placeholder="last name" />
//         </div>
//         <br />
//         <div>
//           <span>email :---</span>
//           <input ref={emailDom} type="text" placeholder="email" />
//         </div>
//         <br />
//         <div>
//           <span>password :---</span>
//           <input ref={passwordDom} type="password" placeholder="password" />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </section>
//   );
// }

// export default Register;
