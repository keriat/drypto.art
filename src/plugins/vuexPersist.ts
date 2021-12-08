import {Plugin, Context } from "@nuxt/types";
import VuexPersistence from "vuex-persist"

const vuexPersist: Plugin = ({store}: Context): void => {
  if (process.client) {
    // @ts-ignore
    window.onNuxtReady((): void => {
      new VuexPersistence({
        /* your options */
        storage: window.localStorage,
        modules: [

        ]
      }).plugin(store)
    })
  }
}

export default vuexPersist;
