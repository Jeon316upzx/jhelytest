import React from "react"
import Sidebar from "../components/Sidebar";


const DashboardLayout: React.FC = ({ children }) => {
    return (
        <div>
            <Sidebar />
            {children}
        </div>
    )

}

export default DashboardLayout;