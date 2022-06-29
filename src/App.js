import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Missing from "./components/Missing";
import UnAuthorized from "./components/UnAuthorized";
import Employee from "./components/Employee";
import Home from "./components/Home";
import RequireAuth from "./components/RequireAuth";
import { Enums } from "./Utility";

export default function App() {
  const { roles } = Enums;

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="unauthorized" element={<UnAuthorized />} />
          <Route path="*" element={<Missing />} />

          {/* Protected Routes for Admin and Empoloyee*/}
          <Route
            element={
              <RequireAuth allowedRoles={[roles.Admin, roles.Employee]} />
            }
          >
            <Route path="/" element={<Home />} />
          </Route>

          {/* Protected Roputes for Admin only */}
          <Route element={<RequireAuth allowedRoles={["Admin"]} />}>
            <Route path="/employee" element={<Employee />} />
          </Route>
        </Route>
      </Routes>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </>
  );
}
