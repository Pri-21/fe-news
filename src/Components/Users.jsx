import { UserContext } from "../Contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import * as api from "../Api";

export const Users = () => {
  const { setUser } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user1 = {
    username: "tickle122",
    name: "Tom Tickle",
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
  };
  const login = () => {
    setUser(user1);
  };

  useEffect(() => {
    setIsLoading(true);
    api.fetchUsers().then((userList) => {
      setUserInfo(userList);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="userInfo">
      {userInfo.map((userData) => {
        return (
          <div className="userdata" key={userData.username}>
            <h2 className="userName">{userData.username}</h2>
            <img
              className="userImg"
              src={userData.avatar_url}
              alt={userData.avatar_url}
            ></img>
            <button onClick={login}>Login</button>
          </div>
        );
      })}
    </div>
  );
};
