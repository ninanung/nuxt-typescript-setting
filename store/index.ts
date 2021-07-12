import { ActionTree } from 'vuex'
import { Context } from '@nuxt/types'

type RootState = {}

export const actions: ActionTree<RootState, RootState> = {
    // eslint-disable-next-line no-empty-pattern
    nuxtServerInit(_rootContext, { app }: Context) {
        app.$storeService.CountStore.setCount(6)
    },
}