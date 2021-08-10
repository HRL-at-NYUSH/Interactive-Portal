import CheckBox from '@/components/CheckBox';
import { useEffect } from 'react';

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
  onStatesChange = () => {},
}) => {
  // parsing options to check box states
  let checkBoxStates = {};
  options.forEach(
    (option) =>
      (checkBoxStates[option.stateName || option.title] = option.defaultChecked)
  );

  // passing initial states to parent component
  useEffect(() => {
    onStatesChange(checkBoxStates);
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
              checkBoxStates[stateName] = value;
              // passing states to parent component
              onStatesChange(checkBoxStates);
            }}
          ></CheckBox>
        ))}
      </div>
    </div>
  );
};

export default DataCheckBoxGroup;
