import React from 'react';
import BasicTabs from '../../components/Header';
import styles from './index.module.scss';
import { Button, Container, Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';

function Dashboard() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <Container fixed>
      <BasicTabs />
      <Stack spacing={2} className={styles.dashboardContainer}>
        <section className={styles.dashboard}>게시판{page}</section>
        <Stack spacing={2}>
          <Pagination
            count={10}
            shape='rounded'
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </Stack>
    </Container>
  );
}

export default Dashboard;
