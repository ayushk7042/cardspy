// import React, { useState } from "react";
// import "./Contact.css";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.name || !formData.email || !formData.message) {
//       setStatus("Please fill all required fields.");
//       return;
//     }

//     emailjs
//       .send(
//         "service_xxxxxx", // 🔹 replace with your EmailJS service ID
//         "template_xxxxxx", // 🔹 replace with your template ID
//         formData,
//         "YOUR_PUBLIC_KEY" // 🔹 replace with your EmailJS public key
//       )
//       .then(
//         () => {
//           setStatus("✅ Message sent successfully!");
//           setFormData({ name: "", email: "", subject: "", message: "" });
//         },
//         (error) => {
//           console.error(error);
//           setStatus("❌ Failed to send message. Try again later.");
//         }
//       );
//   };

//   return (
//     <div className="contact-page">
//       {/* Hero Section */}
//       <section className="contact-hero">
//         <div className="hero-content">
//           <h1>Contact <span>Us</span></h1>
//           <p>
//             Have a question or suggestion? We'd love to hear from you!
//             Fill the form or reach us through the details below.
//           </p>
//         </div>
//       </section>

//       {/* Contact Info */}
//       <section className="contact-info">
//         <div className="info-card">
//           <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="address" />
//           <h3>Our Office</h3>
//           <p>Sector 62, Noida, Uttar Pradesh, India</p>
//         </div>
//         <div className="info-card">
//           <img src="https://cdn-icons-png.flaticon.com/512/542/542638.png" alt="email" />
//           <h3>Email Us</h3>
//           <p>support@creditcardhub.in</p>
//         </div>
//         <div className="info-card">
//           <img src="https://cdn-icons-png.flaticon.com/512/159/159832.png" alt="phone" />
//           <h3>Call Us</h3>
//           <p>+91 98765 43210</p>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="contact-form-section">
//         <h2>Get in Touch</h2>
//         <form onSubmit={handleSubmit} className="contact-form">
//           <div className="form-group">
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name *"
//               value={formData.name}
//               onChange={handleChange}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email *"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </div>
//           <input
//             type="text"
//             name="subject"
//             placeholder="Subject"
//             value={formData.subject}
//             onChange={handleChange}
//           />
//           <textarea
//             name="message"
//             rows="5"
//             placeholder="Your Message *"
//             value={formData.message}
//             onChange={handleChange}
//           ></textarea>
//           <button type="submit" className="send-btn">Send Message</button>
//           {status && <p className="status-text">{status}</p>}
//         </form>
//       </section>

//       {/* Map Section */}
//       <section className="map-section">
//         <iframe
//           title="Our Location"
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.79862123325!2d77.06889729666394!3d28.52728034305237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce59f59dbdf47%3A0xf30dfdc08bbdb9a9!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1680025346600!5m2!1sen!2sin"
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         ></iframe>
//       </section>
//     </div>
//   );
// };

// export default Contact;



import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xxxxxxx", // 🔹 Replace with your EmailJS Service ID
        "template_xxxxxxx", // 🔹 Replace with your EmailJS Template ID
        form.current,
        "YOUR_PUBLIC_KEY" // 🔹 Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          setStatusMessage("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setStatusMessage("❌ Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Left Side - Info + Map */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions, feedback, or partnership inquiries? Reach out to us —
            we’d love to hear from you.
          </p>

          <div className="info-details">
            <p>
              📍 <strong>Address:</strong> Urban Tower, Sector 62, Gurugram, Haryana 122011
            </p>
            <p>📞 <strong>Phone:</strong> +91 9876543210</p>
            <p>📧 <strong>Email:</strong> support@affalliances.com</p>
          </div>

          <div className="map-container">
            <iframe
              title="Affalliances Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.624129495384!2d77.09662157544691!3d28.441996493331327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19b4e12b0b8f%3A0xa3e2fcd0d3f5a70!2sUrban%20Tower%2C%20Sector%2062%2C%20Gurugram%2C%20Haryana%20122011!5e0!3m2!1sen!2sin!4v1730112479385!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: "12px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="contact-form">
          <h2>Send a Message</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <input type="text" name="subject" placeholder="Subject" />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
          {statusMessage && <p className="status-msg">{statusMessage}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;

