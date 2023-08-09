import { createBrowserRouter } from "react-router-dom";
import { Cards, Footer } from "./components";

const AppRoutes = createBrowserRouter([
  {
    path: '*',
    element: (
      <>
        <Cards />
        <Footer />
      </>
    ),
  }
]);

export default AppRoutes;
