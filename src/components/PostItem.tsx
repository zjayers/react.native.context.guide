// - Imports
import { Feather } from "@expo/vector-icons";
import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { ROUTE_POST } from "../routes/routes";
import { ActionFunction, IBlogPost } from "../types";
import {
  NavigationParams,
  NavigationScreenProp,
  withNavigation,
} from "react-navigation";
import { Context as BlogContext } from "../store/Blog/BlogContext";

interface IPostItemProps {
  post: IBlogPost;
  navigation: NavigationScreenProp<any>;
}

/**
 * PostItem Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const PostItem = ({ post, navigation }: IPostItemProps) => {
  const {
    actions: { deleteBlogPost },
  } = useContext(BlogContext);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(ROUTE_POST, { id: post.id })}
    >
      <View style={styles.row}>
        <Text style={styles.title}>
          {post.id}: {post.title}
        </Text>
        <TouchableOpacity onPress={() => deleteBlogPost(post)}>
          <Feather name={"trash"} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

// - Styles
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});

// - Exports
export default withNavigation(PostItem);
