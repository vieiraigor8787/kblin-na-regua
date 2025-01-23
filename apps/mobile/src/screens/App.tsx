import { Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

createNativeStackNavigator()
export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{process.env.API_URL}</Text>
    </View>
  )
}
