import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import type { JSX } from 'react';
import { Link } from 'react-router-dom';

import data from '@/shared/config/texts/ru.json';
import { formatFullDate } from '@/shared/utils';

import type { INoteCardProps } from '../model';

import styles from './notecard.module.css';

export function NoteCard({ note }: INoteCardProps): JSX.Element {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} component='li'>
      <Link to={`/edit/${note.id}`}>
        <Card component='article' key={note.id} className={styles.card}>
          <CardContent className={styles.content}>
            <Box>
              <Typography
                component='h2'
                fontSize={20}
                fontWeight={700}
                className={styles.title}
              >
                {note.title}
              </Typography>
              <Typography variant='body1' className={styles.description}>
                {note.description}
              </Typography>
            </Box>
            <Box className={styles.date}>
              <Typography variant='caption' color='textSecondary'>
                {data.note.createdAt}: {formatFullDate(note.createdAt)}
              </Typography>
              <Typography variant='caption' color='textSecondary'>
                {data.note.updatedAt}: {formatFullDate(note.updatedAt)}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}
