import { UserContext } from "../Contexts/UserContext";
import { useContext } from "react";

export const Users = () => {
  const { user, setUser } = useContext(UserContext);
  const user1 =  {
    username: 'tickle122',
    name: 'Tom Tickle',
    avatar_url:
      'https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953'
  };
  const login = () => {
    setUser(user1);
  };
  return (
    <div className="userInfo">
      <h2>{user.username}</h2>
      <img src={user.avatar_url} alt={user.avatar_url}></img>
      <button onClick={login}>Login</button>
    </div>
  );
};
