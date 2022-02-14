import React, { useState } from 'react';

export default function StarRating({ totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {[...Array(totalStars)].map((n, i) => (
        <Star
        key={i}
        selected={selectedStars > i}
        onSelect={() => setSelectedStars(i+1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}