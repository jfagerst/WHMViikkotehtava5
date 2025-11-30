import React from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

type Props = {
  value: string
  onChangeText: (text: string) => void
  onSubmit: () => void
}

export default function TaskInput({ value, onChangeText, onSubmit }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter task"
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        onSubmitEditing={onSubmit}
      />
      <Button title="Add" onPress={onSubmit} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',      
    alignItems: 'center',      
    marginBottom: 16,
  },
  input: {
    flex: 1,                   
    borderWidth: 1,
    borderColor: '#333',
    padding: 8,
    borderRadius: 4,
    marginRight: 8,            
  },
})