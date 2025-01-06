import styled from "styled-components"
import Wrapper from "../assets/wrappers/LandingPage"
import main from "../assets/images/main.svg"
import { Link } from "react-router-dom"
import Logo from "../components/Logo"

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            JobNavigator is your ultimate companion for discovering career
            opportunities tailored to your skills and aspirations. Whether
            you're just starting out or looking for your next big move, our app
            connects you with the right roles, companies, and resources to help
            you succeed. Take control of your journey and navigate your way to
            the perfect job with ease and confidence!
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
