import type { JSX } from '@emotion/react/jsx-runtime';
import { Grid, Card, CardContent, Typography } from '@mui/material';

import type { INoteCardProps } from '../model';

export function NoteCard({ note }: INoteCardProps): JSX.Element {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }} component='li'>
      <Card
        component='article'
        key={note.id}
        sx={{
          height: '100%',
        }}
      >
        <CardContent>
          <Typography component='h2' fontSize={20} fontWeight={700}>
            {note.title}
          </Typography>
          <Typography variant='body1'>{note.description}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
