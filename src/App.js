import { Toaster } from "react-hot-toast";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Staff from "./UI/Staff";
import AppLayout from "./UI/AppLayout";
import PageNotFound from "./PageNotFound";
import Department from "./UI/Department";
import OnBoardingStaff from "./UI/OnBoardingStaff";
import VacantStaff from "./UI/VacantStaff";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="staff" />} />
            <Route path="staff" element={<Staff />} />
            <Route path="departments" element={<Department />} />
            <Route path="newstaff" element={<OnBoardingStaff />} />
            <Route path="vacantstaff" element={<VacantStaff />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#374151",
          },
        }}
      />
    </div>
  );
}

export default App;
