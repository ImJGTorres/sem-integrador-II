import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ background: 'linear-gradient(to right, #434343, #000)', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;