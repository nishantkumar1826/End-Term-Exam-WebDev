import { useState } from "react";
import "./App.css";

function App() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="container">
      <button
        className={liked ? "like-btn liked" : "like-btn"}
        onClick={handleLike}
      >
        {liked ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default App;