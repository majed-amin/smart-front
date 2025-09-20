import { apiSlice as api } from "./api/apiSlice";
export const addTagTypes = [] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({}),
    overrideExisting: false,
  });
export { injectedRtkApi as generatedApi };
export const {} = injectedRtkApi;
