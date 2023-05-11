import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="main container-fluid">
      <Outlet />
    </main>
  );
};

export default Layout;
