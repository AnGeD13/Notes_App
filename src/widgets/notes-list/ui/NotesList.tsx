import { Grid } from '@mui/material';
import type { JSX } from 'react';

import { NoteCard } from '@/features/note-card';

import { fakeNotes } from '../model/data';

export function NotesList(): JSX.Element {
  const notes = fakeNotes;

  const renderNotes = (): JSX.Element[] => {
    return notes.map(item => <NoteCard note={item} key={item.id} />);
  };

  return (
    <Grid container spacing={6} component='ul'>
      {renderNotes()}
    </Grid>
  );
}
