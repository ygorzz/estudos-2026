import { clear } from "../storage.js";

export default async function removeAnotacoes(){

    try{
        await clear();
    } catch (erro) {
        throw erro;
    }
}