import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({
    name: 'count',
    stateFactory: true,
    namespaced: true,
})
export default class MenuModule extends VuexModule {
    private _count: number = 0;

    get count() {
        return this._count
    }

    @Mutation
    setCount(count: number) {
        this._count = count
    }

    @Action
    plusCount(count: number) {
        this.setCount(this.count + count);
    }
}
