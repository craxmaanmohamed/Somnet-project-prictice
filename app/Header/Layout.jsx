import Footer from "../Footer/page";
import Header from "./page";


const Layout = ({ children }) => {
  return (
    <div>
     <Header/>
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
