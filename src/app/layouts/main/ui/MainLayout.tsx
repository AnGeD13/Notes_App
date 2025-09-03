import type { JSX } from '@emotion/react/jsx-runtime';
import { Box } from '@mui/material';
import type { ReactNode } from 'react';

export function MainLayout({ children }: { children: ReactNode }): JSX.Element {
  return <Box component='main'>{children}</Box>;
}
