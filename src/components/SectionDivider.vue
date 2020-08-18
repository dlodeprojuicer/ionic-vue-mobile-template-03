<template>
  <div class="section-divider">
    {{ data }}
  </div>
</template>

<script>
  export default {
    name: "section-divider",
    props: {
      data: {
        type: String,
        required: true
      }
    },
  }
</script>

<style>
.section-divider {
  margin: 20px 0 0 15px;
}
</style>