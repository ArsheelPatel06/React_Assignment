import {Link , Outlet} from "react-router-dom"
export default function dashboardlayout(){
    return(
        <div>
            <h1>Dashboard</h1>
            <nav style={{display:'flex',gap:"1rem"}}></nav>
            <Link to="/profile">Profile</Link>
            <Link to="/setting">Setting</Link>
            <Outlet/>
        </div>
    );
}