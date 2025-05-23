import { useState } from 'react';
import {
  AreaChart,
  Card,
  Flex,
  SearchSelect,
  SearchSelectItem,
  Icon,
  Text,
  Title,
} from '@tremor/react';
import { InformationCircleIcon } from '@heroicons/react/20/solid';

export const performance = [
  {
    date: '2018',
    'Sparande, kr/kvm': 62,
    'Skuldsättning, kr/kvm': 2976,
    'Räntekänslighet, %': 5,
    'Energikostnad, kr/kvm': 226,
    'Driftkostnad, kr/kvm': 660,
    'Årsavgifter, kr/kvm': 719,
    'Totala intäkter, kr/kvm': 869,
    'Soliditet, %': 11,
  },
  {
    date: '2019',
    'Sparande, kr/kvm': 6,
    'Skuldsättning, kr/kvm': 2951,
    'Räntekänslighet, %': 4,
    'Energikostnad, kr/kvm': 268,
    'Driftkostnad, kr/kvm': 815,
    'Årsavgifter, kr/kvm': 734,
    'Totala intäkter, kr/kvm': 869,
    'Soliditet, %': 7,
  },
  {
    date: '2020',
    'Sparande, kr/kvm': 132,
    'Skuldsättning, kr/kvm': 2934,
    'Räntekänslighet, %': 4,
    'Energikostnad, kr/kvm': 248,
    'Driftkostnad, kr/kvm': 785,
    'Årsavgifter, kr/kvm': 752,
    'Totala intäkter, kr/kvm': 903,
    'Soliditet, %': 8,
  },
  {
    date: '2021',
    'Sparande, kr/kvm': -100,
    'Skuldsättning, kr/kvm': 3189,
    'Räntekänslighet, %': 5,
    'Energikostnad, kr/kvm': 309,
    'Driftkostnad, kr/kvm': 1075,
    'Årsavgifter, kr/kvm': 776,
    'Totala intäkter, kr/kvm': 1014,
    'Soliditet, %': -1,
  },
  {
    date: '2022',
    'Sparande, kr/kvm': 63,
    'Skuldsättning, kr/kvm': 3157,
    'Räntekänslighet, %': 5,
    'Energikostnad, kr/kvm': 351,
    'Driftkostnad, kr/kvm': 915,
    'Årsavgifter, kr/kvm': 778,
    'Totala intäkter, kr/kvm': 1029,
    'Soliditet, %': -2,
  },
  {
    date: '2023',
    'Sparande, kr/kvm': -9,
    'Skuldsättning, kr/kvm': 4125,
    'Skuldsättning bostadsrättsyta, kr/kvm': 4680,
    'Räntekänslighet, %': 5,
    'Energikostnad, kr/kvm': 319,
    'Årsavgifter, kr/kvm': 856,
    'Årsavgifter/totala intäkter, %': 72,
    'Totala intäkter, kr/kvm': 1075,
    'Soliditet, %': -4,
  },
  {
    date: '2024',
    'Sparande, kr/kvm': 101,
    'Skuldsättning, kr/kvm': 8077,
    'Skuldsättning bostadsrättsyta, kr/kvm': 9165,
    'Räntekänslighet, %': 9,
    'Energikostnad, kr/kvm': 333,
    'Årsavgifter, kr/kvm': 1018,
    'Årsavgifter/totala intäkter, %': 78,
    'Totala intäkter, kr/kvm': 1149,
    'Soliditet, %': -2,
  },
];

// Basic formatters for the chart values
const currencyFormatter = (number: number) => {
  return `${Intl.NumberFormat('sv').format(number).toString()} kr`;
};

const numberFormatter = (value: number) =>
  `${Intl.NumberFormat('sv').format(value).toString()}`;

const percentageFormatter = (value: number) =>
  `${Intl.NumberFormat('sv').format(value).toString()} %`;

export function Flerårsöversikt() {
  const [selectedKpi, setSelectedKpi] = useState('Sparande, kr/kvm');

  // map formatters by selectedKpi
  const formatters: { [key: string]: any } = {
    'Sparande, kr/kvm': currencyFormatter,
    'Skuldsättning, kr/kvm': currencyFormatter,
    'Skuldsättning bostadsrättsyta, kr/kvm': currencyFormatter,
    'Räntekänslighet, %': percentageFormatter,
    'Energikostnad, kr/kvm': currencyFormatter,
    'Driftkostnad, kr/kvm': currencyFormatter,
    'Årsavgifter, kr/kvm': currencyFormatter,
    'Totala intäkter, kr/kvm': currencyFormatter,
    'Årsavgifter/totala intäkter, %': percentageFormatter,
    'Soliditet, %': percentageFormatter,
  };

  return (
    <Card>
      <div className='justify-between md:flex'>
        <div>
          <Flex
            justifyContent='start'
            className='space-x-0.5'
            alignItems='center'
          >
            <Title>Flerårsöversikt</Title>
            <Icon
              icon={InformationCircleIcon}
              variant='simple'
              tooltip='Visar utvecklingen av föreningenskostnader och intäkter över tid.'
            />
          </Flex>
          <Text>Föreningenskostnader och intäkter över tid</Text>
        </div>
        <div className='mt-6 md:mt-0'>
          <SearchSelect
            className='w-56'
            color='zinc'
            defaultValue={selectedKpi}
            onValueChange={(value) => setSelectedKpi(value)}
          >
            {Object.keys(performance[6])
              .filter((item) => item !== 'date')
              .map((item) => (
                <SearchSelectItem key={item} value={item} defaultValue={item} />
              ))}
          </SearchSelect>
        </div>
      </div>
      <AreaChart
        data={performance}
        index='date'
        categories={[selectedKpi]}
        colors={['orange']}
        showLegend={false}
        valueFormatter={formatters[selectedKpi]}
        yAxisWidth={66}
        className='mt-8 h-96'
      />
    </Card>
  );
}
