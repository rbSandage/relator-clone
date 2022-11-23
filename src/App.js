
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Header from "./components/Header";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
<BrowserRouter>
<Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/offers" element={<Offers/>}/>
  <Route path="/forgot-password" element={<ForgotPassword/>}/>
  <Route path="/sign-in" element={<SignIn/>}/>
  <Route path="/sign-up" element={<SignUp/>}/>
  <Route path="/profile" element={<Profile/>}/>


</Routes>
</BrowserRouter>
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
{/* Same as */}
<ToastContainer />
    </>
  );
}

export default App;
