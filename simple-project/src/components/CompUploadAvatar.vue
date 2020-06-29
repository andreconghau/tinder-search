<template>
  <div>
    <button v-on:click="onLickUpload">Upload Avatar Ref</button>
    <input ref="inputUploadAvatar" type="file" hidden name="upload" id="upload">
  </div>
</template>

<script>
  export default {
    name: 'CompUploadAvatar',
    data() {
      return {
        header_text: "UploadAvatar"
      };
    },
    props: {
    },
    methods: {
      onLickUpload() {
        const inputField = this.$refs.inputUploadAvatar.click();
        console.log(this);
      }
    }
  }
</script>


<style>

</style>
