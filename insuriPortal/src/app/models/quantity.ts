export interface Quantity {
    // from Element: extension
    value: number; // Numerical value (with implicit precision)
    comparator: string; // < | <= | >= | > - how to understand the value
    unit: string; // Unit representation
    system: string; // C? System that defines coded unit form
    code: string; // Coded form of the unit
}
