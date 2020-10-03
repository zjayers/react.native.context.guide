// - Imports
import React, { useContext, useState } from "react";
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
 * CreationScreen Component
 * @returns {JSX.Element} - JSX to be rendered to the screen
 */
const CreationScreen = ({ navigation }: any) => {
  const [titleValue, setTitleValue] = useState("");
  const [contentValue, setContentValue] = useState("");
  const [loading, setLoading] = useState(false);

  const {
    actions: { addBlogPost },
  } = useContext(BlogContext);

  const handleAddPost = async () => {
    setLoading(true);
    await addBlogPost({ title: titleValue, content: contentValue });
    navigation.navigate(ROUTE_HOME);
  };

  return (
    <View style={styles.baseContainer}>
      <Text style={styles.primaryText}>Enter Title</Text>
      <TextInput
        style={styles.textInput}
        value={titleValue}
        onChangeText={setTitleValue}
        editable={!loading}
      />
      <Text style={styles.primaryText}>Enter Content</Text>
      <TextInput
        style={styles.textInput}
        value={contentValue}
        onChangeText={setContentValue}
        editable={!loading}
      />
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Button title={"Create Post"} onPress={handleAddPost} />
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
export default CreationScreen;
