'use client'

import Sidebar from "@/components/Sidebar/Sidebar";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import moment from "moment";


export default function DashboardLayout({ children, params }) {
    return (
        <div className="flex">
            <Sidebar />
            {/* Dashboard right */}
            <div className="flex flex-col w-full bg-[#EFF3FD] px-5">
                {/* navbar */}
                <div className="flex px-5 py-5 gap-5 bg-[#EFF3FD]  items-center justify-between w-full h-14">
                    <div className="flex gap-5 items-center">
                        <div className="flex flex-col text-xs">
                            <div className="text-lg font-semibold">
                                Welcome Darpan Bahadur
                            </div>
                            {moment().format("hh:mm a DD MMM YYYY")}
                        </div>
                        <div className="flex  px-2  bg-white w-[400px] items-center rounded-md gap-3 h-[48px] ">
                            <SearchIcon sx={{ width: "24px", height: '24px', color: "#AEB6CF", }} />
                            <input
                                className="rounded-md w-full h-8 outline-none "
                                type="Search"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                    <div className="flex items-center gap-5 ">
                        <div className="bg-white  cursor-pointer p-3 rounded-md">
                            <Image src="/bell.svg" alt="" width={20} height={10} />
                        </div>
                        <div>Darpan Bahadur</div>
                        <div className="cursor-pointer">
                            <Image src="/profile pic.png" alt="" width={30} height={30} className="rounded-full" />
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </div>
    )
}