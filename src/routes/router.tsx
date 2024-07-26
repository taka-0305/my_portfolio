import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Works } from "../pages/works";
import { Skills } from "../pages/skills";
import { WorkArticle } from "../pages/workArticle";
import { About } from "../pages/about";



export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Works />} />
        <Route path='/works/:id' element={<WorkArticle />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}