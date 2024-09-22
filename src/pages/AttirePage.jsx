
const AttirePage = () => {
  return (
    <>
    
        <div className="container text-center wrap-content"
          style={{ paddingTop: "2em", paddingBottom: "5.3em" }}>

            <h1 className="great-vibes-regular mt-5" style={{ fontSize: "7em" }}>Attire</h1>

            <h4 className="alegreya-sc-regular mt-3">To honor the elegance of the occasion, <br/> we kindly 
            request our guests to join us in formal attire.</h4>

            <div className="row d-flex justify-content-around align-content-center">

                <div className="col d-flex flex-column align-items-center" style={{marginTop:"10em"}}>
                    
                    <div className="bg-black rounded-circle" style={{width:"8em", height:"8em"}}>
                         
                    </div>

                    <h4 className="mt-3 alegreya-sc-regular">Black</h4>

                </div>

                <div className="col d-flex flex-column align-items-center" style={{marginTop:"10em"}}>
                    
                    <div className="bg-primary rounded-circle" style={{width:"8em", height:"8em"}}>
                         
                    </div>

                    <h4 className="mt-3 alegreya-sc-regular">Blue</h4>

                </div>

                <div className="col d-flex flex-column align-items-center" style={{marginTop:"10em"}}>
                    
                    <div className="bg-success rounded-circle" style={{width:"8em", height:"8em"}}>
                         
                    </div>

                    <h4 className="mt-3 alegreya-sc-regular">Green</h4>

                </div>


            </div>

        </div>

    </>
  )
}

export default AttirePage