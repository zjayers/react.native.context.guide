import React, { useReducer } from "react";
import {
  IActions,
  IBoundActions,
  IChildren,
  IProvider,
  IReducer,
  IState,
} from "../../types";

export const createContext = (
  reducer: IReducer,
  actions: IActions,
  initialState: IState
) => {
  const Context = React.createContext({} as IProvider);

  const Provider = ({ children }: IChildren) => {
    /* State */
    const [state, dispatch] = useReducer(reducer, initialState);

    const boundActions: IBoundActions = {};

    Object.keys(actions).forEach((key) => {
      boundActions[key] = actions[key](dispatch);
    });

    // Setup the provider object to be provided to children
    const providerValue: IProvider = { state, actions: boundActions };

    return (
      <Context.Provider value={providerValue}>{children}</Context.Provider>
    );
  };

  return { Context, Provider };
};
