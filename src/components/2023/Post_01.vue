<template>
  <div>
    <HeaderComponent />
    <main>
      <article>
        <div class="article-header">
          <p class="acticle-tag">Tech</p>
          <h1 class="article-title">와이즈인 블로그를 소개합니다.</h1>
          <span class="article-date">2023.04.14</span>
          <p>&nbsp;</p>
        </div>
      </article>
      <section>
        <div class="article-body">
          <img class="article-img" :src="require(`@/assets/2023/article_img01.jpg`)" alt="article img" />
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <h2>와이즈인 컴패니 기술 블로그를 소개합니다.</h2>
          <p>&nbsp;</p>
          <p>
            안녕하세요, 와이즈인 개발팀 백엔드 플랫폼 소속 OOO입니다. 우리는 개발 문화에 진심입니다 2022년 10월 첫 째 주에 진행된 파이콘 오프라인 행사장에서 와이즈인을 궁금해하는 개발자들을 만나
            다양한 이야기를 나누었어요. 앞으로 어떻게 성장해나가는 게 좋은지 자문을 구한 주니어 개발자분에게는 제가 성장해온 과정과 함께 체득한 방식을 설명드렸죠. 이처럼 커리어 패스 조언을 구하는 분도
            계셨지만, 데이타인에 관심 많으신 분들은 와이즈인 개발 문화를 궁금해하시더라고요. 와이즈인 테크 블로그에 다양한 이야기가 담겼지만, 개발 문화가 실질적으로 체감되는 글이 없다는 걸 깨닫고 이번
            주제로 준비해보았습니다. 저와 함께 개발 문화란 무엇인지, 와이즈인은 개발 문화를 위해 어떤 활동을 하는지 함께 알아보시죠!
          </p>
          <p>&nbsp;</p>
          <hr color="#E7E7E7" />
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <h2>와이즈인 컴퍼니 개발팀은 어떤 팀인가요?</h2>
          <p>&nbsp;</p>
          <p>
            개발팀에 입사하기 전부터 개발 문화에 관심이 많았습니다. 실제로도 개발 문화를 가꾸기 위해 혼자서 다양한 방법을 시도해봤고, 제가 시도했던 방법들을 여러 채널로 공유했어요. 꾸준히 교보문고
            리드잇zine에 글을 싣기도 했습니다. 그동안 개발 문화에 관심을 갖고 글을 적다보니 몇몇 기업에서 화두가 됐다는 걸 주변 개발자를 통해 들었어요. 어느 날은 개발 문화로 고민하던 다른 기업
            담당자분께 고민상담 커피챗을 요청받기도 했습니다.
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
          <img class="article-img" :src="require(`@/assets/2023/article_img00.png`)" alt="article img" />
          <p>&nbsp;</p>
          <h2>앞으로 기대해주세요!</h2>
          <p>&nbsp;</p>
          <p>
            개발팀에 입사하기 전부터 개발 문화에 관심이 많았습니다. 실제로도 개발 문화를 가꾸기 위해 혼자서 다양한 방법을 시도해봤고, 제가 시도했던 방법들을 여러 채널로 공유했어요. 꾸준히 교보문고
            리드잇zine에 글을 싣기도 했습니다. 그동안 개발 문화에 관심을 갖고 글을 적다보니 몇몇 기업에서 화두가 됐다는 걸 주변 개발자를 통해 들었어요. 어느 날은 개발 문화로 고민하던 다른 기업
            담당자분께 고민상담 커피챗을 요청받기도 했습니다.
          </p>
        </div>
      </section>
    </main>
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from '../HeaderComponent.vue'
import FooterComponent from '../FooterComponent.vue'
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
}
</script>

<style>
main {
  background-color: #ffffff;
  max-width: 800px;
  margin: auto;
  height: auto;
  padding: 4em;
}
article {
  max-width: 100%;
  height: auto;
}
.article-header {
  text-align: center;
}
.acticle-tag {
  color: #1caee0;
}

.article-img {
  width: 100%;
  object-fit: cover;
  vertical-align: top;
  border-radius: 12px;
  margin: auto;
}
</style>
