import { useEffect, useState } from 'react';
import { Item, Img, Strong, Title } from './Item';
import styled from 'styled-components';

const CardList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  padding: 0 20px;
`;

const App = function App() {
  const [heroes, setHeros] = useState([]);

  useEffect(() => {
    fetch('https://api.mocki.io/v1/9683fc1f')
      .then((result) => result.json())
      .then((data) => setHeros(data));
  }, []);

  return (
    <>
      <Title>The solution for every developer</Title>
      <CardList>
        {heroes &&
          heroes.map((hero) => (
            <Item name={hero.name} img={hero.img} key={hero.img}>
              <Img src={hero.img} alt={hero.name} />
              <Strong>{hero.name}</Strong>
            </Item>
          ))}
      </CardList>
    </>
  );
};

export default App;
