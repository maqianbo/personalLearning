<template>
  <div class="page bfh Calendar">
    <!-- :agoDayHide="1514937600"
    :futureDayHide="1525104000"-->
    <Calendar
      ref="Calendar"
      v-on:choseDay="clickDay"
      v-on:changeMonth="changeDate"
      v-on:isToday="clickToday"
      :markDate="tagDays"
      :sundayStart="false"
      :textTop="[ '一', '二', '三', '四', '五', '六','日']"
    ></Calendar>
  </div>
</template>

<script>
import Calendar from 'vue-calendar-component';

import moment from 'moment';
export default {
  components: {
    Calendar
  },
  data() {
    return {
      tagDays: [], //标注的日期
      today: ''
    };
  },
  created() {
    this.today = moment().format('YYYY-MM-DD');
    let nextDay = moment(this.today).add(1, 'days');
    nextDay = moment(nextDay).format('YYYY-MM-DD');
    this.tagDays.push(nextDay);
  },
  methods: {
    // this.$refs.Calendar.PreMonth();  //调用方法实现转到上个月
    // ✅this.$refs.Calendar.NextMonth(); //调用方法实现转到下个月
    // ✅ this.$refs.Calendar.ChoseMonth('2018-12-12'); //调用方法实现转到某个月
    //✅ this.$refs.Calendar.ChoseMonth('2018-12-12',false); //跳转到18年12月12日 但是不选中当天
    clickDay(data) {
      console.log(data); //选中某天
    },
    changeDate(data) {
      console.log(data); //左右点击切换月份
    },
    clickToday(data) {
      console.log(data); //跳到了本月
    }
  }
};
</script>
<style lang="scss" scoped>
.Calendar .wh_content_all[data-v-2ebcbc83] {
  background-color: teal;
}
</style>