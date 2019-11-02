import { Coding } from './coding';

export interface CodeableConcept {
    // from Element: extension
    coding: Coding[]; // Code defined by a terminology system
    text: string; // Plain text representation of the concept
}