import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import {
  ROUTE_CREATION,
  ROUTE_EDIT,
  ROUTE_HOME,
  ROUTE_POST,
} from "./src/routes/routes";
import CreationScreen from "./src/screens/CreationScreen";
import EditScreen from "./src/screens/EditScreen";
import HomeScreen from "./src/screens/HomeScreen";
import PostScreen from "./src/screens/PostScreen";
import { Provider as BlogProvider } from "./src/store/Blog/BlogContext";

// Create the navigator with the predefined routes
const navigator = createStackNavigator(
  {
    [ROUTE_HOME]: HomeScreen,
    [ROUTE_POST]: PostScreen,
    [ROUTE_CREATION]: CreationScreen,
    [ROUTE_EDIT]: EditScreen,
  },
  {
    initialRouteName: ROUTE_HOME,
    defaultNavigationOptions: {
      title: "Blogs",
    },
  }
);

// Create the app from the navigator so it can be wrapped in a Provider
const App = createAppContainer(navigator);

export default () => {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
};
