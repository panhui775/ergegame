var state = cc.Enum({
    xz: -1,
    Beat: -1,
    Skill1: -1,
    Skill2: -1,
    Skill3: -1
})
cc.Class({
    extends: cc.Component,

    properties: {

        _state: {
            default: state.xz,
            type: state
        },

        state: {
            get: function () {
                return this._state
            },
            set: function (val) {
                if (val !== this._state) {
                    this._state = val;
                    this.updateAnimation();
                }
            }
        }
    },
    updateAnimation() {
        var animName = state[this._state]
        cc.log(animName);
        this.anim.stop()
        this.anim.play(animName)
    },


    // LIFE-CYCLE CALLBACKS:
    init: function () {
        Global.MyHero = this;
        this.anim = this.getComponent(cc.Animation)
        this.anim.play("xz")
    },
    stratRun() {
        this.state = state.xz;
    },
    // onLoad () {},

    start() {

    },

    // update (dt) {},
});
