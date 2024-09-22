import entourage from "../assets/images/entourage.jpg";

const EntouragePage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${entourage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw", // Full width of the viewport
          minHeight: "100vh", // Ensures it covers the full viewport height at a minimum
          padding: 0, // Remove padding if it's causing issues
        }}
      >
        <div
          className="container text-center"
          style={{ paddingTop: "2.5em", paddingBottom: "5.3em" }}
        >
          <h1 className="great-vibes-regular mt-5" style={{ fontSize: "7em" }}>
            The Entourage
          </h1>

          <h3 className="alegreya-sc-regular">
            Our Circle of Love and Support
          </h3>

          <h2
            className="great-vibes-regular mt-5"
            style={{ fontSize: "4.5em", paddingTop: "1em" }}
          >
            Principal Sponsors
          </h2>
          <h5 className="alegreya-sc-regular">The Pillars of Our Union</h5>

          <div className="row mt-5">
            <div className="col-6">
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
            </div>

            <div className="col-6">
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-6">
              <h1
                className="great-vibes-regular mt-5"
                style={{ fontSize: "4.5em" }}
              >
                Best Men
              </h1>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
            </div>

            <div className="col-6">
              <h1
                className="great-vibes-regular mt-5"
                style={{ fontSize: "4.5em" }}
              >
                Main of Honor
              </h1>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
              <h4 className="alegreya-sc-regular">Mr. First M. Last</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EntouragePage;
