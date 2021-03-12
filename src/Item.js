import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 120px;
  height: 150px;
  margin: 2.5px;
  padding: 12.5px 5px;

  background: #e0ffeb99;

  :nth-child(even) {
    background: #e0f4ff75;
  }
`;

export const Img = styled.img`
  width: 70px;
`;

export const Strong = styled.strong`
  padding: 0 10px;

  color: #181818;
  font-size: 0.9rem;
  font-family: 'Sen';

  text-align: center;
  text-shadow: 1px 1px 2px #18181825;
  cursor: pointer;
`;

export const Title = styled.h1`
  width: 400px;
  margin: 20px 0 40px;
  color: #181818;

  font-size: 1.6rem;
  font-weight: bolder;
  font-family: 'Cormorant';
  text-transform: uppercase;
`;

export const FooterTitle = styled(Title)`
  background: transparent;
  color: #18181840;
  font-size: 1.25rem;

  &:hover {
    color: black;
    text-shadow: 0 0 1px #fff;
    cursor: pointer;
  }
`;
