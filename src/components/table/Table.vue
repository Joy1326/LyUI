<template>
  <LyLayout :fit="fit">
    <LyLayoutPanel>
      <table
        cellspacing="0"
        cellpadding="0"
        border="0"
        class="ly-table-container"
      >
        <thead>
          <tr
            v-for="(colRows,colRowsIndex) in columnsRows"
            :key="colRowsIndex"
          >
            <th
              v-for="(col,colIndex) in colRows"
              :key="colIndex"
              :rowspan="col.rowSpan"
              :colspan="col.colSpan"
              class="ly-table-th ly-table-cell"
            >
              {{col.title}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row,rowIndex) in dataList"
            :key="rowIndex"
            class="ly-table-tbody-tr"
          >
            <td class="ly-table-td ly-table-cell" v-for="(col,colIndex) in allColumns" :key="colIndex">
              {{row[col.key]}}
            </td>
          </tr>
        </tbody>
      </table>
    </LyLayoutPanel>
  </LyLayout>
</template>
<script>
import LyLayout from "../layout";
const LyLayoutPanel = LyLayout.Panel;
import { transformColumnsToRows,transformAllColumns } from "./util";
export default {
  components: { LyLayout, LyLayoutPanel },
  props: {
    columns: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    fit: {
      type: Boolean,
      default: false
    },
    showLastHeaderLine:{
      type:Boolean,
      default:true
    }
  },
  data() {
    let columnsRows = transformColumnsToRows(this.columns,this.showLastHeaderLine);
    let allColumns = transformAllColumns(this.columns);
    return {
      dataList: this.data,
      columnsRows: columnsRows,
      allColumns:allColumns
    };
  },
  mounted() {
    // console.log(this.data)
  }
};
</script>
<style scoped>
.ly-table-container {
  color: #515a6e;
  font-size: 12px;
  border-collapse: collapse;
  box-sizing: border-box;
  width: 100%;
  table-layout: fixed;
}
.ly-table-th {
  background-color: #f8f8f9;
  font-weight: bold;
}
.ly-table-container,
.ly-table-cell {
  border: 1px solid #e8eaec;
  box-sizing: border-box;
}
.ly-table-tbody-tr:hover {
  background-color: rgb(237, 247, 255);
}
</style>


