import styled from 'styled-components';

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 280px));
  grid-gap: ${({ theme }) => theme.spacing(6)};
  justify-content: center;
`;

export const GridItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 250px;
  border: 1px solid gray;
  border-radius: 7px;
  overflow: hidden;
  padding: 10px;
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: white;
  border: 4px solid black;
  border-radius: 8px};
  overflow: hidden;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 7px;
`;
