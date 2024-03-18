// import React from 'react'
// import { useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "../axiosConfig";

// function Login() {
//     const emailDom = useRef();
//     const passwordDom = useRef();
//     const navigate = useNavigate();


//     async function handleSubmit(e) {
//         e.preventDefault();
    
//         if (
//           !emailDom.current.value ||
//           !passwordDom.current.value
//         ) {
//           alert("Please provide all the required information");
//           return;
//         }
//         const emailValue = emailDom.current.value;
//         const passwordValue = passwordDom.current.value;
    
//         try {
//           await axios.post("/api/users/login", {
//             email: emailValue,
//             password: passwordValue,
//           });
    
//           alert("login successful.");
//           navigate("/home");
//         } catch (error) {
//           alert("Something went wrong. Please try again later.");
//           console.log(error.response.data);
//         }
//       }

//   return (
//     <section>
//     <form onSubmit={handleSubmit}>
//       <div>
//         <span>email :---</span>
//         <input ref={emailDom} type="text" placeholder="email" />
//       </div>
//       <br />
//       <div>
//         <span>password :---</span>
//         <input ref={passwordDom} type="password" placeholder="password" />
//       </div>
//       <button type="submit">Login</button>
//     </form>
//   </section>
//   )
// }

// export default Login
