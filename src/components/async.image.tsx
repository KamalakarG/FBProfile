import React from "react";
import { View, ActivityIndicator } from "react-native";
import { Image } from "react-native-elements";

const AsyncImage = (props) => {
  const { source, width, height, isCircle } = props;

  return (
    <View
      style={{
        width: width,
        height: height,
      }}
    >
      <Image
        source={source}
        style={{
          width: width,
          height: height,
          borderRadius: isCircle ? height / 2 : 0,
        }}
        PlaceholderContent={<ActivityIndicator />}
      />
    </View>
  );
};

export default AsyncImage;
