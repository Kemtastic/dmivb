"use client"

import { useState } from "react"

export default function RatingSection({ movieId }) {
  const [selectedRating, setSelectedRating] = useState(0)

  const handleRatingClick = (rating) => {
    setSelectedRating(rating)
    // Show alert immediately with the selected rating
    alert(`You rated this movie ${rating} out of 10`)
  }

  return (
    <div>
      <h2 className="text-sm uppercase mb-1 text-gray-600 dark:text-gray-400">
        MY SCORE
      </h2>
      <p className="mb-2">Click to give a rating</p>

      {/* Rating boxes */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 10 }).map((_, i) => {
          const rating = i + 1
          const isSelected = selectedRating === rating
          let bgColorClass = isSelected
            ? "bg-opacity-100"
            : "bg-opacity-70 hover:bg-opacity-100"

          if (rating <= 4) {
            bgColorClass += " bg-red-300"
          } else if (rating <= 7) {
            bgColorClass += " bg-yellow-300"
          } else {
            bgColorClass += " bg-green-300"
          }

          return (
            <button
              key={i}
              className={`w-8 h-8 rounded cursor-pointer transition-colors ${bgColorClass} ${
                isSelected ? "ring-2 ring-blue-500" : ""
              }`}
              onClick={() => handleRatingClick(rating)}
              aria-label={`Rate ${rating} out of 10`}
            >
              {rating}
            </button>
          )
        })}
      </div>
    </div>
  )
}