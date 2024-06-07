import "../styles/profilepostlist.css";
function UserPostList(props) {
  const datas = props.userPost;

  return (
    <ul>
      {datas.toReversed().map((data) => {
        return (
          <li key={data._id} className={"userpostlistparent"}>
            <div className={"userpostlistdiv"}>
              <div className={"userpostlistchilddiv1"}>
                <h2 className="userpostlistchilddiv1header">
                  @{data.username}
                </h2>
                <h6 className={"userpostlistchilddiv1id"}>#{data._id}</h6>
              </div>
              <div className={"userpostlistchilddiv2"}>
                <p className={"profilediv2userpost"}>{data.post}</p>
              </div>
              <div className={"profilepostlistchilddiv3"}>
                <button className={"likebtn"}>Like:</button>
                <button className={"dislikebtn"}>Dislike:</button>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default UserPostList;
