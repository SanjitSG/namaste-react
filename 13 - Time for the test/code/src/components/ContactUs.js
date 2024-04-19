import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-slate-300 shadow-lg rounded-lg my-24 p-4 flex flex-col items-center">
      <h1 className="font-bold text-4xl text-center">Contact US</h1>
      <input
        className="my-4 w-96 p-1 rounded-lg"
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        className="my-4 w-96 p-1 rounded-lg"
        type="email"
        name="email"
        placeholder="Email"
      />
      <input
        className="my-4 w-96 p-1 rounded-lg"
        type="text"
        name="comment"
        placeholder="Comment..."
      />
      <button className="max-w-20 p-1 bg-emerald-300 shadow-lg rounded-lg">Submit</button>
    </div>
  );
};

export default ContactUs;
