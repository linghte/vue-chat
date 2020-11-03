<template>
  <div>
    <div v-bind:class="[isActive === true ? 'message-box' : 'message-box-right']">
      <img class="avatar" :src="avatar" />
      <div v-bind:class="[isActive === true ? 'triangle' : 'triangle-right']"></div>
      <div class="text-message" v-text="message">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageBox",
  props:['message','isActive','avatar'],
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.message-box {
  height: auto;
  display: flex;
  margin: 15px 0;
}
.message-box-right {
  height: auto;
  display: flex;
   margin: 15px 0;
  flex-direction: row-reverse;
}
.avatar {
  width: 30px;
  height: 30px;
  margin: 3px;
}
.triangle {
  margin-top: 12.5px;
  height: 0;
  border: 5px solid;
  border-color: transparent #fff transparent transparent;
}
.triangle-right {
  margin-top: 12.5px;
  height: 0;
  border: 5px solid;
  border-color: transparent transparent transparent#fff;
}
.text-message {
  border-radius: 5px;
  background-color: #fff;
  line-height: 20px;
  font-size: 20px;
  padding: 10px;
}
</style>
