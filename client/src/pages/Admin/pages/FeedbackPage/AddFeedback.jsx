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
      const response = await fetch('http://127.0.0.1:8080/api/feedback/saveFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedback),
      });

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
          
      <div className='flex justify-center items-center my-10'>
          <form
            onSubmit={handleSubmit}
            className="bg-white text-gray-500 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10"
          >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
            <input
              className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
              type="text"
              placeholder="Rate"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              required
            />
            <input
              className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3"
              type="text"
              placeholder="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium"
            >
              Create Feedback
            </button>
              </form>
      </div>
          <Footer/>
    </div>
  );
}

export default AddFeedback;
