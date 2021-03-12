import styled from 'styled-components';
import { Title } from './Item';
import icon from './terminal.png';

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 50px;

  border-bottom: 2px solid #18181820;
`;

const HeaderTitle = styled(Title)`
  margin: 20px 0 0 0;
  font-size: 1rem;
`;

const Img = styled.img`
  width: 32px;
  height: 32px;
`;

export default function Header() {
  return (
    <Navbar>
      <HeaderTitle>By a front end dev.</HeaderTitle>
      <Img src={icon} />
    </Navbar>
  );
}
