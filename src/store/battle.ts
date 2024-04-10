import {createEvent, createStore} from "effector";
import {Battle, Character} from "../types/battle";

export const setCurrentBattle = createEvent<Battle | null>();

export const currentBattle = createStore<Battle | null>(null).on(setCurrentBattle, (_, payload) => payload)

export const setCurrentSide = createEvent<Character | null>();

export const currentSide = createStore<Character | null>(null).on(setCurrentSide, (_, payload) => payload)
