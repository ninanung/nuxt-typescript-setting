<template>
    <div>
        <h1>Hello world!</h1>
        <TestComponent :message="message" />
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

import TestComponent from '~/components/TestComponent.vue'

@Component({
    components: {
        TestComponent
    }
})

export default class index extends Vue{
    message: string = 'Nuxt and TypeScript'
}
</script>