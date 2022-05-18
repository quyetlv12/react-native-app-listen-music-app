import React, { useEffect, useState } from 'react'
import { View, ScrollView, Text, Button } from 'react-native'
import Card from '../../components/card/Card'
import { taskService } from '../../services/taskService'
const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([])
  const renderTasks = () => {
    tasks.map((_elt, index) => {
      <Card />
    })
  }
  useEffect(() => {
    const get = async () => {
      const res = await taskService.getAllTask()
      setTasks(res.data)
    }
    get()
  }, [tasks])

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        {/* <Text >HOME</Text>
        <Button title='hoàn thành' onPress={() => navigation.navigate('Done')}>Đã hoàn thành</Button> */}
        {tasks.map((_elt, index) => (
          <>
            <Text key={index}>{_elt.name}</Text>
          </>
        ))}

      </View>
    </ScrollView>

  )
}

export default HomeScreen 