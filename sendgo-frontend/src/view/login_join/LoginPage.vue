<template>
  <section class="login_layout">
    <div class="login_input_layout">
      <img src="../../../public/images/sendgo asset 기본 가로형.svg" />

      <!-- input id 시작 -->
      <input class="input_id" type="text" placeholder="아이디를 입력해주세요" />
      <!-- input id 끝-->

      <!-- input password 시작 -->
      <input
        class="input_password"
        type="password"
        placeholder="비밀번호(영문, 숫자, 특수문자 포함 8~30자)"
      />
      <!-- input password 끝 -->

      <!-- login content 시작 -->
      <div class="login_content">
        <div class="remember_id_check_layout">
          <transition name="remember_id_check">
            <img
              v-if="!checked"
              src="../../../public/images/checkbox@2x.png"
              @click="clicked"
            />
          </transition>
          <transition name="remember_id_check">
            <img
              v-if="checked"
              src="../../../public/images/checkbox checked@2x.png"
              @click="clicked"
            />
          </transition>

          <span>아이디 저장</span>
        </div>

        <div class="find_layout">
          <span class="find_id">아이디 찾기</span>
          <span class="find_pw">비밀번호 찾기</span>
        </div>
      </div>
      <!-- login content 끝 -->

      <div class="login_btn">로그인</div>
      <div class="go_join">
        <span
          >계정이 없으신가요?
          <span class="go_join_btn" @click="goToPage(`/join`)"
            >회원가입하기</span
          ></span
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "join_page",
  data() {
    return {
      checked: false,
    };
  },
  methods: {
    clicked() {
      if (this.checked == false) {
        this.checked = true;
      } else {
        this.checked = false;
      }
    },
    goToPage(target) {
      // 현재 페이지와 라우터의 경로가 같으면 실행하지 않음
      if (this.$router.currentRoute.path !== target) {
        this.$router.push(target);
      }
    },
  },
};
</script>
