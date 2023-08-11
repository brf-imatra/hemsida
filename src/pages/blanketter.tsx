import React from 'react';
import { Body } from '../components';
import { FullTest } from './dokuments';

export default function Dokuments() {
  return (
    <Body title='Blanketter'>
      <div className='grid grid-cols-1 gap-6'>
        <BlankettLista />
      </div>
    </Body>
  );
}

function BlankettLista() {
  return (
    <div className='overflow-hidden bg-white shadow sm:rounded-md'>
      <div className='border-b border-gray-200 bg-white px-4 py-5 sm:px-6'>
        <h2 className='text-lg font-medium leading-6 text-gray-900'>2021</h2>
      </div>
      <ul>
        <li className='border-gray-200'>
          <FullTest
            documentName='andring-i-lagenhet.pdf'
            href='/dokument/mallar/andring-i-lagenhet.pdf'
            tag='PDF'
            title='Ändring i lägenhet'
          />
        </li>
        <li className='border-gray-200'>
          <FullTest
            documentName='andrahandsuthyrning-blankett.pdf'
            href='/dokument/mallar/andrahandsuthyrning-blankett.pdf'
            tag='PDF'
            title='Andrahandsuthyrning'
          />
        </li>
      </ul>
    </div>
  );
}
