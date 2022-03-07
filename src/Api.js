import axios from "axios";

const articleApi = axios.create({
  baseURL: "https://pri-news-nc-app.herokuapp.com/api",
});

export const fetchHome = () => {
  return articleApi.get("/").then(({ data }) => {
    return data;
  });
};

export const fetchArticles = () => {
  return articleApi.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

export const fetchArticleById = (article_id) => {
  return articleApi
    .get(`/articles/${article_id}`)
    .then(({ data: { articles } }) => {
      return articles;
    });
};
