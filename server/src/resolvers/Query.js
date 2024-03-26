import { axiosQuery } from "../modules/movies/index.js";

export async function movies(parent, args) {
  const data = await axiosQuery.getPopular(args.page);
  return data;
}
