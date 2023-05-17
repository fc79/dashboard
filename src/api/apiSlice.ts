import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface IPokemon {
  id: string;
  ability: string;
  species: {
    name: string;
    uiiljoikj: string;
  };
  sprites: {
    front_shiny: string;
  };
}

export const usersAPI = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
   users:builder.query({
    query:() => '/users',
   })
   
  }),
});

export const { useUsersQuery } = usersAPI;