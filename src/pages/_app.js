import '../styles/globals.scss';
import { useRouter } from 'next/router';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import Menu from '../components/Menu';

function App({ Component, pageProps }) {
	const router = useRouter();

  return (
	< >	
	<Menu/>
	  <SwitchTransition mode="out-in">
		 <CSSTransition key={router.pathname} timeout={300} classNames="page" >
			 <Component {...pageProps} />
		  </CSSTransition>
	  </SwitchTransition>
	</>
  );
}

export default App;
