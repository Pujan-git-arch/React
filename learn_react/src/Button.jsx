function Button(){

    let count =0

  const habdleClick = (e) => e.target.textContent = "Ouch";

    const handleClick2 =(name) =>{

        if(count <3){
            count++;
             console.log(`${name} you clicked me  ${count} time/s`)
        }
        else{
           
             console.log( `${name} stop clicking me! `)
        }
    }
     return(
        <button onClick={()=>handleClick2("Bro")} onDoubleClick={(e)=>habdleClick(e)}> Click me  1:38</button>

     );

}
export default Button;