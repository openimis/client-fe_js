import { Period } from './period';

export interface ContactPoint {
    // from Element: extension
    system: string; // C? phone | fax | email | pager | url | sms | other
    value: string; // The actual contact point details
    use: string; // home | work | temp | old | mobile - purpose of this contact point
    rank: number; // Specify preferred order of use (1 = highest)
    period: Period; // Time period when the contact point was/is in use
}