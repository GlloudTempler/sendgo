<template>
  <section class="message_layout_all">
    <!-- 메뉴바 시작 -->
    <div class="message_topmenu">
      <div class="message_menubar">
        <ul>
          <li
            v-for="(item, index) in menulists"
            :key="index"
            v-html="item.menutext"
            @click="goToPage(item.link)"
          ></li>
        </ul>
      </div>
    </div>
    <!-- 메뉴바 끝 -->

    <!-- 메시지 전송 시작 -->
    <div class="sendMessage_layout">
      <!-- 상단 메뉴 -->
      <div class="top_content">
        <div class="title">메시지 전송</div>

        <div class="sub_menu">
          <ul>
            <li
              v-for="(item, index) in subMenulists"
              :key="index"
              v-html="item.menutext"
            ></li>
          </ul>
        </div>

        <div class="content">
          <div class="content1">
            <div class="circle"></div>
            <span
              >간편하게 한 화면에서 단문, 장문 포토메세지를 발송할 수
              있습니다.</span
            >
          </div>

          <div>
            <div class="circle"></div>
            <span
              >90byte 초과시 장문문자로 자동 전환되며, 최대 2,000byte까지 작성이
              가능합니다.</span
            >
          </div>
        </div>
      </div>
      <!-- 상단 메뉴 -->

      <!-- 내용 -->
      <div class="main_content">
        <div class="send_message_layout">
          <!-- 수신번호 시작 -->
          <div class="content1">
            <div class="title">수신번호</div>
            <input
              class="input_phone"
              type="number"
              placeholder="휴대폰번호 (숫자만 입력)"
            />
            <div class="insert_btn">
              <img src="../../public/images/49954@2x.png" /><span>추가</span>
            </div>
            <div class="view_phone">
              <span class="content"
                >번호를 입력하거나 후 엔터 혹은 추가하기를 클릭해 주세요. <br />
                최대 1만 건까지 붙여넣기 가능합니다.</span
              >
              <div class="count_phone">
                총 <span class="count_phone_number">{{ phone_list_count }}</span
                >명
              </div>
              <span class="delete_all">모두 삭제</span>
            </div>

            <ul>
              <li>
                <img src="../../public/images/49936@2x.png" /><span
                  >주소록 불러오기</span
                >
              </li>
              <li>
                <img src="../../public/images/49938@2x.png" /><span
                  >파일 불러오기</span
                >
              </li>
              <li>
                <img src="../../public/images/49940@2x.png" /><span
                  >최근 전송 내역</span
                >
              </li>
            </ul>
          </div>
          <!-- 수신번호 끝 -->

          <!-- 발신번호 시작 -->
          <div class="content2">
            <div class="title">발신번호</div>
            <div class="select_design">
              <select name="select_number">
                <option
                  v-for="(item, index) in numberlists"
                  :key="index"
                  v-html="item.phoneNumber"
                ></option>
              </select>
              <img class="down_arrow" src="../../public/images/46623@2x.png" />
            </div>
          </div>
          <!-- 발신번호 끝 -->

          <!-- 메세지 입력 시작 -->
          <div class="content3">
            <!-- 메세지 제목 시작 -->
            <div class="title">메세지 입력</div>
            <div class="message_input_layout">
              <input
                class="title_input"
                type="text"
                placeholder="제목을 입력해주세요.(단문 SMS는 제외, 최대 30byte)"
              />
              <!-- 메세지 제목 끝 -->

              <!-- 메세지 info 시작 -->
              <div class="information">
                <div class="sms">단문 SMS</div>
                <span class="byte">
                  <span class="byte_count">{{ byte_count }}</span> / 90byte
                </span>
                <div class="reset_img"></div>
              </div>
              <!-- 메세지 info 끝 -->

              <!-- 메세지 입력란 시작 -->
              <div class="content_input_layout">
                <textarea
                  class="content_input"
                  type="text"
                  placeholder="내용을 입력해 주세요. 90byte 초과 시 장문 문자로,&#10;이미지 추가 시 포토 문자로 자동 전환 됩니다."
                ></textarea>
                <ul>
                  <li>치환코드</li>
                  <li>템플릿</li>
                  <li>문자도구</li>
                </ul>
              </div>
              <!-- 메세지 입력란 끝 -->
              <div class="section_line"></div>
              <!-- 광고성 문자 체크란 시작 -->
              <div class="add_sms">
                <div class="title">광고성 문자(080 수신거부번호 포함)</div>
                <div class="check_img"></div>
              </div>
              <!-- 광고성 문자 체크란 끝 -->

              <!-- add_image 시작 -->
              <div class="add_image">
                <div class="title">이미지 추가</div>
                <div class="add_image_button"></div>

                <div class="content">
                  <div>
                    <div class="circle"></div>
                    <span>이미지는 최대 3장까지 첨부 가능합니다.</span>
                  </div>

                  <div>
                    <div class="circle"></div>
                    <span>이미지 파일 형식은 JPG, PNG, GIF만 가능합니다.</span>
                  </div>
                </div>
              </div>
              <!-- add_image 끝 -->
            </div>
          </div>
          <!-- 메세지 입력 끝 -->

          <!-- 핸드폰 화면 시작 -->
          <div class="screen_layout">
            <div class="screen">
              <img src="../../public/images/46623@2x.png" />
            </div>
          </div>
          <!-- 핸드폰 화면 끝 -->
        </div>
        <!-- 발송 설정 시작 -->
        <div class="send_setting_layout">
          <div class="title">발송 설정</div>
          <transition name="send_setting_check">
            <ul v-if="sendSetting == 'now'">
              <li class="selected" @click="setSendSetting('now')">
                <img src="../../public/images/46626@2x.png" />즉시 발송
              </li>
              <li @click="setSendSetting('late')">
                <img src="../../public/images/46627@2x.png" />예약 발송
              </li>
            </ul>
          </transition>

          <transition name="send_setting_check">
            <ul v-if="sendSetting == 'late'">
              <li @click="setSendSetting('now')">
                <img src="../../public/images/46626@2x.png" />즉시 발송
              </li>
              <li class="selected" @click="setSendSetting('late')">
                <img src="../../public/images/46627@2x.png" />예약 발송
              </li>
            </ul>
          </transition>
        </div>
        <!-- 발송 설정 끝 -->
      </div>
      <!-- 내용 -->

      <!-- 발송하기 시작 -->
      <div class="send_layout">
        <div class="send_btn">발송하기</div>
      </div>
      <!-- 발송하기 끝-->
    </div>
    <!-- 메시지 전송 끝 -->
  </section>
</template>

<script>
// import router from '@/routes';

export default {
  name: "message_page",
  data() {
    return {
      menulists: [
        { menutext: "메시지 전송", link: "/message" },
        { menutext: "발신번호 관리", link: "/message" },
        { menutext: "주소록 관리", link: "/message" },
        { menutext: "발송결과", link: "/message" },
      ],
      subMenulists: [
        { menutext: "문자 메시지" },
        { menutext: "알림톡 (카카오)" },
        { menutext: "친구톡 (카카오)" },
      ],

      phone_list_count: 0,

      numberlists: [
        { phoneNumber: "전송할 발신번호 선택" },
        { phoneNumber: "추가된 번호 2" },
        { phoneNumber: "추가된 번호 3" },
      ],

      byte_count: 0,

      sendSetting: "now",
    };
  },

  methods: {
    goToPage(target) {
      // 현재 페이지와 라우터의 경로가 같으면 실행하지 않음
      if (this.$router.currentRoute.value.path !== target) {
        this.$router.push(target);
      }
    },

    setSendSetting(target) {
      // 클릭 시 발송 모드 변경
      if (this.sendSetting !== target) {
        this.sendSetting = target;
      }
    },
  },
};
</script>
