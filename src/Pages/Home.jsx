import Header from "../componen/Header";
import Layout from "../componen/Layout";
import Sidebar from "../componen/Sidebar";
import Utama from "../componen/Utama";
import Navbar from "../componen/Navbar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    return ( 
        <>
            <Layout>
                <Navbar/>
                <Header/>
                <div className="my-8">
                    <Link to="/landingpage" 
                        className="font-medium text-blue-600 underline dark:text-blue-500 hover:no-underline">
                        Landing Page
                    </Link>
                    <button type="button"
                        className="mx-3 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
                        onClick={() => navigate('/landingpage')}>
                            Landing Page
                    </button>
                </div>
                <Utama/>
            </Layout>
        </>
     );
}


 
export default Home;
