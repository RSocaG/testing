import { connection } from "../db/config.js"
import { house } from "./tables/house.model.js";

export const createHouse = async (item) => {
    return await (await connection).getRepository(house).save(item);
}

export const updateHouse = async (item) => {
    return await (await connection).getRepository(house).save(item);
}

export const deleteHouse = async (id) => {
    return await (await connection).getRepository(house).delete(id);
}

export const getHouse = async (id) => {
    return await (await connection).getRepository(house).getId(id);
}

export const getHouses = async () => {
    return await (await connection).getRepository(house).find();
}