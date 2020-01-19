/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = protobuf;

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameMsg = (function() {

    /**
     * Namespace GameMsg.
     * @exports GameMsg
     * @namespace
     */
    var GameMsg = {};

    /**
     * MsgCode enum.
     * @name GameMsg.MsgCode
     * @enum {string}
     * @property {number} USER_LOGIN_CMD=0 USER_LOGIN_CMD value
     * @property {number} USER_LOGIN_RESULT=1 USER_LOGIN_RESULT value
     * @property {number} USER_QUIT_RESULT=2 USER_QUIT_RESULT value
     */
    GameMsg.MsgCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "USER_LOGIN_CMD"] = 0;
        values[valuesById[1] = "USER_LOGIN_RESULT"] = 1;
        values[valuesById[2] = "USER_QUIT_RESULT"] = 2;
        return values;
    })();

    GameMsg.UserLoginCmd = (function() {

        /**
         * Properties of a UserLoginCmd.
         * @memberof GameMsg
         * @interface IUserLoginCmd
         * @property {string|null} [userName] UserLoginCmd userName
         * @property {string|null} [password] UserLoginCmd password
         */

        /**
         * Constructs a new UserLoginCmd.
         * @memberof GameMsg
         * @classdesc Represents a UserLoginCmd.
         * @implements IUserLoginCmd
         * @constructor
         * @param {GameMsg.IUserLoginCmd=} [properties] Properties to set
         */
        function UserLoginCmd(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLoginCmd userName.
         * @member {string} userName
         * @memberof GameMsg.UserLoginCmd
         * @instance
         */
        UserLoginCmd.prototype.userName = "";

        /**
         * UserLoginCmd password.
         * @member {string} password
         * @memberof GameMsg.UserLoginCmd
         * @instance
         */
        UserLoginCmd.prototype.password = "";

        /**
         * Creates a new UserLoginCmd instance using the specified properties.
         * @function create
         * @memberof GameMsg.UserLoginCmd
         * @static
         * @param {GameMsg.IUserLoginCmd=} [properties] Properties to set
         * @returns {GameMsg.UserLoginCmd} UserLoginCmd instance
         */
        UserLoginCmd.create = function create(properties) {
            return new UserLoginCmd(properties);
        };

        /**
         * Encodes the specified UserLoginCmd message. Does not implicitly {@link GameMsg.UserLoginCmd.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.UserLoginCmd
         * @static
         * @param {GameMsg.IUserLoginCmd} message UserLoginCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLoginCmd.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
            if (message.password != null && message.hasOwnProperty("password"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
            return writer;
        };

        /**
         * Encodes the specified UserLoginCmd message, length delimited. Does not implicitly {@link GameMsg.UserLoginCmd.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.UserLoginCmd
         * @static
         * @param {GameMsg.IUserLoginCmd} message UserLoginCmd message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLoginCmd.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLoginCmd message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.UserLoginCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.UserLoginCmd} UserLoginCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLoginCmd.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.UserLoginCmd();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userName = reader.string();
                    break;
                case 2:
                    message.password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserLoginCmd message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.UserLoginCmd
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.UserLoginCmd} UserLoginCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLoginCmd.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLoginCmd message.
         * @function verify
         * @memberof GameMsg.UserLoginCmd
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLoginCmd.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.password != null && message.hasOwnProperty("password"))
                if (!$util.isString(message.password))
                    return "password: string expected";
            return null;
        };

        /**
         * Creates a UserLoginCmd message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.UserLoginCmd
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.UserLoginCmd} UserLoginCmd
         */
        UserLoginCmd.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.UserLoginCmd)
                return object;
            var message = new $root.GameMsg.UserLoginCmd();
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.password != null)
                message.password = String(object.password);
            return message;
        };

        /**
         * Creates a plain object from a UserLoginCmd message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.UserLoginCmd
         * @static
         * @param {GameMsg.UserLoginCmd} message UserLoginCmd
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLoginCmd.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userName = "";
                object.password = "";
            }
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.password != null && message.hasOwnProperty("password"))
                object.password = message.password;
            return object;
        };

        /**
         * Converts this UserLoginCmd to JSON.
         * @function toJSON
         * @memberof GameMsg.UserLoginCmd
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLoginCmd.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLoginCmd;
    })();

    GameMsg.UserLoginResult = (function() {

        /**
         * Properties of a UserLoginResult.
         * @memberof GameMsg
         * @interface IUserLoginResult
         * @property {number|null} [userId] UserLoginResult userId
         * @property {string|null} [userName] UserLoginResult userName
         * @property {string|null} [heroAvatar] UserLoginResult heroAvatar
         */

        /**
         * Constructs a new UserLoginResult.
         * @memberof GameMsg
         * @classdesc Represents a UserLoginResult.
         * @implements IUserLoginResult
         * @constructor
         * @param {GameMsg.IUserLoginResult=} [properties] Properties to set
         */
        function UserLoginResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLoginResult userId.
         * @member {number} userId
         * @memberof GameMsg.UserLoginResult
         * @instance
         */
        UserLoginResult.prototype.userId = 0;

        /**
         * UserLoginResult userName.
         * @member {string} userName
         * @memberof GameMsg.UserLoginResult
         * @instance
         */
        UserLoginResult.prototype.userName = "";

        /**
         * UserLoginResult heroAvatar.
         * @member {string} heroAvatar
         * @memberof GameMsg.UserLoginResult
         * @instance
         */
        UserLoginResult.prototype.heroAvatar = "";

        /**
         * Creates a new UserLoginResult instance using the specified properties.
         * @function create
         * @memberof GameMsg.UserLoginResult
         * @static
         * @param {GameMsg.IUserLoginResult=} [properties] Properties to set
         * @returns {GameMsg.UserLoginResult} UserLoginResult instance
         */
        UserLoginResult.create = function create(properties) {
            return new UserLoginResult(properties);
        };

        /**
         * Encodes the specified UserLoginResult message. Does not implicitly {@link GameMsg.UserLoginResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.UserLoginResult
         * @static
         * @param {GameMsg.IUserLoginResult} message UserLoginResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLoginResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.userId);
            if (message.userName != null && message.hasOwnProperty("userName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userName);
            if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.heroAvatar);
            return writer;
        };

        /**
         * Encodes the specified UserLoginResult message, length delimited. Does not implicitly {@link GameMsg.UserLoginResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.UserLoginResult
         * @static
         * @param {GameMsg.IUserLoginResult} message UserLoginResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLoginResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLoginResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.UserLoginResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.UserLoginResult} UserLoginResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLoginResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.UserLoginResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.uint32();
                    break;
                case 2:
                    message.userName = reader.string();
                    break;
                case 3:
                    message.heroAvatar = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserLoginResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.UserLoginResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.UserLoginResult} UserLoginResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLoginResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLoginResult message.
         * @function verify
         * @memberof GameMsg.UserLoginResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLoginResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isInteger(message.userId))
                    return "userId: integer expected";
            if (message.userName != null && message.hasOwnProperty("userName"))
                if (!$util.isString(message.userName))
                    return "userName: string expected";
            if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                if (!$util.isString(message.heroAvatar))
                    return "heroAvatar: string expected";
            return null;
        };

        /**
         * Creates a UserLoginResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.UserLoginResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.UserLoginResult} UserLoginResult
         */
        UserLoginResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.UserLoginResult)
                return object;
            var message = new $root.GameMsg.UserLoginResult();
            if (object.userId != null)
                message.userId = object.userId >>> 0;
            if (object.userName != null)
                message.userName = String(object.userName);
            if (object.heroAvatar != null)
                message.heroAvatar = String(object.heroAvatar);
            return message;
        };

        /**
         * Creates a plain object from a UserLoginResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.UserLoginResult
         * @static
         * @param {GameMsg.UserLoginResult} message UserLoginResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLoginResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = 0;
                object.userName = "";
                object.heroAvatar = "";
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.userName != null && message.hasOwnProperty("userName"))
                object.userName = message.userName;
            if (message.heroAvatar != null && message.hasOwnProperty("heroAvatar"))
                object.heroAvatar = message.heroAvatar;
            return object;
        };

        /**
         * Converts this UserLoginResult to JSON.
         * @function toJSON
         * @memberof GameMsg.UserLoginResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLoginResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLoginResult;
    })();

    GameMsg.UserQuitResult = (function() {

        /**
         * Properties of a UserQuitResult.
         * @memberof GameMsg
         * @interface IUserQuitResult
         * @property {number|null} [quitUserId] UserQuitResult quitUserId
         */

        /**
         * Constructs a new UserQuitResult.
         * @memberof GameMsg
         * @classdesc Represents a UserQuitResult.
         * @implements IUserQuitResult
         * @constructor
         * @param {GameMsg.IUserQuitResult=} [properties] Properties to set
         */
        function UserQuitResult(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserQuitResult quitUserId.
         * @member {number} quitUserId
         * @memberof GameMsg.UserQuitResult
         * @instance
         */
        UserQuitResult.prototype.quitUserId = 0;

        /**
         * Creates a new UserQuitResult instance using the specified properties.
         * @function create
         * @memberof GameMsg.UserQuitResult
         * @static
         * @param {GameMsg.IUserQuitResult=} [properties] Properties to set
         * @returns {GameMsg.UserQuitResult} UserQuitResult instance
         */
        UserQuitResult.create = function create(properties) {
            return new UserQuitResult(properties);
        };

        /**
         * Encodes the specified UserQuitResult message. Does not implicitly {@link GameMsg.UserQuitResult.verify|verify} messages.
         * @function encode
         * @memberof GameMsg.UserQuitResult
         * @static
         * @param {GameMsg.IUserQuitResult} message UserQuitResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitResult.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.quitUserId != null && message.hasOwnProperty("quitUserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.quitUserId);
            return writer;
        };

        /**
         * Encodes the specified UserQuitResult message, length delimited. Does not implicitly {@link GameMsg.UserQuitResult.verify|verify} messages.
         * @function encodeDelimited
         * @memberof GameMsg.UserQuitResult
         * @static
         * @param {GameMsg.IUserQuitResult} message UserQuitResult message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserQuitResult.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserQuitResult message from the specified reader or buffer.
         * @function decode
         * @memberof GameMsg.UserQuitResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {GameMsg.UserQuitResult} UserQuitResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQuitResult.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameMsg.UserQuitResult();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.quitUserId = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserQuitResult message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof GameMsg.UserQuitResult
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {GameMsg.UserQuitResult} UserQuitResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserQuitResult.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserQuitResult message.
         * @function verify
         * @memberof GameMsg.UserQuitResult
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserQuitResult.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.quitUserId != null && message.hasOwnProperty("quitUserId"))
                if (!$util.isInteger(message.quitUserId))
                    return "quitUserId: integer expected";
            return null;
        };

        /**
         * Creates a UserQuitResult message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof GameMsg.UserQuitResult
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {GameMsg.UserQuitResult} UserQuitResult
         */
        UserQuitResult.fromObject = function fromObject(object) {
            if (object instanceof $root.GameMsg.UserQuitResult)
                return object;
            var message = new $root.GameMsg.UserQuitResult();
            if (object.quitUserId != null)
                message.quitUserId = object.quitUserId >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a UserQuitResult message. Also converts values to other types if specified.
         * @function toObject
         * @memberof GameMsg.UserQuitResult
         * @static
         * @param {GameMsg.UserQuitResult} message UserQuitResult
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserQuitResult.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.quitUserId = 0;
            if (message.quitUserId != null && message.hasOwnProperty("quitUserId"))
                object.quitUserId = message.quitUserId;
            return object;
        };

        /**
         * Converts this UserQuitResult to JSON.
         * @function toJSON
         * @memberof GameMsg.UserQuitResult
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserQuitResult.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserQuitResult;
    })();

    return GameMsg;
})();

module.exports = $root;
