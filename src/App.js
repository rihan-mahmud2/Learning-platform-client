import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import { useContext } from "react";
import { AuthContext } from "./ProvideContext/ProvideContext";

function App() {
  const { theme } = useContext(AuthContext);
  return (
    <div className="App" id={theme}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
