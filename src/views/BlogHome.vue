<template>
  <HeaderComponent />
  <MyPost />
  <FooterComponent />
</template>

<script>
import MyPost from '../components/MyPost.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
export default {
  components: {
    HeaderComponent,
    FooterComponent,
    MyPost,
  },
};
</script>

<style></style>
