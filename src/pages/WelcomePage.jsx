import welcome_bg from "../assets/images/welcome_bg.jpg";
import { Link } from "react-router-dom";

const WelcomePage = () => {
  return (
    <div
      className="full-container"
      style={{
        backgroundImage: `url(${welcome_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >



      <div className="row d-flex justify-content-center align-items-center">
        <div className="col d-flex flex-column justify-content-center align-items-center text-center mt-lg-5">
            <p className="alegreya-sc-regular mb-3" style={{fontSize: "1.5em"}}>A Celebration of Love:</p>
            <h1 className="great-vibes-regular my-4" style={{fontSize: "8em"}}>Aljohn & Diane</h1>
            <Link to='/' className="btn btn-secondary text-white montserrat-font text-center p-3" style={{width:"15em", fontSize:"1.1em"}} >Open Invitation</Link>
            <p className="alegreya-sc-regular text-wrap p-4 text-5" style={{fontSize: "1.1em"}}>Explore our journey, share in our joy,  and be part of a celebration that’s as <br/>unique and special as our love story.</p>
        </div>
      </div>




    </div>
  );
};

export default WelcomePage;
