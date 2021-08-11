import { House } from "../house/models/house.graphql.js";
import { HouseInput } from "../house/models/house-input.graphql.js";
import graphql from "graphql";
import { createHouse, deleteHouse, updateHouse } from "./house.service.js";

export const mutations = {
    createHouse: {
        type: House,
        args: {
            item: {
                type: new graphql.GraphQLNonNull(HouseInput),
                description: 'The input data of the house to be created'
            }
        },
        resolve: async (_, {item}) => {
            return await createHouse(item);
        }
    },
    updateHouse: {
        type: House,
        args: {
            item: {
                type: new graphql.GraphQLNonNull(HouseInput),
                description: 'The input data of the house to be updated'
            }
        },
        resolve: async (_, {item}) => {
            return await updateHouse(item);
        }
    },
    deleteHouse: {
        type: House,
        args: {
            id: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLID),
                description: 'The house id to be deleted'
            }
        },
        resolve: async (_, {id}) => {
            return await deleteHouse(id);
        }
    },
}