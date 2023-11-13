import client from "../../db/client";

export const getAllTypes = async () => {
  const types = await client.types.findMany();
  return types;
};
