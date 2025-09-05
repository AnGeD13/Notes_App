import type {
  ChangeEvent,
  DragEvent,
  Dispatch,
  RefObject,
  SetStateAction,
} from 'react';
import { useRef, useState } from 'react';

import type { Attachment } from '@/entities/note';

export interface IFileUploadResult {
  file: Attachment | null;
  fileLoaderRef: RefObject<HTMLInputElement | null>;
  isDragActive: boolean;
  setFile: Dispatch<SetStateAction<Attachment | null>>;
  isFileOpen: boolean;
  setIsFileOpen: Dispatch<SetStateAction<boolean>>;
  handlePreviewFile: () => void;
  handleDragActive: (event: DragEvent<HTMLDivElement>) => void;
  handleDragInactive: (event: DragEvent<HTMLDivElement>) => void;
  handleDropFile: (event: DragEvent<HTMLDivElement>) => void;
  handleAddFile: (event: ChangeEvent<HTMLInputElement>) => void;
  handleDeleteFile: () => void;
}

export function useFileUpload(): IFileUploadResult {
  const fileLoaderRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<Attachment | null>(null);
  const [isFileOpen, setIsFileOpen] = useState<boolean>(false);
  const [isDragActive, setIsDragActive] = useState<boolean>(false);

  const handlePreviewFile = (): void => {
    setIsFileOpen(true);
  };

  const handleDragActive = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setIsDragActive(true);
  };

  const handleDragInactive = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    setIsDragActive(false);
  };

  const addFile = (currentFile: File): void => {
    const url = URL.createObjectURL(currentFile);
    if (file) {
      handleDeleteFile();
    }
    setFile({
      name: currentFile.name,
      type: currentFile.type,
      size: currentFile.size,
      url: url,
    });
  };

  const handleDropFile = (event: DragEvent<HTMLDivElement>): void => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (files?.[0]) {
      addFile(files[0]);
      setIsDragActive(false);
    }
  };

  const handleAddFile = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    const files = event.target.files;
    if (files?.[0]) {
      addFile(files[0]);
    }
  };

  const handleDeleteFile = (): void => {
    if (file) {
      URL.revokeObjectURL(file.url);
    }
    setFile(null);
    setIsFileOpen(false);
    if (fileLoaderRef?.current) {
      fileLoaderRef.current.value = '';
    }
  };

  return {
    file,
    fileLoaderRef,
    isDragActive,
    setFile,
    isFileOpen,
    setIsFileOpen,
    handlePreviewFile,
    handleDragActive,
    handleDragInactive,
    handleDropFile,
    handleAddFile,
    handleDeleteFile,
  };
}
