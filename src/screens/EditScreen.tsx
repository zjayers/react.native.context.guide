// - Imports
import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
} from "react-native";
import { ROUTE_HOME } from "../routes/routes";
import { Context as BlogContext } from "../store/Blog/BlogContext";

/**
 * Edit Screen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const EditScreen = ({ navigation }: any) => {
  const {
    state,
    actions: { updateBlogPost },
  } = useContext(BlogContext);

  const id = navigation.getParam("id");
  const blogPost = state.find((post) => post.id === id);

  const [titleValue, setTitleValue] = useState(blogPost!.title);
  const [contentValue, setContentValue] = useState(blogPost!.content);
  const [loading, setLoading] = useState(false);

  const handleUpdatePost = async () => {
    setLoading(true);
    await updateBlogPost({ id, title: titleValue, content: contentValue });
    navigation.pop();
  };

  return (
    <View style={styles.baseContainer}>
      <Text style={styles.primaryText}>Title</Text>
      <TextInput
        style={styles.textInput}
        value={titleValue}
        onChangeText={setTitleValue}
        editable={!loading}
      />
      <Text style={styles.primaryText}>Content</Text>
      <TextInput
        style={styles.textInput}
        value={contentValue}
        onChangeText={setContentValue}
        editable={!loading}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title={"Save Edits"} onPress={handleUpdatePost} />
      )}
    </View>
  );
};

// - Styles
const styles = StyleSheet.create({
  baseContainer: {
    padding: 10,
  },
  primaryText: {
    fontSize: 20,
    marginBottom: 5,
  },
  textInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});

// - Exports
export default EditScreen;
