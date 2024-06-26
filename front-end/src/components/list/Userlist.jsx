function UserList(props) {
  const datas = props.users;
  return (
    <ul>
      {datas.map((data) => {
        return (
          <li key={data._id}>
            <h1><a href="#">{data.username}</a></h1>
          </li>
        );
      })}
    </ul>
  );
}

export default UserList;
