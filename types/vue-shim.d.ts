declare module "*.vue" {
    import Vue from 'vue';
    import StoreService from '@/services/store.service'
    module 'vue/types/vue' {
      interface Vue {
        readonly $storeService: StoreService
      }
    }
    export default Vue
}