import React, { useState } from "react";
import Swal from "sweetalert2";


const ContactForm = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    // Create a new FormData object
    const submittedData = new FormData(event.target);
    submittedData.append("access_key", "b0e18965-116f-4b9f-9c88-976b7ad6ad18");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submittedData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        Swal.fire({
          title: "Success!",
          text: "Message sent successfully",
          icon: "success",
        });
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-6" style={{
      background: 'radial-gradient(circle, #5ffbf1, #00e6ff, #00cbff, #5ea7ff, #b678f3, #b678f3, #b678f3, #b678f3, #5ea7ff, #00cbff, #00e6ff, #5ffbf1)'
    }}>
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Contact Us</h2>
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-800 font-semibold">Full Name</label>
            <input
              type="text"
              name="fullname"
              placeholder="Enter your full name"
              value={formData.fullname}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border-2 text-gray-800 placeholder-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-md"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border-2 text-gray-800 placeholder-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-md"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border-2 text-gray-800 placeholder-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-md"
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold">Message</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 border-2 selection:bg-sky-200 text-gray-800 placeholder-gray-600 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-md"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
