import { mutations as houseMutations } from './house/house-mutations';
import { queries as houseQueries } from './house/house-queries';
import graphql from 'graphql';

export const schema = graphql.GraphQLSchema({
    query: {
        name: 'Mutation',
        fields: {
            ...houseMutations,
        }
    },
    mutation: {
        name: 'Query',
        fields: {
            ...houseQueries,
        }
    },
})