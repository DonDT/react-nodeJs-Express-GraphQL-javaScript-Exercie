import React from "react";
import "./notification.css";

function Notification({ message }) {
  if (message === null) {
    return null;
  }
  return <div className="notification">{message}</div>;
}

export default Notification;
