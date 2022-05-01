// no need to worry about these. Just importing libraries like in java so it works
import { StyleSheet, View, Text, SafeAreaView , TextInput, TouchableOpacity, ScrollView} from "react-native";
import React, { useState } from "react";

const VerifyEmail = () => {

  // these useState lines not only allows the gray text inside each box to be replaced as the
  // user types, but also stores the values inside their respective variables, "email", "password"
  // and "credit" etc to be shown
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [credit, setCredit] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setC] = useState("");

  // this is simply a function that will display the information on screen in the form
  // of an alert box. Works on both android or IOS if that makes a difference
  const userData = () => {
    alert('Email: ' + email + '\nPassword: ' + password + '\nCredit Card: ' + credit + '\nExpiration: ' + date + '\nCVV: ' + cvv);
  }

  // the return is simply what you can see on the screen. Nothing much else to say about that
  return (
      // SafeAreaView is just a formatting thing that works on IOS only. In short, it just
      // makes sure everything is visible. ScrollView allows the page to be scrolled up and down
      // if need be. Makes formatting much easier since the keyboard would bump everything
      // off the top of the screen without it
      <SafeAreaView style = {styles.container} >
        <ScrollView>
        {/* this is just the text to make the experience more 'immersive' */}
        <Text style={[styles.text,]}>Verify Information</Text>

        <View style={{alignItems:'center'}}>
        {/* this is the box for the user's email. Multiline just allows the box to expand
            if any value is too big. Regardless it will display just fine. Style calls the
            custom code below, it's quite literally just a style. Placeholder is the gray
            text you see in the boxes before a value is typed in. It simply makes the formatting
            look cleaner. onChangeText is what notices that 'something' is being typed into
            the box, then it takes the variable 'val' and then sets the email value from the
            function listed above to whatever is in the box so that it 'uses the state' of
            the box. The rest of the boxes are the same way. */}
        <TextInput
          multiline
          style={styles.inputBox}
          placeholder="Email"
          onChangeText={(val) => setEmail(val)}
        />
        {/* this is the input box for the user's password. only difference is that the letters
            hide once you type. standard password business */}
        <TextInput
          secureTextEntry
          style={styles.inputBox}
          placeholder="Password"
          onChangeText={(val) => setPassword(val)}
        />

        <Text style={styles.text2}>This service uses a subscription, please enter your credit card information</Text>
        {/* this is the input box for the user's credit card info. */}
        <TextInput
          multiline
          keyboardType="numeric"
          style={styles.inputBox}
          placeholder="Card"
          onChangeText={(val) => setCredit(val)}
        />

        <TextInput
          multiline
          keyboardType="numeric"
          style={[styles.inputBox2]}
          placeholder="MM/YY"
          onChangeText={(val) => setDate(val)}
        />

        <TextInput
          multiline
          keyboardType="numeric"
          style={[styles.inputBox2]}
          placeholder="CVV"
          onChangeText={(val) => setC(val)}
        />

      {/* this is the submit button. It calls the function userData which pops an alert
          on screen that shows you what they just typed into the boxes. Style is different
          but essentially all it does is call the function that displays. */}
      <TouchableOpacity
        style={[styles.button, {alignItems: 'center', top: 15 }]}
        onPress={userData}>
        <Text style={{ color: "white" }}>Submit</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
      </SafeAreaView>
  );
};

export default VerifyEmail;

// you don't need to worry about this either. This is just the custom styles for each thing you
// see on the page. Not functional, only cosmetic
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 250,
  },
  inputBox2: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 125,
  },
  button: {
    backgroundColor: "#859a9b",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    width: 150,
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 18,
    fontWeight: "bold",
    justifyContent: 'center',
  },
});