import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import PlacesRoute from "./pages/PlacesRoute";
import NoPage from "./pages/NoPage";

const App = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/blogs/:id" element={<BlogDetails />}></Route>
            <Route path="/places" element={<PlacesRoute />}></Route>
            <Route path="*" element={<NoPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
