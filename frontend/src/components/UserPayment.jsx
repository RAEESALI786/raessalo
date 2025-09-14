import React, { useState } from "react";
import SuccessfullPayment from "./SuccessfullPayment";

const UserPayment = (props) => {
  const [method, setMethod] = useState("cash");
  const [formData, setFormData] = useState({
    upi: "",
    bank: "",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // animation succ
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePayment = () => {
    // Do payment logic here...
    setShowSuccess(true);
  };

  return (
    <>
      <div className="max-w-md mx-auto mt- p-5 ">
        <h2 className="text-2xl font-bold mb-5 text-center">
          Choose Payment Method
        </h2>

        <div className="flex justify-around mb-6">
          {["cash", "upi", "netbanking", "creditcard"].map((m) => (
            <button
              key={m}
              onClick={() => setMethod(m)}
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                method === m ? "bg-blue-600 text-white" : "bg-gray-200"
              }`}
            >
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>

        {/* Conditional Inputs */}
        {method === "cash" && (
          <div className="text-center text-green-600 font-medium">
            Please pay the driver in cash at the end of the ride.
          </div>
        )}

        {method === "upi" && (
          <div>
            <label className="block mb-2 font-medium">UPI ID</label>
            <input
              type="text"
              name="upi"
              value={formData.upi}
              onChange={handleChange}
              placeholder="example@upi"
              className="w-full border p-2 rounded"
            />
          </div>
        )}

        {method === "netbanking" && (
          <div>
            <label className="block mb-2 font-medium">
              Bank Account / IFSC
            </label>
            <input
              type="text"
              name="bank"
              value={formData.bank}
              onChange={handleChange}
              placeholder="Enter bank details"
              className="w-full border p-2 rounded"
            />
          </div>
        )}

        {method === "creditcard" && (
          <div className="space-y-3">
            <div>
              <label className="block font-medium">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9012 3456"
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Name on Card</label>
              <input
                type="text"
                name="cardName"
                value={formData.cardName}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full border p-2 rounded"
              />
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                className="w-1/2 border p-2 rounded"
              />
              <input
                type="password"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="CVV"
                className="w-1/2 border p-2 rounded"
              />
            </div>
          </div>
        )}

        <button 
        onClick={() => handlePayment}
          className="mt-6 w-full bg-green-600 text-white p-3 rounded-xl font-semibold"
        >
          Proceed to Pay
        </button>
        {showSuccess && (
          <SuccessfullPayment onClose={() => console.log("Success closed")} />
        )}
        <button
          onClick={() => {
            props.setRating(true);
            props.setPayment(false);
          }}
          className="mt-6 w-full bg-gray-600 text-white p-3 rounded-xl font-semibold"
        >
          Rate our Captain
        </button>
      </div>

      {/* rating */}
    </>
  );
};

export default UserPayment;
