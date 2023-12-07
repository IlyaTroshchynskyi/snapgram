import {Outlet, useNavigate} from "react-router-dom";

import Topbar from "@/components/shared/Topbar";
import Bottombar from "@/components/shared/Bottombar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import {useUserContext} from "@/context/AuthContext.tsx";

const RootLayout = () => {

     const isAuthenticated = useUserContext()
    const navigate = useNavigate()
    console.log('RootLayout', 'isAuthenticated', isAuthenticated.isAuthenticated)
     if (!isAuthenticated.isAuthenticated) {
         console.log('in iffffffffff')
         navigate('/sign-in')

     }

  return (
    <div className="w-full md:flex">
      <Topbar />
      <LeftSidebar />

      <section className="flex flex-1 h-full">
        <Outlet />
      </section>

      <Bottombar />
    </div>
  );
};

export default RootLayout
