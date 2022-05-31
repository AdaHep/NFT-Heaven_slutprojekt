import { CSSProperties, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutPage from "../pages/CheckoutPage";
import CheckoutPageDetails from "../pages/CheckoutPageDetails";
import StartPage from "../pages/Startpage";
import LogInPage from "../pages/LogInPage";
import CartModal from "./CartModal";
import Header from "./Header";
import { DeliveryDataInfoObject } from "../data/collections/deliveryData";
import { CartProvider } from "./context/CartContext";
import { ProductProvider } from "./context/ProductContext";
import PurchaseComplete from "../pages/PurchaseComplete";
import PaymentPage from "../pages/PaymentPage";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import ProductPage from "../pages/ProductPage";
import { UserProvider } from "./context/LoginContext";
import CategoryPages from "../pages/CategoryPages";
import AdminOrderPage from "../pages/Admin/AdminOrderPage";
import AdminPage from "../pages/Admin/AdminPage";
import AdminProductPage from "../pages/Admin/AdminProductPage";
import AdminOrderProvider from "./context/AdminOrderContext";

function Layout() {
  const [modalState, setModalState] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState(DeliveryDataInfoObject);
  const [finalTotalSum, setFinalTotalSum] = useState<number>(1);

  return (
    <div>
      <UserProvider>
        <CartProvider>
          <ProductProvider>
            <AdminOrderProvider>
            <BrowserRouter>
              <Header
                modalState={modalState}
                setModalState={setModalState}
                searchBarFocused={searchFocused}
                searchBarFocusOut={() => setSearchFocused(false)}
              />
              <CartModal
                modalState={modalState}
                setModalState={setModalState}
              />
              <div style={rootStyle}>
                <Routes>
                  <Route path="/" element={<StartPage />} />
                  <Route
                    path="/products/category/:category"
                    element={<CategoryPages />}
                  />
                  <Route path="/LogInPage" element={<LogInPage />} />
                  <Route path="/products" element={<ProductPage />} />
                  <Route path="/admin" element={<AdminPage />} />
                  <Route path="/adminOrderPage" element={<AdminOrderPage />} />
                  <Route
                    path="/adminProductPage"
                    element={<AdminProductPage />}
                  />

                  <Route path="/LogInPage" element={<LogInPage />} />

                  <Route
                    path="/"
                    element={
                      <StartPage focusHeader={() => setSearchFocused(true)} />
                    }
                  />
                  <Route path="/Checkout" element={<CheckoutPage />} />
                  <Route
                    path="/CheckoutDetails"
                    element={
                      <CheckoutPageDetails
                        deliveryInfo={deliveryInfo}
                        setDeliveryInfo={setDeliveryInfo}
                      />
                    }
                  />
                  <Route
                    path="/PaymentPage"
                    element={
                      <PaymentPage
                        deliveryInfo={deliveryInfo}
                        setDeliveryInfo={setDeliveryInfo}
                        finalTotalSum={finalTotalSum}
                        setFinalTotalSum={setFinalTotalSum}
                      />
                    }
                  />

                  <Route
                    path="/PurchaseComplete"
                    element={
                      <PurchaseComplete
                        deliveryInfo={deliveryInfo}
                        finalTotalSum={finalTotalSum}
                      />
                    }
                  />
                </Routes>
                <Footer />
              </div>
              <ToastContainer />
            </BrowserRouter>
            </AdminOrderProvider>
          </ProductProvider>
        </CartProvider>
      </UserProvider>
    </div>
  );
}

const rootStyle: CSSProperties = {
  maxWidth: "1410px",
  display: "block",
  margin: "0 auto",
  marginTop: "2rem",
  color: "white",
};

export default Layout;
