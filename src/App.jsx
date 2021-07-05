import GlobalStyles from './styles/globalStyle';
import AOS from 'aos';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  AOS.init();
  return (
    <>
      <Header />
      <Main />
      <Footer />
      <GlobalStyles />
    </>
  );
}

export default App;
