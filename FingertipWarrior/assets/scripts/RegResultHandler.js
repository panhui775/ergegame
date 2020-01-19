// @import
const mod_UserLoginResultHandler = require("./CustomResultHandler/UserLoginResultHandler");
const mod_MsgRecognizer = require("./MsgRecognizer");
const mod_MsgSender = require("./MsgSender");

// @export
module.exports = {
    /**
     * 注册结果处理器
     */
    regResultHandler() {
        // 结果处理器字典
        let oResultHandlerKV = {
            "UserLoginResult": mod_UserLoginResultHandler
        };

        // @override
        mod_MsgSender.onReceiveMsg = (oMsg) => {
            if (!oMsg || 
                !oMsg.msgCode) {
                return;
            }
    
            // 获取消息代号
            let strMsgCode = oMsg.msgCode;
            // 识别消息类型
            let strMsgType = mod_MsgRecognizer.recognize(strMsgCode);
            if (!strMsgType) {
                // 如果无法识别为消息类型,
                console.error(`无法识别为消息类型, msgCode = ${strMsgCode}`);
                return;
            }

            try {
                // 加载处理器
                let oResultHandler = oResultHandlerKV[strMsgType];
                // 处理消息
                oResultHandler.handle(oMsg.msgBody);
            }
            catch (oErr) {
                console.error(oErr);
            }
        }
    }
};
