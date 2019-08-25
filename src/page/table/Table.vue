<template>
  <div>
    <LyTable
      :columns="columns"
      :data="data"
    ></LyTable>
    <div style="padding:5px;">标题不显示最后一行</div>
    <LyTable
      :columns="columns"
      :data="data"
      :showLastHeaderLine="false"
    ></LyTable>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: this.getColumns1(),
      data: this.getData1()
    };
  },
  methods: {
    getColumns() {
      return [
        {
          title: "姓名",
          key: "name"
        },
        {
          title: "性别",
          key: "gender"
        },
        {
          title: "年龄",
          key: "age"
        }
      ];
    },
    getData() {
      return [
        {
          name: "张三",
          gender: "男",
          age: 23
        },
        {
          name: "李四",
          gender: "男",
          age: 33
        },
        {
          name: "小红",
          gender: "女",
          age: 21
        }
      ];
    },
    getColumns1() {
      return [
        {
          title: "A",
          key: "A"
        },
        {
          title: "B",
          key: "B"
        },
        {
          title: "C",
          key: "C",
          render: ( h,{ row }) => {
            return h("div", row.C+'--');
          }
        },
        {
          title: "D合并E,F",
          children: [
            {
              title: "E",
              key: "E"
            },
            {
              title: "F",
              key: "F"
            }
          ]
        },
        {
          title: "G",
          key: "G"
        }
      ];
    },
    getData1() {
      let datas = [];
      for (let i = 0; i < 10; i++) {
        let data = {};
        data["index"] = i;
        for (let k = 0; k < 10; k++) {
          let key = String.fromCharCode(k + 65);
          data[key] = key + "__" + i;
        }
        datas.push(data);
      }
      return datas;
    }
  }
};
</script>



