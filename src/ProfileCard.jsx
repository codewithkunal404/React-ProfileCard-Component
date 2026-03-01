import { useState } from "react";
import StarRating from "./Star";
function ProfileCard({ name, image }) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);

    // update count
    if (!liked) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <h3>{name}</h3>

      <button onClick={handleLike} style={styles.button}>
        {liked ? "👍 Liked" : "👍 Like"}
      </button>

      <p>{count} Likes</p>

        <StarRating />
    </div>
  );
}

export default ProfileCard;

// simple styles
const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    width: "200px",
    textAlign: "center",
    borderRadius: "10px",
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
  button: {
    cursor: "pointer",
    padding: "5px 10px",
    marginTop: "10px",
  },
};