import { useEffect, useState } from 'react';
import { FooterTitle } from './Item';
import CardList from './CardList';

import Header from './Header';

const App = function App() {
  const [heroes, setHeros] = useState([]);

  useEffect(() => {
    fetch('https://api.mocki.io/v1/9683fc1f')
      .then((result) => result.json())
      .then((data) => setHeros(data));
  }, []);

  return (
    <>
      <Header />
      <CardList heroes={heroes} />
      <FooterTitle>Stay hungry, stay foolish</FooterTitle>
    </>
  );
};

export default App;
