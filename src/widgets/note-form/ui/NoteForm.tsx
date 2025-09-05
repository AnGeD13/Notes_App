import { Card, CardContent, TextField } from '@mui/material';
import type { JSX } from 'react';

import { useFileUpload } from '@/features/note-files';
import { FileDialog } from '@/features/note-files/dialog';
import { DragDrop } from '@/features/note-files/drap-drop';
import { text } from '@/shared/config/texts';

import styles from './noteform.module.css';

export function NoteForm(): JSX.Element {
  const {
    file,
    fileLoaderRef,
    isDragActive,
    isFileOpen,
    setIsFileOpen,
    handlePreviewFile,
    handleDragActive,
    handleDragInactive,
    handleDropFile,
    handleAddFile,
    handleDeleteFile,
  } = useFileUpload();

  return (
    <Card>
      <CardContent className={styles.wrapper} component='form'>
        <TextField
          id='title'
          required
          label={text.note_page.general.title_label}
          variant='standard'
          className={styles.input}
        />
        <TextField
          id='description'
          label={text.note_page.general.description_label}
          multiline
          rows={4}
          className={styles.input}
        />
        <DragDrop
          file={file}
          isDragActive={isDragActive}
          fileLoaderRef={fileLoaderRef}
          handlePreviewFile={handlePreviewFile}
          handleDragActive={handleDragActive}
          handleDragInactive={handleDragInactive}
          handleDropFile={handleDropFile}
          handleAddFile={handleAddFile}
          handleDeleteFile={handleDeleteFile}
        />

        <FileDialog
          file={file}
          isFileOpen={isFileOpen}
          setIsFileOpen={setIsFileOpen}
        />
      </CardContent>
    </Card>
  );
}
