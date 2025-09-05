import { Container } from '@mui/material';
import type { JSX } from 'react';

import { NotesList } from '@/widgets/notes-list';

import styles from './homepage.module.css';

export function HomePage(): JSX.Element {
  return (
    <Container component='section' maxWidth='xl' className={styles.page}>
      <NotesList />
    </Container>
  );
}
