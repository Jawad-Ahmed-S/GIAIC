"use client";
import { useState } from "react";

interface CommentType {
  name: string;
  text: string;
}

export default function CommentSection() {
  // Local state for comments
  const [comments, setComments] = useState<CommentType[]>([
    { name: "John", text: "Great blog!" },
  ]);

  // States for form inputs
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  // Function to handle adding comments
  const handleAddComment = () => {
    if (name.trim() && comment.trim()) {
      setComments([...comments, { name, text: comment }]); // Update comments
      setName(""); // Clear name input
      setComment(""); // Clear comment input
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[75%]">
      <h3 className="mb-4 font-bold text-4xl text-justify text-black">Comments</h3>
      </div>
      <form
        onSubmit={(e) => e.preventDefault()} // Prevent page reload
        className="flex flex-col w-full justify-center items-center"
      >
        <input
          className="w-[50%] p-2 m-2 text-black rounded-md bg-slate-200"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Correct handler
        />
        <input
          className="w-[50%] p-2 m-2 text-black rounded-md bg-slate-200"
          type="text"
          placeholder="Comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)} // Correct handler
        />
        <button
          type="button"
          onClick={handleAddComment}
          className="bg-[#0b4d83] mb-5 cursor-pointer hover:opacity-90 text-white rounded-sm p-2 pl-6 pr-6"
        >
          Post
        </button>
      </form>

      {/* Display comments */}
      {comments.map((e, index) => (
        <div
          key={index}
          className="bg-slate-100 rounded-md w-[50%] p-[0.5rem] m-[0.5rem]"
        >
          <strong>
            <h1>{e.name}:</h1>
          </strong>
          <p>{e.text}</p>
        </div>
      ))}
    </div>
  );
}
