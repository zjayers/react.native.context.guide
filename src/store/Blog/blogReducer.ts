import { IAction, IBlogPost } from "../../types";
import { ADD_POST, DELETE_POST, UPDATE_POST } from "./blogTypes";

export const blogReducer = (state: Array<IBlogPost>, action: IAction) => {
  switch (action.type) {
    case ADD_POST:
      const newId = Math.floor(Math.random() * 99999).toString();
      const postToAdd: IBlogPost = { id: newId, ...action.payload };
      return [...state, postToAdd];
    case DELETE_POST:
      return state.filter((item) => item.id !== action.payload.id);
    case UPDATE_POST:
      return state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    default:
      return state;
  }
};
