import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsappFloatingButton from "../components/WhatsappFloatingButton";

const MainLayout = ({ children }) => {
  return (
    <div className="font-inter">
      <div className="relative z-50">
        <Navbar />
      </div>
<WhatsappFloatingButton></WhatsappFloatingButton>
      <main className="pt-32 md:pt-20">{children}</main>
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
