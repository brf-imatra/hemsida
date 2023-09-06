import React from 'react';
import { Body } from '../components';
import { DokumentGrupp, DokumentRadProps } from './dokuments';

export default function Dokuments() {
  return (
    <Body title='Blanketter'>
      <div className='grid grid-cols-1 gap-6'>
        <DokumentGrupp title='2021' documents={Blanketter} />
      </div>
    </Body>
  );
}

const Blanketter: Array<DokumentRadProps> = [
  {
    documentName: 'andring-i-lagenhet.pdf',
    href: '/dokument/mallar/andring-i-lagenhet.pdf',
    tag: 'PDF',
    title: 'Ändring i lägenhet',
  },
  {
    documentName: 'andrahandsuthyrning-blankett.pdf',
    href: '/dokument/mallar/andrahandsuthyrning-blankett.pdf',
    tag: 'PDF',
    title: 'Andrahandsuthyrning',
  },
];
