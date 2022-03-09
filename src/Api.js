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
    .then(({ data: { article } }) => {
      return article;
    });
};

export const fetchTopics = () => {
  return articleApi.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};

export const fetchArticleByTopics = (topic) => {
  return articleApi
    .get(`/articles?topic=${topic}`)
    .then(({ data: { articles } }) => {
      return articles;
    });
};

export const patchVotes = (article_id, inc_votes) => {
  return articleApi
    .patch(`/articles/${article_id}`, { inc_votes })
    .then(({ data: { article } }) => {
      return article;
    });
};

export const fetchCommentsByArticleId = (article_id) => {
  return articleApi
    .get(`/api/articles/${article_id}/comments`)
    .then(({ data: { article } }) => {
      return article;
    });
};
