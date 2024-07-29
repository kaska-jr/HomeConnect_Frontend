import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Contact from "./pages/Contact";
// import Properties from "./pages/Properties";
import Blogpage from "./pages/Blogpage";
import AboutUs from "./pages/About";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Forgotpassword from "./components/SignIn/Forgotpassword";
import Agent from "./pages/Agent";
import Agents from "./pages/Agents";
import RecoverPassword from "./pages/RecoverPassword";
import AgentNavbar from "./components/Agent/AgentNavbar";
import AgentProperties from "./components/Agent/Agentproperties/AgentProprties";
import AgentTransactions from "./components/Agent/Agentproperties/Transactions";
import AddProperty from "./components/Agent/Agentproperties/AddProperty";
import SingleProperty from "./components/Agent/Agentproperties/SingleProperty";
import UserSingleProperty from "./components/User/Userproperties/SingleProperty";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserNavbar from "./components/User/UserNavbar";
import UserProperties from "./components/User/Userproperties/UserProprties";
import UserTransactions from "./components/User/Userproperties/UserTransactions";

import User from "./pages/User";
import NotificationsPage from "./components/Agent/Agentproperties/NotificationsPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/forget-password" element={<Forgotpassword />} />
          <Route path="/login" element={<Signin />} />
          <Route
            path="register"
            element={
              <GoogleOAuthProvider clientId="client-id">
                <Signup />
              </GoogleOAuthProvider>
            }
          />
          <Route path="forget-password" element={<Forgotpassword />} />
          <Route path="recover-password" element={<RecoverPassword />} />
          <Route />
          <Route path="/properties" element={<AgentProperties />} />
          <Route path="/blog" element={<Blogpage />} />
        </Route>

        <Route path="/agent" element={<AgentNavbar />}>
          <Route path="/agent" element={<Agent />} />
          <Route path="/agent/properties" element={<AgentProperties />} />
          <Route path="/agent/transactions" element={<AgentTransactions />} />
          <Route path="/agent/notifications" element={<NotificationsPage />} />
          <Route path="/agent/add-property" element={<AddProperty />} />
          <Route
            path="/agent/single-property-page"
            element={<SingleProperty />}
          />
        </Route>

        <Route path="/user" element={<UserNavbar />}>
          <Route path="/user" element={<User />} />
          <Route path="/user/properties" element={<UserProperties />} />
          <Route path="/user/transactions" element={<UserTransactions />} />
          <Route path="/user/add-property" element={<AddProperty />} />
          <Route
            path="/user/single-property-page"
            element={<UserSingleProperty />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
