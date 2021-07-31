import SelectBox from '@components/SelectBox';

const DataSelection = ({ title, options, dataType, onValueChange }) => {
  let filterOptions = options
    .filter((o) => o.type.includes(dataType))
    .map((o) => ({ fieldName: o.name, value: o.name }));
  console.log(filterOptions);

  return (
    <div className='m-2'>
      <div className='text-left m-auto pl-2 text-lg'>{title}</div>
      <div className='m-auto w-64'>
        <SelectBox data={filterOptions} onValueChange={onValueChange} />
      </div>
    </div>
  );
};

export default DataSelection;
