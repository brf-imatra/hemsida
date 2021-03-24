import React from 'react'
import {Body, Centered} from "../components";

const data = `
Plats: Konferenslokalen i Akalla By

Tid: Mötet börjar kl: 19.00 torsdagen 22/4 

Registrering från och med 18.30 kom i tid.

Mer info om årsstämman kommer med dagordning och årsredovisningen som delas ut senast 7/4.

Hälsningar Styrelsen
`;

export default function FöreningsÅrsstämma() {
    return (
        <Body>
            <Centered
                introducing="Kallelse"
                title="Föreningsårsstämma brf Imatra"
                content={data}
                summary="Kallelse till brf Imatras årsstämma torsdagen 22/4 i Akalla By" />
        </Body>
    )
}