import { useState } from 'react';

const RSVPPage = () => {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwoEpZyaA_z9fdFuZ_gJNtqVkZUuSVOnZew3hlJVbSqeWus47FQkMyX-i4vgbFwDYF2/exec';

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    number: '',
    response: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(e.target) })
      .then((response) => console.log('Success!', response))
      .catch((error) => console.error('Error!', error.message));
  };

  return (
    <>
      <div className="container text-center" style={{ padding: "1em", paddingTop: "3.3em", paddingBottom: "5.3em" }}>
        <h1 className="great-vibes-regular" style={{ fontSize: "7em" }}>RSVP</h1>
        <p className="alegreya-400 fst-normal" style={{ fontSize: "1.5em" }}>Kindly let us know if you’ll be joining us by May 15th.</p>
        <h1 className="alegreya-sc-regular mt-5" style={{ fontSize: "4em" }}>Aljohn & Diane Wedding</h1>
        <p className="alegreya-400 fst-normal" style={{ fontSize: "1.8em" }}>Jul 13, 2025 @ 3:00 PM | Seda Hotel, Bacolod City</p>

        <div className="border" style={{ marginTop: "5em", padding: "3em" }}>
          <form className="boder" name="rsvpForm" onSubmit={handleSubmit}>
            <div className="row d-flex">
              <div className="col-6" style={{ textAlign: "left", fontSize: "1.2em" }}>
                <label className="alegreya-400 fst-normal">First Name<span className="text-danger">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  style={{ backgroundColor: "#D9D9D9" }}
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-6" style={{ textAlign: "left", fontSize: "1.2em" }}>
                <label className="alegreya-400 fst-normal">Last Name<span className="text-danger">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  style={{ backgroundColor: "#D9D9D9" }}
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row d-flex mt-3">
              <div className="col-6" style={{ textAlign: "left", fontSize: "1.2em" }}>
                <label className="alegreya-400 fst-normal">Email<span className="text-danger">*</span></label>
                <input
                  type="email"
                  className="form-control"
                  style={{ backgroundColor: "#D9D9D9" }}
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-6" style={{ textAlign: "left", fontSize: "1.2em" }}>
                <label className="alegreya-400 fst-normal">Phone Number<span className="text-danger">*</span></label>
                <input
                  type="text"
                  className="form-control"
                  style={{ backgroundColor: "#D9D9D9" }}
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row d-flex justify-content-left text-left mt-5">
              <div className="col-6" style={{ textAlign: "left", fontSize: "1.2em" }}>
                <label className="alegreya-400 fst-normal">Will you be attending?<span className="text-danger">*</span></label>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="response"
                    value="yes"
                    checked={formData.response === 'yes'}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label">Excited to Celebrate with You</label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="response"
                    value="no"
                    checked={formData.response === 'no'}
                    onChange={handleChange}
                    required
                  />
                  <label className="form-check-label">Regretfully Unable to Attend</label>
                </div>
              </div>
            </div>

            <button className="btn btn-success px-5 py-2 mt-5 fst-normal" style={{ fontSize: "1.4em", width: "15em" }}>
              <span className="alegreya-400 fst-normal">Submit</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RSVPPage;
