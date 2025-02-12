// src/components/Notification.js
import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = ({ message, status }) => {
  const notify = () => {
    // Ensure the toast object is used correctly
    switch (status) {
      case 'success':
        toast.success(message, { position: 'top-right' }); // Use string 'top-right'
        break;
      case 'error':
        toast.error(message, { position: 'top-right' });
        break;
      case 'info':
        toast.info(message, { position: 'top-right' });
        break;
      default:
        toast(message, { position: 'top-right' });
        break;
    }
  };

  React.useEffect(() => {
    if (message && status) {
      notify();  // Trigger notification when message and status are available
    }
  }, [message, status]);

  return null;  // Don't need to render anything
};

export default Notification;
