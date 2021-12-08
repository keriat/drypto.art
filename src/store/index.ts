import * as account from "@/store/account";
import * as contacts from "@/store/contacts";
import * as tokens from "@/store/tokens";
import * as transaction from "@/store/transaction";
import * as wallet from "@/store/wallet";
import { actionTree, getAccessorType, getterTree, mutationTree } from "typed-vuex";
import { Route } from "vue-router/types";
import { ZKIRootState } from "~/types/lib";
import { magic } from "~/plugins/magic";

export const state = (): ZKIRootState => ({
  accountModalOpened: false,
  currentModal: undefined,
  previousRoute: undefined,
  user: null,
  authenticated: false,
});

export type RootState = ReturnType<typeof state>;

export const getters = getterTree(state, {
  getAccountModalState: (state: RootState) => state.accountModalOpened,
  getPreviousRoute: (state: RootState) => state.previousRoute,
  currentModal: (state: RootState) => state.currentModal,
});

export const mutations = mutationTree(state, {
  SET_USER_DATA(state: RootState, userData):void {
    state.user = userData
    state.authenticated = true
  },
  CLEAR_USER_DATA(state: RootState):void {
    state.user = null
    state.authenticated = false
  },
  setAccountModalState(state: RootState, modalState: boolean): void {
    state.accountModalOpened = modalState;
  },
  setCurrentModal(state: RootState, modalName: string): void {
    state.currentModal = modalName;
  },
  setPreviousRoute(state: RootState, route: Route): void {
    state.previousRoute = route;
  },
  removeCurrentModal(state: RootState): void {
    state.currentModal = undefined;
  },
});

export const actions = actionTree(
  { state, getters, mutations },
  {
    openModal({ commit }, modalName: string): void {
      commit("setCurrentModal", modalName);
    },
    closeActiveModal({ commit }): void {
      commit("removeCurrentModal");
    },
    async login({commit}, email) {
      //@ts-ignore
      await magic?.auth.loginWithMagicLink(email)
      //@ts-ignore
      const userData = await magic?.user.getMetadata()
      commit('SET_USER_DATA', userData)
    },
    async logout({commit}) {
      //@ts-ignore
      await magic?.user.logout()
      commit('CLEAR_USER_DATA')
    },
  },
);

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {
    account,
    contacts,
    tokens,
    transaction,
    wallet,
  },
});
