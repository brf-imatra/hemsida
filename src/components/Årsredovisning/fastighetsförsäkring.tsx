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
    date: '1996',
    Försäkringspremie: 79_692,
  },
  {
    date: '1997',
    Försäkringspremie: 81_947,
  },
  {
    date: '1999',
    Försäkringspremie: 53_258,
  },
  {
    date: '2000',
    Försäkringspremie: 58_437,
  },
  {
    date: '2001',
    Försäkringspremie: 72_815,
  },
  {
    date: '2002',
    Försäkringspremie: 96_075,
  },
  {
    date: '2003',
    Försäkringspremie: 127_830,
  },
  {
    date: '2004',
    Försäkringspremie: 146_991,
  },
  {
    date: '2005',
    Försäkringspremie: 101_639,
  },
  {
    date: '2006',
    Försäkringspremie: 94_826,
  },
  {
    date: '2007',
    Försäkringspremie: 99_249,
  },
  {
    date: '2008',
    Försäkringspremie: 105_409,
  },
  {
    date: '2009',
    Försäkringspremie: 130_141,
  },
  {
    date: '2010',
    Försäkringspremie: 130_604,
  },
  {
    date: '2011',
    Försäkringspremie: 143_473,
  },
  {
    date: '2012',
    Försäkringspremie: 153_395,
  },
  {
    date: '2013',
    Försäkringspremie: 165_275,
  },
  {
    date: '2014',
    Försäkringspremie: 153_640,
  },
  {
    date: '2015',
    Försäkringspremie: 232_038,
  },
  {
    date: '2016',
    Försäkringspremie: 243_078,
  },
  {
    date: '2017',
    Försäkringspremie: 266_748,
  },
  {
    date: '2018',
    Försäkringspremie: 266_748,
  },
  {
    date: '2019',
    Försäkringspremie: 386_482,
  },
  {
    date: '2020',
    Försäkringspremie: 499_052,
  },
  {
    date: '2021',
    Försäkringspremie: 624_387,
  },
  {
    date: '2022',
    Försäkringspremie: 726_169,
  },
  {
    date: '2023',
    Försäkringspremie: 977_863,
  },
  {
    date: '2024',
    Försäkringspremie: 1_168_320,
  },
/*  {
    date: '2025',
    Försäkringspremie: ???,
  },*/
];

const dataFormatter = (number: number) => {
  return Intl.NumberFormat('sv').format(number).toString() + ' kr';
};

export function Fastighetsförsäkring() {
  return (
    <Card>
      <Title>Fastighetsförsäkring</Title>
      <Text>Föreningenspremie kostnad</Text>
      <AreaChart
        data={fastighetsFörsäkringsData}
        categories={['Försäkringspremie']}
        index='date'
        className='mt-4 h-72'
        colors={['indigo']}
        yAxisWidth={100}
        valueFormatter={dataFormatter}
      />
    </Card>
  );
}
