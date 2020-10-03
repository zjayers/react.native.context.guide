import React from "react";
import { IBlogPost } from "../../types";
import { ADD_POST, DELETE_POST, UPDATE_POST } from "./blogTypes";

/**
 * Add Blog Post
 * @param dispatch
 */
export const addBlogPost = (dispatch: React.Dispatch<any>) => async (
  blogPost: IBlogPost
) => {
  dispatch({ type: ADD_POST, payload: blogPost });
};

/**
 * Delete Blog Post
 * @param dispatch
 */
export const deleteBlogPost = (dispatch: React.Dispatch<any>) => (
  blogPost: IBlogPost
) => {
  dispatch({ type: DELETE_POST, payload: blogPost });
};

export const updateBlogPost = (dispatch: React.Dispatch<any>) => (
  blogPost: IBlogPost
) => {
  dispatch({ type: UPDATE_POST, payload: blogPost });
};
