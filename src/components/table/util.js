
import { deepCopy } from '../utils/utils';
export function transformColumnsToRows(columns, showLastHeaderLine = true) {
    let opt = {
        maxLevel: 1
    };
    let cloneColumns = deepCopy(columns);
    cloneColumns.forEach(column => {
        column.level = 1;
        traversalFn(column, false, opt);
    });
    return traverAndGetRows(cloneColumns, opt.maxLevel, showLastHeaderLine ? 0 : 1);
}
function traverAndGetRows(columns, maxLevel, subrRows) {
    const rows = [];
    for (let i = 0; i < maxLevel; i++) {
        rows.push([]);
    }
    let allColumns = transformAllColumns(columns, true);
    allColumns.forEach((column) => {
        if (!column.children) {
            column.rowSpan = maxLevel - column.level + 1 - subrRows;
            if (column.rowSpan === 0) {
                column.rowSpan = 1;
            }
        } else {
            column.rowSpan = 1;
        }
        rows[column.level - 1].push(column);
    });
    if (subrRows > 0) {
        return rows.splice(0, rows.length - subrRows);
    }
    return rows;
}
function traversalFn(column, parent, opt) {
    if (parent) {
        column.level = parent.level + 1;
        if (opt.maxLevel < column.level) {
            opt.maxLevel = column.level;
        }
    }
    if (column.children) {
        let colSpan = 0;
        column.children.forEach((subColumn) => {
            traversalFn(subColumn, column, opt);
            colSpan += subColumn.colSpan;
        });
        column.colSpan = colSpan;
    } else {
        column.colSpan = 1;
    }
}
export function transformAllColumns(columns, forTableHead) {
    const cloneColumns = deepCopy(columns);
    const result = [];
    cloneColumns.forEach((column) => {
        if (column.children) {
            if (forTableHead) {
                result.push(column);
            }
            result.push.apply(result, transformAllColumns(column.children, forTableHead));
        } else {
            result.push(column);
        }
    });
    return result;
}
