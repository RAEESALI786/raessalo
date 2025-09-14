import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const SuccessfullPayment = ({ onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose && onClose(); // optional callback to notify parent
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!visible) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg text-center animate-fade-in">
        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
        <h2 className="text-xl font-bold text-green-700">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mt-2">Thank you for your payment.</p>
      </div>
    </div>
  );
};

export default SuccessfullPayment;
