import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 120px;
  height: 150px;
  margin: 2.5px;
  padding: 2.5px 5px;

  background: #ebeff0;
`;

export const Img = styled.img`
  width: 50%;
`;

export const Strong = styled.strong`
  margin-top: 15px;

  color: #181818;
  font-size: 1rem;
  text-decoration: underline;

  cursor: pointer;
`;

export const Title = styled.h1`
  margin: 20px 0 40px;
  background: #ebeff0;
  color: lightskyblue;
  font-size: 2.3rem;
  font-weight: bolder;

  text-shadow: -1px 2px 2px #fff;
`;

export const FooterTitle = styled(Title)`
  background: transparent;
  color: lightskyblue;

  font-size: 1.25rem;
  text-align: right;

  &:hover {
    color: black;
    text-shadow: 0 0 1px #fff;
    cursor: pointer;
  }
`;
