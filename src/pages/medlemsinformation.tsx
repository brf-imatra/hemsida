import React from 'react';
import Link from 'next/link';
import { Body, BasicCard, WellOnGrey } from '../components';
import RecyclingHouse from './medlemsinformation/recyclingHouse.mdx';
import Garage from './medlemsinformation/garage.mdx';
import Förråd from './medlemsinformation/förråd.mdx';
import Medlemskap from './medlemsinformation/medlemskap.mdx';
import Hemförsäkring from './medlemsinformation/hemforsakring.mdx';
import Bostadsrätt from './medlemsinformation/bostadsratt.mdx';
import KonsekvensUtanStyrelse from './medlemsinformation/konsekvensUtanStyrelse.mdx';
import Cykel from './medlemsinformation/cykel.mdx';
import Tvättstugor from './medlemsinformation/tvättstugor.mdx';
import Historik from './medlemsinformation/historik.mdx';

export default function MedlemsInfomation() {
  return (
    <Body title='Medlemsinformation'>
      <BasicCard id='bostadsratt'>
        <Bostadsrätt />
        <div className='flex justify-center overflow-hidden bg-white'>
          <div className='px-4 py-5 sm:p-6'>
            <Link href='/styrelsen' passHref>
              <button
                type='button'
                className='inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Styrelsemedlemmar & valberedningen
              </button>
            </Link>
          </div>
        </div>
        <div className='relative overflow-hidden bg-white py-16'>
          <div className='relative px-4 sm:px-6 lg:px-8'>
            <div className='prose prose-lg prose-indigo mx-auto mt-6 text-gray-500'>
              <h2>Intresserad av styrelsearbete?</h2>
              <p>
                Är du intresserad av att sitta i styrelsen i din
                bostadsrättsförening, men vet inte riktigt vad det innebär och
                vad du behöver kunna? HSB Stockholm erbjuder en föreläsning med
                verksamhetschef Petrus Jansson som besvarar frågeställningar
                som:
              </p>
              <ul>
                <li>
                  Hur arbetar en bostadsrättsförenings styrelse och vilka roller
                  finns?
                </li>
                <li>Hur fungerar en bostadsrättsförenings ekonomi?</li>
                <li>Vilka lagar och regler styr en bostadsrättsförening?</li>
                <li>
                  Vilket ansvar har styrelsen i en bostadsrättsföreningen?
                </li>
              </ul>
              <div
                className='relative h-0 max-w-full overflow-hidden'
                style={{ paddingBottom: '56.25%' }}
              >
                <iframe
                  className='absolute left-0 top-0 h-full w-full border-0'
                  src='https://www.youtube.com/embed/G64_T709Bns'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <KonsekvensUtanStyrelse />
      </BasicCard>
      <WellOnGrey className='mt-6'>
        <Historik />
      </WellOnGrey>
      <BasicCard className='mt-6'>
        <Medlemskap />
      </BasicCard>
      <BasicCard id='hemforsakring' className='mt-6'>
        <Hemförsäkring />
      </BasicCard>

      <WellOnGrey className='mt-6'>
        <Cykel />
      </WellOnGrey>

      <BasicCard className='mt-6'>
        <Förråd />
      </BasicCard>
      <WellOnGrey className='mt-6'>
        <Garage />
      </WellOnGrey>
      <BasicCard className='mt-6'>
        <RecyclingHouse />
      </BasicCard>
      <WellOnGrey className='mt-6'>
        <Tvättstugor />
      </WellOnGrey>
    </Body>
  );
}
