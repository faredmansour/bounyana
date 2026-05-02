
import img from "../../../assets/div.logo_margin.png"
import img2 from "../../../assets/div.png"
import style from "./Navbar.module.css"
function Navbar(){
    return(
        <>

<nav className="d-flex justify-content-between align-items-center shadow " >
<div className="imag">
    <img className="w-50" src={img} alt="" />
</div>


<div className="adminsection d-flex justify-content-between align-items-center  ">
<div className="notification position-relative p-5">
        <i className="fa-solid fa-bell"></i>
        <i className=" fa-solid fa-0 position-absolute"></i>
    </div>
<div className="superadmin p-3">
    <div className="form">
        <ul className="">
  <li className="list-group-item">Super Admin</li>
  
</ul></div>
 
    

</div>
</div>
</nav>



        </>
    )
}
export default Navbar ;

