
/** 内置字典 */
const g_oInnerKV = {};

let nTmpIndex = -1;
g_oInnerKV["USER_LOGIN_CMD"]          = g_oInnerKV[++nTmpIndex] = "UserLoginCmd";
g_oInnerKV["USER_LOGIN_RESULT"]       = g_oInnerKV[++nTmpIndex] = "UserLoginResult";
g_oInnerKV["USER_QUIT_RESULT"]        = g_oInnerKV[++nTmpIndex] = "UserQuitResult";

// @export
module.exports = {
    /**
     * 识别消息
     * 
     * @param {string | number} oMsgCode 消息代码
     * @return {string}
     */
    recognize(oMsgCode) {
        return g_oInnerKV[oMsgCode];
    },
};
