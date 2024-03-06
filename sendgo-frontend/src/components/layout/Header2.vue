<template>
  <header>
    <div v-if="scrollPosition !== 0" class="navbar2">
      <div class="topmenu">
        <!-- sendgo 로고 시작 -->
        <div class="logo" @click="goToPage(`/`)"></div>
        <!-- sendgo 로고 끝 -->

        <!-- 메뉴 시작 -->
        <div class="menulist">
          <a
            v-if="this.$router.currentRoute.value.path == `/message`"
            class="message_btn2_clicked"
            @click="goToPage(`/message`)"
          >
            메세지
          </a>
          <a
            v-if="this.$router.currentRoute.value.path !== `/message`"
            class="message_btn2"
            @click="goToPage(`/message`)"
          >
            메세지
          </a>
          <a
            v-if="this.$router.currentRoute.value.path == `/credit`"
            class="credit_btn2_clicked"
            @click="goToPage(`/credit`)"
          >
            크레딧
          </a>
          <a
            v-if="this.$router.currentRoute.value.path !== `/credit`"
            class="credit_btn2"
            @click="goToPage(`/credit`)"
          >
            크레딧
          </a>
        </div>

        <!-- 메뉴 끝 -->
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "webHeader",
  // 버튼 클릭시 페이지 이동
  // 라우터에서 컴포넌트 변경해서 실행
  data() {
    return {
    };
  },

  methods: {
    goToPage(target) {
      // 현재 페이지와 라우터의 경로가 같으면 실행하지 않음
      if (this.$router.currentRoute.value.path !== target) {
        this.$router.push(target);
      }
    },
  },

  mounted() {

  },

  components: {},
};
</script>
