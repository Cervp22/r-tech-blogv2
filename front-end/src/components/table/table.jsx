function Table(props) {
const totalUsers = props.totalUsers

    return (
    <>
    <table>
  <tr>
    <th>Total Users</th>
  </tr>
  <tr>
    <td>{totalUsers} </td>
  </tr>
</table>
    </>);
  }
  
  export default Table;