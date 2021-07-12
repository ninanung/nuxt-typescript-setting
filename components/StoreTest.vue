<template>
    <div>
        <h1>{{ count }}</h1>
        <button @click="counter">click</button>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class StoreTest extends Vue {
    get count() {
        return this.$storeService.CountStore.count
    }

    counter() {
        this.$storeService.CountStore.plusCount(2)
    }
}
</script>