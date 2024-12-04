export const ADD = 'ADD';
export const SOUS = 'SOUS';
export const MULT = 'MULT';
export const DIV = 'DIV';

export const ADDition = (add) => ({
  type: ADD,
  payload: add,
});

export const SOUStraction = (sous) => ({
  type: SOUS,
  payload: sous,
});

export const MULTplication = (mult) => ({
  type: MULT,
  payload: mult,
});

export const DIVision = (div) => ({
  type: DIV,
  payload: div,
});