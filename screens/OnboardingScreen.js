import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function OnboardingScreen() {
  return (
    <View style={styles.container}>
      <Text>OnboardingScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
})
