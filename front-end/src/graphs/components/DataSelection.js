import SelectBox from '@components/SelectBox';

const DataSelection = ({ title, options, dataType, onValueChange }) => {
  // if there is a data type specified
  if (dataType) options = options.filter((o) => o.type.includes(dataType));

  // convert the options to render selectbox
  let selectBoxOptions = options.map((o) => ({
    fieldName: o.name,
    value: o.name,
  }));

  return (
    <div className='m-2'>
      <div className='text-left m-auto pl-2 text-lg'>{title}</div>
      <div className='m-auto w-64'>
        <SelectBox data={selectBoxOptions} onValueChange={onValueChange} />
      </div>
    </div>
  );
};

export default DataSelection;
