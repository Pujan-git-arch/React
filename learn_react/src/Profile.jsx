
import img from "./assets/image.jpg"
function Profile(){

  const   handleCLick = (e) => e.target.style.display = "none";

    return (
    <img onClick={(e)=>handleCLick(e)} src={img} style={{width: "200px"}}></img>);
}
export default Profile;
