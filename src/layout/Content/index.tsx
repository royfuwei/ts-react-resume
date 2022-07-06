import { BrowserRouter, HashRouter } from "react-router-dom";
import { MyRoutes } from "../../routes/routes";
import './Content.scss'

export const ContentLayout = () => {
  return (
    <div className="content">
      <MyRoutes/>
    </div>
  );
};