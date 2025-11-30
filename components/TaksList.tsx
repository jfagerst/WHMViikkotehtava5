import React from 'react'
import { FlatList } from 'react-native'
import TaskItem from './TaskItem'
import type { Task } from '../types.ts'

type Props = {
  tasks: Task[]
  onToggleTask: (id: number) => void
}

export default function TaskList({ tasks, onToggleTask }: Props) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TaskItem task={item} onToggle={onToggleTask} />
      )}
    />
  )
}