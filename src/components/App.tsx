import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from '../store/store';
import DefaultPageSkeleton from './_pages/DefaultPageSkeleton';
import The404Page from './_pages/The404Page';
import ReceiptsPage from './_pages/ReceiptsPage';
import ReceiptDetailPage from './_pages/ReceiptDetailPage';
import CollectionsPage from './_pages/CollectionsPage';
import InfoPage from './_pages/InfoPage';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Routes>
						<Route path='/' element={<DefaultPageSkeleton />}>
							<Route path='/' element={<ReceiptsPage />}></Route>
							<Route path='receipt' element={<ReceiptsPage />}></Route>
							<Route path='category/:id' element={<ReceiptsPage />}></Route>
							<Route path='receipt/:id' element={<ReceiptDetailPage />}></Route>
							<Route path='collection/:id' element={<CollectionsPage />}></Route>
							<Route path='info/:id' element={<InfoPage />}></Route>
							<Route path='*' element={<The404Page />}></Route>
						</Route>
					</Routes>
				</BrowserRouter>
			</Provider>
		);
	}
}
