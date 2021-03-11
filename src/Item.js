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

  color: #181818;
  font-size: 2.3rem;
  text-align: center;
  font-weight: bolder;
`;
