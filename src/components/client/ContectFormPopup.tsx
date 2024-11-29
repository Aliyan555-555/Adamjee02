import { IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import React, { useState } from "react";

const ContactFormPopup = ({ close }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    city: "",
    email: "",
    queries: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    mobileNumber: "",
    city: "",
    email: "",
    queries: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Validate form inputs
  const validate = () => {
    // eslint-next-line prefer-const
    let tempErrors = {fullName: "",mobileNumber: "",city: "",email: "",queries: "",};// eslint-disable-line prefer-const
    // eslint-disable-line prefer-const
    let isValid = true;// eslint-disable-line prefer-const

    if (!formData.fullName) {
      tempErrors.fullName = "Full Name is required";
      isValid = false;
    }
    if (!formData.mobileNumber) {
      tempErrors.mobileNumber = "Mobile Number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.mobileNumber)) {
      tempErrors.mobileNumber = "Mobile Number must be 10 digits";
      isValid = false;
    }
    if (!formData.city) {
      tempErrors.city = "City is required";
      isValid = false;
    }
    if (!formData.email) {
      tempErrors.email = "Email Address is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email Address is invalid";
      isValid = false;
    }
    if (!formData.queries) {
      tempErrors.queries = "Please type your queries";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const res = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();
        if (data.success) {
          console.log("Email sent successfully");
          close();
        } else {
          console.log("Email failed");
        }
      } catch (error) {
        console.log("Email failed",error);
      }
    }
  };

  return (
    <div className="fixed z-[100000] top-0 left-0 w-screen h-screen bg-[#4A619B] py-20 px-32 flex items-center justify-center gap-6 flex-col">
      <div className="w-full flex justify-end items-center">
        <IconButton onClick={close} className="!p-4 !bg-white !text-black">
          <ClearIcon fontSize="large" />
        </IconButton>
      </div>
      <h4 className="text-2xl font-semibold text-teal-400">
        Submit your information and we will get back to you soon.
      </h4>
      <form className="flex flex-wrap w-full gap-5" onSubmit={handleSubmit}>
        <div className="md:w-[49%] w-full">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="bg-white p-4 text-lg rounded-xl w-full "
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="text-[#F60002]">{errors.fullName}</p>
          )}
        </div>

        <div className="md:w-[49%] w-full">
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile Number"
            className="bg-white p-4 text-lg rounded-xl w-full"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          {errors.mobileNumber && (
            <p className="text-[#F60002]">{errors.mobileNumber}</p>
          )}
        </div>
        <div className="md:w-[49%] w-full">
          <input
            type="text"
            name="city"
            placeholder="City"
            className="bg-white p-4 text-lg rounded-xl  w-full"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <p className="text-[#F60002]">{errors.city}</p>}
        </div>

        <div className="md:w-[49%] w-full">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="bg-white p-4 text-lg rounded-xl w-full"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-[#F60002]">{errors.email}</p>}
        </div>
        <textarea
          rows={5}
          name="queries"
          className="bg-white p-3 text-lg rounded-xl md:w-[100%] w-full"
          placeholder="Type your Queries here."
          value={formData.queries}
          onChange={handleChange}
        />
        {errors.queries && <p className="text-[#F60002]">{errors.queries}</p>}

        <div className="w-full flex justify-end items-center">
          <button
            type="submit"
            className="px-8 rounded-[50px] py-3 text-xl font-semibold bg-white text-[#002175]"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactFormPopup;
