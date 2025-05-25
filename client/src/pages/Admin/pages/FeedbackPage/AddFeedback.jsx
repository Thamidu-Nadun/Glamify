import React, { useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../../../layout/Footer/Footer';

function AddFeedback() {
  const [rate, setRate] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedback = {
      rate,
      comment,
    };

    try {
      const response = await fetch(
        'http://127.0.0.1:8080/api/feedback/saveFeedback',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(feedback),
        },
      );

      if (response.ok) {
        alert('Feedback submitted successfully');
        setRate('');
        setComment('');
      } else {
        alert('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Error submitting feedback');
    }
  };

  return (
    <div>
      <Header />

      <div className="my-10 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="mx-4 w-full max-w-[340px] rounded-lg bg-white p-4 py-8 text-left text-sm text-gray-500 shadow-[0px_0px_10px_0px] shadow-black/10 md:p-6"
        >
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
            Sign Up
          </h2>
          <input
            className="mb-2 mt-1 w-full rounded border border-gray-500/10 bg-indigo-500/5 px-3 py-2.5 outline-none"
            type="text"
            placeholder="Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            required
          />
          <input
            className="mb-7 mt-1 w-full rounded border border-gray-500/10 bg-indigo-500/5 px-3 py-2.5 outline-none"
            type="text"
            placeholder="Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          />
          <button
            type="submit"
            className="mb-3 w-full rounded bg-indigo-500 py-2.5 font-medium text-white transition-all hover:bg-indigo-600 active:scale-95"
          >
            Create Feedback
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default AddFeedback;
