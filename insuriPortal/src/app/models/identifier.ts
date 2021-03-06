import { CodeableConcept } from './codeableConcept';
import { Period } from './period';
import { Reference } from './reference';

export interface Identifier {
    // from Element: extension
    use: string; // usual | official | temp | secondary (If known)
    type: CodeableConcept; // Description of identifier
    system: string; // The namespace for the identifier value
    value: string; // The value that is unique
    period: Period; // Time period when id is/was valid for use
    assigner: Reference; // Organization that issued id (may be just text)
}
