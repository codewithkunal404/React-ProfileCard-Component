import "./App.css";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <>
      <h1>Profile Card Component</h1>
      <div className="card">
        <div style={{ display: "flex", gap: "20px" }}>
          <ProfileCard name="React" image="https://i.pravatar.cc/150" />
          <ProfileCard name="User" image="https://i.pravatar.cc/150" />
        </div>
      </div>

      <p className="read-the-docs">
        Click on Likes & Star Rating Using UseState Hook | Made by
        codewithkunal404
      </p>
    </>
  );
}

export default App;
