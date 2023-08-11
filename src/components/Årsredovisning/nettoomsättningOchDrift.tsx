import { Card, Title, Text, AreaChart } from '@tremor/react';

/*
Fastighetsförsäkring

2013,

2014,

2015,

2016,

2017,

2018,

2019,

2020,

2021,

2022,

2023,
 */

// Not 2 från årsredovisningarna

const fastighetsFörsäkringsData = [
  {
    date: '1997',
    Nettoomsättning: 11_605_066,
    'Drift och underhåll': 6_897_105,
  },
  {
    date: '1998',
    Nettoomsättning: 12_019_221,
    'Drift och underhåll': 6_825_659,
  },
  {
    date: '1999',
    Nettoomsättning: 12_494_649,
    'Drift och underhåll': 5_758_123,
  },
  {
    date: '2000',
    Nettoomsättning: 12_789_305,
    'Drift och underhåll': 5_684_868,
  },
  {
    date: '2001',
    Nettoomsättning: 12_785_128,
    'Drift och underhåll': 6_312_944,
  },
  {
    date: '2002',
    Nettoomsättning: 12_965_748,
    'Drift och underhåll': 6_586_615,
  },
  {
    date: '2003',
    Nettoomsättning: 12_928_491,
    'Drift och underhåll': 7_506_577,
  },
  {
    date: '2004',
    Nettoomsättning: 13_017_777,
    'Drift och underhåll': 7_596_008,
  },
  {
    date: '2005',
    Nettoomsättning: 13_081_833,
    'Drift och underhåll': 8_084_553,
  },
  {
    date: '2006',
    Nettoomsättning: 13_014_976,
    'Drift och underhåll': 8_056_265,
  },
  {
    date: '2007',
    Nettoomsättning: 12_967_828,
    'Drift och underhåll': 8_506_810,
  },
  {
    date: '2008',
    Nettoomsättning: 12_886_694,
    'Drift och underhåll': 9_326_738,
  },
  {
    date: '2009',
    Nettoomsättning: 13_168_125,
    'Drift och underhåll': 9_616_649,
  },
  {
    date: '2010',
    Nettoomsättning: 13_459_014,
    'Drift och underhåll': 10_299_298,
  },
  {
    date: '2011',
    Nettoomsättning: 13_537_271,
    'Drift och underhåll': 10_109_505,
  },
  {
    date: '2012',
    Nettoomsättning: 13_543_369,
    'Drift och underhåll': 11_131_403,
  },
  {
    date: '2013',
    Nettoomsättning: 13_988_214,
    'Drift och underhåll': 10_126_183,
  },
  {
    date: '2014',
    Nettoomsättning: 14_608_423,
    'Drift och underhåll': 11_885_166,
  },
  {
    date: '2015',
    Nettoomsättning: 14_908_998,
    'Drift och underhåll': 11_004_212,
  },
  {
    date: '2016',
    Nettoomsättning: 14_854_676,
    'Drift och underhåll': 12_616_564,
  },
  {
    date: '2017',
    Nettoomsättning: 15_600_662,
    'Drift och underhåll': 13_367_397,
  },
  {
    date: '2018',
    Nettoomsättning: 16_036_867,
    'Drift och underhåll': 12_676_863,
  },
  {
    date: '2019',
    Nettoomsättning: 16_528_380,
    'Drift och underhåll': 15_045_455,
  },
  {
    date: '2020',
    Nettoomsättning: 16_736_458,
    'Drift och underhåll': 13_272_554,
  },
  {
    date: '2021',
    Nettoomsättning: 17_169_064,
    'Drift och underhåll': 18_594_590,
  },
  {
    date: '2022',
    Nettoomsättning: 17_913_032,
    'Drift och underhåll': 16_303_675,
  },
  // {
  //   date: "2023",
  //   "Nettoomsättning": 0,
  //     "Drift och underhåll": 0,
  // },
];

const dataFormatter = (number: number) => {
  return Intl.NumberFormat('sv').format(number).toString() + ' kr';
};

export function NettoomsättningOchDrift() {
  return (
    <Card>
      <Title>Nettoomsättning samt drift och underhåll</Title>
      <Text>
        Jämförelse av nettoomsättning mot kostnaderna för drift och underhåll
      </Text>
      <AreaChart
        data={fastighetsFörsäkringsData}
        categories={['Nettoomsättning', 'Drift och underhåll']}
        index='date'
        className='mt-4 h-72'
        colors={['amber', 'pink']}
        yAxisWidth={110}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
}
