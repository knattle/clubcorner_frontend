export interface Termin {
    id?: number;
    _id: string;
    mannschafts_ID?: string;
    spiel: boolean;
    ort: string;
    uhrzeit: string;
    datum: string;
    enddatum: string;
    wiederholend?: boolean;
    gegner: string;
    dauer?: string;
}
