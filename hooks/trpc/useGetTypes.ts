import { trpc } from "../../utils/trpc";

export const useGetTypes = () => {
  const { data: types } = trpc.getAllTypes.useQuery();

  return {
    types,
  };
};
