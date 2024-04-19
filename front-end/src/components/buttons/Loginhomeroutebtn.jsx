import {useNavigate} from "react-router-dom"
export default function LoginHomeBtn(props){
    const navigate = useNavigate()


    function LoginHome(){
        navigate('/')
 
    }
    
        return(
        <div>
            <button onClick={LoginHome}>login</button>
        </div>
    )
    }