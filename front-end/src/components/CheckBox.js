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
        className='rounded my-auto focus:outline-none focus:shadow-outline'
        onChange={(e) => onStateChange(stateName || title, e.target.checked)}
      ></input>
      <span className='ml-2 my-auto'>{title}</span>
    </label>
  );
}
