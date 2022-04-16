import React from 'react';
import {View, Text, StyleSheet, Animated, TouchableOpacity} from 'react-native';

export default class FloatingButton extends React.Component {
    animation = new Animated.Value(0)

    toggleMenu = () => {
        const toValue = this.open ?0:1;
        Animated.spring(this.animation, {
            toValue,
            friction:5
        }).start();

        this.open = !this.open;

    }

    render() {
        return(
            <View styles={styles.container}>
            {/* replace the image with the counter. But this is the man in the center*/}
            <TouchableOpacity style={[styles.largeCircle, {left:122, bottom: 380}]} onPress={this.toggleMenu}>
                <Animated.View>
                <Image style={{width: 100, height: 130}}
                    resizeMode='contain'
                    source={require('../assets/close.png')} />
                </Animated.View>
            </TouchableOpacity>

        {/* education button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Education", {listID: 0 });
          }}
          style={[styles.circleButton, {left:60, bottom: 70}]}
          >
            <Animated.View>
          <Image style={{width: 60, height: 60}}
            resizeMode='contain'
            source={require('../assets/education.png')}/>
            </Animated.View>
        </TouchableOpacity>

        {/* employment button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Employment", {listID: 1 });
          }}
          style={[styles.circleButton, {left:290, bottom: 140}]}
        >
          <Animated.View>
          <Image style={{width: 60, height: 55, bottom: 2}}
          resizeMode='contain'
          source={require('../assets/employment.png')}/>
          </Animated.View>
        </TouchableOpacity>

        {/* financial button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Financial", {listID: 2 });
          }}
          style={[styles.circleButton, {left:60, bottom: 20}]}
        >
            <Animated.View>
          <Image style={{width: 60, height: 60}}
          resizeMode='contain'
          source={require('../assets/money.png')}/>
          </Animated.View>
        </TouchableOpacity>

        {/* healthcare button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Healthcare", {listID: 3 });
          }}
          style={[styles.circleButton, {left:170, bottom: 40}]}
        >
            <Animated.View>
          <Image style={{width: 55, height: 60, right: 2, top: 1}}
          resizeMode='contain'
          source={require('../assets/healthcare.png')}/>
          </Animated.View>
        </TouchableOpacity>

        {/* housing button */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Housing", {listID: 4 });
          }}
          style={[styles.circleButton, {left:290, bottom: 160}]}
        >
            <Animated.View>
          <Image style={{width: 50, height: 60}}
          resizeMode='contain'
          source={require('../assets/housing.png')}/>
          </Animated.View>
        </TouchableOpacity>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    button:{
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60/2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: {height: 10},
    },
    menu: {
        backgroundColor:"#F02A4B"
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
})