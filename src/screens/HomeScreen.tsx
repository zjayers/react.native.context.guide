// - Imports
import { Feather } from "@expo/vector-icons";
import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";
import PostItem from "../components/PostItem";
import { ROUTE_CREATION } from "../routes/routes";
import { Context as BlogContext } from "../store/Blog/BlogContext";

/**
 * HomeScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const HomeScreen = () => {
  const { state: posts } = useContext(BlogContext);

  return (
    <View style={styles.baseContainer}>
      <FlatList
        data={posts}
        renderItem={({ item: post }) => <PostItem post={post} />}
        keyExtractor={(post) => post.id || post.title}
      />
    </View>
  );
};

HomeScreen.navigationOptions = ({ navigation }: any) => ({
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate(ROUTE_CREATION)}>
      <Feather name="plus" size={30} style={styles.plus} />
    </TouchableOpacity>
  ),
});

// - Styles
const styles = StyleSheet.create({
  baseContainer: {},
  primaryText: {
    fontSize: 30,
  },
  plus: {
    marginRight: 10,
  },
});

// - Exports
export default HomeScreen;
