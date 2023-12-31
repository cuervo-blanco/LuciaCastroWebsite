import '../styles/globals.scss';
import Menu from './pages/Menu';

function App({ Component, pageProps }) {
  return (
	<>		
	  <Menu />
	  <Component {...pageprops} />
	</>
  );
}

export default App;
