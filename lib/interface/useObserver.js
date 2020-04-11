import React, { useState, useEffect, useRef } from "react";

const useObserver = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);
  const isWindow = typeof window !== `undefined`;

  const observer = isWindow
    ? useRef(
        new window.IntersectionObserver(([entry]) => updateEntry(entry), {
          root,
          rootMargin,
          threshold
        })
      )
    : null;

  useEffect(() => {
    const { current: currentObserver } = observer;
    currentObserver.disconnect();

    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node]);

  return [setNode, entry];
};

export default useObserver;
