import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { UserContext } from "./Contexts/UserContext";
import { Users } from "./Components/Users";
import { useState } from "react";
import { ArticleList } from "./Components/ArticleList";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";

function App() {
  const [user, setUser] = useState({
    username: "noUser",
    name: "noUser",
    avatar_url: "",
  });
  return (
    <BrowserRouter>
      <div>
        <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<ArticleList />}></Route>
            <Route path="/users" element={<Users />}></Route>
          </Routes>

         
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
