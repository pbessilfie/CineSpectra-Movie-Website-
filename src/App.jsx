import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import "./App.css";
export default function App() {
  return (
    <>
      <div className="w-screen h-screen backdrop-blur-lg overflow-x-hidden">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
