import { useState } from "react";

export default function ChatRoom(props) {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setDisplay(false);
        }}
      >
        Chat Rooms
      </button>
      <div></div>
    </div>
  );
}
