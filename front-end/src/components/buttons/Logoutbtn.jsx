import axios from 'axios'



export default function LogOutBtn(props){


function logOut(){
axios.post('http://localhost:3001/api/logout').then((res)=>{
    console.log(res)
})
window.location.reload()
}

    return(
    <div>
        <button onClick={logOut}>logout</button>
    </div>
)
}