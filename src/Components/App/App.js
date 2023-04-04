import { GlobalStyle, Reset } from '../../Common/globalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from '../LoginPage/LoginPage';
import { RegisterPage } from '../LoginPage/RegisterPage';
import { SheetList } from '../SheetList/SheetList';
import Dashboard from '../Dashboard/dashboard';
import PrivatePage from '../privatePage/privatepage';
import { WorkInProgress } from '../workInProgress';
import { Sheet } from '../Sheet/Sheet';

function App() {
  return (
		<>
			<Reset />
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/sign-in" element={<LoginPage/>} />
          			<Route path="/sign-up" element={<RegisterPage/>} />
					<Route
						path="/"
						element={
							<PrivatePage>
								<Dashboard />
							</PrivatePage>
							
						}
						>
						<Route path="sheets" 
						element={
							<PrivatePage>
								<SheetList/>
							</PrivatePage>
						} />
						<Route path="dice" element={
							<PrivatePage>
								<WorkInProgress/>
							</PrivatePage>
						} />
						<Route path="history" element={
							<PrivatePage>
								<WorkInProgress/>
							</PrivatePage>
						} />
					</Route>
					<Route
						path="/sheet"
						element={
							<PrivatePage>
								<Dashboard />
							</PrivatePage>
							
						}
						>
						<Route path=":sheetId" element={
							<PrivatePage>
									<Sheet/>
								</PrivatePage>
							} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
