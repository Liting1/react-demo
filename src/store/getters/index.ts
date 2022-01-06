import {Data} from '../data/store';

type Store = {
    state:Data
}

type FetFun = (store?:any) => any

interface Getters {
    getModules:FetFun;
}

const getters:Getters = {
    getModules({state}){
        return state;
    }
}

export type {
    Getters,
    FetFun
}

export default getters;
