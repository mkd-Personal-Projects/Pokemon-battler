import { useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";
import { Types } from "@prisma/client";

export const useGetTypes = () => {
  const { data, isLoading } = trpc.type.list.useQuery();
  const [types, setTypes] = useState<Types[][]>([]);

  useEffect(() => {
    if (!isLoading && data) {
      let nestedIndex = 0;

      const randomlySortedData = data
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);

      const formattedTypes = randomlySortedData.reduce(
        (accumulator: Types[][], typeObj: Types) => {
          if (accumulator[nestedIndex]?.length === 4) {
            nestedIndex++;
          }

          if (accumulator[nestedIndex]?.length < 4) {
            return accumulator.map((curVal, i) => {
              if (i === nestedIndex) {
                curVal.push(typeObj);
                return curVal;
              }
              return curVal;
            });
          } else {
            return [...accumulator, [typeObj]];
          }
        },
        []
      );

      setTypes(formattedTypes);
    }
  }, [data]);

  return {
    types,
    rawTypes: data,
  };
};
