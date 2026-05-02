
import Footer from "../../components/Dashboard/Footer/Footer";
import Navbar from "../../components/Dashboard/Navbar/Navbar";
import Sidebar from "../../components/Dashboard/Sidebar/sidebar";

function Dashboard (){
    return(


        <>
        <Navbar/>
        <div className="d-flex">
            <Sidebar/>
                   <main className="w-100">
                    <div className="uppersection">
                        <h3 className="px-5 color">Dashboard</h3>
                    </div>

                    <div className="card d-flex col-3 m-5 shadow ">
                        <div className="iconcard  ">
                           <i class="fa-solid fa-building "></i>
                        </div>
                        <div className="cardinfo ">
                            <h5>120</h5>
                            <h6>project</h6>

                        </div>
                    </div>
                   </main>

        </div>
        <Footer/>
        </>
    );
}
export default Dashboard;