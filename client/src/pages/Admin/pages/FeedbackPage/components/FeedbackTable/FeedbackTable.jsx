import React, { useEffect, useState } from 'react';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import { Star } from 'lucide-react';

function FeedbackTable() {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch('http://127.0.0.1:8080/api/feedback/getFeedbacks')
      .then(res => res.json())
      .then(data => {
        if (data.code === 200 && data.content) {
          setFeedbacks(data.content);
        }
      })
      .catch((err) => {
        console.error('Failed to fetch clients:', err);
      });

  })
  return (
    <div className="overflow-x-scroll bg-gray-300">
      <table className="w-full min-w-max table-auto shadow-lg">
        <thead className="bg-purple-400 text-white">
          <tr>
            <th className="border-r-1 px-2 py-1">Feedback ID</th>
            <th className="border-r-1 px-2 py-1">Ratings</th>
            <th className="border-r-1 px-2 py-1">Comment</th>
            <th className="border-r-1 px-2 py-1">Edit / Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-pink-300">
          {feedbacks.map((feedback) => {
            return (
              <tr className="text-bold border border-transparent font-mono transition-all duration-300 odd:bg-purple-100 even:bg-violet-100 hover:border hover:border-purple-500 hover:bg-fuchsia-100">
                <td className="w-10 py-2 text-center">{feedback.id}</td>
                {/* <td className="w-40 p-2 text-center text-wrap">
                  {feedback.client}
                </td> */}
                <td className="p-2 text-center">
                  <div className="flex items-center justify-center gap-1">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={20}
                        className={
                          index < feedback.rate
                            ? 'fill-yellow-500 text-yellow-500'
                            : 'text-yellow-500'
                        }
                      />
                    ))}
                  </div>
                </td>

                {/* <td className="p-2 text-center">{feedback.date}</td> */}
                <td className="p-2 text-center">{feedback.comment}</td>
                <td className="flex flex-col items-center gap-y-2 p-2 font-bold">
                  <EditButton feedback={feedback} />
                  <DeleteButton feedback={feedback} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default FeedbackTable;
