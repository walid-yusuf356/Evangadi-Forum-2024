/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
import { LiaUserCircle } from 'react-icons/lia'
import { useNavigate } from 'react-router'

const Questions = () => {
  const navigate = useNavigate();
  const handleAnswerQuestion = () => {
    navigate("/answer"); 
  };
  
  return (
    <div>
      <a className="text-decoration-none text-black" href="#">
            <hr />
            <div className="d-flex justify-content-between" onClick={handleAnswerQuestion}>
              <div className="d-md-flex align-items-center">
                <div className="user d-flex flex-column align-items-center">
                  {/* user */}
                  <div>
                    <LiaUserCircle />
                  </div>
                  <div>Walid Yusuf</div>
                </div>

                <div>
                  {/* question */}
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Odit debitis velit similique iste temporibus quidem quam.
                  </p>
                </div>
              </div>
              <div>
                <span>
                <FaAngleRight />
                </span>
                {/* arrow */}
              </div>
            </div>
          </a>
    </div>
  )
}

export default Questions;
