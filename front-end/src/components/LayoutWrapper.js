import NavBar from './NavBar';
import Footer from './Footer';
import FloatingFAQ from './FloatingFAQ';

const LayoutWrapper = ({ children }) => {
  return (
    <>
      <div className='flex flex-col justify-between w-full h-screen'>
        <NavBar isFixed={false} />
        <main className='px-4 sm:px-6 xl:px-8 2xl:mx-32 mb-auto'>
          {children}
        </main>
        <Footer />
      </div>
      <FloatingFAQ />
    </>
  );
};

export default LayoutWrapper;
