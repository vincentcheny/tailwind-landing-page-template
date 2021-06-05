import React from 'react';

function FeaturesBlocks() {
  
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">People</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="w-16 h-16 p-1 -mt-1 mb-2" src={require('../images/user.svg').default} width="64" height="64" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Ziliang Lai</h4>
              <p className="text-gray-600 text-center">HK PhD Fellowship 2019 awardee<br/>Area: Blockchain</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="w-16 h-16 p-1 -mt-1 mb-2" src={require('../images/user.svg').default} width="64" height="64" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Chenxia Han</h4>
              <p className="text-gray-600 text-center">Ph.D. student<br/>Area: Video Analytics</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="w-16 h-16 p-1 -mt-1 mb-2" src={require('../images/user.svg').default} width="64" height="64" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Pengfei Zhang</h4>
              <p className="text-gray-600 text-center">Ph.D. student<br/>Area: System Machine Learning</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="w-16 h-16 p-1 -mt-1 mb-2" src={require('../images/user.svg').default} width="64" height="64" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Chris Liu</h4>
              <p className="text-gray-600 text-center">Research associate</p>
            </div>

            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl">
              <img className="w-16 h-16 p-1 -mt-1 mb-2" src={require('../images/user.svg').default} width="64" height="64" />
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Ben Kao</h4>
              <p className="text-gray-600 text-center">Associate professor</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FeaturesBlocks;
