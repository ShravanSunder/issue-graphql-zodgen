import { ReactNode } from 'react';

export type FCServer<P = Record<string, any> | never> = (props: P) => Promise<ReactNode>;
