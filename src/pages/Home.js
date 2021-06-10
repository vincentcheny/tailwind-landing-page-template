import React from 'react';

import Header from '../partials/Header';
import Title from '../partials/Title';
import About from '../partials/About';
import People from '../partials/People';
import Publication from '../partials/Publication';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <Title />
        <About />
        <People />
        <Publication />
        {/* <Newsletter /> */}

      </main>

      {/*  Site footer */}
      {/* <Footer /> */}

    </div>
  );
}

export default Home;