import React from "react";

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="contact-main-heading">Contact Info</h1>
      <hr />
      <div className="contact-container">
        <div className="contact-item">
          <div className="contact-heading">Coordinators:</div>
          <div className="contact-detail">DTDCFAC</div>
        </div>

        <div className="contact-item">
          <div className="contact-heading">Email:</div>
          <div className="contact-detail">dtdcfac2025@gmail.com</div>
        </div>

        <div className="contact-item">
          <div className="contact-heading">Address:</div>
          <div className="contact-detail">
            540 Dum Dum Road, Surermath (Near Dum Dum Jn. Station),
            <br />
            Kolkata-700074, West Bengal
          </div>
        </div>

        {/* 🗺️ Google Map Embed */}
        <div className="contact-item">
          <div className="contact-heading">Venue:</div>
          <div className="contact-map">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.2608791832687!2d88.40641697471048!3d22.62630433265069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e6a770b0a75%3A0x5f7f4933a438cb0d!2s540%20Dum%20Dum%20Rd%2C%20Surer%20Math%2C%20Kolkata%2C%20West%20Bengal%20700074!5e0!3m2!1sen!2sin!4v1730704012345!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
