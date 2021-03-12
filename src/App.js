import { useEffect, useState } from 'react';
import { Item, Img, Strong, Title, FooterTitle } from './Item';
import styled from 'styled-components';

function repeatTimes(list, numTimes) {
  const value = [];
  for (let times = 0; times <= numTimes; times = times + 1) {
    for (let el of list) {
      value.push(el);
    }
  }
  return value.sort(() => 0.5 - Math.random());
}

const CardList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
          repeatTimes(heroes, 5).map((hero) => (
            <Item
              name={hero.name}
              img={hero.img}
              key={hero.img + Math.random()}
            >
              <Img src={hero.img} alt={hero.name} />
              <Strong>{hero.name}</Strong>
            </Item>
          ))}
      </CardList>
      <FooterTitle>Stay hungry, stay foolish</FooterTitle>
    </>
  );
};

export default App;
