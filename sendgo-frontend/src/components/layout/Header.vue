<template>
  <header>
    <!-- white theme -->
    <transition name="white" :duration="300">
      <div v-if="scrollPosition !== 0" class="navbar">
        <div class="topmenu">
          <!-- sendgo 로고 시작 -->
          <div class="logo" @click="goToPage(`/`)"></div>
          <!-- sendgo 로고 끝 -->

          <!-- 메뉴 시작 -->
          <div class="top_menulist">
            <a
              v-if="this.$router.currentRoute.path == `/message`"
              class="message_btn"
              @click="goToPage(`/message`)"
              style="border-bottom: 0.1rem solid #000000"
            >
              메세지
            </a>
            <a
              v-if="this.$router.currentRoute.path !== '/message'"
              class="message_btn"
              @click="goToPage(`/message`)"
            >
              메세지
            </a>
            <a class="credit_btn" @click="goToPage(`/credit`)"> 크레딧 </a>
          </div>

          <!-- 메뉴 끝 -->
        </div>
      </div>
    </transition>
    <!-- white theme -->

    <!-- black theme -->
    <transition name="black">
      <div
        v-if="scrollPosition == 0 || scrollPosition == null"
        class="navbar_black"
      >
        <div class="topmenu">
          <!-- sendgo 로고 시작 -->
          <div class="logo" @click="goToPage(`/`)"></div>
          <!-- sendgo 로고 끝 -->

          <!-- 메뉴 시작 -->
          <div class="top_menulist">
            <a class="message_btn" @click="goToPage(`/message`)"> 메세지 </a>
            <a class="credit_btn" @click="goToPage(`/credit`)"> 크레딧 </a>
          </div>

          <!-- 메뉴 끝 -->
        </div>
      </div>
    </transition>
    <!-- black theme -->
  </header>
</template>

<script>
export default {
  name: "webHeader",
  // 버튼 클릭시 페이지 이동
  // 라우터에서 컴포넌트 변경해서 실행
  data() {
    return {
      // 스크롤 변수 설정
      scrollPosition: null,
    };
  },

  methods: {
    goToPage(target) {
      // 현재 페이지와 라우터의 경로가 같으면 실행하지 않음
      if (this.$router.currentRoute.path !== target) {
        this.$router.push(target);
      }
    },

    // 스크롤 추적
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },

  mounted() {
    // 스크롤 추적
    window.addEventListener("scroll", this.updateScroll);
  },

  components: {},
};
</script>
