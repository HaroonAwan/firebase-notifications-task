import { ToastContainer } from "react-toastify";
import { AppRoutes } from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
