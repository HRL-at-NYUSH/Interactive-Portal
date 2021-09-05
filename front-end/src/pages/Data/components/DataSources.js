import { Link } from '@components';

const DataSources = () => {
  return (
    <div>
      <div className='w-full m-auto mt-2 text sm:w-2/3 border-2 rounded p-2'>
        <div className='text-lg leading-8 font-bold'>
          Where are the data from?
        </div>
        <div className='m-2'>
          <b>Year: </b>Aenean ut ante ligula. Fusce at eros consectetur,
          dignissim dolor pretium, laoreet purus. Donec tristique tortor non
          laoreet fermentum. Etiam non tempus nisl.
        </div>
        <div className='m-2'>
          <b>Document:</b> Nulla rhoncus ante vel maximus fringilla. Duis
          imperdiet scelerisque magna, a convallis mauris condimentum in.
          Pellentesque ultricies sem ac ante aliquet, a ultricies est aliquet.
        </div>
      </div>
      <div className='w-full m-auto mt-2 text sm:w-2/3 border-2 rounded p-2'>
        <div className='text-lg leading-8 font-bold'>Collection Method</div>
        <div className='m-2'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
          pellentesque mauris, non facilisis turpis. Sed leo tellus, molestie
          vel dignissim ut, congue in lectus. Donec ullamcorper bibendum
          scelerisque. Quisque vitae orci pellentesque, accumsan arcu et, tempus
          diam.
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default DataSources;
