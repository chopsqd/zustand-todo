import create from 'zustand'
import {nanoid} from "nanoid";
import {persist} from 'zustand/middleware'

export const useTodos = create(persist((set, get) => ({
    todos: [
        {id: 1, title: 'Learn JS', completed: true},
        {id: 2, title: 'Learn React', completed: true},
        {id: 3, title: 'Learn Zustand', completed: false}
    ],
    loading: false,
    error: null,

    addTodo: (title) => set(state => ({
        todos: [
            ...state.todos,
            {id: nanoid(), title, completed: false}
        ]
    })),
    toggleTodo: (todoId) => set({
        todos: get().todos.map(todo =>
            todoId === todo.id
                ? {...todo, completed: !todo.completed}
                : todo
        )
    }),
    fetchTodos: async () => {
        set({loading: true})

        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')

            if (!res.ok) {
                throw new Error('Failed to fetch! Try again.')
            }

            set({todos: await res.json(), error: null})
        } catch (error) {
            set({error: error.message})
        } finally {
            set({loading: false})
        }
    },
    getFiltered: (filter) => {
        switch (filter) {
            case "completed":
                return get().todos.filter(todo => todo.completed)
            case "uncompleted":
                return get().todos.filter(todo => !todo.completed)
            default:
                return get().todos
        }
    }
})))

export const useFilter = create(set => ({
    filter: 'all',
    setFilter: (value) => set({filter: value})
}))
