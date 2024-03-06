<template>
  <section class="credit_layout_all">
    <!-- 메뉴바 시작 -->
    <div class="credit_topmenu">
      <div class="credit_menubar">
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

    <div class="buy_credit_layout">
      <div class="title">크레딧 구매</div>
      <div class="content">
        메시지 전송을 위해 사용할 크레딧 상품을 선택해 주세요
      </div>

      <!-- credit 구매 카드 -->
      <div class="credit_price">
        <div
          class="credit_price_card"
          v-for="(item, index) in creditlists"
          :key="index"
        >
          <div class="card_title">
            {{ Number(item.price).toLocaleString() }} 원
          </div>
          <div class="card_content">
            총 {{ Number(item.message_count).toLocaleString() }}건
            발송가능합니다<br />1건당 15원에 결제가능합니다
          </div>

          <div class="credit">
            {{ Number(item.credit + item.bonuscredit).toLocaleString() }} 크레딧
          </div>
          <div class="bonus_percent">
            + {{ item.credit / item.bonuscredit }}%
          </div>

          <div class="credit_info">
            <div class="basic_credit">
              기본 크레딧
              <span>{{ Number(item.credit).toLocaleString() }}</span>
            </div>
            <div class="bonus_credit">
              추가 크레딧
              <span>+ {{ Number(item.bonuscredit).toLocaleString() }}</span>
            </div>
          </div>

          <div class="buy_btn">구매하기</div>
        </div>
      </div>
      <!-- credit 구매 카드 -->
    </div>
  </section>
</template>

<script>
export default {
  name: "credit_page",
  data() {
    return {
      menulists: [
        { menutext: "크레딧 구매", link: "/credit" },
        { menutext: "크레딧 내역", link: "/credit" },
      ],
      creditlists: [
        {
          price: 30000,
          credit: 300000,
          bonuscredit: 30000,
          message_count: 66667,
        },
        {
          price: 10000,
          credit: 100000,
          bonuscredit: 10000,
          message_count: 76667,
        },
        {
          price: 30000,
          credit: 300000,
          bonuscredit: 30000,
          message_count: 66667,
        },
        {
          price: 10000,
          credit: 100000,
          bonuscredit: 10000,
          message_count: 76667,
        },
      ],
    };
  },

  methods: {
    goToPage(target) {
      // 현재 페이지와 라우터의 경로가 같으면 실행하지 않음
      if (this.$router.currentRoute.path !== target) {
        this.$router.push(target);
      }
    },
  },
};
</script>
