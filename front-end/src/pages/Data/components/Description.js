import { Link } from '@components';

const Description = () => {
  return (
    <div>
      <div className='w-full m-auto mt-2 text sm:w-2/3 border-2 rounded p-2'>
        <div className='text-lg leading-8 font-bold'>
          What is the dataset about?
        </div>
        Aenean ut ante ligula. Fusce at eros consectetur, dignissim dolor
        pretium, laoreet purus. Donec tristique tortor non laoreet fermentum.
        Etiam non tempus nisl. Nulla rhoncus ante vel maximus fringilla. Duis
        imperdiet scelerisque magna, a convallis mauris condimentum in.
        Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.
      </div>
      <div className='w-full m-auto mt-2 text sm:w-2/3 border-2 rounded p-2'>
        <div>
          <b>People:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </div>
        <div>
          <b>Time:</b> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div>
          <b>Objects:</b> Lorem ipsum dolor sit amet, consectetur adipiscing
          elit.
        </div>
      </div>

      <div className='mt-4'>
        <Link
          className=' text-lg  m-auto border-2 rounded p-2 hover:text-gray-400'
          href='#'
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Description;
