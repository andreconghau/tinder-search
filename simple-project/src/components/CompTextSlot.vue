<template>
  <div>
    <hr>
    <h2>Demo Slot</h2>
    <div class="container">
      <div class="row-cols-12">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CompTextSlot',
    data() {
      return {
        header_text: "Text Slot"
      };
    },
    props: {
    },
    methods: {
      onLickUpload() {
      }
    }
  }
</script>


<style>

</style>
