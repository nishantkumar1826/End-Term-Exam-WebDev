import { useState } from "react";

function App() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <button
        onClick={toggleLike}
        style={{
          fontSize: "60px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        {liked ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default App;