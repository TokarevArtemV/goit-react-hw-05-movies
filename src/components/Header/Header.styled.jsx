import styled from 'styled-components';

export const Header = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: ${({ theme }) => theme.spacing(2)};
  margin-bottom: 16px;
  border-bottom: 1px solid black;
  background-color: aliceblue;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
export const Logo = styled.p`
  font-weight: 700;
  margin: 0;
  margin-left: auto;
`;
