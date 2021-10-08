import { Link } from '@components';

const Variables = () => {
  const variableHighlights = [
    {
      name: 'Cleaning',
      description: ` Nulla rhoncus ante vel maximus fringilla. Duis
    imperdiet scelerisque magna, a convallis mauris condimentum in.
    Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.`,
    },
    {
      name: 'Missing Cases',
      description: ` Nulla rhoncus ante vel maximus fringilla. Duis
    imperdiet scelerisque magna, a convallis mauris condimentum in.
    Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.`,
    },
    {
      name: 'Assumptions about Variables',
      description: ` Nulla rhoncus ante vel maximus fringilla. Duis
    imperdiet scelerisque magna, a convallis mauris condimentum in.
    Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.`,
    },
    {
      name: 'Decisions Made for Users',
      description: ` Nulla rhoncus ante vel maximus fringilla. Duis
    imperdiet scelerisque magna, a convallis mauris condimentum in.
    Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.`,
    },
  ];
  return (
    <div>
      {variableHighlights.map((highlight) => {
        return (
          <div>
            <div className='w-full m-auto mt-2 sm:w-2/3 border-2 rounded p-2'>
              <div className='text-lg leading-8 font-bold'>
                {highlight.name}
              </div>
              {highlight.description}
            </div>
          </div>
        );
      })}
      <div className='m-4'>
        <Link
          className=' m-auto border-2 rounded p-2 hover:text-gray-400'
          href='#'
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Variables;
