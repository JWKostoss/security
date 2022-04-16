import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { PageContext } from "../context";
import FloatingButton from '../components/FloatingButton'

let initialRender = true;
const HomeScreen = () => {
  // These variables can be considered 'global' to any file that is under the context provider in the root file
  const { fire, authen, lists, refreshs, vitals, pointss } =
    React.useContext(PageContext);
  const [authID, setAuthID] = authen;
  const [refresh, setRefresh] = refreshs;
  const [vitalsigns, setVitalsigns] = vitals;
  const [points, setPoints] = pointss;
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation(); 

  //const test = new Date(vitalsigns[0].createdAt.toDate()).toString()

  console.log('HOME: ', vitalsigns)

  const increasePoints = () => {
    setPoints(points + 1);
    fire.updatePoints({
      userPoints: points + 1,
    });
    setRefresh(!refresh);
  };

  const decreasePoints = () => {
    setPoints(points - 1);
    fire.updatePoints({
      userPoints: points - 1,
    });
    setRefresh(!refresh);
  };

  // Sets the authID useState to the user ID from firebase, this then allows the useEffect in App.js to trigger
  // and retieve the lists and user points
  useEffect(() => {
    setAuthID(fire.userID);
  }, []);

  // This useEffect triggers when the useState 'lists' changes, when it changes the loading state to false
  // so that the activity indicator is disabled and shows the content of the screen when loaded
  useEffect(() => {
    if (initialRender) {
      initialRender = false;
    } else {
      setLoading(false);
    }
  }, [lists]);

  const handleSignOut = () => {
    fire.detach()
    fire.auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const handleVital = () => {
    navigation.navigate("Vital Signs");
  };

  const [state, setState] = useState(true);

  const toggle = () => {
    setState(!state);
  }

  // If loading is true then display activity indicator
  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={"blue"} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Email: {fire.auth.currentUser?.email}</Text>
      <Text>userID: {fire.userID}</Text>
      <Text>POINTS: {points}</Text>

      {/* <FlatList
          data={lists}
          renderItem={({ item }) => <ItemRender item={item} name={item.name} />}
          keyExtractor={(item) => item.id.toString()}
        /> */}

      {/* this is the beginning of the center buttons */}
        <View style={[styles.container, this.props.style]}>
          <Text style={{position: 'absolute', alignItems:'center', top: 0, fontSize: 30}}>
            {state ? 'Push to Begin!': 'Welcome!'}
          </Text>
        </View>

      <View style={{right: 120, top:200}}>
        {/* calls the floating button class from components folder, should have all the buttons and functions */}
        <FloatingButton onPress={toggle}/>
        
      </View>

        <View style={{bottom: 100}}>
        <TouchableOpacity onPress={handleVital} style={styles.circleButton}>
          <Image style={{width: 50}}
            resizeMode='contain'
            source={require('../assets/vital.png')} />
        </TouchableOpacity>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            onPress={increasePoints}
            style={styles.circleButton}
          >
            <Text style={styles.circleText}>increase</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={decreasePoints}
            style={styles.circleButton}
          >
            <Text style={styles.circleText}>decrease</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // fire.refUser.get().then((doc) => {
              //   console.log(doc.data())
              // })

              let time = fire.timeStamp

              fire.addVitalsign({
                createdAt: time,
              })

            }}
            style={styles.circleButton}
          >
            <Text style={styles.circleText}>Change to admin</Text>
          </TouchableOpacity>
        </View>

        <View style={[{position:'absolute', alignItems: 'center', justifyContent:'center', top: 390, right:75}]}>
        <TouchableOpacity onPress={handleSignOut} >
          <Text style={styles.buttonText}>Sign out</Text>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    //backgroundColor: 'blue',
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 40,
    bottom: 30,
  },
  buttonText: {
    color: "lightblue",
    fontWeight: "700",
    fontSize: 16,
  },
  circleButton: {
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "#c5b358",
  },
  circleText: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
  },
  largeCircle: {
    width: 175,
    height: 175,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "black",
    backgroundColor: "#c5b358",
  },
});
