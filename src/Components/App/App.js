import { GlobalStyle, Reset } from '../../Common/globalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginPage } from '../LoginPage/LoginPage';
import { RegisterPage } from '../LoginPage/RegisterPage';

function App() {
  return (
		<>
			<Reset />
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginPage/>} />
          <Route path="/sign-up" element={<RegisterPage/>} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
