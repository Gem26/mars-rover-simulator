export type direction = 'N' | 'E' | 'S' | 'W';

export interface State {
    x: number;
    y: number;
    orientation: direction;
}

export interface coordinates {
    x: number;
    y: number;
}
