
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/offers" element={<Offers/>}/>
  <Route path="/forgot-password" element={<ForgotPassword/>}/>
  <Route path="/sign-in" element={<SignIn/>}/>
  <Route path="/sign-up" element={<SignUp/>}/>
  <Route path="/profile" element={<Profile/>}/>


</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
