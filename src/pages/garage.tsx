import React from 'react';
import ReactMarkdown from "react-markdown";
import {Body, Centered} from "../components";

const data =  `
**HSB har lanserat en ny digital tjänst som hanterar
bostadsrättsföreningars garageplatser och lokaler.**

Syftet med tjänsten är att skapa en effektivare hantering vid fördelning
av lediga garageplatser och lokaler och förbättra tillgängligheten och
ge dig en tydligare överblick över din aktuella kösituation. Du kommer
enkelt kunna ställa dig i de köer du är behörig att söka i, följa din
aktuella kötid, bevaka när intressanta garageplatser och lokaler blir
lediga och anmäla intresse till lediga garageplatser och lokaler via
Mitt HSB.

Fr.o.m den 2021-01-01 flyttas din bostadsrättsförening Imatra över till
den digitala tjänsten och du som boende kan ställa dig i kö och göra
intresseanmälningar via Mitt HSB.

**VAD INNEBÄR DET HÄR FÖR MIG SOM BOENDE?**

### Står du i kö sedan tidigare i någon av föreningens köer?

Då har ditt ködatum följt med och du kan se det under aktuell kö, det
enda du behöver göra är registrera en intresseanmälan till de
garageplatser och lokaler som du är intresserad av att hyra via Mitt
HSB. Om garageplatsen/garageplatserna lokalen/lokalerna du är
intresserad av inte finns lediga just nu kan du prenumerera på
garageplatsen/lokalen för att få en notis om när den blir ledig.

**Står du inte i kö sedan tidigare?**
Då behöver du själv gå in och anmäla dig till kön via Mitt HSB. Du kan
anmäla dig till kön även om du inte är intresserad av en
garageplats/lokal i dagsläget för att samla ködagar. För att få en
garageplats/lokal gör du en intresseanmälan till de
garageplatser/lokaler som du är intresserad av att hyra via Mitt HSB. Om
garageplatsen/garageplatserna lokalen/lokalerna du är intresserad av
inte finns lediga just nu kan du prenumerera på garageplatsen/lokalen
för att få en notis om när den blir ledig.

**HUR FUNGERAR FÖRDELNINGEN AV GARAGEPLATSER/LOKALER?**

Ett ledigt objekt ligger synligt i Mitt HSB under "_mina sidor_ -- _min
bostad_ - _mina köer_"  och du kan göra en intresseanmälan för
garageplatsen/lokalen t.om sista ansökningsdatumet har passerat.
Garageplatsen/lokalen tilldelas då den sökande med längst kötid. Avtal
upprättas och arkiveras online i Mitt HSB under "_Bostadsavtal_", där du
kan se alla dina aktuella hyresavtal.

Har du tilldelats garageplatsen blir du aviserad via registrerad
mejladress och Mitt HSB och hyresavierna samaviseras med
bostadslägenhetens avgift. Avierna skickas som vanligt till dig via
post, autogiro, e-faktura eller Kivra.

Om du har valt att få e-postnotifiering skickas ett mejl till dig när
objektet du prenumererar på blir ledigt. Du kan välja om du vill
prenumerera på alla objekt eller endast några enstaka. Om du inte väljer
att få e-postnotifiering så kan du alltid följa notiserna under senaste
händelser. Vid skapandet av ett nytt avtal eller uppsägning av avtalet
skickas alltid ett e-postmeddelande till registrerad e-postadress.

Om du vill säga upp ditt hyresavtal för din garageplats eller lokal gör
du det enkelt under "_mina sidor_ -- _min bostad_ -- _bostadsavtal_" i Mitt
HSB. Är ditt avtal äldre och inte finns upplagt behöver du kontakta
Kund-och Medlemsservice för hjälp med uppsägningen.

Beror uppsägningen på en flytt från bostadsrättsföreningen hanterar HSB
uppsägningen åt dig i samband med flytten. Avtalet upphör då att gälla
sista dagen i avflyttningsmånaden.

Har du några frågor är du varmt välkommen att kontakta oss på Kund-och
Medlemsservice.

Telefon: [010-442 11 00](tel:010-4421100),

[service.stockholm@hsb.se](mailto:service.stockholm@hsb.se)

alternativt via kontaktformuläret på vår hemsida.
[www.hsb.se/stockholm/kontakt](http://www.hsb.se/stockholm/kontakt)


Med vänlig hälsning,
> HSB Stockholm / HSB Akallakontoret
`;
export default function Garage() {
    return (
        <Body title="Garage">
            <Centered
                introducing="Digital tjänst för hantering"
                title="Garageplatser och lokaler"
                content={data}
                summary="Fr.o.m den 2021-01-01 flyttas din bostadsrättsförening Imatra över till den digitala tjänsten och du som boende kan ställa dig i kö och göra intresseanmälningar via Mitt HSB." />
        </Body>
    )
}
