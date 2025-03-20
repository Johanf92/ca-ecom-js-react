import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors = {};
    if (formData.fullName.trim().length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters";
    }
    if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (formData.body.trim().length < 3) {
      newErrors.body = "Message must be at least 3 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted Successfully:", formData);
      setFormData({ fullName: "", subject: "", email: "", body: "" });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Contact Us
        </h2>
        <form onSubmit={onFormSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-semibold"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={onInputChange}
              className="w-full p-3 border border-gray-400 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your full name"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-gray-700 font-semibold"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={onInputChange}
              className="w-full p-3 border border-gray-400 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter subject"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={onInputChange}
              className="w-full p-3 border border-gray-400 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="body" className="block text-gray-700 font-semibold">
              Message
            </label>
            <textarea
              name="body"
              rows="4"
              value={formData.body}
              onChange={onInputChange}
              className="w-full p-3 border border-gray-400 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your message"
            />
            {errors.body && (
              <p className="text-red-500 text-sm mt-1">{errors.body}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold p-3 rounded-lg hover:bg-yellow-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
