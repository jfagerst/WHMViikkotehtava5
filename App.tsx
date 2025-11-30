import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaksList'
import { useTodos } from './hooks/useTodo'

export default function App() {

  const [newTask, setNewTask] = useState<string>('')
  const { state, addTask, toggleTask } = useTodos()
  const handleSubmit = () => {
    if (!newTask.trim()) return
    addTask(newTask)
    setNewTask('')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo list</Text>

      <TaskInput
        value={newTask}
        onChangeText={setNewTask}
        onSubmit={handleSubmit}
      />

      <TaskList
        tasks={state.tasks}
        onToggleTask={toggleTask}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center'
  },
})
