export default function TextField({
  data = [],
  placeholder = `Press Enter to Confirm`,
  defaultValue,
  onValueChange = (value) => {
    console.log(value);
  },
}) {
  return (
    <input
      type='text'
      placeholder={placeholder}
      value={defaultValue}
      className='block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
      onKeyDown={(e) => {
        if (e.key === 'Enter') onValueChange(e.target.value);
      }}
    ></input>
  );
}
