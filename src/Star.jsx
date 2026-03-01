import { useState } from "react";

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          style={{
            fontSize: "30px",
            cursor: "pointer",
            color: star <= (hover || rating) ? "gold" : "gray",
          }}
        >
          ★

          {/* 
          
          case when star is 1 set star 1 and color is gold and other is gray of 4 
          case when star is 2 set star 2 and color is gold and other is gray of 3 and less than 2 is also gold in color
          case when hover 1 star set hover 1 hold gold star 1 and other will be gray on mouse enter
          case when hover 2 star set hover 2 hold gold star 1 2 and other will be gray  
          
          */}
        </span>
      ))}
    </div>
  );
}

export default StarRating;