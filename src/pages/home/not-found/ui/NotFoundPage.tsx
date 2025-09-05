import { Container, Typography } from '@mui/material';
import type { JSX } from 'react';

import { text } from '@/shared/config/texts';

import styles from './notfoundpage.module.css';

export function NotFoundPage(): JSX.Element {
  return (
    <Container className={styles.wrapper}>
      <Typography variant='h1' component='h2'>
        {text.notfound_page.status}
      </Typography>
      <Typography variant='h3' component='h1'>
        {text.notfound_page.title}
      </Typography>
    </Container>
  );
}
