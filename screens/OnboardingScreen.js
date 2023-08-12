import React from "react";
import { Text, View, StyleSheet, Dimensions, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";

const {width, height} = Dimensions.get('window')

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Onboarding
      containerStyles={{paddingHorizontal: 15}}
        pages={[
          {
            backgroundColor: "#fff",
            image: (
              <View style={styles.images}>
                <Image source={require('../assets/saving.jpeg')} width={100} />
              </View>
            ),
            title: "Savings",
            subtitle: "attain the best financial discipline within a specified period",
          },

          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>hello boy</Text>
              </View>
            ),
            title: "Marketplace",
            subtitle: "purchase quality products at affordably low prices",
          },

          {
            backgroundColor: "#fff",
            image: (
              <View>
                <Text>hello boy</Text>
              </View>
            ),
            title: "Njangi",
            subtitle: "Done with React Native Onboarding Swiper",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  images: {
    width: width*0.9,
    height: width,
    backgroundColor: "red",
  }
});
