import type { JSX } from '@emotion/react/jsx-runtime';
import { Container } from '@mui/material';

import { NotesList } from '@/widgets/notes-list';

export function HomePage(): JSX.Element {
  return (
    <Container
      component='section'
      maxWidth='xl'
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginBlock: '40px',
      }}
    >
      <NotesList />
    </Container>
  );
}
