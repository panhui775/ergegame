cc.Class({
    extends: cc.Component,

    properties: {
        //移速
        speed: 0,
        //重置X
        resetX: 0
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },
    update(dt) {
        //获取当前节点x位子
        var x = this.node.x
        x += this.speed * dt
        if (x < this.resetX) {
            x -= this.resetX
        }
        this.node.x = x
    },

});
