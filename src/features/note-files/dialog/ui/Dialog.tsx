import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import type { JSX } from 'react';

import { text } from '@/shared/config/texts';

import type { IFileUploadResult } from '../../hooks/useFileUpload';

import styles from './dialog.module.css';

type FileDialogProps = Pick<
  IFileUploadResult,
  'file' | 'isFileOpen' | 'setIsFileOpen'
>;

export function FileDialog({
  file,
  isFileOpen,
  setIsFileOpen,
}: FileDialogProps): JSX.Element {
  const handleCloseDialog = (): void => {
    setIsFileOpen(false);
  };

  return (
    <Dialog open={isFileOpen} onClose={handleCloseDialog}>
      <IconButton onClick={handleCloseDialog}>
        <CloseIcon
          className={styles.close}
          tabIndex={0}
          aria-label={text.dialog.button.close}
        />
      </IconButton>
      <DialogContent className={styles.content}>
        <img alt='' src={file?.url} className={styles.previewImg} />
      </DialogContent>
    </Dialog>
  );
}
