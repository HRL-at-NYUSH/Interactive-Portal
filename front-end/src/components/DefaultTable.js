// table usage, see https://www.npmjs.com/package/react-data-table-component
import DataTable from 'react-data-table-component';

const DefaultTable = (props) => {
  let newProps = { ...props };

  // if there is no columns passed
  // create a columns prop with the keys of #1 element in data
  if (!props.columns && props.data) {
    newProps.columns = Object.keys(props.data[0]).map((k) => ({
      name: k,
      selector: k,
      wrap: true,
      overflow: false,
      sortable: true,
    }));
  }

  // by DEFAULT, we enable pagination
  if (typeof newProps.pagination === 'undefined') {
    newProps.pagination = true;
  }

  return <DataTable {...newProps}></DataTable>;
};

export default DefaultTable;
