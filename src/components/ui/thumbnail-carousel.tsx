import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

const items = [
  {
    id: 1,
    url: new URL("../../assets/FacilitiesImage/Picture1.jpg", import.meta.url)
      .href,
    title: "Football Field",
  },
  {
    id: 2,
    url: new URL("../../assets/FacilitiesImage/Picture2.jpg", import.meta.url)
      .href,
    title: "Hockey Field",
  },
  {
    id: 3,
    url: new URL("../../assets/FacilitiesImage/Picture3.png", import.meta.url)
      .href,
    title: "Athletic Track",
  },
  {
    id: 4,
    url: new URL("../../assets/FacilitiesImage/picture4.jpg", import.meta.url)
      .href,
    title: "Jogging Track",
  },
  {
    id: 5,
    url: new URL("../../assets/FacilitiesImage/picture5.jpg", import.meta.url)
      .href,
    title: "Tennis Court",
  },
  {
    id: 6,
    url: new URL("../../assets/FacilitiesImage/picture6.jpg", import.meta.url)
      .href,
    title: "Basketball Court",
  },
  {
    id: 7,
    url: new URL("../../assets/FacilitiesImage/picture7.jpg", import.meta.url)
      .href,
    title: "Volleyball Court",
  },
  {
    id: 8,
    url: new URL("../../assets/FacilitiesImage/picture8.jpg", import.meta.url)
      .href,
    title: "Badminton Court",
  },
  {
    id: 9,
    url:new URL("../../assets/FacilitiesImage/Picture9.jpg", import.meta.url)
      .href,
    title: "Netball Court",
  },
  {
    id: 10,
    url:new URL("../../assets/FacilitiesImage/Picture10.jpg", import.meta.url)
      .href,
    title: "Handball Court",
  },
  {
    id: 11,
    url: new URL("../../assets/FacilitiesImage/Picture11.jpg", import.meta.url)
      .href,
    title: "Squash Court",
  },
];

const FULL_WIDTH_PX = 120;
const COLLAPSED_WIDTH_PX = 35;
const GAP_PX = 2;
const MARGIN_PX = 2;

type ThumbsProps = {
  index: number;
  setIndex: (i: number) => void;
};

function Thumbnails({ index, setIndex }: ThumbsProps) {
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (thumbnailsRef.current) {
      let scrollPosition = 0;
      for (let i = 0; i < index; i++) {
        scrollPosition += COLLAPSED_WIDTH_PX + GAP_PX;
      }

      scrollPosition += MARGIN_PX;

      const containerWidth = thumbnailsRef.current.offsetWidth;
      const centerOffset = containerWidth / 2 - FULL_WIDTH_PX / 2;
      scrollPosition -= centerOffset;

      thumbnailsRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <div
      ref={thumbnailsRef}
      className="overflow-x-auto"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
      <div className="flex gap-0.5 h-20 pb-2" style={{ width: "fit-content" }}>
        {items.map((item, i) => (
          <motion.button
            key={item.id}
            onClick={() => setIndex(i)}
            initial={false}
            animate={i === index ? "active" : "inactive"}
            variants={{
              active: {
                width: FULL_WIDTH_PX,
                marginLeft: MARGIN_PX,
                marginRight: MARGIN_PX,
              },
              inactive: {
                width: COLLAPSED_WIDTH_PX,
                marginLeft: 0,
                marginRight: 0,
              },
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative shrink-0 h-full overflow-hidden rounded"
          >
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover pointer-events-none select-none"
              draggable={false}
            />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default function ThumbnailCarousel() {
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const x = useMotionValue(0);

  useEffect(() => {
    if (!isDragging && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth || 1;
      const targetX = -index * containerWidth;

      animate(x, targetX, { type: "spring", stiffness: 300, damping: 30 });
    }
  }, [index, x, isDragging]);

  return (
    <div className="w-full max-w-3xl mx-auto p-4 lg:p-10">
      <div className="flex flex-col gap-3">
        <div
          className="relative overflow-hidden rounded-lg bg-gray-100"
          ref={containerRef}
        >
          <motion.div
            className="flex"
            drag="x"
            dragElastic={0.2}
            dragMomentum={false}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={(_, info) => {
              setIsDragging(false);
              const containerWidth = containerRef.current?.offsetWidth || 1;
              const offset = info.offset.x;
              const velocity = info.velocity.x;

              let newIndex = index;
              if (Math.abs(velocity) > 500) {
                newIndex = velocity > 0 ? index - 1 : index + 1;
              } else if (Math.abs(offset) > containerWidth * 0.3) {
                newIndex = offset > 0 ? index - 1 : index + 1;
              }

              newIndex = Math.max(0, Math.min(items.length - 1, newIndex));
              setIndex(newIndex);
            }}
            style={{ x }}
          >
            {items.map((item) => (
              <div key={item.id} className="shrink-0 w-full h-[400px]">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-lg select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </motion.div>

          <motion.button
            disabled={index === 0}
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            className={`absolute left-4 text-black top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === 0
                  ? "opacity-40 cursor-not-allowed"
                  : "bg-white hover:scale-110 hover:opacity-100 opacity-70"
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          <motion.button
            disabled={index === items.length - 1}
            onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
            className={`absolute text-black right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-transform z-10
              ${
                index === items.length - 1
                  ? "opacity-40 cursor-not-allowed"
                  : "bg-white hover:scale-110 hover:opacity-100 opacity-70"
              }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {index + 1} / {items.length}
          </div>
        </div>

        <Thumbnails index={index} setIndex={setIndex} />
      </div>
    </div>
  );
}
