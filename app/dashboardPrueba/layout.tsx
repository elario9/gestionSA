// import { PowerIcon } from "@heroicons/react/24/outline";
// import NavLinks from "../ui/dashboard/nav-links";
// import AcmeLogo from "../ui/acme-logo";
// import Link from "next/link";

import SideNav from "../ui/dashboard/sidenav";

export default function Layout({children,}:{children: React.ReactNode;}) {
    return (
       <div className='flex h-screen flex-col md:flex-row md:overflow-hidden'>
            <div className='w-full flex-none md:w-64'>
                <SideNav></SideNav>
            </div>
            <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
       </div>
    )
}