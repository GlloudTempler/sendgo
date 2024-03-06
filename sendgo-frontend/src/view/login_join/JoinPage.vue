<template>
  <section class="join_layout">
    <div class="join_input_layout">
      <img src="../../../public/images/sendgo asset 기본 가로형.svg" />

      <!-- input name 시작 -->
      <div class="input_group_name">
        <div class="input_title">이름</div>
        <input
          class="input_content"
          type="text"
          placeholder="이름을 입력해 주세요"
        />
      </div>
      <!-- input name 끝 -->

      <!-- input id 시작 -->
      <div class="input_group_id">
        <div class="input_title">아이디</div>
        <input
          class="input_content"
          type="text"
          placeholder="8자 이상, 영문 혹은 영문과 숫자조합"
        />
      </div>
      <!-- input id 끝 -->

      <!-- input password 시작 -->
      <div class="input_group_password">
        <div class="input_title">비밀번호</div>
        <input
          class="input_content"
          type="password"
          placeholder="비밀번호를 입력해 주세요"
        />
      </div>
      <!-- input password 끝 -->

      <!-- inpurt passwor check 시작 -->
      <div class="input_group_password_check">
        <div class="input_title">비밀번호 확인</div>
        <input
          class="input_content"
          type="password"
          placeholder="비밀번호를 입력해 주세요"
        />
      </div>
      <!-- inpurt passwor check 끝 -->

      <div class="agree_check">
        <transition name="agree_check_btn">
          <img
            v-if="!checked"
            src="../../../public/images/checkbox@2x.png"
            @click="clicked"
          />
        </transition>
        <transition name="agree_check_btn">
          <img
            v-if="checked"
            src="../../../public/images/checkbox checked@2x.png"
            @click="clicked"
          />
        </transition>

        <span>모든 약관에 동의합니다.</span>
      </div>

      <div class="join_btn">가입하기</div>
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
  },
};
</script>
