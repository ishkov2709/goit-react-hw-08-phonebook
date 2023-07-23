import { Grid, Typography } from '@mui/material';
import { styled } from 'styled-components';

export const List = styled.ul`
  width: 60%;

  display: flex;
  flex-direction: column;
  gap: 10px;

  padding: 0;
  margin: 0 auto;
`;

export const EmptyWrapper = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const EmptyInfo = styled(Typography)`
  padding: 20px 0;

  color: #535353;
`;

export const AccentText = styled.span`
  color: #000000;
`;
