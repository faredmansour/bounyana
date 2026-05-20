import {NavLink, useLocation} from "react-router-dom"
import { useContext } from "react";
import { Context } from "../../../App";
import style from "./Sidebar.module.css"

function sidebar(){
const { isTyping } = useContext(Context);
const location = useLocation();

const linkes = [
    { icon:"fa-chart-column", title:"Status" , path:"/"},
    { icon:"fa-users", title:"USER MANGMENT", path:"/user"},
    { icon:"fa-building", title:"PROJECTS MANAGMENTS",path:"/projects"},
    { icon:"fa-building", title:"DEVELOPERS MANGMENT", path:"/Developer"},
    { icon:"fa-globe", title:"CMS", path:"/cms"},
    { icon:"fa-message", title:"LIVE CHAT", path:"/chat"}
]
return(
<>
<aside className={`${style.sidebar} min-vh-100 py-4  `}>
<div className="fs-4 px-3 fw-semibold mb-4">Dashboard</div>
<nav className="navitem">
    {linkes.map((item , index)=>(
        
            
        <NavLink key={index} to={item.path} className={`${style.navitem}  d-flex align-items-center gap-2 py-3 px-3`} >
        <i className= {`fa-solid ${item.icon} fs-5`}></i>
      <span className={`${style.item}`}>{item.title}</span>
      {isTyping && item.path !== "/" && location.pathname.startsWith(item.path) && (
          <span className="text-warning fw-bold ms-auto" style={{fontSize: '0.75rem'}}>writing...</span>
      )}
    </NavLink>

    ))}


</nav>



</aside>






</>




)
}
export default sidebar


