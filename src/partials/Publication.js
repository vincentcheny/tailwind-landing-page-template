import React from 'react';

function Publication() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 id="publication" className="h2 mb-4">Publication</h2>
            <p className="text-xl text-gray-600" data-aos="zoom-y-out">[SIGMOD 2021] Top-K Deep Video Analytics: A Probabilistic Approach <i><a href="https://arxiv.org/abs/2003.00773">[arxiv]</a></i></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Publication;