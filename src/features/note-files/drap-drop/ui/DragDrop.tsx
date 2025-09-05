import { Box, Chip, Tooltip } from '@mui/material';
import type { JSX } from 'react';

import { text } from '@/shared/config/texts';
import { formatFileSize } from '@/shared/utils';

import { type IFileUploadResult } from '../../hooks/useFileUpload';

import styles from './dragdrop.module.css';

type DrapDropProps = Pick<
  IFileUploadResult,
  | 'file'
  | 'fileLoaderRef'
  | 'isDragActive'
  | 'handlePreviewFile'
  | 'handleDragActive'
  | 'handleDragInactive'
  | 'handleDropFile'
  | 'handleAddFile'
  | 'handleDeleteFile'
>;

export function DragDrop({
  file,
  isDragActive,
  fileLoaderRef,
  handlePreviewFile,
  handleDragActive,
  handleDragInactive,
  handleDropFile,
  handleAddFile,
  handleDeleteFile,
}: DrapDropProps): JSX.Element {
  return (
    <Box className={styles.wrapper}>
      <Box
        className={`${styles.upload} ${isDragActive && styles.activeUpload}`}
        onDragEnter={handleDragActive}
        onDragOver={handleDragActive}
        onDragLeave={handleDragInactive}
        onDrop={handleDropFile}
      >
        <span>{text.note_page.general.drag_drop_label}</span>
        <span>{text.note_page.general.drag_drop_or}</span>
        <label className={styles.label} htmlFor='upload-files'>
          <span>{text.note_page.general.upload_btn_label}</span>
          <input
            ref={fileLoaderRef}
            id='upload-files'
            type='file'
            accept='.jpg, .jpeg, .png'
            onChange={handleAddFile}
          />
        </label>
      </Box>
      {file && (
        <Tooltip title={text.note_page.general.file_chip_label}>
          <Chip
            component='button'
            label={`${file.name} (${formatFileSize(file.size)})`}
            onDelete={handleDeleteFile}
            onClick={handlePreviewFile}
          />
        </Tooltip>
      )}
    </Box>
  );
}
