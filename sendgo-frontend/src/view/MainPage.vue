<template>
  <!-- 표지화면 시작 -->
  <section class="main1">
    <div class="layout1">
      <!-- 텍스트 시작 -->
      <div class="textlayout">
        <!-- sendgo 설명 시작 -->
        <div>
          <div class="text_sub">인터넷 문자 메시지 전송의 모든 것</div>
          <div class="text_highlihght1">가장 빠르고 안정적인</div>
          <div class="text_highlihght2">문자 서비스 SENDGO</div>
        </div>
        <!-- sendgo 설명 끝 -->

        <!-- 회원가입, 로그인 버튼 시작 -->
        <ul class="join_login">
          <li class="join" @click="goToPage(`/join`)">회원가입</li>
          <li class="login" @click="goToPage(`/login`)">로그인</li>
        </ul>
        <!-- 회원가입, 로그인 버튼 끝 -->
      </div>
      <!-- 텍스트 끝 -->

      <div class="picturelayout">
        <div class="mainImg1"></div>
        <div class="mainImg2"></div>
        <div class="mainImg3"></div>
        <div class="mainImg4"></div>
        <div class="mainImg5"></div>
        <div class="mainImg6"><div class="mainImg6-1"></div></div>
      </div>
    </div>
  </section>
  <!-- 표지화면 끝 -->

  <!-- 메인 컨텐츠 시작 -->
  <section class="main2">
    <dvv class="layout2">
      <div class="mainlayout">
        <!-- 첫번째 설명 시작 -->
        <div class="main2_1">
          <div class="messageIcon"></div>
          <div class="mainComment1">
            복잡한 인터넷 문자 서비스를<br />간편하게 만나보세요.
          </div>
          <div class="subComment1">모든 종류의 인터넷 SMS를 편리하게.</div>
          <div class="box1">
            <img class="boximg" src="../../public/images/49917@2x.png" />
            <span class="boxtitle">메세지 용량에<br />제한 받지 않고 전송</span>
            <span class="boxcontent"
              >메시지 용량 걱정없이 단문 메시지는<br />물론 장문, 사진까지
              전송이 가능합니다.</span
            >
          </div>
          <div class="box2">
            <img class="boximg" src="../../public/images/49918@2x.png" />
            <span class="boxtitle">모든 종류의<br />문자 메시지를 한번에</span>
            <span class="boxcontent"
              >메시지 용량 걱정없이 단문 메시지는<br />물론 장문, 사진까지
              전송이 가능합니다.</span
            >
          </div>
          <div class="box3">
            <img class="boximg" src="../../public/images/49919@2x.png" />
            <span class="boxtitle">간편한 광고<br />문자 메시지 설정</span>
            <span class="boxcontent"
              >광고 설정 버튼 클릭 한번으로<br />080 수신 거부 번호가
              적용됩니다.</span
            >
          </div>
        </div>
        <!-- 첫번째 설명 끝 -->

        <!-- 두번째 설명 시작 -->
        <div class="main2_2">
          <div class="bulbIcon">
            <img src="../../public/images/49921@2x.png" />
          </div>
          <div class="mainComment2">
            샌드고의 다양한<br />기능들을 살펴보세요
          </div>
          <div class="subComment2">고객님들의 입장에서 고민하였습니다.</div>

          <div class="box1">
            <span class="title">자주 전송하는 내용이 있나요?</span>
            <span class="content"
              >템플릿으로 메시지 내용을<br />저장하여 간편하게 전송하세요.</span
            >
            <img src="../../public/images/140@2x.png" />
          </div>
          <div class="box2">
            <span class="title">크레딧 구매 시, 보너스 크레딧 증정</span>
            <span class="content"
              >크레딧 상품을 구매하면 상품 별 <br />
              보너스 크레딧을 증정합니다</span
            >
            <img src="../../public/images/49952@2x.png" />
          </div>
          <div class="box3">
            <span class="title">전송 후 바로 발송확인 가능</span>
            <span class="content"
              >메시지 전송 후 바로 발송현황 창에서<br />현재 메시지 전송 현황을
              알려드립니다</span
            >
            <img src="../../public/images/137@2x.png" />
          </div>
          <div class="box4">
            <span class="title">누르면 바로 전송완료</span>
            <span class="content"
              >누르자마자 수신인에게<br />바로 전달됩니다.</span
            >
            <div class="img"></div>
          </div>
        </div>
        <!-- 두번째 설명 끝 -->

        <!-- 세번째 설명 시작 -->
        <div class="main2_3">
          <div class="checkIcon">
            <img src="../../public/images/49923@2x.png" />
          </div>
          <div class="mainComment3">
            정확도와 다양함은 물론<br />신뢰할 수 있는 보안까지
          </div>
          <div class="subComment3">고객님들의 간편함을 고민하였습니다.</div>

          <div class="box1">
            <span class="title">일반 SMS는 기본, 카카오톡까지</span>
            <span class="content">종류와 상관없이 모두 전송해 드립니다</span>
            <img src="../../public/images/49915@2x.png" />
          </div>
          <div class="box2">
            <span class="title">강력한 보안을 제공합니다.</span>
            <span class="content"
              >신뢰할 수 있는 최신의 보안 시스템을<br />적용하여 개인정보를
              보호합니다</span
            >
            <img src="../../public/images/49949@2x.png"/>
          </div>
          <div class="box3">
            <span class="title">놀라운 수신율을 경험해 보세요</span>
            <span class="content"
              >샌드고의 정확한 수신율은 99.8%에 달합니다</span
            >
            <img src="../../public/images/148@2x.png" />
          </div>
        </div>
        <!-- 세번째 설명 끝 -->
      </div>
    </dvv>
  </section>
  <!-- 메인 컨텐츠 끝 -->

  <!-- 끝 컨텐츠 시작 -->
  <section class="main3">
    <div class="layout3">
      <div class="endcontents">
        <div class="text_end">
          비즈니스 광고의 시작, <br />
          이제 샌드고와 함께 하세요
        </div>
        <div class="messagebutton" @click="goToPage(`/message`)">
          메세지바로가기
        </div>
      </div>
    </div>
  </section>
  <!-- 끝 컨텐츠 끝 -->
</template>

<script>
export default {
  name: "mainPage",
  // 버튼 클릭시 페이지 이동
  // 라우터에서 컴포넌트 변경해서 실행
  data() {},

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
