'use client'
import Sidebar from "./Sidebar";


export default function DashboardLayout({ children, params }) {
    return (
        <div className="flex">
            <Sidebar />
            {children}
        </div>
    )
}