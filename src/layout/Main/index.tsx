
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContentLayout } from "../Content";
import { FooterLayout } from "../Footer";
import { HeaderLayout } from "../Header";
import './Main.scss';

const MainLayout = () => {
  return (
    <>
      <div className="main">
          <HeaderLayout/>
          <ContentLayout/>
          <FooterLayout/>
      </div>
    </>
  );
};
export default MainLayout;
