<template>
  <div v-cloak>
    <!-- <i class="fab fa-earlybirds"></i>
    <i class="fas fa-camera-retro"></i> -->
    <div style="display: flex; justify-content: center; margin: 10px 0px">
      <button @click="adjustMonth(-1)">
        <i class="fas fa-angle-left"></i>
      </button>
      <h1 style="margin: 0px 20px">
        {{ calenderDate.year }}年 {{ calenderDate.month + 1 }} 月
      </h1>
      <button @click="adjustMonth(1)">
        <i class="fas fa-angle-right"></i>
      </button>
    </div>
    <div>
      <button @click="adjustYear(-1)">
        <i class="fas fa-angle-double-left"></i>上一年
      </button>
      <button @click="setToday()" class="now">今天</button>
      <button @click="adjustYear(1)">
        下一年<i class="fas fa-angle-double-right"></i>
      </button>
    </div>
    <div class="calender">
      <div class="Weekday">
        <div>日</div>
        <div>一</div>
        <div>二</div>
        <div>三</div>
        <div>四</div>
        <div>五</div>
        <div>六</div>
      </div>
      <div class="week" v-for="i in 6" :key="i + 'week'">
        <div
          class="day"
          v-for="j in 7"
          :key="j + 'day'"
          :data-date="calenderMonth[(i - 1) * 7 + j - 1].date"
          :class="{
            today:
              calenderMonth[(i - 1) * 7 + j - 1].year === today.year &&
              calenderMonth[(i - 1) * 7 + j - 1].month === today.month &&
              calenderMonth[(i - 1) * 7 + j - 1].date === today.date,
            other:
              calenderMonth[(i - 1) * 7 + j - 1].month !== calenderDate.month,
          }"
          @click="$emit('handlerDate', calenderMonth[(i - 1) * 7 + j - 1])"
        >
          <p>{{ handlerEvent(calenderMonth[(i - 1) * 7 + j - 1]) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import dayjs from "dayjs";
export default {
  props: {
    handlerEvent: {
      type: Function,
    },
  },
  data() {
    return {
      today: {
        year: 0,
        month: 0,
        date: 0,
        day: 0,
      },
      calenderDate: {
        year: 0,
        month: 0,
        date: 0,
        day: 0,
      },
    };
  },
  computed: {
    calenderFirstDay() {
      const mdate = new Date(
        this.calenderDate.year,
        this.calenderDate.month,
        1
      );
      const date = new Date(
        this.calenderDate.year,
        this.calenderDate.month,
        1 - mdate.getDay()
      );
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        date: date.getDate(),
        day: date.getDay(),
      };
    },
    calenderMonth() {
      const data = [];
      let date;
      for (let i = 0; i < 42; i++) {
        date = new Date(
          this.calenderFirstDay.year,
          this.calenderFirstDay.month,
          this.calenderFirstDay.date + i
        );
        data.push({
          year: date.getFullYear(),
          month: date.getMonth(),
          date: date.getDate(),
          day: date.getDay(),
        });
      }
      return data;
    },
  },
  methods: {
    setToday() {
      const date = new Date();
      this.today.year = this.calenderDate.year = date.getFullYear();
      this.today.month = this.calenderDate.month = date.getMonth(); //month 0-11，顯示要+1
      this.today.date = this.calenderDate.date = date.getDate();
      this.today.day = this.calenderDate.day = date.getDay();
    },
    adjustYear(val) {
      this.calenderDate.year += val;
    },
    adjustMonth(val) {
      let month = this.calenderDate.month + val;
      if (month > 11) {
        this.adjustYear(1);
        this.calenderDate.month = 0;
      } else if (month < 0) {
        this.adjustYear(-1);
        this.calenderDate.month = 11;
      } else {
        this.calenderDate.month = month;
      }
    },
  },
  mounted() {
    this.setToday();
  },
};
</script>
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  border: none;
  background: #fff;
}
[v-cloak] {
  display: none;
}
.Weekday,
.week {
  display: flex;
  border-bottom: 1px solid #ddd;
}
.Weekday > div {
  flex: 1 1 0;
  line-height: 30px;
}
.week {
  border-right: 1px solid #ddd;
}
.week > div {
  position: relative;
  flex: 1 1 0;
  line-height: 20px;
  height: 80px;
  border-left: 1px solid #ddd;
  color: #566c73;
}
.week > div::before {
  position: absolute;
  content: attr(data-date);
  top: 0;
  width: 30px;
  border-radius: 2px;
  right: 0;
}
.week > div > span {
  color: #577c8a;
}
.today::before {
  color: #fff;
  background: #000;
}
.now {
  color: #fff;
  background: #000;
  border-radius: 10px;
  margin: 0px 10px 20px 10px;
}
.other {
  background: #bbb;
  color: #ddd;
}
</style>
