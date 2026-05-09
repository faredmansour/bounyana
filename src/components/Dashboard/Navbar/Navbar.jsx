
import img from "../../../assets/div.logo_margin.png"
import img2 from "../../../assets/div.png"
import style from "./Navbar.module.css"
function Navbar(){
    return(
        <>

<nav className="d-flex justify-content-between align-items-center " >
<div className="imag">
    <img className="w-50" src={img} alt="" />
</div>


<div className="adminsection d-flex  align-items-center m-2">
<div className="notification position-relative ">
        <i className="fa-solid fa-bell"></i>
        <i className={`${style.text} fa-solid fa-0 position-absolute `} ></i>
    </div>
<div className="superadmin p-3 ">
    <div className="form">
        <ul className="">
  <li className="list-group-item m-1">Super Admin</li>
  
</ul></div>
 
    

</div>
</div>
</nav>



        </>
    )
}
export default Navbar ;

