import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageContainer from "../containers/HomePageContainer";
import store from '../store/store';
import ReceiptPage from './_pages/ReceiptPage';
import The404Page from './_pages/The404Page';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePageContainer />}></Route>
            <Route path="/receipt" element={<ReceiptPage />}>
              <Route path=":id" element={<ReceiptPage />}></Route>
            </Route>
            <Route path="*" element={<The404Page />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}
