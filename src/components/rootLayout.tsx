import { Outlet } from "react-router-dom";
import NavBar from "./navBar";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
  return (
    <div style={{ width: "100%" }}>
      <Provider store={store}>
        <NavBar />

        <main>
          <Outlet />
        </main>
      </Provider>
    </div>
  );
};

export default RootLayout;
