import React from 'react';
import { Body } from '../components';
import { PaperClipIcon } from '@heroicons/react/20/solid';

export default function Dokuments() {
  return (
    <Body title="Dokument">
      <div className="grid grid-cols-1 gap-6">
        <FöreningsDokument />
        <År2023 />
        <År2022 />
        <År2021 />
        <År2020 />
        <År2019 />
        <År2018 />
        <År2017 />
        <År2016 />
        <År2015 />
        <År2014 />
        <År2013 />
        <År2012 />
        <År2007 />
      </div>
    </Body>
  );
}

interface FullTestProps {
  title?: string;
  tag?: string;
  documentName: string;
  href: string;
}

export function FullTest({ href, title, tag, documentName }: FullTestProps) {
  const headerElement =
    title || tag ? (
      <div className="flex items-center justify-between">
        <div className="text-sm leading-5 font-medium text-indigo-600 truncate">
          {title}
        </div>
        <div className="ml-2 flex-shrink-0 flex">
          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {tag}
          </span>
        </div>
      </div>
    ) : null;

  return (
    <>
      <div className="px-4 py-4 sm:px-6">
        {headerElement}

        <div className="mt-2 sm:flex sm:justify-between">
          <div className="w-0 flex-1 flex items-center">
            <PaperClipIcon
              className="flex-shrink-0 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <a
              href={href}
              className="block hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition duration-150 ease-in-out"
            >
              <span className="ml-2 flex-1 w-0 truncate">{documentName}</span>
            </a>
          </div>

          <div className="ml-4 flex-shrink-0">
            <a
              href={href}
              download={documentName}
              className="font-medium text-indigo-600 hover:text-indigo-500 transition duration-150 ease-in-out"
            >
              Ladda ner
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function FöreningsDokument() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">
          Bostadsrättsförening Imatra
        </h2>
      </div>
      <ul>
        <li className="border-gray-200">
          <FullTest
            documentName="HSB_brf_Imatra_Normalstadgar_2011-version_5.pdf"
            href="/dokument/2018-05-04_HSB_brf_Imatra_Normalstadgar_2011-version_5.pdf"
            tag="PDF"
            title="HSB brf Imatra Normalstadgar"
          />
        </li>
      </ul>
    </div>
  );
}

function År2023() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">2022</h2>
      </div>
      <ul>
        <li className="border-gray-200">
          <FullTest
            documentName="årsredovisning_2022_imatra.pdf"
            href="/dokument/arsredovisning/2023/arsredovisning_2022_imatra.pdf"
            tag="PDF"
            title="Årsredovisning"
          />
        </li>
      </ul>
    </div>
  );
}

function År2022() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">2022</h2>
      </div>
      <ul>
        <li className="border-gray-200">
          <FullTest
            documentName="årsredovisning_2021_imatra.pdf"
            href="/dokument/arsredovisning/2022/arsredovisning_2021_imatra.pdf"
            tag="PDF"
            title="Årsredovisning"
          />
        </li>
        <li className="border-gray-200">
          <FullTest
            documentName="protokoll_brf_imatra_stämma_2022-04-28.pdf"
            href="/dokument/arsredovisning/2022/protokoll_brf_imatra_stamma_2022-04-28.pdf"
            tag="PDF"
            title="Föreningsstämma"
          />
        </li>
        <li className="border-gray-200">
          <FullTest
            documentName="protokoll_brf_imatra_extra_stämma_2022-09-20.pdf"
            href="/dokument/arsredovisning/2022/protokoll_brf_imatra_extra_stamma_2022-09-20.pdf"
            tag="PDF"
            title="Extra föreningsstämma"
          />
        </li>
      </ul>
    </div>
  );
}

function År2021() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">2021</h2>
      </div>
      <ul>
        <li className="border-gray-200">
          <FullTest
            documentName="årsredovisning_2020_imatra.pdf"
            href="/dokument/arsredovisning/2021/arsredovisning_2020_imatra.pdf"
            tag="PDF"
            title="Årsredovisning"
          />
        </li>
        <li className="border-gray-200">
          <FullTest
            documentName="protokoll_brf_imatra_stämma_2021-04-22.pdf"
            href="/dokument/arsredovisning/2021/protokoll_brf_imatra_stamma_2021-04-22.pdf"
            tag="PDF"
            title="Föreningsstämma"
          />
        </li>
      </ul>
    </div>
  );
}

function År2020() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">2020</h2>
      </div>
      <ul>
        <li className="border-gray-200">
          <FullTest
            documentName="årsredovisning_2019_imatra.pdf"
            href="/dokument/arsredovisning/2020/arsredovisning_2019_imatra.pdf"
            tag="PDF"
            title="Årsredovisning"
          />
        </li>
        <li className="border-gray-200">
          <FullTest
            documentName="protokoll_brf_imatra_stämma_2020-04-23.pdf"
            href="/dokument/arsredovisning/2020/protokoll_brf_imatra_stamma_2020-04-23.pdf"
            tag="PDF"
            title="Föreningsstämma"
          />
        </li>
      </ul>
    </div>
  );
}

function År2019() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">2019</h2>
      </div>
      <ul>
        <li className="border-gray-200">
          <FullTest
            documentName="årsredovisning_2018_imatra.pdf"
            href="/dokument/arsredovisning/2019/arsredovisning_2018_imatra.pdf"
            tag="PDF"
            title="Årsredovisning"
          />
        </li>
        <li className="border-gray-200">
          <FullTest
            documentName="protokoll_brf_imatra_stämma_2019-04-25.pdf"
            href="/dokument/arsredovisning/2019/protokoll_brf_imatra_stamma_2019-04-25.pdf"
            tag="PDF"
            title="Föreningsstämma"
          />
        </li>
      </ul>
    </div>
  );
}

function År2018() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">2018</h2>
      </div>
      <ul>
        <li className="border-gray-200">
          <FullTest
            documentName="årsredovisning_2017_imatra.pdf"
            href="/dokument/arsredovisning/2018/arsredovisning_2017_imatra.pdf"
            tag="PDF"
            title="Årsredovisning"
          />
        </li>
        <li className="border-gray-200">
          <FullTest
            documentName="protokoll_brf_imatra_stämma_2018-04-26.pdf"
            href="/dokument/arsredovisning/2018/protokoll_brf_imatra_stamma_2018-04-26.pdf"
            tag="PDF"
            title="Föreningsstämma"
          />
        </li>
      </ul>
    </div>
  );
}

function År2017() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">2017</h2>
      </div>
      <ul>
        <li className="border-gray-200">
          <FullTest
            documentName="årsredovisning_2016_imatra.pdf"
            href="/dokument/arsredovisning/2017/arsredovisning_2016_imatra.pdf"
            tag="PDF"
            title="Årsredovisning"
          />
        </li>
        <li className="border-gray-200">
          <FullTest
            documentName="protokoll_brf_imatra_stämma_2017-04-27.pdf"
            href="/dokument/arsredovisning/2017/protokoll_brf_imatra_stamma_2017-04-27.pdf"
            tag="PDF"
            title="Föreningsstämma"
          />
        </li>
      </ul>
    </div>
  );
}

function År2016() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">2016</h2>
      </div>
      <ul>
        <li className="border-gray-200">
          <FullTest
            documentName="årsredovisning_2015_imatra.pdf"
            href="/dokument/arsredovisning/2016/arsredovisning_2015_imatra.pdf"
            tag="PDF"
            title="Årsredovisning"
          />
        </li>
        <li className="border-gray-200">
          <FullTest
            documentName="protokoll_brf_imatra_stämma_2016-04-28.pdf"
            href="/dokument/arsredovisning/2016/protokoll_brf_imatra_stamma_2016-04-28.pdf"
            tag="PDF"
            title="Föreningsstämma"
          />
        </li>
      </ul>
    </div>
  );
}

function År2015() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">2015</h2>
      </div>
      <ul>
        <li className="border-gray-200">
          <FullTest
            documentName="årsredovisning_2014_imatra.pdf"
            href="/dokument/arsredovisning/2015/arsredovisning_2014_imatra.pdf"
            tag="PDF"
            title="Årsredovisning"
          />
        </li>
        <li className="border-gray-200">
          <FullTest
            documentName="protokoll_brf_imatra_stamma_2015-04-28.pdf"
            href="/dokument/arsredovisning/2015/protokoll_brf_imatra_stamma_2015-04-28.pdf"
            tag="PDF"
            title="Föreningsstämma"
          />
        </li>
        <li className="border-gray-200">
          <FullTest
            documentName="protokoll_brf_imatra_extra_stämma_2015-10-14.pdf"
            href="/dokument/arsredovisning/2015/protokoll_brf_imatra_extra_stamma_2015-10-14.pdf"
            tag="PDF"
            title="Extra föreningsstämma"
          />
        </li>
      </ul>
    </div>
  );
}

function År2014() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">2014</h2>
      </div>
      <ul>
        <li className="border-gray-200">
          <FullTest
            documentName="årsredovisning_2013_imatra.pdf"
            href="/dokument/arsredovisning/2014/arsredovisning_2013_imatra.pdf"
            tag="PDF"
            title="Årsredovisning"
          />
        </li>
        <li className="border-gray-200">
          <FullTest
            documentName="protokoll_brf_imatra_stämma_2014-04-28.pdf"
            href="/dokument/arsredovisning/2014/protokoll_brf_imatra_stamma_2014-04-28.pdf"
            tag="PDF"
            title="Föreningsstämma"
          />
        </li>
      </ul>
    </div>
  );
}

function År2013() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">2013</h2>
      </div>
      <ul>
        <li className="border-gray-200">
          <FullTest
            documentName="årsredovisning_2012_imatra.pdf"
            href="/dokument/arsredovisning/2013/arsredovisning_2012_imatra.pdf"
            tag="PDF"
            title="Årsredovisning"
          />
        </li>
        <li className="border-gray-200">
          <FullTest
            documentName="protokoll_brf_imatra_stämma_2013-04-24.pdf"
            href="/dokument/arsredovisning/2013/protokoll_brf_imatra_stamma_2013-04-24.pdf"
            tag="PDF"
            title="Föreningsstämma"
          />
        </li>
      </ul>
    </div>
  );
}

function År2012() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">2012</h2>
      </div>
      <ul>
        <li className="border-gray-200">
          <FullTest
            documentName="årsredovisning_2011_imatra.pdf"
            href="/dokument/arsredovisning/2012/arsredovisning_2011_imatra.pdf"
            tag="PDF"
            title="Årsredovisning"
          />
        </li>
      </ul>
    </div>
  );
}

function År2007() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h2 className="text-lg leading-6 font-medium text-gray-900">2007</h2>
      </div>
      <ul>
        <li className="border-gray-200">
          <FullTest
            documentName="årsredovisning_2007_imatra.pdf"
            href="/dokument/arsredovisning/2007/arsredovisning_2007_imatra.pdf"
            tag="PDF"
            title="Årsredovisning"
          />
        </li>
      </ul>
    </div>
  );
}
