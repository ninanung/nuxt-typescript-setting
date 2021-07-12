<template>
    <div>
        <h1>Hello world!</h1>
        <TestComponent :message="message" />
        <StoreTest />
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import TestComponent from '~/components/TestComponent.vue'
import StoreTest from '@/components/StoreTest.vue';

@Component({
    components: {
        TestComponent,
        StoreTest
    }
})

export default class index extends Vue{
    message: string = 'Nuxt and TypeScript'
}
</script>