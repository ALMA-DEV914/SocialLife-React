import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAILURE", payload: err });
  }
};


export const registerCall = async (userCredential, dispatch) => {
  dispatch({ type: "REGISTER_START" });
  try {
    const res = await axios.post("/auth/register", userCredential);
    dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "REGISTER_FAILURE", payload: err });
  }
};

export const getComments = async () => {
  return [
    {
      id: "1",
      body: "Lorem ipsum dolor sit amet. Est cupiditate sint sit corrupti cupiditate id sint voluptatibus et galisum fugiat ut repudiandae rerum id autem sequi eos nihil dolores!",
      username: "Jack",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "Lorem ipsum dolor sit amet. Est cupiditate sint sit corrupti cupiditate id sint voluptatibus et galisum fugiat ut repudiandae rerum id autem sequi eos nihil dolores!",
      username: "John",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "Lorem ipsum dolor sit amet. Est cupiditate sint sit corrupti cupiditate id sint voluptatibus et galisum fugiat ut repudiandae rerum id autem sequi eos nihil dolores!",
      username: "John",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "Lorem ipsum dolor sit amet. Est cupiditate sint sit corrupti cupiditate id sint voluptatibus et galisum fugiat ut repudiandae rerum id autem sequi eos nihil dolores!",
      username: "John",
      userId: "2",
      parentId: "2",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
