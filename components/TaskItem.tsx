import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import type { Task } from '../types.ts'

type Props = {
  task: Task
  onToggle: (id: number) => void
}

export default function TaskItem({ task, onToggle }: Props) {
  return (
    <Pressable onPress={() => onToggle(task.id)}>
      <Text
        style={[
          styles.taskText,
          task.completed && styles.completedTaskText
        ]}
      >
        {task.text}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  taskText: {
    fontSize: 18,
    paddingVertical: 8,
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
})