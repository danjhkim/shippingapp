import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
	//disabled strict mode due to react-modal incompatibility issues
	// refer to: https://github.com/reactjs/react-modal/issues/808
	<Provider store={store}>
		{/* <React.StrictMode> */}
		<App />
		{/* </React.StrictMode> */}
	</Provider>,
);

reportWebVitals();
