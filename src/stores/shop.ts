import type { State } from './shop.types';
import { defineStore } from 'pinia';

export const useShopStore = defineStore('shop', {
  state: (): State => ({
    itemsCounter: 0,
  }),
  actions: {

  }
})