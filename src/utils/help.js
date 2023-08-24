export const createDomain = (data, key) => {
  const uniqArr = new Set(data.map((el) => el[key]));
  return Array.from(uniqArr);
};

export const parseTooltipText = (text, dataObj) => {
  const newText = text.replace(/%.*?%/g, (match) => {
    const str = match.replace(/[^()_a-zA-Z0-9-]+/g, "");
    return dataObj[str];
  });
  return newText;
};
