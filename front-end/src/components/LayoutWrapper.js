import SectionContainer from './SectionContainer';
import NavBar from './NavBar';
import Footer from './Footer';

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className='flex flex-col justify-between h-screen'>
        <NavBar />
        <main className='mb-auto'>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
