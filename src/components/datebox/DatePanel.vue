<template>
  <div class="ly-datepanel-wrap">
    <div class="ly-datebox-header">
      <Row>
        <LyCol>
          <Icon
            @click="preYearHandler"
            :fontSize="20"
            type="icon-left-db"
            class="ly-curser-pointer"
          ></Icon>
          <Icon
            @click="preMonthHandler"
            :fontSize="30"
            type="icon-back"
            class="ly-curser-pointer"
          ></Icon>
        </LyCol>
        <LyCol
          style="justify-content: center;"
          flex="auto"
        >
          <span class="ly-curser-pointer">{{dateHeaderTimeStr[0]}}</span>年<span class="ly-curser-pointer">{{dateHeaderTimeStr[1]}}</span>月
        </LyCol>
        <LyCol style="justify-content:flex-end;">
          <Icon
            @click="nextMonthHandler"
            type="icon-right"
            class="ly-curser-pointer"
          ></Icon>
          <Icon
            @click="nextYearHandler"
            type="icon-right-db"
            class="ly-curser-pointer"
          ></Icon>
        </LyCol>
      </Row>
    </div>
    <div class="ly-datebox-body">
      <table
        border="0"
        class="ly-datebox-layout"
      >
        <thead>
          <tr>
            <td
              v-for="(item,index) in weekHeaderText"
              :key="index"
            >
              <span
                class="ly-datebox-text"
                v-text="item"
              ></span>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(timeRows,rowIndex) in times"
            :key="rowIndex"
          >
            <td
              v-for="time in timeRows"
              :key="time.key"
              class="ly-curser-pointer ly-datebox-cell"
              :class="time.tag ==='current'?'ly-target-month':'ly-else-month'"
              @click="dateClick(time)"
            >
              <span
                class="ly-datebox-text"
                v-text="time.text"
              ></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="ly-datebox-footer">
      <Button
        @click="cancelDateHandler"
        size="small"
      >清空</Button>
      <Button
        style="margin-left:10px;"
        size="small"
      >确定</Button>
    </div>
  </div>
</template>
<script>
import Row from "../row";
import LyCol from "../row/Col.vue";
import Icon from "../icon";
import Button from "../button";
import {
  getTime,
  getTimeStartOf,
  getTimeDaysInMonth,
  getTimeWeekday,
  getTimeSubtract,
  getTimeAdd
} from "../utils/time";
export default {
  components: { Row, LyCol, Icon, Button },
  inject: {
    lySelect: {
      default: ""
    }
  },
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      weekHeaderText: [],
      dateHeaderTime: this.getDateHeaderTime(this.value),
      times: []
    };
  },
  watch: {
    value(val) {
      this.dateHeaderTime = this.getDateHeaderTime(val);
      this.initTime(this.dateHeaderTime);
    }
  },
  mounted() {
    this.initDateHead();
    var time = this.dateHeaderTime ? this.dateHeaderTime : new Date();
    this.initTime(time);
    this.$nextTick(() => {
      if (this.value) {
        this.setDefaultValue(this.value);
      }
    });
  },
  computed: {
    dateHeaderTimeStr() {
      let split = this.dateHeaderTime.split("-");
      return [+split[0], +split[1]];
    }
  },
  methods: {
    getDateHeaderTime(value = this.value) {
        return value ? value : getTime(new Date());
    },
    initDateHead() {
      let str = ["日", "一", "二", "三", "四", "五", "六"];
      this.weekHeaderText = str;
    },
    initTime(time) {
      let ymTime = getTime(time, { fmt: "YYYY-MM" });
      let totalDays = getTimeDaysInMonth(time);
      // 获取月份开始日期对应的星期
      let weekDay = getTimeWeekday(getTimeStartOf(time, "month"));
      let times = [[]];
      let level = 0;

      if (weekDay > 0) {
        let lastMontDays = getTimeDaysInMonth(
          getTimeSubtract(time, 1, "month")
        );
        for (let i = weekDay - 1; i >= 0; i--) {
          let v = lastMontDays - i;
          v = v < 10 ? "0" + v : v;
          times[level].push({
            key: v,
            text: +v,
            tag: "pre",
            time: getTimeSubtract(time, 1, "month", "YYYY-MM") + "-" + v
          });
        }
      }

      for (let i = 0; i < totalDays; i++) {
        if (times[level].length % 7 === 0) {
          level++;
          times.push([]);
        }
        let v = i + 1;
        v = v < 10 ? "0" + v : v;
        times[level].push({
          key: v,
          text: +v,
          tag: "current",
          time: ymTime + "-" + v
        });
      }
      if (times[level].length < 7) {
        for (let i = 0, len = 7 - times[level].length; i < len; i++) {
          let v = i + 1;
          v = v < 10 ? "0" + v : v;
          times[level].push({
            key: v,
            text: +v,
            tag: "next",
            time: getTimeAdd(time, 1, "month", "YYYY-MM") + "-" + v
          });
        }
      }

      this.times = times;
    },
    preYearHandler() {
      this.dateHeaderTime = getTimeSubtract(this.dateHeaderTime, 1, "year");
      this.initTime(this.dateHeaderTime);
    },
    preMonthHandler() {
      this.dateHeaderTime = getTimeSubtract(this.dateHeaderTime, 1, "month");
      this.initTime(this.dateHeaderTime);
    },
    nextMonthHandler() {
      this.dateHeaderTime = getTimeAdd(this.dateHeaderTime, 1, "month");
      this.initTime(this.dateHeaderTime);
    },
    nextYearHandler() {
      this.dateHeaderTime = getTimeAdd(this.dateHeaderTime, 1, "year");
      this.initTime(this.dateHeaderTime);
    },
    setIptValue(value) {
      if (this.lySelect !== "") {
        this.lySelect.$emit("on-selected", {
          text: value,
          value: value
        });
      }
    },
    dateClick(timeItem) {
      let { time } = timeItem;
      this.setIptValue(time);
      this.$emit("on-selected", time);
    },
    setDefaultValue(value) {
      if (value) {
        this.setIptValue(value);
      }
    },
    cancelDateHandler() {
      this.setIptValue("");
      this.$emit("input", "");
    }
  }
};
</script>
<style scoped>
.ly-datebox-body {
  min-height: 150px;
  border-top: 1px solid #ece7e7;
  border-bottom: 1px solid #ece7e7;
  box-sizing: border-box;
}
.ly-datebox-layout {
  width: 100%;
  /* border: 1px solid gray; */
  border-collapse: collapse;
  text-align: center;
  table-layout: fixed;
}
/* .ly-datebox-layout td,
.ly-datebox-layout th {
  border: 1px solid gray;
} */
.ly-datebox-header {
  padding: 5px;
}
.ly-datebox-footer {
  padding: 5px;
  text-align: right;
}
/* .ly-datebox-cell {
  cursor: pointer;
} */
.ly-curser-pointer {
  cursor: pointer;
}
.ly-target-month {
  color: #3f51b5;
}
.ly-else-month {
  color: #e2dcdc;
}
</style>