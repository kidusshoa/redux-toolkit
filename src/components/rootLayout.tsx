import { Outlet } from "react-router-dom";
import NavBar from "./navBar";

const RootLayout = () => {
  return (
    <div style={{ alignItems: "top", width: "100%" }}>
      <NavBar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
