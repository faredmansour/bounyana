import style from "./Sidebar.module.css"
function sidebar(){
const linkes = [
    { icon:"fa-chart-column", title:"Status"},
    { icon:"fa-users", title:"USER MANGMENT"},
    { icon:"fa-hospital", title:"PROJECTS MANAGMENTS"},
    { icon:"fa-hospital", title:"DEVELOPERS MANGMENT"},
    { icon:"fa-globe", title:"CMS"},
    { icon:"fa-message", title:"LIVE CHAT"}
]
return(
<>
<aside className={`${style.sidebar} min-vh-100 py-4 `}>
<div className="fs-4 px-3 fw-semibold mb-4">Dashboard</div>
<nav className="navitem">
    {linkes.map((item , index)=>(
        <div className={`${style.navitem}  d-flex align-item-center gap-2 py-3 px-3`} >
        <i className= {`fa-solid ${item.icon} fs-5`}></i>
      <span className={`${style.item}`}>{item.title}</span>
    </div>


    ))}


</nav>



</aside>






</>




)
}
export default sidebar


