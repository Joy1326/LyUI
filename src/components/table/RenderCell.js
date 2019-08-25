export default {
    name: "lyRendercell",
    functional: true,
    props: ["row", "column", "render"],
    render: function (h, ctx) {
        let params = { row: ctx.props.row };
        return ctx.props.render(h,params);
    }
};