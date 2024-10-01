"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { QUESTION } from "@/lib/types";

let interval: NodeJS.Timeout;



export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: QUESTION[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<QUESTION[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: QUESTION[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 2000);
  };

  return (
    <div className="relative h-60 w-60 md:h-96 md:w-96">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={index}
            className="absolute dark:bg-black bg-white h-60 w-60 md:h-fit md:w-fit rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.prompt}
            </div>
            <ul className="text-neutral-500 font-medium dark:text-white">
              {
                card.options.map((e, i) => (
                  <li key={i}>
                    <p>
                      {e}
                    </p>
                  </li>
                ))
              }
            </ul>
            {/* <div>
              <p className="text-neutral-500 font-medium dark:text-white">
                {card.name}
              </p>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div> */}
          </motion.div>
        );
      })}
    </div>
  );
};
