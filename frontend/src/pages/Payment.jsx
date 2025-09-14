import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import UserFinishRide from "../components/UserFinishRide";
import UserPayment from "../components/UserPayment";
import CaptainRating from "../components/CaptainRating";

const Payment = () => {
  const [payment, setPayment] = useState(false);
  const [rating, setRating] = useState(false);
  const paymentRef = useRef(null);
  const ratingRef = useRef(null);

  useGSAP(
    function () {
      if (payment) {
        gsap.to(paymentRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(paymentRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [payment]
  );

  useGSAP(
    function () {
      if (rating) {
        gsap.to(ratingRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ratingRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [rating]
  );

  return (
    <>
      <div className="p-3 pt-10">
        <UserFinishRide setPayment={setPayment} />
      </div>

      <div
        ref={paymentRef}
        className="fixed w-full h-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-2"
      >
        <UserPayment setPayment={setPayment} setRating={setRating} />
      </div>

      <div
        ref={ratingRef}
        className="fixed w-full h-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-2"
      >
        <CaptainRating />
      </div>
    </>
  );
};

export default Payment;
