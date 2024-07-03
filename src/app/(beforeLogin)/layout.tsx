import { ReactNode } from 'react';

type Props = { children: ReactNode; modal: ReactNode };

export default function ({ children, modal }: Props) {
  return <div>{children}</div>;
}
