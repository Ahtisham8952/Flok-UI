import { ChangeEvent } from 'react';

export interface CustomInputProps {
  value?: string;
  onClick?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
