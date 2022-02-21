import React, { useState, useEffect, useRef } from 'react';
import TodoCreator from "./FormInput";
import TodoList from "./List";
import axios from 'axios';




const Form = ({ data, setTodos, projId }) => {


    const [newTodo, setNewTodo] = useState('');
    // const [ data, setTodos ] = useState([
    //     {
    //         text: "Test 1",
    //         isCompleted: false,
    //         isEditing: false
    //     },
    //     {
    //         text: "Test 2",
    //         isCompleted: false,
    //         isEditing: false
    //     },
    //     {
    //         text: "Test 3",
    //         isCompleted: false,
    //         isEditing: false
    //     }
    // ]);
    const inputRef = useRef();
    const noteRef = useRef({});
    const [isInputEmpty, setInputEmpty] = useState(false)


    const handleSubmit = e => {
        axios
            .post("/api/v1/tasks/createTask", { text: newTodo, projectId: projId })
            .then(function (response) {
                // handle success
                addTodo(newTodo);
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
        e.preventDefault();
        clearInput();
        inputRef.current.focus();
    };

    const preventSubmit = e => {
        if (e.key === 'Enter') {
            e.preventDefault();
        }
    };

    const addTodo = text => {
        console.log('addTodo Text', text)
        if (text !== '') {
            const newTodos = [...data, { text }]
            setNewTodo('')
            console.log('this is actually called')
            setTodos(newTodos, projId);
        } else {
            console.log('text', text)
            setInputEmpty(true);
        }
    };

    const removeTodo = inx => {
        const newArr = [...data]
        newArr.splice(inx, 1)
        setTodos(newArr, projId);
    };

    const completeTodo = inx => {
        const newTodos = [...data];
        newTodos[inx].isCompleted = !newTodos[inx].isCompleted;
        setTodos(newTodos, projId);
    };

    const editTodo = inx => {
        const newTodos = [...data];
        newTodos[inx].isEditing = !newTodos[inx].isEditing;
        setTodos(newTodos, projId);
    }

    const saveTodo = (inx) => {
        const newTodos = [...data];
        newTodos[inx].isEditing = !newTodos[inx].isEditing;
        newTodos[inx].text = noteRef.current[inx].value;
        setTodos(newTodos, projId);
    }

    const clearInput = () => {
        setNewTodo('');
    }

    const setTodo = todo => {
        setInputEmpty(false);
        setNewTodo(todo);
    }

    useEffect(() => {

    }, [data])

    return (
        <form onSubmit={handleSubmit} className="form">

            <TodoCreator
                todo={newTodo}
                setTodo={setTodo}
                clearInput={clearInput}
                inputRef={inputRef}
                isInputEmpty={isInputEmpty}
                preventSubmit={preventSubmit}
            />

            <TodoList
                todos={data}
                completeTodo={completeTodo}
                editTodo={editTodo}
                deleteTodo={removeTodo}
                saveTodo={saveTodo}
                noteRef={noteRef}
                preventSubmit={preventSubmit}
            />
        </form>
    )
}

export default Form;