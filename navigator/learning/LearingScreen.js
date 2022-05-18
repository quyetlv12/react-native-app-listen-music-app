import React from 'react'
import { Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
const LearningScreen = ({navigator}) => {
    const tailwind = useTailwind()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={tailwind('text-blue-800 font-semibold')}>learning</Text>
    </View>
  )
}

export default LearningScreen