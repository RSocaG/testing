import { mutations as houseMutations } from './house/house-mutations.js';
import { queries as houseQueries } from './house/house-queries.js';
import graphql from 'graphql';

const queryType = new graphql.GraphQLObjectType({
    name: 'RootQueryType',
    fields: {...houseQueries},
  });

  const mutationType = new graphql.GraphQLObjectType({
    name: 'RootMutationType',
    fields: {...houseMutations},
  });
export const schema = new graphql.GraphQLSchema({
    mutation: mutationType,
    query: queryType,
});