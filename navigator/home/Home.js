import React , {useEffect} from 'react'
import {View , Text} from 'react-native'
import { taskService } from '../../services/taskService'
const HomeScreen  = ({navigation}) => {
    useEffect(() => {
     const get = async () =>{
         const res = await taskService.getAllTask()
     }
     get()
    }, [])
    
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text >HOME</Text>
    </View>
  )
}

export default HomeScreen 