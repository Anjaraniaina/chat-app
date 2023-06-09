import React from 'react';

interface ToastProps {
  message: string | undefined;
}

const Toast: React.FC<ToastProps> = ({ message }) => {
  return <div className="invalid-feedback">{message || ''}</div>;
};

export default Toast;