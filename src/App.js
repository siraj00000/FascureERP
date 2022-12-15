import React, { Suspense } from 'react';
import { lazily } from 'react-lazily';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import { MainSplash } from './components/Splash';
import { useStateContext } from './context/ContextProvider';

const { // Receiveables
  SalesOrder, Customers, Product, Invoice, DeliveryNote, Receipt, Slave, Supplier,
  // Payables
  NumberSequence, PurchaseOrder,
  // WareHouse
  WareHouse,
  // Settings
  Currency, ConfigVAT, Address, BankAccount, PaymentMethod, PaymentTerms, CompanySettings,
  Language, Country,
  // Other
  Category, Request, RequestDetail, TermApplied, TermsConditions, UnitType, Unit,
  // extras
  Orders, Employees, Ecommerce,
  // Auth
  Login, Register,
  // Dashboard
  Dashboard
} = lazily(() => import('./pages'));


const App = () => {
  const { token } = useStateContext();
  return (
    <Suspense fallback={<MainSplash />}>
      <BrowserRouter>
        <Routes>
          {/* Admin Panel */}
          <Route path='/' element={PrivateRoute(token, <Dashboard />, "/login")}>
            {/* Dashboard */}
            <Route index element={<Ecommerce />} />

            {/* Pages */}
            <Route path='/orders' element={<Orders />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/employees' element={<Employees />} />

            {/* Receiveables */}
            <Route path='/sales-order' element={<SalesOrder />} />
            <Route path='/customer' element={<Customers />} />
            <Route path='/product' element={<Product />} />
            <Route path='/invoice' element={<Invoice />} />
            <Route path='/delivery-note' element={<DeliveryNote />} />
            <Route path='/receipt' element={<Receipt />} />
            <Route path='/slave' element={<Slave />} />
            <Route path='/supplier' element={<Supplier />} />

            {/* Payables */}
            <Route path='/number-sequence' element={<NumberSequence />} />
            <Route path='/purchase-order' element={<PurchaseOrder />} />

            {/* Ware House */}
            <Route path='/warehouse' element={<WareHouse />} />

            {/* Settings */}
            <Route path='/company-settings' element={<CompanySettings />} />
            <Route path='/currency' element={<Currency />} />
            <Route path='/vat-config' element={<ConfigVAT />} />
            <Route path='/address' element={<Address />} />
            <Route path='/bank-account' element={<BankAccount />} />
            <Route path='/payment-method' element={<PaymentMethod />} />
            <Route path='/payment-terms' element={<PaymentTerms />} />
            <Route path='/language' element={<Language />} />
            <Route path='/country' element={<Country />} />

            {/* Other */}
            <Route path='/category' element={<Category />} />
            <Route path='/request' element={<Request />} />
            <Route path='/req-detail' element={<RequestDetail />} />
            <Route path='/term-condition' element={<TermsConditions />} />
            <Route path='/term-applied' element={<TermApplied />} />
            <Route path='/unit-type' element={<UnitType />} />
            <Route path='/unit' element={<Unit />} />
          </Route>

          <Route path='/login' element={PrivateRoute(!token, <Login />, "/")} />
          <Route path='/register' element={PrivateRoute(!token, <Register />, "/")} />
        </Routes>
      </BrowserRouter>
    </Suspense >
  );
};

const PrivateRoute = (auth, children, path) => {
  return auth ? children : <Navigate to={path} />;
};

export default App;