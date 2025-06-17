import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiH1 } from "react-icons/hi2";

const Contact = () => {

  const handleFormSubmit = (formData) => {
    console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log('Formdata: ', formInputData)
  }

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>

      <div className="container contact-wrapper">
        <form action={handleFormSubmit}>
          <input
            type="text"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your name"
            name="username"
          />
          <input
            type="email"
            className="form-control"
            required
            autoComplete="false"
            placeholder="Enter your email"
            name="email"
          />
          <textarea
            className="form-control"
            rows="10"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>
          <button type="submit" value="send">
            Send    <span class="btn-icon"><FaLongArrowAltRight /></span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
