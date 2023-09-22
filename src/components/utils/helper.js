import * as d3 from 'd3';

export const createColorPalette = (type) => {
  console.log('>>>>', type);
    switch (type) {
      case "Color-1":
        return d3.schemeCategory10[0];
      case "Color-2":
        return d3.schemeCategory10[1];
      case "Color-3":
        return d3.schemeCategory10[2];
      case "Color-4":
        return d3.schemeCategory10[3];
      case "Color-5":
        return d3.schemeCategory10[4];
      case "Color-6":
        return d3.schemeCategory10[5];
      default:
        return d3.schemeCategory10[0];
    }
  };