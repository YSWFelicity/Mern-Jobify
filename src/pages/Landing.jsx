import React from 'react';
import styled from 'styled-components';
import Wrapper from "../assets/wrappers/LandingPage";
import main from '../assets/images/main.svg';
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.svg'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis
            excepturi nam est, veniam enim itaque, totam adipisci officiis
            perferendis saepe repellendus dolorem accusantium ad repellat nihil
            reiciendis error animi tenetur.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </div>
    </Wrapper>
  );
}


export default Landing
