import graphql from "graphql";
import { getHouses, getHouse } from "./house.service";

export const queries = {
    House: {
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
    Houses: {
        type: new graphql.GraphQLList(House),
        args: {
            id: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLID),
                description: 'The house id to be deleted'
            }
        },
        resolve: async (_, {id}) => {
            return await getHouses();
        }
    },
};