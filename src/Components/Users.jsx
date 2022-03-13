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
    alert("You are now logged in");
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
    <div className="tc pa3 pa5-ns hide-child relative ba b--black-20 mw5 center">
      {userInfo.map((userData) => {
        return (
          <div className="pa2 bt b--black-20" key={userData.username}>
            <h2 className="f6 gray mv1">{userData.username}</h2>
            <img
              className="db"
              src={userData.avatar_url}
              alt={userData.avatar_url}
            ></img>
            <button className="f6 mv1 loginBttn" onClick={login}>
              Login
            </button>
          </div>
        );
      })}
    </div>
  );
};
