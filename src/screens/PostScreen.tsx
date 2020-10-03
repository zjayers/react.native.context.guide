// - Imports
import { Feather } from "@expo/vector-icons";
import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationScreenProp } from "react-navigation";
import { ROUTE_CREATION, ROUTE_EDIT } from "../routes/routes";
import { Context as BlogContext } from "../store/Blog/BlogContext";
import HomeScreen from "./HomeScreen";

interface IPostScreenProps {
  navigation: NavigationScreenProp<any>;
}

/**
 * PostScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const PostScreen = ({ navigation }: IPostScreenProps) => {
  const { state } = useContext(BlogContext);

  const postId = navigation.getParam("id");
  const blogPost = state.find((post) => post.id === postId);

  return (
    <View style={styles.baseContainer}>
      <Text style={styles.primaryText}>{blogPost?.title}</Text>
      <Text style={styles.primaryText}>{blogPost?.content}</Text>
    </View>
  );
};

PostScreen.navigationOptions = ({ navigation }: any) => ({
  headerRight: () => (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(ROUTE_EDIT, { id: navigation.getParam("id") })
      }
    >
      <Feather name="edit" size={30} style={styles.edit} />
    </TouchableOpacity>
  ),
});

// - Styles
const styles = StyleSheet.create({
  baseContainer: {},
  primaryText: {
    fontSize: 30,
  },
  edit: {
    marginRight: 10,
  },
});

// - Exports
export default PostScreen;
