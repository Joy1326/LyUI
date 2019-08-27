export default [
    {
        name: "一级-01",
        value: '1000',
        children: [{
            name: '二级-01-01',
            value: '1001'
        }]
    }, {
        name: "一级-02",
        value: '1002',
        children: [{
            name: '二级-02-01',
            value: '100201'
        }, {
            name: '二级-02-02',
            value: '100202',
            children: [{
                value: '10020201',
                name: '三级-02-02-01'
            }]
        }]
    }
];