import React from 'react';
import { Body } from '../components';
import { FullTest } from './dokuments';

export default function Dokuments() {
  return (
    <Body title="Mallar">
      <div className="grid grid-cols-1 gap-6">
        <BlankettLista />
      </div>
    </Body>
  );
}

// https://www.hsb.se/contentassets/08b595d8053848ecaba5249d1e290a49/andrahandsuthyrning-blankett.pdf

function BlankettLista() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">2021</h2>
      </div>
      <ul>
        <li className="border-gray-200">
          <FullTest
            documentName="andring-i-lagenhet.pdf"
            href="/dokument/mallar/andring-i-lagenhet.pdf"
            tag="PDF"
            title="Ändring i lägenhet"
          />
        </li>
          <li className="border-gray-200">
          <FullTest
            documentName="andrahandsuthyrning-blankett.pdf"
            href="/dokument/mallar/andrahandsuthyrning-blankett.pdf"
            tag="PDF"
            title="Andrahandsuthyrning"
          />
        </li>
      </ul>
    </div>
  );
}
