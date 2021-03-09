// Customize this 'myform.js' script and add it to your JS bundle.
// Then import it with 'import MyForm from "./myform.js"'.
// Finally, add a <MyForm/> element whereever you wish to display the form.

import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xoqpyjya"
        method="POST"
        className="flex flex-col w-full rounded-b-2xl md:rounded-r-none p-4 mx-auto font-bold shadow-2xl bg-gray-700 border-l-2 border-r-2 md:border-r-0 md:border-t-2 md:rounded-l-2xl border-b-2 border-gray-400"
      >
        <label className="text-gray-300 text-2xl">Name:</label>
        <input
          type="text"
          name="name"
          className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
        />
        <label className="text-gray-300 text-2xl">Email:</label>
        <input
          type="email"
          name="email"
          placeholder=""
          className="p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
        />
        <label className="text-gray-300 text-2xl">Message:</label>
        <textarea
          cols="50"
          rows="10"
          name="message"
          placeholder="What's on your mind?"
          className="p-4 rounded-t focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
        />
        {status === "SUCCESS" ? (
          <p className="text-gray-200">Thanks!</p>
        ) : (
          <button className="padding-4 bg-gray-400 font-bold text-gray-100 rounded-b hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent">
            Submit
          </button>
        )}
        {status === "ERROR" && (
          <p className="text-red-300">Please fill all fields</p>
        )}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
