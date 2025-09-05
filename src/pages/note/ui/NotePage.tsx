import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, Container, Typography } from '@mui/material';
import type { JSX } from 'react';

import { text } from '@/shared/config/texts';
import { type CREATE, EDIT } from '@/shared/constants';
import { NoteForm } from '@/widgets/note-form';

import styles from './notepage.module.css';

export interface INotePageProps {
  mode: typeof CREATE | typeof EDIT;
}

export function NotePage({ mode }: INotePageProps): JSX.Element {
  return (
    <Container component='section' maxWidth='md' className={styles.wrapper}>
      <Typography
        component='h2'
        variant='h3'
        sx={{
          fontSize: { xs: '20px', sm: '28px', md: '32px' },
        }}
      >
        {text.note_page[mode].title}
      </Typography>
      <NoteForm />
      <Box className={styles.btns}>
        <Button variant='contained' color='success'>
          {text.note_page[mode].button.submit}
        </Button>
        {mode === EDIT && (
          <Button variant='contained' color='error' startIcon={<DeleteIcon />}>
            {text.note_page[mode].button.delete}
          </Button>
        )}
      </Box>
    </Container>
  );
}
