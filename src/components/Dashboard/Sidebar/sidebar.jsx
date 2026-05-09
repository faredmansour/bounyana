import {NavLink} from "react-router-dom"
import style from "./Sidebar.module.css"
function sidebar(){
const linkes = [
    { icon:"fa-chart-column", title:"Status" , path:"/"},
    { icon:"fa-users", title:"USER MANGMENT", path:"/user"},
    { icon:"fa-building", title:"PROJECTS MANAGMENTS",path:"/projects"},
    { icon:"fa-building", title:"DEVELOPERS MANGMENT"},
    { icon:"fa-globe", title:"CMS"},
    { icon:"fa-message", title:"LIVE CHAT"}
]
return(
<>
<aside className={`${style.sidebar} min-vh-100 py-4  `}>
<div className="fs-4 px-3 fw-semibold mb-4">Dashboard</div>
<nav className="navitem">
    {linkes.map((item , index)=>(
        
            
        <NavLink to={item.path} className={`${style.navitem}  d-flex align-item-center gap-2 py-3 px-3`} >
        <i className= {`fa-solid ${item.icon} fs-5`}></i>
      <span className={`${style.item}`}>{item.title}</span>
    </NavLink>

    ))}


</nav>



</aside>






</>




)
}
export default sidebar


