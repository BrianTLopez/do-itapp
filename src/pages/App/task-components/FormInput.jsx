import  React from 'react';
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import './style.css';
import { alpha, styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#fd5a1f',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fd5a1f',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fd5a1f',
      },
      '&:hover fieldset': {
        borderColor: '#fd5a1f',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#fd5a1f',
      },
      '& .MuiFormLabel-root-MuiInputLabel-root':{
         color: '#fd5a1f',
      }
    },
  });




const TodoCreator = ({ todo, setTodo, clearInput, inputRef, isInputEmpty, preventSubmit }) => {
   

    return (
        <div className="form__input">
            
                <FormControl   className='label'>
                    <CssTextField
                        id="outlined-basic"
                        label="" 
                        value={todo}
                        variant="outlined"
                        onChange={(e) => setTodo(e.target.value)}
                        onFocus={clearInput}
                        ref={inputRef}
                        aria-describedby="component-error-text"
                        onKeyPress={preventSubmit}
                    />

                    { !isInputEmpty ?
                        <></>
                        :
                        <>
                            <FormHelperText id="component-error-text">Task can't be empty</FormHelperText>
                        </>
                    }
                </FormControl>
                <Button
                    type="submit"
                    alt="add-note"
                    className="addButton"
                    onKeyPress={preventSubmit}
                    variant = "contained"
                    size = "medium"
                >
                    Add task
                </Button>
            
        </div>
    )

}

export  default TodoCreator;