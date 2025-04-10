//rnfs
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Home UI</Text>
      {/*ย้อนกลับได้*/}
      <Link href="/hello">Go to Hello</Link>
      <Pressable onPress={() => { router.push('/hi') }}>
        <Text>Go to Hi</Text>
      </Pressable>
      {/*ย้อนกลับไม่ได้*/}
      <Pressable onPress={() => { router.replace('/hey') }}>
        <Text>Go to Hey</Text>
      </Pressable>
      {/*ย้อนกลับได้*/}
      <Pressable onPress={() => { router.navigate('/hur') }}>
        <Text>Go to Hur</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
  },
})