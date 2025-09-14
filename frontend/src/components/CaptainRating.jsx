import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CaptainRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    alert(`Rated ${rating} stars. Comment: ${comment}`);
    // You can send this data to an API here
  };
  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Rate Your Driver</h2>

      <div className="flex items-center gap-4 mb-6">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/024/344/088/small/businessman-isolated-illustration-ai-generative-free-png.png"
          alt="Driver"
          className="h-20 w-20 rounded-full object-cover border"
        />
        <div>
          <h3 className="text-xl font-semibold">Raees Ali</h3>
          <p className="text-sm text-gray-500">Mumbai, MH</p>
        </div>
      </div>

      <div className="flex justify-center mb-4">
        {[...Array(5)].map((star, index) => {
          const ratingValue = index + 1;

          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
                className="hidden"
              />
              <FaStar
                className="cursor-pointer text-3xl transition"
                color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>

      <textarea
        className="w-full border p-3 rounded-lg mt-2"
        placeholder="Leave a comment (optional)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      <Link to="/">
      <button
        onClick={handleSubmit}
        className="w-full mt-4 bg-blue-600 text-white p-3 rounded-xl font-semibold hover:bg-blue-700"
      >
        Submit Rating
      </button>
      </Link>
    </div>
  )
}

export default CaptainRating