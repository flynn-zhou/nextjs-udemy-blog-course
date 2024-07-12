import classes from "./contact-form.module.css";

import { useState, useEffect } from "react";
import Notification from "../ui/notification";

function ContactForm() {
  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  //this function could move to some file
  async function sendContactData(sendData) {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(sendData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(response.message || "something went wrong!");
    }

    const data = response.json();

    return data;
  }

  async function submitHander(event) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      const sendData = {
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      };
      const data = await sendContactData(sendData);

      setRequestStatus("success");
      setEnteredEmail("");
      setEnteredName("");
      setEnteredMessage("");
    } catch (error) {
      setRequestStatus("error");
      setRequestError(error.message);
    }
  }

  let notification;

  if (requestStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }
  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success",
      message: "Successfully!",
    };
  }
  if (requestStatus === "error") {
    notification = {
      status: "error",
      title: "Error",
      message: requestError,
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How Can I Help U?</h1>
      <form className={classes.form} onSubmit={submitHander}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={enteredEmail}
              onChange={(event) => setEnteredEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={enteredName}
              onChange={(event) => setEnteredName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message" />
          <textarea
            id="message"
            rows={5}
            value={enteredMessage}
            onChange={(event) => setEnteredMessage(event.target.value)}
          />
        </div>

        <div className={classes.action}>
          <button> Send Message</button>
        </div>
      </form>

      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
}

export default ContactForm;
