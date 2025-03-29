
import React from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

function JobCard(props) {
  const navigate = useNavigate();
  const today = dayjs();
  const postedDate = props.postedOn ? dayjs(props.postedOn) : today;
  const diffInDays = today.diff(postedDate, 'day');

  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">{props.title} - {props.company}</h1>
          <p>{props.type} • {props.experience} • {props.location}</p>
          <div className="flex items-center gap-2">
            {props.skills?.map((skill, i) => (
              <p key={i} className="text-gray-500 py-1 px-2 rounded-md border border-black">{skill}</p>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-500">Posted {diffInDays} {diffInDays === 1 ? 'day' : 'days'} ago</p>
          <button
            onClick={() => navigate('/apply')}
            className="text-blue-500 border border-blue-500 px-10 py-2 rounded-md"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
