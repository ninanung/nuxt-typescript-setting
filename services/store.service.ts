import { Context } from '@nuxt/types'
import { getModule } from 'vuex-module-decorators'
import CountModule from '@/store/count'

class StoreService {
  readonly context: Context

  get CountStore() {
    return getModule(CountModule, this.context.store)
  }

  constructor(context: Context) {
    this.context = context
  }
}

export default StoreService
