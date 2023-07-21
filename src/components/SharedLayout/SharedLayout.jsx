import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';
import { Container } from '@mui/material';
import { ThreeDots } from 'react-loader-spinner';
import { Suspense } from 'react';

const Loading = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#3869f1"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 0',
      }}
      visible={true}
    />
  );
};

const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Container>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </div>
  );
};

export default SharedLayout;
