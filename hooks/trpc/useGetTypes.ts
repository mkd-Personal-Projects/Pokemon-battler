import { trpc } from "../../utils/trpc";

export const useGetTypes = () => {
  const { data: types } = trpc.type.list.useQuery();

  return {
    types,
  };
};
