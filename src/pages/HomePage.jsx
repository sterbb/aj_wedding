import seal from "../assets/images/seal.png";
import ring from "../assets/images/ring.png";
import flower_bg from "../assets/images/flower_bg.jpg";
import flower_bg2 from "../assets/images/flower_bg2.jpg";

import dress from "../assets/images/dress_icon.png";
import map from "../assets/images/map_icon.png";
import gallery from "../assets/images/gallery_icon.png"

import Card from "../components/Card";
import { useEffect, useState } from "react";

const HomePage = () => {

  const calculateTimeLeft = () => {
    const targetDate = new Date("2024-12-31T00:00:00"); // Set your target date here
    const now = new Date();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
      <div className="row">
        <div
          className="col d-flex flex-column justifiy-content-center text-center"
          style={{ marginTop: "3em", overflow: "hidden" }}
        >
          <p className="alegreya-sc-medium" style={{ fontSize: "1.3em" }}>
            With the grace of God <br />
            and the blessings of our families
          </p>

          <h1 className="great-vibes-regular mt-5" style={{ fontSize: "11em" }}>
            Aljohn & Diane
          </h1>

          <h3 className="alegreya-sc-medium mt-5" style={{ fontSize: "3em" }}>
            Invite you to join us
          </h3>

          <img
            src={seal}
            alt=""
            style={{
              maxWidth: "100%", // Fixed width of the seal image
              marginTop: "32em",
              height: "auto", // Keep the aspect ratio intact
              position: "absolute",
              overflow: "hidden",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </div>
      </div>

      <div className="row" style={{marginTop:'16em'}}>
            <div className="col col d-flex flex-column justifiy-content-center text-center align-items-center">
                <h3 className="alegreya-sc-medium mt-5">for a celebration of love, joy, <br /> 
                    and the bonds of friendship and family
                </h3>
                
                <h4 className="alegreya-400 mt-5">
                  Therefore a man shall leave his father and mother <br />
                  and hold fast to his wife, and the two shall become one flesh.<br />
                  So they are no longer two but one flesh. What therefore <br />
                  God has joined together, let not man separate. <br /><br />

                  Mark 10: 7-9
                </h4>



                <h4 className="alegreya-sc-medium mt-5">We look forward to celebrating this <br />
                joyous occasion with you!
                </h4>

                <img src={ring} className="" alt=""  style={{width:"25em", marginTop:"8em", marginBottom:"7em"}}/>

                <a href="/rsvp" className="btn btn-secondary text-center mt-5 pt-3" style={{width:"20em"}}><h3 className="alegreya-sc-medium">Let us Know</h3></a>

                <h3 className="alegreya-sc-medium mt-4 text-danger">Response is until  septemebr 05,2024</h3>

                  <p className="alegreya-400 fst-normal" style={{fontSize:"1.1em"}}>Please let us know if you will be joining us by responding to this RSVP.  <br />
                    Your timely reply will help us ensure that every <br />
                    detail is perfect for our special day. <br />
                  </p>
            </div>
      </div>

      <div className="row d-flex flex-column align-items-center justify-content-center text-center" style={{
        backgroundImage: `url(${flower_bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",  // Full width of the viewport
        height: "100vh", // Full height of the viewport
        marginTop: "6em",       // Ensure no margin is shrinking the container
        padding: 0,      // Remove padding if it's causing issues
      }}>


      <p className="alex-brush-regular fs-1">The Big day is Almost Here</p>

      <h1 className="great-vibes-regular mt-3" style={{fontSize:"10em"}}>Aljohn & Diane</h1>

      <div className="row d-flex align-items-center justify-content-center gap-0" style={{width:"60em"}}>

          <div className="col m-0 p-0">
            <h1 className="alegreya-400 fst-normal" id="time" style={{fontSize:"7em"}}>{timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}</h1>
            <p  className="alegreya-400 fst-normal ms-5" style={{fontSize:"2em", wordSpacing:"3em"}}>Day Hour  Minutes Seconds</p>
          </div>

        

      </div>

    


      </div>

      {/* Add Image */}
      {/* <div className="row">
        Image
      </div> */}

      <div className="row d-flex justify-content-center text-center" style={{
        backgroundImage: `url(${flower_bg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",  // Full width of the viewport
        marginTop: "6em",       // Ensure no margin is shrinking the container
        padding: "10em",      // Remove padding if it's causing issues
      }}> 

          <h4 className="alegreya-sc-regular mt-5" style={{fontSize:'3em', color:"#966C00"}}>Mark Your Calendars</h4>
          <h6 className="alegreya-sc-regular" style={{fontSize:'1.5em'}}>For a Heartfelt Ceremony</h6>

          <h1 className="great-vibes-regular" style={{fontSize:'10em', color:"#586F4A", marginTop:"0.5em"}}>The Moment of Forever</h1>

          <h4 className="alegreya-400" style={{fontSize:'5em', marginTop:"0.5em"}}>July 13, 2024 @ 3 pm</h4>
          <h5 className="alegreya-400" style={{fontSize:'2.5em', marginTop:"0.5em"}}>Add Location - LOCATION</h5>
      </div>

      <div className="row text-center gap-5" style={{paddingLeft:"20em",paddingRight:"20em", paddingTop:"6em", paddingBottom:"6em"}}>

        <h1 className="alegreya-sc-regular" style={{fontSize:"4em"}}>Glimpses of Our Journey</h1>

        <Card title={"attire"} image={dress}  link={"/attire"}/>
        <Card title={"Venue"} image={map} link={"/venue"}/>
        <Card title={"Gallery"} image={gallery} link={"/gallery"}/>

      </div>

      <div className="row d-flex flex-column text-center">

        <h1 className="alegreya-sc-regular" style={{fontSize:"4em"}}>Gift Guide</h1>

        <p className="alegreya-sc-regular" style={{fontSize:"1.3em"}}>Your presence is the most cherished gift we could ever receive. brAs we step into a new chapter, <br /> our hearts are set on dreams and adventures yet to unfold.</p>
        <p className="alegreya-sc-regular" style={{fontSize:"1.3em"}}>If you wish to bless us further, a contribution to our shared aspirations would be received with gratitude and grace, <br />  enriching the tapestry of our lives together.</p>

      </div>
    </>
  );
};

export default HomePage;
