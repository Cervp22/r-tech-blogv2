function UserList(props) {
  const datas = props.users;
  console.log(datas);
  return (
    <ul>
      {datas.map((data) => {
        return (
          <li key={data._id}>
            <h1>{data.username}</h1>
          </li>
        );
      })}
    </ul>
  );
}

export default UserList;
