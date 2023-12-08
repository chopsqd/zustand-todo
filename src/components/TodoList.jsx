import {Checkbox, HStack, Stack, Text} from '@chakra-ui/react';

const Todo = ({id, title, completed}) => {

    return (
        <HStack spacing={4}>
            <Checkbox isChecked={completed}/>
            <Text>{title}</Text>
        </HStack>
    );
};

const TodoList = () => {
    return (
        <Stack minH="300px">
            {[].map((todo) => (
                <Todo key={todo.id} {...todo} />
            ))}
        </Stack>
    );
};

export {TodoList};
