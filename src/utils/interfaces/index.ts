import { ChangeEvent, ReactNode } from 'react';

export interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface AuthWrapperProps {
  children: ReactNode;
}
