import '../styles/globals.scss';
import Menu from '../components/Menu';

function App({ Component, pageProps }) {
  return (
	<>	
	  <Menu />

	  <div className="app-background">
	  <Component {...pageProps} />
	  </div>
	</>
  );
}

export default App;
