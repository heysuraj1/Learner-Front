import React from 'react'

function Contact() {
    return (
        <div className="container">
            <div >
                <h3 className='henta'>Contact Us Now</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail2" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail2"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We will never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword4" className="form-label">
              Your Message
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="7"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
        </div>
    )
}

export default Contact
