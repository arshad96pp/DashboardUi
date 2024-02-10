import Explore from "../pages/Explore";
import Home from "../pages/Home";
import Messages from "../pages/Messages";
import ProfilePage from "../pages/ProfilePage";
import Settings from "../pages/Settings";
import Upgrade from "../pages/Upgrade";

export const RoutConfig = [
  { id: 1, name: "/", page: <Home /> },
  { id: 2, name: "/message", page: <Messages /> },
  { id: 3, name: "/settings", page: <Settings /> },
  { id: 4, name: "/upgrade", page: <Upgrade /> },
  { id: 5, name: "/explore", page: <Explore /> },
  { id: 6, name: "/profile/:id", page: <ProfilePage/> },

];
