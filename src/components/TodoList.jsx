import {Checkbox, HStack, Stack, Text} from '@chakra-ui/react';
import {useFilter, useTodos} from "../store.js";

const Todo = ({id, title, completed}) => {
    const toggleTodo = useTodos(state => state.toggleTodo)

    return (
        <HStack spacing={4}>
            <Checkbox isChecked={completed} onChange={() => toggleTodo(id)}/>
            <Text style={{textDecoration: completed ? 'line-through' : 'none'}}>{title}</Text>
        </HStack>
    );
};

const TodoList = () => {
    const filter = useFilter(state => state.filter)
    const todos = useTodos(state => state.getFiltered(filter))

    return (
        <Stack minH="300px">
            {todos.map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </Stack>
    );
};

export {TodoList};
