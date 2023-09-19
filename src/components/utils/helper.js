import * as d3 from 'd3';

export const createColorPalette = (type) => {
    switch (type) {
      case 0:
        return d3.schemeCategory10[0];
      case 1:
        return d3.schemeCategory10[1];
      case 2:
        return d3.schemeCategory10[2];
      case 3:
        return d3.schemeCategory10[3];
      case 4:
        return d3.schemeCategory10[4];
      case 5:
        return d3.schemeCategory10[5];
      default:
        return d3.schemeCategory10[0];
    }
  };