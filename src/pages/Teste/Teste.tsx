import { motion } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import CityCard from "../../components/CityCard/CityCard";

type XYProps = {
  x: number;
  y: number;
};

type PropsInfoRef = {
  delta: XYProps;
  offset: XYProps;
  point: XYProps;
  velocity: XYProps;
};

export default function Carousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const [startPos, setStartPos] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemWidth = 800;
  const gap = 80;
  const totalItemWidth = itemWidth + gap;

  useLayoutEffect(() => {
    const updateWidth = () => {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const handleDragStart = (event: any, info: PropsInfoRef) => {
    setStartPos(info.point.x);
  };

  const handleDragEnd = (event: any, info: PropsInfoRef) => {
    console.log(carousel.current?.style.webkitTransform)
    const distanceDragged = startPos - info.point.x;

    // carousel.current.style.transform = `translateX(${-}px)`;

  };

  return (
      <motion.div
        ref={carousel}
        className="flex gap-20"
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        initial={{ x: 200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.7 }}
        whileTap={{ cursor: "grabbing" }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
      >
        <div style={{ width: itemWidth }}>
          <CityCard />
        </div>
        <div style={{ width: itemWidth }}>
          <CityCard />
        </div>
        <div style={{ width: itemWidth }}>
          <CityCard />
        </div>
        <div style={{ width: itemWidth }}>
          <CityCard />
        </div>
      </motion.div>
  );
}
