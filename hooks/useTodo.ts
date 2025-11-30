import { useReducer } from 'react'
import type { Task } from '../types'

type TodosState = {
  tasks: Task[]
}

type TodosAction =
  | { type: 'ADD'; text: string }
  | { type: 'TOGGLE'; id: number }

const initialState: TodosState = {
    tasks: [],
}

const todosReducer = (state: TodosState, action: TodosAction): TodosState => {
    switch (action.type) {
        case 'ADD': {
            const newTask: Task = {
                id: Date.now(),
                text: action.text,
                completed: false
            }
            return {
                ...state,
                tasks: [newTask, ...state.tasks],
            }
        }

        case 'TOGGLE': {
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                  task.id === action.id
                    ? { ...task, completed: !task.completed }
                    : task
                )
            }
        }

        default:
          return state
    }
}

export const useTodos = () => {
    const [state, dispatch] = useReducer(todosReducer, initialState)

    const addTask = (text: string) => {
        const trimmed = text.trim()
        if (!trimmed) return
        dispatch({ type: 'ADD', text: trimmed })
    }

    const toggleTask = (id: number) => {
        dispatch({ type: 'TOGGLE', id})
    }

    return {
        state,
        addTask,
        toggleTask,
    }
}

