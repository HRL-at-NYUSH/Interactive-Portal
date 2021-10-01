import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

export default function MultiSelect({ data, onValueChange }) {
  return (

    <select
        className='block appearance-none w-full h-9 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
        onChange={(e) => onValueChange(e.target.value)}
        closeMenuOnSelect={false}
        components={animatedComponents}
        isMulti
        options
      >
        {data.map((datum, i) => (
          <option key={i} value={datum.value}>
            {datum.fieldName}
          </option>
        ))}
      </select>
  );
}