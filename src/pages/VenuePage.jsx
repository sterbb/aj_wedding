
import venue from "../assets/images/venue.jpg"

const VenuePage = () => {
  
  return (
    <>
        <div className="full-container text-center wrap-content"
          style={{ paddingTop: "2em", paddingBottom: "5.3em" }}>
            <h1 className="great-vibes-regular mt-5" style={{ fontSize: "7em" }}>Venue</h1>

            <div className="row mt-5">

              <div className="col-12 col-md-7">
                <img src={venue} alt="" id="venue_bg" />
              </div>

              <div className="col-12 col-md-5 text-center d-flex flex-column align-items-center align-content-center justify-content-center">
                  <p className="alegreya-sc-regular" style={{fontSize:"1.2em"}}>Where love blooms and time stands still, join us at</p>

                  <h1 className="great-vibes-regular mt-2 mb-2" style={{fontSize:"6.5em"}}>El Jardin de Zaida</h1>

                  <p className="alegreya-sc-regular mb-5" style={{fontSize:"1.2em"}}>a place where our forever begins</p>


                  <h4 className="alegreya-sc-regular mt-5" style={{fontSize:"2.2em"}}>Sitio Lagkit, San Juan, Batangas</h4>
                  <p className="alegreya-sc-regular" style={{fontSize:"1.6em"}}> July 25, 2025 @ 3:00 PM</p>
              </div>


              <div className="row">
            
              </div>

              

              <div id="map">

              <div style={{width:"100%", height:"500px"}}>
                
                <iframe style={{width:"100%", height:"100%"}}   src="https://maps.google.com/maps?width=100%25&amp;height=100%&amp;hl=en&amp;q=13.770933766672034,%20121.41114943335609+(Venue)&amp;t=&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>
              </div>

            </div>
        </div>

    </>

  )
}

export default VenuePage