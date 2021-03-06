import React from 'react';
import graphs from '../data/visualizePageResources';

function Visualize() {
  return (
    <>
      <div class='grid grid-cols-1 md:grid-cols-2 gap-8 m-8'>
        {graphs.map((graph) => {
          return (
            <div className='max-w-md rounded bg-gray-100 overflow-hidden shadow-lg m-auto'>
              <div className='text-center px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{graph.title}</div>
              </div>
              <img className='w-full' src={graph.image} alt={graph.type} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Visualize;
