import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import CardDetail from "./components/CardDetail/CardDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/:id",
    element: <CardDetail />
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
