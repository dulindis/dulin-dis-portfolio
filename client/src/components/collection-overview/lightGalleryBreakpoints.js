
export const generateBreakPoints = (listLength) => {
    let breakpoints = 0;
    if (listLength>0 && listLength<4) {
        breakpoints={
        default: breakpoints,
        1100: 2,
        700: 1,
      };
    } else {
        breakpoints={
        default: 4,
        1100: 2,
        700: 1,
      };
    }
    return breakpoints
  
}