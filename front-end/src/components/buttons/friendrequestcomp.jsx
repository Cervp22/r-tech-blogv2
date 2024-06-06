import { useState } from "react";

export default function FriendRequestList(props) {
  console.log(props.friendrequestlist);
  const { friendrequestlist } = props;

  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setDisplay(!display);
        }}
      >
        Friend Request
      </button>
      {display ? friendrequestlist : "This is for the chat room"}
    </div>
  );
}
