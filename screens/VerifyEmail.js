import { StyleSheet, Text, Image, SafeAreaView , TouchableOpacity, Linking} from "react-native";
import React from "react";

const VerifyEmail = () => {
  return (
      <SafeAreaView style = {styles.container} >
        <Text>Verify Email Page</Text>
      </SafeAreaView>
  );
};

export default VerifyEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
     alignItems: "center",
    justifyContent: "center",
  },
  zoom:{
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    bottom:200,
  },
  button: {
    backgroundColor: "dodgerblue",
    width: "75%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderColor: "dodgerblue",
    bottom: 400
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  
});