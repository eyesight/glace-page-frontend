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
import { AnimatePresence } from 'framer-motion';

export default class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<AnimatePresence>
						<Routes key={'route-key'}>
							<Route key={'page-1'} path='/' element={<DefaultPageSkeleton />}>
								<Route key={'page-2'} path='/' element={<ReceiptsPage />}></Route>
								<Route key={'page-3'} path='receipt' element={<ReceiptsPage />}></Route>
								<Route key={'page-4'} path='category/:id' element={<ReceiptsPage />}></Route>
								<Route key={'page-5'} path='receipt/:id' element={<ReceiptDetailPage />}></Route>
								<Route key={'page-6'} path='collection/:id' element={<CollectionsPage />}></Route>
								<Route key={'page-7'} path='info/:id' element={<InfoPage />}></Route>
								<Route key={'page-8'} path='*' element={<The404Page />}></Route>
							</Route>
						</Routes>
					</AnimatePresence>
				</BrowserRouter>
			</Provider>
		);
	}
}
