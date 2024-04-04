import { coordinates, State } from './types';

export let gridSize: coordinates;

export function setGridSize(x: number, y: number) {
    gridSize = { x: x, y: y };
}

export let guard: State[] = [];

export function resetGuard() {
    guard = [];
}
