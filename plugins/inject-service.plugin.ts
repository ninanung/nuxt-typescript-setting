import { Context } from '@nuxt/types'
import StoreService from '@/services/store.service'

export default function (context: Context, inject: (name: string, definition: any) => {}) {
    inject('storeService', new StoreService(context))
}
