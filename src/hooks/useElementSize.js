// useElementSize.ts
import { MutableRefObject, useLayoutEffect, useRef, useState } from "react";
import useResizeObserver from "@react-hook/resize-observer";

export default function useElementSize() {
  const target = useRef(null);
  const [size, setSize] = useState({
    widthTEST: 0,
    heightTEST: 0
  });

  const setRoundedSize = ({ widthTEST, heightTEST }) => {
    setSize({ widthTEST: Math.round(widthTEST), heightTEST: Math.round(heightTEST) });
  };

  useLayoutEffect(() => {
    target.current && setRoundedSize(target.current.getBoundingClientRect());
  }, [target]);

  useResizeObserver(target, (entry) => {
    console.log('>>> target', target)
    const { inlineSize: widthTEST, blockSize: heightTEST } = entry.contentBoxSize[0];
    setRoundedSize({ widthTEST, heightTEST });
  });

  return [target, size];
}
