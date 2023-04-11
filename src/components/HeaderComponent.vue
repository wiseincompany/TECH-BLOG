<template>
  <header id="header">
    <div class="header-container">
      <a href="#">
        <img
          class="logo-img"
          :src="require(`@/assets/wisein_company.png`)"
          @click="goHome()" />
        <!-- <v-img
          class="logo-img"
          src="../assets/wisein_company.png"
          alt="Logo"
        ></v-img> -->
      </a>
      <nav>
        <ul class="nav-items">
          <li class="nav-item">Team</li>
          <li class="nav-item">Tech</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const goHome = () => {
  router.push({
    path: '/',
  });
};
</script>

<style>
#header {
  width: 100%;
  height: 80px;
  background-color: #ffff;
  border-bottom: 1px solid rgba(0, 27, 55, 0.1);
  position: sticky;
  top: 0;
  z-index: 1;
}
.header-container {
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.logo-img {
  width: 200px;
}
.nav-items {
  display: flex;
}
.nav-item {
  font-size: 18px;
  padding: 0 20px;
  cursor: pointer;
}
.nav-item:hover {
  font-weight: bold;
}
</style>
