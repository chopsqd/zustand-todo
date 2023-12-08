import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Input,
    useDisclosure,
} from '@chakra-ui/react';
import {useRef} from 'react';

const NewTodo = () => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const ref = useRef();

    const handleAddTodo = () => {
        onClose();
    };

    return (
        <>
            <Button colorScheme="teal" onClick={onOpen}>
                Add new todo
            </Button>

            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader>Create new todo</DrawerHeader>

                    <DrawerBody>
                        <Input
                            placeholder="Type here..."
                            ref={ref}
                            onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
                            autoFocus
                        />
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue" onClick={handleAddTodo}>
                            Save
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export {NewTodo};
