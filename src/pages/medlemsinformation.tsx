import React from 'react';
import { InferGetStaticPropsType } from 'next';
//import matter from "gray-matter";
//import ReactMarkdown from "react-markdown";
import {
  Body,
  Card,
  Centered,
  SplitWithImage,
  TwoColumns,
  BasicCard,
  Well,
  WellOnGrey,
} from '../components';
import {
  MedlemsInformation,
  MedlemsInformationArticle,
  readMedlemsInformation,
} from '../utils';
import { PropsOf } from '@headlessui/react/dist/types';

interface MedlemsInfomationProps {
  articles: MedlemsInformation;
}

export default function MedlemsInfomation({
  articles,
}: MedlemsInfomationProps) {
  return (
    <Body title="Medlemsinformation">
      <BasicCard id="bostadsratt">
        <Bostadsratt {...articles.bostadsratt} />
      </BasicCard>
      <WellOnGrey className="mt-6">
        <Historik />
      </WellOnGrey>
      <BasicCard id="hemforsakring" className="mt-6">
        <HomeInsurance {...articles.hemforsakring} />
      </BasicCard>
      <BasicCard className="mt-6">
        <Membership />
      </BasicCard>

      <WellOnGrey className="mt-6">
        <Well>
          <TwoColumns
            title="Cyckelrum"
            introducing="Cyckel"
            leftContent="Mer text..."
            rightContent="bla bla..."
          />
        </Well>
        <h3>Förråd</h3>
        Mer text...
        <h3>Återvinning</h3>
        Mer text...
        <h3>Tvättstugor</h3>
        Mer text...
      </WellOnGrey>
    </Body>
  );
}

function Bostadsratt({
  content,
  title,
  introducing,
  summary,
}: MedlemsInformationArticle) {
  return (
    <Centered
      introducing={introducing}
      title={title}
      content={content}
      summary={summary}
    />
  );
}

function Membership() {
  return <div>Medlemskap</div>;
}

function HomeInsurance({
  content,
  title,
  introducing,
  summary,
}: MedlemsInformationArticle) {
  // "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
  //const image = "/undraw/undraw_Documents_re_isxv.png";
  const image = '/imatra/foton/helsingforsgatan_autumn19.jpg';
  return (
    <SplitWithImage
      introducing={introducing}
      title={title}
      content={content}
      summary={summary}
      imageSrc={image}
    />
  );
}

function Historik() {
  return (
    <TwoColumns
      title="Historia"
      introducing="Föreningensursprung"
      leftContent="Brf Imatra och radhusen i trädgårdsstaden byggdes som hyreslägenheter av JM Mattsson och blev inflyttningsklart 1975-1976. HSB bildade 1979 två bostadsrättsföreningar som köpte husen."
      rightContent={`Brf Imatra arrenderar tre tomträtter från Stockholms stad där våra 15 hus står. Totalt har föreningen 254 lägenheter, 10 kommersiella lokaler och fem garage med ungefär 300 parkeringsplatser.\n\nFöreningens mål är att skapa en bra boendemiljö för våra medlemmar på lång sikt`}
    />
  );
}

export function getStaticProps(): { props: { articles: MedlemsInformation } } {
  const articles = readMedlemsInformation();

  return {
    props: {
      articles: articles,
    },
  };
}
