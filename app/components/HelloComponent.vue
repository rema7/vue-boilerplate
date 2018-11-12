<template>
  <div class="red">
    <h1>Hello {{ name }}!</h1>
  </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.red {
    color: #f00;
}
</style>
