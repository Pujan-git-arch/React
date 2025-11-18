
import React, {useState} from 'react';

function MyComponent(){


    const  [name, setName] = useState("Guest");
    const [age,setAge] = useState(0)
    const [isEmployed, setisEmployed] = useState(false)
    const updateNameandAge = ()=>{
       setName("Spongebob");
       setAge(0);
    }
    const ageIncrement = ()=>{
        setAge(age+1);
    }
    const toggleEmployedstatus = () =>{
        setisEmployed(!isEmployed)
    }
    
return(
<>
<p>Name:{name}</p>
<p>Age:{age}</p>
<p>Is employed : {isEmployed ? "Yes" : "No"}</p>
<button onClick={updateNameandAge}>Set Name andAge </button>
<button onClick={ageIncrement}>Increase Age </button>
<button onClick={toggleEmployedstatus}>Toggle status  1:51</button>



</>
)

}
export default MyComponent;