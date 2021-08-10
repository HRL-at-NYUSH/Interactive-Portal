import CheckBox from '@/components/CheckBox';
import { useState, useEffect } from 'react';

/*  Sample options for a data checkbox group
/*  Note that the title of the option has to be UNIQUE
const options = [
  {title:'Horizontal', stateName:'horizontal', defaultChecked: true},
  {title:'Display Points',stateName:'displayPoints', defaultChecked: false},
]
*/

const DataCheckBoxGroup = ({
  title = 'Untitled Checkbox Group',
  options = [],
  onChange = () => {},
}) => {
  // parsing options to check box states
  let initialCheckBoxStates = {};
  options.forEach(
    (option) =>
      (initialCheckBoxStates[option.stateName || option.title] =
        option.defaultChecked)
  );

  const [checkBoxStates, setCheckBoxStates] = useState(initialCheckBoxStates);

  useEffect(() => {
    // passing initial states to parent component
    onChange(checkBoxStates);
    console.log('useeffect in check box');
  }, []);

  return (
    <div className='m-2'>
      <div className='text-left m-auto pl-2 text-lg'>{title}</div>
      <div className='inline-flex justify-items-start flex-row flex-wrap m-auto w-full'>
        {options.map((option) => (
          <CheckBox
            title={option.title}
            stateName={option.stateName}
            defaultChecked={option.defaultChecked}
            onStateChange={(stateName, value) => {
              let newStates = { ...checkBoxStates, [stateName]: value };
              setCheckBoxStates(newStates);
              // passing states to parent component
              onChange(newStates);
            }}
          ></CheckBox>
        ))}
      </div>
    </div>
  );
};

export default DataCheckBoxGroup;
