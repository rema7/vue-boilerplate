<template>
  <div class="full-width center-content">
    <hello-component name="World" />
  </div>
</template>

<script>
import HelloComponent from './components/HelloComponent.vue'

export default {
    components: {
        HelloComponent,
    },
}
</script>

<style lang="scss" scoped>
.full-with {
    width: 100%;
}

.center-content {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
