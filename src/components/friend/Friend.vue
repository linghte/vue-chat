<template>
  <div>
    <div v-for="(info,key) in messageList" :key="key">
      <MessageBox father-component="Friend"  :message="info.message" 
    :isActive="info.isActive" :avatar="info.avatar"></MessageBox>
    </div>
  </div>
</template>

<script>

import MessageBox from '../common/MessageBox'
export default {
  name: "Friend",
  data() {
    return {
      messageList: [
        { isActive: true, message: "left", avatar:"https://static.hdslb.com/images/akari.jpg"},
        { isActive: false, message: "right", avatar:"https://static.hdslb.com/images/akari.jpg"},],
    };
  },
  components: {
    MessageBox
  },
};
</script>

<style scoped>
</style>
