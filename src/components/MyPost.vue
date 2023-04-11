<template>
  <div class="container">
    <v-card class="mx-auto rounded-xl" max-width="330" min-width="330">
      <v-img
        :src="require(`@/assets/2023/card_title05.jpg`)"
        height="240px"
        cover
      ></v-img>
      <v-card-title>안녕하세요!</v-card-title>
      <v-card-subtitle class="subTitle">안녕하세요</v-card-subtitle>
      <v-card-actions>
        <v-btn color="purple-lighten-2" variant="text"> Tech </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    <v-card class="mx-auto rounded-xl" max-width="330" min-width="330">
      <v-img
        :src="require(`@/assets/2023/card_title04.jpg`)"
        height="240px"
        cover
      ></v-img>
      <v-card-title>안녕하세요!</v-card-title>
      <v-card-subtitle class="subTitle">안녕하세요</v-card-subtitle>
      <v-card-actions>
        <v-btn color="purple-lighten-2" variant="text"> Tech </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    <v-card class="mx-auto rounded-xl" max-width="330" min-width="330">
      <v-img
        :src="require(`@/assets/2023/card_title03.jpg`)"
        height="240px"
        cover
      ></v-img>
      <v-card-title>와이즈인 컴퍼니</v-card-title>
      <v-card-subtitle class="subTitle">2023.04.15</v-card-subtitle>
      <v-card-actions>
        <v-btn color="purple-lighten-2" variant="text"> Tech </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    <v-card class="mx-auto rounded-xl" max-width="330" min-width="330">
      <v-img
        :src="require(`@/assets/2023/card_title02.jpg`)"
        height="240px"
        cover
      ></v-img>
      <v-card-title>개발팀을 소개합니다!</v-card-title>
      <v-card-subtitle class="subTitle">2023.04.15</v-card-subtitle>
      <v-card-actions>
        <v-btn color="purple-lighten-2" variant="text"> Tech </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
    <v-card class="mx-auto rounded-xl" max-width="330" min-width="330">
      <v-img
        :src="require(`@/assets/2023/card_title01.jpg`)"
        height="240px"
        cover
      ></v-img>
      <v-card-title>와이즈인 개발 블로그를 소개합니다!</v-card-title>
      <v-card-subtitle class="subTitle">2023. 04. 11</v-card-subtitle>
      <v-card-actions>
        <v-btn color="purple-lighten-2" variant="text"> Tech </v-btn>
        <v-spacer></v-spacer>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  max-width: 1050px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.mx-auto {
  margin: 30px 0;
  cursor: pointer;
  height: 380px;
}
.mx-auto:hover {
  scale: 0.99;
  transition: 0.3s;
}
.subTitle {
  margin-bottom: 22px;
}
</style>
