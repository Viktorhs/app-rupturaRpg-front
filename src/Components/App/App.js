import { GlobalStyle, Reset } from '../../Common/globalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from '../LoginPage/LoginPage';
import { RegisterPage } from '../LoginPage/RegisterPage';
import { SheetList } from '../SheetList/SheetList';
import Dashboard from '../Dashboard/dashboard';

function App() {
  return (
		<>
			<Reset />
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage/>} />
          			<Route path="/sign-up" element={<RegisterPage/>} />
					  <Route
						path="/dashboard"
						element={
							<Dashboard />
						}
						>
							<Route path="sheets" element={<SheetList/>} />
							<Route path="dice" element={<SheetList/>} />
							<Route path="history" element={<SheetList/>} />
              			</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
