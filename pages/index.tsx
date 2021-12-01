import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import BasicTabs from '../components/Header';
import Footer from '../components/Footer';
import { Button, Container, Stack } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Home: NextPage = () => {
  const instance = axios.create({
    baseURL: 'https://3.18.104.128:5000',
  });
  return (
    <Container fixed>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
        />
      </Head>
      <BasicTabs />
      <Stack spacing={2}>
        <section
          style={{ height: '100px', width: '100%', border: 'solid 1px #000' }}
        >
          암호화페 키워드
        </section>
        <section
          style={{ height: '100px', width: '100%', border: 'solid 1px #000' }}
        >
          해외주식 키워드
        </section>
        <section
          className={styles.bitCoinCart}
        >
          비트코인
          <Doughnut
            data={{
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [
                {
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                  ],
                  borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)',
                  ],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </section>
        <section
          style={{ height: '100px', width: '100%', border: 'solid 1px #000' }}
        >
          텍스트 감성 분석 차트
        </section>
        <section
          style={{ height: '400px', width: '100%', border: 'solid 1px #000' }}
        >
          뉴스
        </section>
        <Button
          onClick={async () => {
            try {
              const data = await instance.get('/bit/sample');
              console.log(data);
            } catch (err) {
              console.log('err:', err);
            }
          }}
        >
          getApis
        </Button>
      </Stack>
      <Footer />
    </Container>
  );
};

export default Home;
