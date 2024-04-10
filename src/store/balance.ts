import {createApi, createEvent, createStore} from "effector";
import { persist } from 'effector-storage/local'


export const increaseBalance = createEvent<number>()
export const decreaseBalance = createEvent<number>()

export const $balance = createStore(0)
    .on(increaseBalance, (balance, payload) => balance + payload)
    .on(decreaseBalance, (balance, payload) => balance - payload)

$balance.watch((balance) => console.log('balance: ', balance))


persist({ store: $balance, key: 'balance' })
