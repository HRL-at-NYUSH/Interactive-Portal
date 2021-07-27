import { Link } from '@components';

const DatasetProduction = () => {
  const productionMethods = [
    {
      name: 'Preprocessing',
      description: ` Nulla rhoncus ante vel maximus fringilla. Duis
    imperdiet scelerisque magna, a convallis mauris condimentum in.
    Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.`,
      url: '#',
    },

    {
      name: 'OCR Recognition',
      description: ` Nulla rhoncus ante vel maximus fringilla. Duis
    imperdiet scelerisque magna, a convallis mauris condimentum in.
    Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.`,
      url: '#',
    },
    {
      name: 'Data Cleaning',
      description: ` Nulla rhoncus ante vel maximus fringilla. Duis
    imperdiet scelerisque magna, a convallis mauris condimentum in.
    Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.`,
      url: '#',
    },
  ];
  return (
    <div>
      {productionMethods.map((method) => {
        return (
          <div className='w-full m-auto mt-2 sm:w-2/3 border-2 rounded p-2'>
            <div className='text-lg leading-8 font-bold'>{method.name}</div>
            {method.description}
            <div className='m-4'>
              <Link
                className=' m-auto border-2 rounded p-2 hover:text-gray-400'
                href={method.url}
              >
                Learn More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DatasetProduction;
