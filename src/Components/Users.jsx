import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

export const Users = () => {
  const { user, setUser } = useContext(UserContext);
  const user1 = {
    username: "butter_bridge",
    name: "jonny",
    avatar_url:
      "https://www.healthytherapies.com/wp-content/uploads/2016/06/Lime3.jpg",
  };
  const login = () => {
    setUser(user1);
  };
  return (
    <div>
      <h2>{user.username}</h2>
      <img src={user.avatar_url} alt={user.avatar_url}></img>
      <button onClick={login}>Login</button>
    </div>
  );
};
