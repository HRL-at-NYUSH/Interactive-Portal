const DefaultTable = ({ data }) => {
  const dataKeys = Object.keys(data[0]);

  return (
    // <table className='min-w-max w-full table-fixed'>
    <table className='min-w-max w-full table-fixed'>
      {/* table head */}
      <thead>
        <tr className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
          {dataKeys.map((key) => (
            <th className='py-3 px-1 text-center'>{key}</th>
          ))}
        </tr>
      </thead>

      <tbody className='text-gray-600 text-sm font-semibold'>
        {/* iterate through data items for each row*/}
        {data.map((datum, i) => {
          return (
            <tr
              key={`data-${i}`}
              className='border-b border-gray-200 hover:bg-gray-100'
            >
              {/* iterate through data attributes each cell in each row*/}
              {dataKeys.map((dataKey) => {
                return (
                  <td key={`data-${i}-${dataKey}`} className='py-1 text-center'>
                    {datum[dataKey]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default DefaultTable;
