'use client'
import React from "react";
import { Header } from "../components/header/header";
import Footer from "../components/footer/footer";
import TextField from "@mui/material/TextField";
import { Phone, Envelope } from "react-bootstrap-icons";

const page = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      
      subject: 'Consultation Request From '+e.target.companyName.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      phoneNumber: e.target.phoneNumber.value,
      title: e.target.title.value,
      companyName: e.target.companyName.value,
      comment: e.target.comment.value

      
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <>
      <Header />

      <div className="bg-white flex justify-center py-20">
        <form onSubmit={handleSubmit} className="min-w-[300px] px-5 py-8 pb-12 shadow-lg rounded-md">
          <div className="flex flex-col gap-10 px-2">
            <span className="text-2xl">REQUEST A CONSULTATION</span>
            <div className="flex-1 flex justify-between items-center gap-10 flex-wrap">
              <TextField
                type="text"
                label="First Name"
                name="firstName"
                className="border border-black w-[250px] md:w-[100%]  h-[40px] p-2"
                required
              />
              <TextField
                type="text"
                label="last Name"
                name="lastName"
                className="border border-black w-[250px] md:w-[100%]   h-[40px] p-2" required
              />
            </div>
            <div className="flex-1 flex justify-between items-center gap-10 flex-wrap">
              <TextField
                type="email"
                label="email"
                name='email'
                className="border border-black w-[250px] md:w-[100%]   h-[40px] p-2" required
              />
              <TextField
                type="number"
                label="Phone Number"
                name="phoneNumber"
                className="border border-black w-[250px] md:w-[100%]  h-[40px] p-2" required
              />
            </div>
            <div className="flex-1 flex justify-center items-center gap-10">
              <TextField
                type="text"
                label="Title"
                name="title"
                className="border border-black flex-1  h-[40px] p-2" required
              />
            </div>
            <div className="flex-1 flex justify-center items-center gap-10">
              <TextField
                type="text"
                label="Company Name"
                name="companyName"
                className="border border-black flex-1  h-[40px] p-2" required
              />
            </div>
            <div className="flex-1 flex justify-center items-center gap-10">
              <TextField
                label="Comment"
                name="comment"
                placeholder="Type your message here"
                multiline
                rows={4}
                className="border border-black flex-1 h-[120px] p-2" required
              />
            </div>
            <div className="flex-1 flex justify-center items-center" >
              
                <button className="text-lg text-white text-center w-[300px] h-[60px] bg-[#800F2F] md:text-sm md:w-[220px] md:h-[50px] border-black border hover:text-[#800F2F] hover:shadow-[inset_20rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]">
      
              
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex flex-wrap py-20 w-full justify-center items-center gap-10">
        <div className="w-64 h-60 flex flex-col gap-1 justify-center items-center rounded-lg shadow-lg hover:shadow-2xl">
            <Phone size={70} color="#590D22"/>
            <span className="text-2xl font-semibold pt-1">PHONE</span>
            <span className="font-light">+23439603917</span>

        </div>
        <div className="w-64 h-60 flex flex-col gap-1 justify-center items-center rounded-lg shadow-lg hover:shadow-2xl">
            <Envelope size={70} color="#590D22"/>
            <span className="text-2xl font-semibold pt-1">MAIL</span>
            <span className="font-light">contact@virtualbills.ng</span>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default page;
