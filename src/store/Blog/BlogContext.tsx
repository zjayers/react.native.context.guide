import React from "react";
import { IBlogPost } from "../../types";
import { createContext } from "../util/createContext";
import { addBlogPost, deleteBlogPost, updateBlogPost } from "./blogActions";
import { blogReducer } from "./blogReducer";

const INITIAL_STATE: Array<IBlogPost> = [];

export const { Context, Provider } = createContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, updateBlogPost },
  INITIAL_STATE
);
