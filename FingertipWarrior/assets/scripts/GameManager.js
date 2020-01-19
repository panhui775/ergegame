var Myhero = require("./hero/MyHero")

//游戏状态
var state = cc.Enum({
    logon: -1,
    run: -1,
    home: -1,
    factory: -1
})


var GameManager = cc.Class({
    extends: cc.Component,

    properties: {
        myhero:Myhero
    },
    statics: {
        state
    },
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        window.Global.GameManager = GameManager;
        this.state = state.run;
        this.myhero.init();
        
        
    },

    start() {
        this.state = state.run;
        this.myhero.stratRun();
    },

    // update (dt) {},
});
