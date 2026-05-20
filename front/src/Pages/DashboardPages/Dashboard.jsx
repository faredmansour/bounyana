import { Routes , Route } from "react-router-dom";
import Footer from "../../components/Dashboard/Footer/Footer";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar/sidebar";
import Users from "../../Pages/DashboardPages/User"
import Projects from "../../Pages/DashboardPages/Projects"
import HomeDashboard from "../../Pages/DashboardPages/HomeDashboard";
import Tabledashboard from "../../components/Ui/Tabledashboard/Tabledashboard";
import Formdashboard from "../../components/Ui/Formdashboard/Formdashboard";
import Developer from "../../Pages/DashboardPages/Developers"

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

                            <Route path="/user" element={<Users/>} >
                                {/* first child */}
                                <Route index element={<Tabledashboard/>}/>
                                {/* second child */}
                                <Route path="add" element={<Formdashboard/>}/>
                            </Route>
                        
                            <Route path="/projects" element={<Projects/>} >
                                {/* first child */}
                                <Route index element={<Tabledashboard/>}/>
                                {/* second child */}
                                <Route path="add" element={<Formdashboard/>}/>
                            </Route>

                            <Route path="/Developer" element={<Developer/>} >
                                {/* first child */}
                                <Route index element={<Tabledashboard/>}/>
                                {/* second child */}
                                <Route path="add" element={<Formdashboard/>}/>
                            </Route>
                       </Routes>
                   </main>

        </div>
        <Footer/>
        </>
    );
}
export default Dashboard;