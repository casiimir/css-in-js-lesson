import { Item, Img, Strong, Title } from './Item';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin: 50px 0 0;
`;

function repeatTimes(list, numTimes) {
  const value = [];
  for (let times = 0; times <= numTimes; times = times + 1) {
    for (let el of list) {
      value.push(el);
    }
  }
  return value.sort(() => 0.5 - Math.random());
}

export default function CardList({ heroes }) {
  return (
    <List>
      <Title>The solution for every developer</Title>
      {heroes &&
        repeatTimes(heroes, 5).map((hero) => (
          <Item name={hero.name} img={hero.img} key={hero.img + Math.random()}>
            <Img src={hero.img} alt={hero.name} />
            <Strong>{hero.name}</Strong>
          </Item>
        ))}
    </List>
  );
}
