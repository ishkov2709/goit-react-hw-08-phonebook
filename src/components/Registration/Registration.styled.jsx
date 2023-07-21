import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const Form = styled.form`
  width: 400px;

  margin: 0 auto;
  padding: 20px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Btn = styled(Button)`
  background-color: #1156d6;
  color: #ffffff;

  &:hover {
    background-color: #0f3c8f;
    color: #ffffff;
  }
`;
