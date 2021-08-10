/*  Sample data for a selection box
const data = [
  {fieldName:'Time', value:'Time'},
  {fieldName:'Person', value:'Person'},
  {fieldName:'Company', value:'TimCompanye'}
]
*/

/*  Sample function for onValueChange
const onValueChange = ()=>{

}
*/

export default function SelectBox({
  data = [],
  onValueChange = (value) => {
    console.log(value);
  },
}) {
  return (
    <select
      className='block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
      onChange={(e) => onValueChange(e.target.value)}
    >
      {data.map((datum, i) => (
        <option key={i} value={datum.value}>
          {datum.fieldName}
        </option>
      ))}
    </select>
  );
}
