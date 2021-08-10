export default function CheckBox({
  title = 'Untitled Checkbox',
  stateName,
  defaultChecked = false,
  onStateChange = (stateName, value) => {
    console.log(stateName, value);
  },
}) {
  return (
    <label className='inline-flex justify-items-start flex-row flex-nowrap relative pr-4'>
      <input
        type='checkbox'
        defaultChecked={defaultChecked}
        className='rounded my-auto border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50'
        onChange={(e) => onStateChange(stateName || title, e.target.checked)}
      ></input>
      <span className='ml-2 my-auto'>{title}</span>
    </label>
  );
}
