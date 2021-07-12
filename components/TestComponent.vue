<template>
    <div>This is test component for {{ message }}!</div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class TestComponent extends Vue{
    // prop의 경우 readonly로 선언하는게 좋다. 어차피 vue에서 props에 값을 할당하는 것이 오류이기 때문
    // "!"문자는 해당 값이 null / undefined가 아님을 뜻한다. required가 true인 prop에 사용하는 것이 좋다
    @Prop({ type: String, required: true, default: '' }) readonly message!: string
}
</script>