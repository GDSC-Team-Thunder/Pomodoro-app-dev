import Timer from "../Timer/timer.tsx";
import List from "../ToDoList/List.tsx";
import Right from "../right.tsx";
import Header from "./Header.tsx";
import { useNavigate } from "react-router-dom";
import "../../css/App.css";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

function Home() {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("varunski");
  const [userId, setUserId] = useState("1234567891020970934543");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
        return;
      }
      const { data } = await axios.post(
        "http://localhost:8000/auth/verify",
        {},
        { withCredentials: true }
      );
      const { status, user, userid } = data;
      setUsername(user);
      setUserId(userid);
      return status
        ? console.log("success")
        : (removeCookie("token", {}), navigate("/login"), console.log(status));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const [hideSidebars, setHideSidebars] = useState<boolean>(false);

  return (
    <div className="flex justify-center items-center flex-col h-screen w-screen">
      <Header username={username} userId={userId}/>
      <div className="flex flex-grow justify-between flex-row h-[85%] w-[95vw]">
        {!hideSidebars && <List />}
        <Timer
          hideSidebars={hideSidebars}
          setHideSidebars={setHideSidebars}
          userID={userId}
        />
        {!hideSidebars && <Right userId={userId} />}
      </div>
    </div>
  );
}

export default Home;
