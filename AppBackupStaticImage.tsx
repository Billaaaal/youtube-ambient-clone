import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const App = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <TouchableOpacity
    delayPressIn={0}
    delayPressOut={2000}
    onPressOut={()=>{}}
      activeOpacity={1}
      onPress={handlePress}
      style={[styles.container, { opacity: 0.0 }]}
    >
      <View style={styles.buttonContainer}>
        <View style={[styles.button, { pointerEvents: 'none' }]}>
          <Text style={styles.buttonText}>Round Button</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    width:'100%',
    height:500,
    backgroundColor: 'red',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 30,
    opacity: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
