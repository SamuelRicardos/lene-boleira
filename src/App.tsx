import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BoloCardapio } from "./pages/BoloCardapio";
import { Home } from "./pages/Home";

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "cardapio-doces",
    element: <BoloCardapio/>
  }
])

  return (
    <div className="font-sans text-gray-800 bg-pink-50">
      <div>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
