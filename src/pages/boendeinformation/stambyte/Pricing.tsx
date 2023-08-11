import { CheckIcon } from '@heroicons/react/24/outline';

type kostnad = {
  namn: string;
  pris: number;
  enhet: string;
};

const elkostnader: kostnad[] = [
  { namn: 'Material', pris: 3000, enhet: 'kr/badrum' },
  { namn: 'Arbetskostnad', pris: 5000, enhet: 'kr/badrum' },
];

const vattenkostnader: kostnad[] = [
  { namn: 'Material', pris: 4000, enhet: 'kr/badrum' },
  { namn: 'Arbetskostnad', pris: 6000, enhet: 'kr/badrum' },
  { namn: 'Undercentral', pris: 80000, enhet: 'kr/undercentral' },
  { namn: 'Stammar', pris: 150000, enhet: 'kr/huskropp' },
  { namn: 'Huvudledningar', pris: 400000, enhet: 'kr/undercentral' },
  { namn: 'Utbyggnad av slitsar', pris: 20000, enhet: 'kr/slits' },
];

const pricing = {
  tiers: [
    {
      title: 'Eldriven',
      kostnader: elkostnader,
    },
    {
      title: 'Vattenburen',
      kostnader: vattenkostnader,
      Material: 4000,
      Arbetskostnad: 6000,
      Undercentral: 80000,
      Stammar: 150000,
      Huvudledningar: 400000,
      'Utbyggnad av slitsar': 20000,
    },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  const svFormat = new Intl.NumberFormat('sv-SE');
  return (
    // <div className="mx-auto max-w-7xl bg-white py-24 px-4 sm:px-6 lg:px-8">

    <div className='mt-24 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:space-y-0'>
      {pricing.tiers.map((tier) => (
        <div
          key={tier.title}
          className='relative flex flex-col rounded-2xl border border-gray-200 bg-white p-4 shadow-sm'
        >
          <div className=''>
            <h3 className='text-xl font-semibold text-gray-900'>
              Investeringskostnader
            </h3>
            <p className='absolute top-0 -translate-y-1/2 transform rounded-full bg-indigo-500 px-4 py-1.5 text-sm font-semibold text-white'>
              {tier.title}
            </p>
          </div>
          {tier.kostnader.map((feature) => (
            <div className='flex-shrink-0' key={feature.namn}>
              <h3 className='text-xl font-semibold text-gray-500'>
                {feature.namn}
              </h3>
              <p className='mt-4 flex items-baseline text-gray-900'>
                <span className='text-4xl font-bold tracking-tight'>
                  {svFormat.format(feature.pris)}
                </span>
                <span className='text-l ml-1 font-semibold text-gray-700'>
                  {feature.enhet}
                </span>
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
    // </div>
  );
}
