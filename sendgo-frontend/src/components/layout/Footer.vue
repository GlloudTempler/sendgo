<template>
  <div class="footerLayout">
    <div class="navbar_gray">
      <div class="footer">
        <!-- sendgo 로고 시작 -->
        <div class="logo" @click="goToPage(`/`)"></div>
        <!-- sendgo 로고 끝 -->

        <!-- 메뉴 시작 -->
        <div class="menulist">
          <a class="message_btn" @click="goToPage(`/message`)"> 메세지 </a>
          <a class="credit_btn" @click="goToPage(`/credit`)"> 크레딧 </a>
        </div>
        <!-- 메뉴 끝 -->
      </div>
    </div>

    <div class="footerBanner">
      <span class="content"
        >문의 사항이 있으신가요? 텔레그램을 통해 고객센터로 문의 해
        보세요.</span
      >
      <span class="content2">Telegram : @shdevelope</span>
    </div>
  </div>
</template>

<script>

export default {
  name: "webFooter",
  // 버튼 클릭시 페이지 이동
  // 라우터에서 컴포넌트 변경해서 실행
  data() {
  },

  methods: {
    goToPage(target) {
      // 현재 페이지와 라우터의 경로가 같으면 실행하지 않음
      if (this.$router.currentRoute.path !== target) {
        this.$router.push(target);
      }
    },
  },

  components: {},
};
</script>
