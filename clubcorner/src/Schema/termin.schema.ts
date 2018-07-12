export interface Termin {
    id?: number;
    mannschfts_ID?: string;
    spiel: boolean;
    ort: string;
    uhrzeit: string;
    datum: string;
    enddatum: string;
    wiederholend?: boolean;
    gegner: string;
    dauer?: string;
}
