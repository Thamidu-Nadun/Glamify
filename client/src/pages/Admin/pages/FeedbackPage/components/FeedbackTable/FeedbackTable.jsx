import React from 'react';
import EditButton from '../EditButton/EditButton';
import DeleteButton from '../DeleteButton/DeleteButton';
import {Star} from 'lucide-react';

function FeedbackTable () {
  const feedbacks = [
    {id: 1, client: 2, rate: 4, date: '2023-10-01', comment: 'Great service!'},
    {id: 2, client: 3, rate: 5, date: '2023-10-02', comment: 'Very satisfied!'},
    {
      id: 3,
      client: 4,
      rate: 3,
      date: '2023-10-03',
      comment: 'Average experience.',
    },
    {
      id: 4,
      client: 5,
      rate: 2,
      date: '2023-10-04',
      comment: 'Not happy with the service.',
    },
    {
      id: 5,
      client: 6,
      rate: 1,
      date: '2023-10-05',
      comment: 'Terrible experience!',
    },
    {
      id: 6,
      client: 7,
      rate: 4,
      date: '2023-10-06',
      comment: 'Good service overall.',
    },
    {
      id: 7,
      client: 8,
      rate: 5,
      date: '2023-10-07',
      comment: 'Excellent service!',
    },
    {id: 8, client: 9, rate: 3, date: '2023-10-08', comment: 'It was okay.'},
    {
      id: 9,
      client: 10,
      rate: 2,
      date: '2023-10-09',
      comment: 'Not what I expected.',
    },
    {
      id: 10,
      client: 11,
      rate: 1,
      date: '2023-10-10',
      comment: 'Will not recommend.',
    },
  ];
  return (
    <div className="overflow-x-scroll bg-gray-300">
      <table className="w-full min-w-max table-auto shadow-lg">
        <thead className="bg-purple-400 text-white">
          <tr>
            <th className="border-r-1 px-2 py-1">Feedback ID</th>
            <th className="border-r-1 px-2 py-1">Client Name</th>
            <th className="border-r-1 px-2 py-1">Ratings</th>
            <th className="border-r-1 px-2 py-1">Date</th>
            <th className="border-r-1 px-2 py-1">Comment</th>
            <th className="border-r-1 px-2 py-1">Edit / Delete</th>
          </tr>
        </thead>
        <tbody className="divide-y-2 divide-pink-300">
          {feedbacks.map (feedback => {
            return (
              <tr className="text-bold border border-transparent font-mono transition-all duration-300 odd:bg-purple-100 even:bg-violet-100 hover:border hover:border-purple-500 hover:bg-fuchsia-100">
                <td className="w-10 py-2 text-center">{feedback.id}</td>
                <td className="w-40 p-2 text-center text-wrap">
                  {feedback.client}
                </td>
                <td className="p-2 text-center">
                  <div className="flex justify-center items-center gap-1">
                    {[...Array (5)].map ((_, index) => (
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

                <td className="p-2 text-center">{feedback.date}</td>
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
