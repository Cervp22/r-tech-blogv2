import {useNavigate} from "react-router-dom"
export default function RegisterBtn(props){
    const navigate = useNavigate()


    function Register(){
        navigate('/register')
 
    }
    
        return(
        <div>
            <button onClick={Register}>Register</button>
        </div>
    )
    }