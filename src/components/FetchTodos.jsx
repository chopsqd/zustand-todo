import {useTodos} from "../store.js";
import shallow from 'zustand/shallow'
import {Button} from "@chakra-ui/react";

const FetchTodos = () => {
    const {loading, error, fetchTodos} = useTodos(state => ({
        loading: state.loading,
        error: state.error,
        fetchTodos: state.fetchTodos,
    }), shallow)

    return (
        <Button isLoading={loading} onClick={fetchTodos}>
            {error ? error : 'Get todos'}
        </Button>
    )
};

export default FetchTodos;
