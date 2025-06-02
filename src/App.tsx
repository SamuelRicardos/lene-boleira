import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DoceCardapio } from "./pages/DoceCardapio";
import { Home } from "./pages/Home";
import { BoloCardapio } from "./pages/BoloCardapio";

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "cardapio-doces",
    element: <DoceCardapio/>
  },
  {
    path: "cardapio-bolos",
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
