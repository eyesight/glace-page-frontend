import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReceiptsPageContainer from "../containers/ReceiptsPageContainer";
import store from '../store/store';
import DefaultPageSkeleton from "./_pages/DefaultPageSkeleton";
import ReceiptsDetailPageContainer from '../containers/ReceiptsDetailPageContainer';
import The404Page from './_pages/The404Page';

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DefaultPageSkeleton />}>
              <Route path="/" element={<ReceiptsPageContainer />}></Route>
              <Route path="receipt" element={<ReceiptsPageContainer />}></Route>
              <Route path="receipt/:id" element={<ReceiptsDetailPageContainer />}></Route>
              <Route path="*" element={<The404Page />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}
