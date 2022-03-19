import React from 'react';
import { Body, Centered } from '../components';

const kallelse_inbjudan = `
Plats: Konferenslokalen i Akalla By

Tid: Mötet börjar kl: 19.00 torsdagen 28/4 

Registrering från och med 18.30 kom i tid.

Mer info om årsstämman kommer med dagordning och årsredovisningen som delas ut senast 4 veckor innan föreningsstämman.

Hälsningar Styrelsen
`;

const kallelse_distribuerad = `
Medlemmarna i Brf. Imatra nr 193 i Stockholm inbjuds härmed till ordinarie föreningsstämma torsdagen den 22 april 2021 i Akalla By

Registrering startas kl:18.30 och mötet börjar kl:19.00

Vid stämman har varje medlem en röst.
Innehar flera medlemmar bostadsrätt gemensamt har de tillsammans endast en röst.
Röstberättigad är endast den medlem som fullgjort sina förpliktelser mot föreningen.
En medlems rätt vid föreningsstämman utövas av medlemmen personligen eller den som är medlemmens ställföreträdare enligt lag eller genom ombud.
Ombud skall förete skriftlig dagtecknad fullmakt.
Fullmakten skall vara i original och gäller högst ett år från utfärdandet.
Ombud får bara företräda en medlem. Medlem får på föreningsstämma medföra högst ett biträde.
För fysisk person gäller att endast annan medlem eller medlemmens make/maka, registrerad partner, sambo, föräldrar, syskon eller barn får vara biträde eller ombud.

MEDTAG BOSTADSRÄTTSBEVIS ELLER ÖVERLÅTELSEAVTAL.

Välkomna

Styrelsen för Brf. Imatra. 

__OBS! Det traditionella samkväm som vi brukar ha efter årstämman måste tyvärr ställas in i år för att minska smittrisken på grund av Covid-19.__

__Handsprit och munskydd kommer att finnas att tillgå på stämman.__

## Dagordning för föreningsstämman 22/4:
1. Stämmans öppnande
2. Val av ordförande vid stämman
3. Anmälan av stämmoordförandes val av protokollförare
4. Godkännande av röstlängd
5. Fastställande av dagordning
6. Val av två personer att jämte stämmoordförande justera protokollet samt av rösträknare
7. Fråga om kallelse behörigen skett
8. Styrelsens årsredovisning
9. Revisorernas berättelse 
10. Beslut om fastställande av resultat- och balansräkningen
11. Beslut i anledning av årets resultat enligt balansräkningen
12. Beslut i fråga om ansvarsfrihet för styrelsen
13. Val av styrelseledamöter och suppleanter
14. Val av revisor och suppleant
15. Val av valberedning
16. Fråga om arvoden för styrelsen, revisor
17. Fråga om arvoden för valberedning
18. Val av representation i HSB
19. Anmälda ärenden – motioner
20. Det behövs flera volontärer till återvinningsstugan (stående punkt). Intresserade var snäll och kontakta Liliane Bennis.
21. Avslutning
    `;

export default function FöreningsStämma() {
  return (
    <Body>
      <Centered
        introducing="Inbjudan"
        title="Föreningsstämma Brf. Imatra nr 193"
        content={kallelse_inbjudan}
        summary="Inbjudan till Brf. Imatras föreningstämma torsdagen 28/4 i Akalla By"
      />
    </Body>
  );
}
