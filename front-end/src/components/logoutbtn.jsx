import axios from 'axios'


export default function LogOutBtn(props){

function logOut(){
axios.post('http://localhost:3001/api/logout')
}



    return(
    <div>
        <button onClick={logOut}></button>
    </div>
)
}