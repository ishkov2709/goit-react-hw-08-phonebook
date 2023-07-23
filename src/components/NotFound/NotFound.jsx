import ReportIcon from '@mui/icons-material/Report';
import { Text, Wrapper } from './NotFound.styled';

const NotFound = () => {
  return (
    <>
      <Wrapper>
        <ReportIcon fontSize="large" sx={{ color: '#ec3a0d' }} />
        <Text variant="h5" component="p">
          Page not found
        </Text>
      </Wrapper>
    </>
  );
};

export default NotFound;
