import "../styles/GlobalPostList.css"

function GlobalPostList(props) {
    const datas = props.usersPost;
    return (
      <ul>
        {datas.toReversed().map((data) => {
          return (
            <li key={data._id} className={'postlistparent'}>
              <div className={'globalpostlistdiv'}>
                  <div className={'globalpostlistchilddiv1'}>
                    <h2 className="globalpostlistchilddiv1header">@{data.username}</h2>
                    <h6 className={"globalpostlistchilddiv1id"}>#{data._id}</h6>
                  </div>
                  <div className={"globalpostlistchilddiv2"}>
                      <p className={'div2userpost'}>{data.post}</p>
                    </div>
                  <div className={"globalpostlistchilddiv3"}>
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
  
  export default GlobalPostList;