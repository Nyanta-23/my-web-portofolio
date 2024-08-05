import React, { useEffect, useState } from "react";

const Stars = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const newStars = [];
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 3 + 1 + "px";
      const x = Math.random() * 100 + "%";
      const y = Math.random() * 100 + "%";
      const delay = Math.random() * 10 + "s";

      newStars.push({ size, x, y, delay });
    }
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {stars.map((star, index) => (
        <div
          key={index}
          className="bg-star rounded-full absolute animate-twinkle"
          style={{
            width: star.size,
            height: star.size,
            left: star.x,
            top: star.y,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
};

export default Stars;