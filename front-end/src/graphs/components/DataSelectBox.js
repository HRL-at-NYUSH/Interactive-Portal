import SelectBox from '@components/SelectBox';

const DataSelectBox = ({
  title = 'Untitled Select Box',
  options = [],
  dataType = '',
  onChange = () => {},
}) => {
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
      <div className='m-auto w-full'>
        <SelectBox data={selectBoxOptions} onValueChange={onChange} />
      </div>
    </div>
  );
};

export default DataSelectBox;
