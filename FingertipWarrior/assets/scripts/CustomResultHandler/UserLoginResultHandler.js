// @export
module.exports = {
    /** @override */
    handle(oUserLoginResult) {
        if (!oUserLoginResult) {
            return;
        }

        if (!oUserLoginResult.userId || 
            oUserLoginResult.userId <= 0) {
            return;
        }

        // 设置我自己的用户 Id 和用户名称
        window.Global.myUserId = oUserLoginResult.userId;
        window.Global.myUserName = oUserLoginResult.userName;

        
        // 进入游戏场景
        cc.director.loadScene("Game");
        
    }
};
