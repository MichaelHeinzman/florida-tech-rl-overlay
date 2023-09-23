export const getColorsFromTeam = (team, colors) => {
  return team === 0 ? colors?.[0] : colors?.[1];
};
