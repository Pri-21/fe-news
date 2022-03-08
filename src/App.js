import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { UserContext } from "./Contexts/UserContext";
import { Users } from "./Components/Users";
import { useState } from "react";
import { ArticleList } from "./Components/ArticleList";
import { Header } from "./Components/Header";
import { Navbar } from "./Components/Navbar";
import { Article } from "./Components/Article";

function App() {
  const [user, setUser] = useState({
    username: "noUser",
    name: "noUser",
    avatar_url: "",
  });
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<ArticleList />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/articles/:article_id" element={<Article />}></Route>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
