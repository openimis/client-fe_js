export interface Period {
    // from Element: extension
    start: Date; // C? Starting time with inclusive boundary
    end: Date; // C? End time with inclusive boundary, if not ongoing
}