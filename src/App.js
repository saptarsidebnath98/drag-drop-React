import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isDropped, setIsDropped] = useState(false);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("text/plain", id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    if (data === "drag-box") {
      setIsDropped(true);
    }
  };

  const dragBox = (
    <div id="drag" draggable="true" onDragStart={handleDragStart}>
      drag me
    </div>
  );

  return (
    <div className="App">
      {!isDropped && dragBox}
      <div className="container">
        <div id="drop" onDragOver={handleDragOver} onDrop={handleDrop}>
          {isDropped ? dragBox : "drag here"}
        </div>
      </div>
    </div>
  );
}
