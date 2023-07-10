import React from 'react';
import { View, Text } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

const SwipeableComponent = () => {
  const renderLeftActions = () => {
    return (
      <View style={{ backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', width: 100 }}>
        <Text>Left Action</Text>
      </View>
    );
  };

  return (
    <Swipeable renderLeftActions={renderLeftActions}>
      <View style={{ backgroundColor: 'lightblue', height: 100, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Swipeable Component</Text>
      </View>
    </Swipeable>
  );
};

export default SwipeableComponent;