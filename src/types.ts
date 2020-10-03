import React from "react";

// ---- STATE TYPES ---- //
export type IState = Array<IBlogPost>;

// ---- ACTION TYPES ---- //
export type ActionInput = IBlogPost;
export type ActionFunction = ((x: ActionInput) => void) | (() => void);

export interface IAction {
  type: string;
  payload: ActionInput;
}

export interface IActions {
  [key: string]: (dispatch: React.Dispatch<any>) => ActionFunction;
}

export interface IBoundActions {
  [key: string]: ActionFunction;
}

// ---- REDUCER TYPES ---- //
export interface IReducer {
  (state: any, action: IAction): any;
}

// ---- PROVIDER TYPES ---- //
export interface IProvider {
  state: IState;
  actions: IBoundActions;
}

export interface IChildren {
  children: JSX.Element[] | JSX.Element;
}

export interface IBlogPost {
  id?: string;
  title: string;
  content: string;
}
