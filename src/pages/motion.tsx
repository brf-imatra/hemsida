import React from 'react';
import { Body, Centered } from '../components';

const data = `
Motionerna kan mailas till: [info@brfimatra.se](info@brfimatra.se) eller lämnas i brevlådan styrelselokalen, Helsingforsgatan 69 eller hos fastighetsskötarna på Helsingforsgatan 45.  
OBS! Märk motionen med _Brf Imatra_.

Tid och plats för föreningsstämman meddelas senare.

## Att skriva motioner
Det är en fördel är om motion är korrekt, lättbegriplig och innehåller ett tydligt förslag för föreningsstämma att rösta om.

Rekommenderad motionsstruktur innehåller följande tre punkter:
- __Rubrik__ – redan här ska du ange vad motionen handlar om
- __Brödtext__ – här förklarar du bakgrunden till Ditt förslag och argumenterar för detta. Som regel vinner Du på att formulera Dig kort och kärnfullt.
- __Yrkande__ – motionen ska avslutas med ett konkret förslag som årsmötet ska kunna säga ja eller nej till.

Felanmälningar skall inte lämnas som motioner. 
I dessa fall skall Du göra en felanmälan på tel. 08-695 00 00

Hälsningar Styrelsen
`;

export default function Motion() {
  return (
    <Body>
      <Centered
        introducing="Dags att motionera"
        title="Motioner för år 2022"
        content={data}
        summary="Måndag den 28 februari är sista dagen att komma in med motioner till årets föreningsstämma."
      />
    </Body>
  );
}
