import { Box } from '@mui/material';
import type { JSX, ReactNode } from 'react';

export function MainLayout({ children }: { children: ReactNode }): JSX.Element {
  return <Box component='main'>{children}</Box>;
}
