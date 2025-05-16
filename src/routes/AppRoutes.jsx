import { Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";

import VisiMisi from "../pages/VisiMisi";
import MainLayout from "../layouts/MainLayout";
import ProductsMentahPage from "../pages/ProductsMentahPage";
import ProductsJadiPage from "../pages/ProductsJadiPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import Testimoni from "../pages/Testimoni";
import AboutUs from "../pages/AboutUs";
import ContactUsPage from "../pages/ContactUsPage";
import Documentations from "../pages/Documentations";

const AppRoutes = () => {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produk-olahan" element={<ProductsJadiPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/produk-mentah" element={<ProductsMentahPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/testimoni" element={<Testimoni />} />
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/documentations" element={<Documentations />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default AppRoutes;
