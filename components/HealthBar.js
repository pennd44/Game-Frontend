import React, { Component, useEffect, useRef } from "react";
import { View, Animated, Text } from "react-native";
// import CustomText from "../CustomText";
import { useSelector, useDispatch } from 'react-redux'

const available_width = 200;

const HealthBar = (props) => {
  // let user = useSelector(state => state.user)
  let currentHealth = useRef(new Animated.Value(props.entity.current_health)).current
  const getCurrentHealthStyles = () => {
    var animated_width = currentHealth.interpolate({
      inputRange: [0, props.entity.max_health / 2, props.entity.max_health],
      outputRange: [0, available_width / 2, available_width]
    });

    const color_animation = currentHealth.interpolate({
      inputRange: [0, props.entity.max_health / 2, props.entity.max_health],
      outputRange: [
        "rgb(199, 45, 50)",
        "rgb(224, 150, 39)",
        "rgb(101, 203, 25)"
      ]
    });

    return {
      width: animated_width,
      height: 8, // height of the health bar
      backgroundColor: color_animation
    };
  };

  const animateHealth = () => {
    Animated.timing(currentHealth, { duration: 1500, toValue: props.entity.current_health, useNativeDriver: false }).start()
  }
  useEffect(() => animateHealth(), [props.entity.current_health])
  return (<View>
    {/*  */}
    {/* <Text>HP</Text> */}
    <View style={styles.container}>
      {/* <View style={styles.percent}> */}
        <Text styles={styles.percentText}>HP </Text>
      {/* </View> */}
      <View style={styles.rail}>
        <Animated.View style={[getCurrentHealthStyles()]} />
      </View>
      <View style={styles.percent}>
        <Text styles={styles.percentText}>
          {props.entity.current_health}/{props.entity.max_health}
        </Text>
      </View>
    </View>
  </View>);
}


// componentDidUpdate(prevProps, prevState) {
//   if (prevProps.currentHealth !== this.props.currentHealth) {
//     this.currentHealth.addListener(progress => {
//       this.setState({
//         currentHealth: progress.value
//       });
//     });

//     Animated.timing(this.currentHealth, {
//       duration: 1500,
//       toValue: this.props.currentHealth
//     }).start();
//   }
// }


const styles = {
  container: {
    height: 15,
    width: 130,
    marginBottom: 0,
    flexDirection: "row"
  },
  label: {
    paddingBottom: 2,
    color: "#212121"
  },
  rail: {
    height: 10,
    width: available_width,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: "#616161",
    marginTop: 3,
  },
  healthOK: {
    backgroundColor: "#5db56d"
  },
  healthWarning: {
    backgroundColor: "#fcc419"
  },
  healthCritical: {
    backgroundColor: "#fa5252"
  },
  percent: {
    paddingLeft: 3,
  },
  percentText: {
    fontSize: 10,
    color: "#212121"
  }
};

export default HealthBar;