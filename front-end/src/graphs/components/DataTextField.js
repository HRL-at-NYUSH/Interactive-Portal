  
import TextField from '@components/TextField.js';
import { useState, useEffect } from 'react';

const DataTextField = ({
  title = 'Untitled Text Field',
  placeholder,
  defaultValue,
  onChange = (textInput) => {
    console.log(textInput);
  },
}) => {
  const [textInput, setTextInput] = useState(defaultValue || placeholder || '');

  useEffect(() => {
    // passing initial states to parent component
    setTextInput(textInput || placeholder);
    onChange(textInput);
  }, []);

  return (
    <div className='m-2'>
      <div className='text-left m-auto pl-2 text-lg'>{title}</div>
      <TextField
        placeholder={placeholder}
        defaultValue={defaultValue}
        onValueChange={(text) => {
          setTextInput(text || placeholder);
          onChange(text || placeholder);
        }}
      ></TextField>
    </div>
  );
};

export default DataTextField;