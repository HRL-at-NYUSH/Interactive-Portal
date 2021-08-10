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

export default function SelectBox({ data = [], onValueChange = () => {} }) {
  return (
    <select
      className='block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
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
