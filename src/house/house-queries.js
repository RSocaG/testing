import graphql from "graphql";
import { getHouses, getHouse } from "./house.service.js";
import {House} from '../house/models/house.graphql.js'
export const queries = {
    getHouse: {
        type: House,
        args: {
            id: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLID),
                description: 'The house id to be deleted'
            }
        },
        resolve: async (_, {id}) => {
            return await getHouse(id);
        }
    },
    getHouses: {
        type: new graphql.GraphQLList(House),
        args: {
        },
        resolve: async (_, {}) => {
            return await getHouses();
        }
    },
};