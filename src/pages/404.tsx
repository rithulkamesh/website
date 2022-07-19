import React from 'react';
import Footer from '../components/footer';
import Nav from '../components/nav';
import TitleSection from '../components/TitleSection';

const page_404 : React.FC = () => {
  return (
    <div>
      <div className="flex flex-col pb-5">
      <Nav />
      <TitleSection bgColor='#9fa8da'>
        <div className="flex justify-center items-center h-70 flex-col">
          <h1 className="font-bold text-4xl py-4">404: Not Found</h1>
          <a href='/' className='text-xl underline'>Go Back Home</a>
        </div>
      </TitleSection>
      </div>
      <Footer />
    </div>
  )
}

export default page_404;