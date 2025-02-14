import React from 'react';

function Design() {
  return (
    <div className="p-10 bg-gray-100 flex flex-col justify-center items-center">
        <p className='p-9 text-4xl w-full border-b-4 rounded-b-md text-center mb-7'>Popular Designs</p>
      <div className="flex flex-wrap gap-10 justify-center">
        {[...Array(12)].map((_, index) => (
          <div
            key={index}
            className=" shadow-gray-400 rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <img
              src="https://graphicdesignjunction.com/wp-content/uploads/2020/08/best-landing-page-27.jpg"
              alt=""
              className="h-[200px] w-full object-cover"
            />
            
          </div>
        ))}
      </div>

      <button className='m-[60px] bg-gray-300 p-5 px-10 rounded-full'>View More</button>
    </div>
  );
}

export default Design;
