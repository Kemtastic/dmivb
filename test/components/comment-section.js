"use client"

import { useState } from 'react';

export default function CommentSection() {
    const [likedComments, setLikedComments] = useState([]);
    const comments = [
        {
          id: 1,
          author: "John Doe",
          date: "2023-10-15",
          avatar: "https://i.pravatar.cc/40?img=1",
          text: "This movie changed my life! The special effects were groundbreaking for its time and the story still resonates today.",
          likes: 120,
        },
        {
          id: 2,
          author: "Jane Smith",
          date: "2023-09-22",
          avatar: "https://i.pravatar.cc/40?img=5",
          text: "I watch this film every year and always notice something new. Absolutely a masterpiece that defined a generation of sci-fi.",
          likes: 84,
        },
        {
          id: 3,
          author: "Alex Johnson",
          date: "2023-11-01",
          avatar: "https://i.pravatar.cc/40?img=3",
          text: "The pill scene is iconic. Blue pill or red pill? This question has become a cultural reference point for making difficult choices.",
          likes: 56,
        }
      ];

    const handleLike = (id) => {
        setLikedComments(prev => {
            if (prev.includes(id)) {
                return prev.filter(commentId => commentId !== id);
            }
            return [...prev, id];
        });
    }

    return (
        <div className="p-4 bg-gray-50 dark:bg-gray-900 flex-grow">
            <h3 className="text-xl font-bold mb-4 border-b pb-2">Comments</h3>
            
            {comments.map(comment => (
              <div key={comment.id} className="mb-4 pb-4 border-b last:border-b-0">
                <div className="flex items-start mb-2">
                  <img src={comment.avatar} alt={comment.author} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-semibold">{comment.author}</h4>
                      <span className="text-sm text-gray-500 ml-2">{comment.date}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mt-1">{comment.text}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <button 
                        onClick={() => handleLike(comment.id)} 
                        className={`flex items-center mr-4 ${likedComments.includes(comment.id) ? 'text-blue-500' : ''}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                        </svg>
                        {comment.likes}
                      </button>
                      <button className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Add new comment form */}
            <div className="mt-4">
              <textarea 
                className="w-full border rounded p-2 mb-2" 
                rows="3" 
                placeholder="Add your comment..."
              ></textarea>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Post Comment
              </button>
            </div>
          </div>
    )
}