import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Model from './Model';

function Title() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:pt-40">
        <div className="pt-12 md:pt-20">
          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">

            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-40" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Everest</span></h1>
                <p className="text-xl text-gray-600">An efficient Top-K deep video analytic system</p>
              </div>
            </div>

            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="zoom-y-out">
              <div className="relative flex flex-col text-center lg:text-right" style={{ position: "relative", width: 700, height: 700 }}>
                <Canvas
                  camera={{
                    position: [1,1,1],
                    zoom: 2,
                  }}
                >
                  <pointLight position={[-10, -10, -10]} intensity={2.5}/>
                  <Suspense fallback={null}>
                    <Model />
                  </Suspense>
                </Canvas>
              </div>
            </div >
          </div >
        </div >
      </div >
    </section>
  );
}

export default Title;