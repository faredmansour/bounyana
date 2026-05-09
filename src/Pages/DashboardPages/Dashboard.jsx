import { Routes , Route } from "react-router-dom";
import Footer from "../../components/Dashboard/Footer/Footer";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar/sidebar";
import Users from "../../Pages/DashboardPages/User"
import Projects from "../../Pages/DashboardPages/Projects"
import HomeDashboard from "../../Pages/DashboardPages/HomeDashboard";

function Dashboard (){
    return(


        <>
        <Navbar/>
        <div className="d-flex ">
            <Sidebar/>
                   <main className=" flex-grow-1 w-100 ">
                    <div className="Dashboard w-100 p-2"><h5 className="dash">Dashboard</h5></div>
                   <Routes>
                    <Route path="/" element={<HomeDashboard/>} />
                    <Route path="/user" element={<Users/>} />
                    <Route path="/projects" element={<Projects/>} />
                   </Routes>
                   </main>

        </div>
        <Footer/>
        </>
    );
}
export default Dashboard;