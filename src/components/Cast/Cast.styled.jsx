import { theme } from 'components/styles/theme';
import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  width: 120px;
`;
