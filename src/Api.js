import axios from "axios";

const articleApi = axios.create({
  baseURL: "https://pri-news-nc-app.herokuapp.com/api",
});

export const fetchHome = () => {
  return articleApi.get("/").then(({ data }) => {
    return data;
  });
};

export const fetchArticles = (sort_by, order) => {
  return articleApi
    .get("/articles", { params: { sort_by, order } })
    .then(({ data: { articles } }) => {
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

export const fetchArticleByTopics = (topic, sort_by, order) => {
  return articleApi
    .get(`/articles?topic=${topic}`, { params: { sort_by, order } })
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
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const postComments = (article_id, body) => {
  return articleApi
    .post(`/articles/${article_id}/comments`, body)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

export const sortByDate = (created_at) => {
  return articleApi
    .get(`/articles?sort_by=${created_at}`)
    .then(({ data: { articles } }) => {
      console.log(articles);
      return articles;
    });
};
