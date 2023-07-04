import { Card, Title, Text, AreaChart, LineChart } from '@tremor/react';

const resultatData = [
  {
    date: '2001',
    'Resultat, efter finansiella poster': 1_000,
  },
  {
    date: '2002',
    'Resultat, efter finansiella poster': 3_000,
  },
  {
    date: '2003',
    'Resultat, efter finansiella poster': 107_000,
  },
  {
    date: '2004',
    'Resultat, efter finansiella poster': 519_000,
  },
  {
    date: '2005',
    'Resultat, efter finansiella poster': 84_000,
  },
  {
    date: '2006',
    'Resultat, efter finansiella poster': 1_001_000,
  },
  {
    date: '2007',
    'Resultat, efter finansiella poster': 728_000,
  },
  {
    date: '2008',
    'Resultat, efter finansiella poster': -109_000,
  },
  {
    date: '2009',
    'Resultat, efter finansiella poster': 267_000,
  },
  {
    date: '2010',
    'Resultat, efter finansiella poster': 383_000,
  },
  {
    date: '2011',
    'Resultat, efter finansiella poster': 418_000,
  },
  {
    date: '2012',
    'Resultat, efter finansiella poster': -832_000,
  },
  {
    date: '2013',
    'Resultat, efter finansiella poster': 188_000,
  },
  {
    date: '2014',
    'Resultat, efter finansiella poster': -1_150_000,
  },
  {
    date: '2015',
    'Resultat, efter finansiella poster': -19_000,
  },
  {
    date: '2016',
    'Resultat, efter finansiella poster': -2_539_000,
  },
  {
    date: '2017',
    'Resultat, efter finansiella poster': -2_047_000,
  },
  {
    date: '2018',
    'Resultat, efter finansiella poster': -1_086_000,
  },
  {
    date: '2019',
    'Resultat, efter finansiella poster': -2_972_000,
  },
  {
    date: '2020',
    'Resultat, efter finansiella poster': 54_000,
  },
  {
    date: '2021',
    'Resultat, efter finansiella poster': -5_393_000,
  },
  {
    date: '2022',
    'Resultat, efter finansiella poster': -912_000,
  },
];

const currencyFormatter = (number: number) => {
  return Intl.NumberFormat('sv').format(number).toString() + ' kr';
};

export function ResultatEfterFinansielllPoster() {
  return (
    <Card>
      <Title>Resultat, efter finansiella poster</Title>
      <Text>
        Resultat efter finansiella poster är föreningens finansierings- och
        kapitalplaceringsförmåga, finansiella intäkter subtraherat med
        kostnader.
      </Text>
      <AreaChart
        data={resultatData}
        categories={['Resultat, efter finansiella poster']}
        index="date"
        className="h-72 mt-4"
        colors={['blue']}
        yAxisWidth={110}
        valueFormatter={currencyFormatter}
      />
    </Card>
  );
}
