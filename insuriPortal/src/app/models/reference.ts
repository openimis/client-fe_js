import { Identifier } from './identifier';

export interface Reference {
    // from Element: extension
    reference: string; // C? Literal reference, Relative, internal or absolute URL
    identifier: Identifier; // Logical reference, when literal reference is not known
    display: string; // Text alternative for the resource
}