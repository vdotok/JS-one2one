/*!
 * 
 *  VdoTok Call version 0.17.1
 */
window["CVDOTOK"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PeerM2M = exports.PhantomHelper = exports.ScreenSharingMobile = exports.Broadcast = exports.Confrence = exports.Client = exports.version = exports.name = void 0;
/* eslint-disable prettier/prettier */
// Helpful name and version exports
const version_1 = __webpack_require__(1);
const version = version_1.LIBRARY_VERSION;
exports.version = version;
const name = "vdotok-call";
exports.name = name;
// Export namespaced web
const index_jsonrpc_1 = __webpack_require__(2);
exports.Client = index_jsonrpc_1.default;
const PeerM2M_1 = __webpack_require__(28);
exports.PeerM2M = PeerM2M_1.default;
const Conference_1 = __webpack_require__(29);
exports.Confrence = Conference_1.default;
const broadcast_1 = __webpack_require__(30);
exports.Broadcast = broadcast_1.default;
const ScreenSharingMobile_1 = __webpack_require__(14);
exports.ScreenSharingMobile = ScreenSharingMobile_1.default;
const PhantomHelper_1 = __webpack_require__(15);
exports.PhantomHelper = PhantomHelper_1.default;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LIBRARY_VERSION = void 0;
exports.LIBRARY_VERSION = "0.0.1";


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
/* prettier-ignore */
/* eslint-disable */
// @ts-ignore
const events_1 = __webpack_require__(3);
const EventHandler_1 = __webpack_require__(4);
const Auth_1 = __webpack_require__(6);
// register model for registering
const RegisterModel_1 = __webpack_require__(8);
// register event handler
const RegisterEventHandler_1 = __webpack_require__(10);
//call model for initiating a call
const CallRequestModel_1 = __webpack_require__(11);
// Helper
const CommonHelper_1 = __webpack_require__(5);
const StreamHelper_1 = __webpack_require__(13);
const ScreenSharingMobile_1 = __webpack_require__(14);
const WebRtcPeerHelper_1 = __webpack_require__(17);
const PeerM2M_1 = __webpack_require__(28);
class Client extends events_1.EventEmitter {
    constructor(_Credentials) {
        super();
        this.localVideos = [];
        this.webRtcPeers = [];
        this.currentCustomScreenUuid = null;
        this.isEmptyVideoStarted = [];
        this.isEmptyAudioStarted = [];
        this.reInviteTimeout = [];
        this.UUIDSessions = {};
        this.UUIDSessionTypes = {};
        this.UUIDSessionMediaTypes = {};
        this.videoStatus = [];
        this.audioStatus = [];
        this.messageCredentials = {};
        this.sessionInfo = [];
        this.isManyToMany = false;
        this.manyToMany = {};
        this.participantsInCall = [];
        this.streamHelper = null;
        this.nativeScreenShare = [];
        this.htmlNormalizationCode = null;
        this.socketCloseCheck = null;
        this.broadcastingParams = [];
        this.reconnectCheckInterval = [];
        this.pingSessionStopped = [];
        this.screenSharingMobile = null;
        this.turnConfigs = null;
        this.stunServer = null;
        this.socketState = "disconnected";
        this.reconnectCount = [];
        this.selfClose = false;
        this.projectId = _Credentials.projectId;
        this.stunServer = _Credentials.stunServer;
        if (!this.stunServer) {
            console.warn("No STUN server address provided using google's stun!");
            this.stunServer = "stun.l.google.com:19302";
        }
        if (!this.projectId) {
            EventHandler_1.default.OnAuthError("Please provide your Project ID!", this);
            return;
        }
        if (!_Credentials.host) {
            EventHandler_1.default.OnAuthError("Please provide host address!", this);
            return;
        }
        this.Authentication(_Credentials);
        window.addEventListener('online', this.onOnline.bind(this));
        window.addEventListener('offline', this.onOffline.bind(this));
    }
    set McToken(token) {
        this.mcToken = token;
    }
    get McToken() {
        return this.mcToken;
    }
    Authentication(credentials) {
        console.log("====DER===", credentials, this.projectId, this.projectSecret, this.clientToken);
        if (credentials.host) {
            this.Connect(credentials.host);
        }
        else {
            Auth_1.default.Authorization(credentials.projectId, credentials.secret).then((response) => {
                console.log("===Authorization-outer===", response);
                if (response && response.status == 200) {
                    let host = `${response.media_server_map.protocol}://${response.media_server_map.host}:${response.media_server_map.port}/${response.media_server_map.end_point}`;
                    this.Connect(host);
                    console.log("===Authorization===", response);
                }
                else
                    EventHandler_1.default.OnAuthError(response.message, this);
            });
        }
    }
    async onOnline() {
        this.reconnectCount = [];
        this.afterOnlineProcess();
    }
    async onOffline() {
        //closing socket immediately once offline event received
        this.ws.close();
        this.socketState = "disconnected";
        this.emit("call", { type: "SOCKET_DROPPED", message: "socket is dropped" });
        console.info("You are offline!");
    }
    afterOnlineProcess() {
        let socketCheckInterval = setInterval(async () => {
            if (this.socketState === "registered") {
                clearInterval(socketCheckInterval);
                console.log("Current call session count", this.sessionInfo.length);
                if (this.sessionInfo && Object.keys(this.sessionInfo).length >= 1) {
                    for (let uUID in this.sessionInfo) {
                        for (let refId in this.sessionInfo[uUID]["participants"]) {
                            console.log("Currently trying auto reconnect for  call session", uUID, refId);
                            let result = await this.autoReconnectCall(uUID, null, refId);
                            console.log("Reconnect result -> ", result);
                        }
                    }
                }
            }
            else {
                console.log("Socket is not registered yet! Current socket state -> ", this.socketState);
            }
        }, 1500);
    }
    cleanIntervals() {
        if (this.socketCloseCheck) {
            clearInterval(this.socketCloseCheck);
        }
        if (this.pingWorker) {
            this.pingWorker.postMessage({ method: 'clearPingInterval' });
        }
        if (this.reconnectCheckInterval) {
            clearTimeout(this.reconnectCheckInterval);
        }
    }
    Connect(mediaServer, selfReconnect = false) {
        this.socketState = "connecting";
        this.ws = new WebSocket(mediaServer);
        this.mediaServer = mediaServer;
        this.cleanIntervals();
        this.ws.onmessage = (message) => {
            var _a;
            var messageData = JSON.parse(message.data);
            console.log('Received message: ', messageData);
            switch (messageData.requestType) {
                case 'register':
                    if (messageData.responseCode == 200) {
                        this.McToken = messageData.mcToken;
                        this.socketState = "registered";
                        this.selfClose = false;
                    }
                    else {
                        this.socketState = "fail_registration";
                    }
                    RegisterEventHandler_1.default.SetRegisterResponse(messageData, this);
                    if (selfReconnect) {
                        this.afterOnlineProcess(); //check socket state and reconnect all sessions
                    }
                    this.registerPingWorker();
                    break;
                case 'call_response':
                    console.log(' CallResponse: ', messageData);
                    if (messageData.hasOwnProperty('customScreenShare')) {
                        if (messageData.response == 'accepted') {
                            this.OnScreensharePublicURL(messageData);
                        }
                        return;
                    }
                    this.CallResponse(messageData);
                    console.log("Wait for Ice received and try to reconnect!");
                    this.reconnectCheckInterval[messageData.sessionUuid] = setTimeout(() => {
                        var _a;
                        console.log("Ice not received, reconnecting...!");
                        let result = this.autoReconnectCall(messageData.sessionUuid, null, (_a = messageData.from) !== null && _a !== void 0 ? _a : messageData.referenceId);
                        console.log(result);
                    }, 1600);
                    break;
                case 'incoming_call':
                    this.callSession = messageData.sessionUuid;
                    this.currentFromUser = messageData.from;
                    this.UUIDSessions[messageData.from] = messageData.sessionUuid;
                    this.UUIDSessionTypes[messageData.sessionUuid] = messageData.callType;
                    this.UUIDSessionMediaTypes[messageData.from] = messageData.mediaType;
                    this.mediaType = messageData.mediaType;
                    this.isManyToMany = (messageData.callType == "many_to_many");
                    console.log('incoming_call case: ', message);
                    let isVideoCall = (messageData.callType === "video" || messageData.mediaType === "video");
                    this.sessionInfo[messageData.sessionUuid] =
                        {
                            incomingCallData: messageData,
                            callType: messageData.callType,
                            mediaType: isVideoCall ? "video" : "audio",
                            isPeer: messageData.isPeer,
                            isInitiator: 0,
                            call_state: "PENDING_ACCEPT"
                        };
                    if (!(messageData.data && messageData.data.stateInfo)) {
                        if (!messageData.data) {
                            messageData.data = {};
                        }
                        messageData.data.stateInfo = { audio: 1, video: isVideoCall };
                    }
                    if (messageData.turnCredentials) {
                        this.turnConfigs = messageData.turnCredentials;
                        this.turnConfigs.status = true;
                    }
                    EventHandler_1.default.OnIncomingCall(messageData, this);
                    // this.incoming_call(messageData);
                    break;
                case 'start_communication':
                    this.SessionStart(messageData);
                    break;
                case 'stopCommunication':
                    console.info('Communication ended by remote peer');
                    this.StopSession(messageData);
                    break;
                case 'session_timeout':
                    console.info('Session Timeout');
                    this.StopSession(messageData);
                    break;
                case 'ice_candidate':
                    if (this.reconnectCheckInterval[messageData.sessionUuid]) {
                        console.log("Ice received no need to reconnect!");
                        clearTimeout(this.reconnectCheckInterval[messageData.sessionUuid]);
                    }
                    let participant = false;
                    let sessionInfo = this.sessionInfo[messageData.sessionUuid];
                    if (sessionInfo) {
                        participant = this.getPeerById(messageData.sessionUuid, messageData.from);
                        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
                            if (!this.manyToMany.isPeerCall) {
                                this.manyToMany.AddCandidate(messageData);
                                return;
                            }
                        }
                    }
                    else {
                        console.warn("Current Call Session Info not found! reseived Message = ", messageData);
                        return;
                    }
                    if (participant && sessionInfo.isInitiator && sessionInfo.callType == "one_to_one") {
                        this.AddCandidate(messageData);
                    }
                    else {
                        if ((_a = participant === null || participant === void 0 ? void 0 : participant.peerConnection) === null || _a === void 0 ? void 0 : _a.currentRemoteDescription) {
                            this.AddCandidate(messageData);
                        }
                        else {
                            if (participant && !participant.receivedRemoteCandidates) {
                                participant.receivedRemoteCandidates = [];
                            }
                            participant.receivedRemoteCandidates.push(messageData);
                            if (!participant.isRemoteSDPAvailable) {
                                participant.isRemoteSDPAvailable = setInterval(() => {
                                    var _a;
                                    if ((_a = participant === null || participant === void 0 ? void 0 : participant.peerConnection) === null || _a === void 0 ? void 0 : _a.currentRemoteDescription) {
                                        clearInterval(participant.isRemoteSDPAvailable);
                                        participant.isRemoteSDPAvailable = null;
                                        console.log("Processing stored ice candidates!");
                                        for (let i = 0; i < participant.receivedRemoteCandidates.length; i++) {
                                            this.AddCandidate(participant.receivedRemoteCandidates[i]);
                                        }
                                    }
                                }, 500);
                            }
                        }
                    }
                    break;
                case 'session_init':
                    if (messageData.responseCode == 200 && messageData.turnCredentials) {
                        this.turnConfigs = messageData.turnCredentials;
                        this.turnConfigs.status = true;
                        let online_receivers = [];
                        if (messageData.receiverStatus) {
                            messageData.receiverStatus.forEach((receiver) => {
                                if (receiver.status) {
                                    online_receivers.push(receiver.referenceId);
                                }
                            });
                        }
                        this.turnConfigs.receivers = online_receivers;
                    }
                    else {
                        this.turnConfigs = { status: false };
                    }
                    break;
                case 'session_invite':
                case 're_invite':
                    this.SessionInvite(messageData);
                    break;
                case 'p2p_reInvite':
                    this.PeerToPeerReInvite(messageData);
                    break;
                case 'session_cancel':
                    this.SessionCancel(messageData);
                    break;
                case 'session_break':
                    EventHandler_1.default.SessionBreak(messageData, this);
                    break;
                case 'session_busy':
                    EventHandler_1.default.SessionBusy(messageData, this);
                    break;
                case 'state_information':
                    console.log("===onParticipantOffer== exiting left", messageData, new Date().toLocaleTimeString());
                    this.SetCallerStatus(messageData);
                    break;
                /////////////////////////////////////////////
                /////////  many to many events
                case 'existing_participants':
                    console.log("===onParticipantOffer== exiting", messageData, new Date().toLocaleTimeString());
                    this.OnExistingParticipants(messageData);
                    //EventHandler.SetExistingParticipants(messageData,this);
                    break;
                case 'new_participant_arrived':
                    console.log("===onParticipantOffer== exiting new", messageData, new Date().toLocaleTimeString());
                    this.OnNewParticipant(messageData);
                    break;
                case 'participantLeft':
                    console.log("===onParticipantOffer== exiting left", messageData, new Date().toLocaleTimeString());
                    this.OnParticipantLeft(messageData);
                    break;
                ///////////////////////////////////////////////////
                ////////////////// public url events
                case 'public_url':
                    console.log("===public_url", messageData, new Date().toLocaleTimeString());
                    if (!selfReconnect) {
                        if (messageData.hasOwnProperty('customScreenShare')) {
                            this.OnScreensharePublicURL(messageData, true);
                        }
                        else {
                            this.OnPublicURL(messageData);
                        }
                    }
                    break;
                case 'ping':
                    this.SendPacket({ requestType: 'pong', "mcToken": this.McToken });
                    break;
                case 'custom_rpc':
                case 'vh_info':
                    console.log("===custom_rpc", messageData, new Date().toLocaleTimeString());
                    if (messageData.data) {
                        this.OnCustomRPC(messageData);
                    }
                    break;
                case 'on_ice_candidate':
                    if (messageData.responseCode == 400) {
                        EventHandler_1.default.OnAddCandidate(messageData.message, this);
                    }
                    else {
                        console.error("Unhandled Ice event", messageData);
                    }
                    break;
                case 'session_pong':
                case 'session_ping':
                    if (messageData.responseCode == 200) {
                        console.log('sdk session pong', messageData);
                    }
                    else if (messageData.responseCode == 400) {
                        console.log("SDK session ended in pong", messageData);
                        this.pingSessionStopped[messageData.sessionUuid] = true;
                        this.emit("call", {
                            type: "SESSION_SUSPENSION",
                            message: "Show has suspended by VDOTOK",
                            uuid: messageData.sessionUuid
                        });
                    }
                    else if (messageData.responseCode == 407) {
                        console.log("SDK invalid authentication or invalid mcToken in pong", messageData);
                        EventHandler_1.default.OnAuthError(messageData.message, this);
                    }
                    break;
                /////////////////////////////////////////////////
                case "to_receive_stream":
                    console.log("to_receive_stream");
                    if (messageData.sdpType == "sdp_offer") {
                        console.log("i have to prepare answer");
                        let params = {};
                        let uUID = messageData.sessionUuid;
                        params.isPeer = 1;
                        params.sdp = messageData.sdp;
                        params.sessionUuid = params.uUID = uUID;
                        params.audio = this.audioStatus[uUID] ? this.audioStatus[uUID] : 1;
                        params.video = this.videoStatus[uUID] ? this.videoStatus[uUID] : 1;
                        params.localVideo = this.localVideo;
                        params.requestType = "to_receive_stream";
                        params.callType = "many_to_many";
                        params.from = this.currentUser;
                        params.to = messageData.referenceId;
                        this.AcceptCall(params).then((results) => {
                            console.log("Reinvite Accept Response: ", results);
                        });
                    }
                    else {
                        console.log("i have to set remote description");
                        this.manyToMany.CallResponse(messageData);
                    }
                    break;
                default:
                // console.error('Unrecognized message', messageData);
            }
        };
        this.ws.onclose = (res) => {
            this.socketState = "disconnected";
            //EventHandler.OnDisconnection(res,this);
            console.log("OnClose socket==", res);
            this.emit("call", { type: "SOCKET_DROPPED", message: "socket is dropped" });
            if (this.socketCloseCheck) {
                clearInterval(this.socketCloseCheck);
            }
            if (this.selfClose) {
                return;
            }
            this.socketCloseCheck = setInterval(() => {
                console.log("Auto reconnecting..... count -> ", this.reconnectCount.length);
                if (this.reconnectCount.length > 5) {
                    //clearInterval(this.socketCloseCheck);
                    console.log("Unable to reconnect socket automatically!");
                    this.pingWorker.postMessage({ method: 'clearPingInterval' });
                    return;
                }
                if (this.socketState == "disconnected" || this.socketState == "fail_registration") {
                    let currentDate = (new Date()).getTime();
                    let seconds = this.reconnectCount && this.reconnectCount.length ? (Math.abs((currentDate - this.reconnectCount[this.reconnectCount.length - 1])) / 1000) : 0;
                    //console.log("current difference in seconds ->", seconds, "current date -> ", currentDate, "reconnect history -> ", this.reconnectCount)
                    if (seconds === 0 || seconds >= 3) {
                        this.Connect(mediaServer, true);
                        this.reconnectCount.push((new Date()).getTime());
                    }
                    else {
                        console.log("Not reconnecting socket as time is less then 3 seconds!");
                    }
                }
            }, 2000);
        };
        this.ws.onopen = (res) => {
            if (this.socketCloseCheck) {
                clearInterval(this.socketCloseCheck);
            }
            if (selfReconnect) {
                this.Register(this.currentUser, this.authorizationToken, 1);
            }
            else {
                EventHandler_1.default.OnConnection(res, this);
            }
            console.log("OnOpen socket==", res);
        };
        //   this.ws.onmessage=(res:any)=>{
        // 	console.log("OnMessage socket==",res);
        //   };
        this.ws.onerror = (res) => {
            this.socketState = "disconnected";
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnError socket==", res);
            this.emit("call", { type: "SOCKET_DROPPED", message: "socket is dropped" });
        };
    }
    OnCustomRPC(data) {
        EventHandler_1.default.OnCustomRPC(data, this);
    }
    CheckSocketConnection() {
        let socket = this.ws;
        return socket.readyState !== WebSocket.CLOSED && socket.readyState !== WebSocket.CLOSING;
    }
    autoReconnectCall(uUID, params = null, refId = null) {
        var _a, _b;
        let webRTCPeer = this.getPeerById(uUID, refId);
        if ((webRTCPeer === null || webRTCPeer === void 0 ? void 0 : webRTCPeer.peerConnection) && webRTCPeer.peerConnection.connectionState === "connected") {
            return { message: "RTC Peer got auto connected no need for manual reconnect!", status: true };
        }
        params = params || (this.sessionInfo[uUID] && this.sessionInfo[uUID].currentCallParams ? this.sessionInfo[uUID].currentCallParams : null);
        if (params) {
            if (params.videoType === 'screen' && this.localVideos[uUID]) {
                this.localVideos[uUID].srcObject.getAudioTracks()[0].stop();
            }
            params.video = this.videoStatus[uUID] ? 1 : (params.video ? 1 : 0);
            params.audio = this.audioStatus[uUID] ? 1 : (params.audio ? 1 : 0);
            params.reInvite = 1;
            params.refId = this.currentUser || params.refId;
            params.sessionUuid = uUID;
            params.isPeer = this.sessionInfo[uUID] ? this.sessionInfo[uUID].isPeer : (params.isPeer ? 1 : 0);
            params.callType = this.sessionInfo[uUID] ? this.sessionInfo[uUID].callType : ((_a = params.callType) !== null && _a !== void 0 ? _a : "one_to_one");
            params.data = (_b = params.data) !== null && _b !== void 0 ? _b : {};
            if (params.callType === 'one_to_many') {
                return this.PulicBroadCast(params);
            }
            else if (["audio", "video", "one_to_one"].includes(params.callType)) {
                if (params.isPeer) {
                    console.log("Peer to Peer call");
                    if (webRTCPeer) {
                        webRTCPeer.generateOffer((error, offerSdp) => {
                            this.onOfferCall(error, offerSdp, this.mediaType, uUID, params);
                            console.log("Call autoConnected successfully", uUID);
                        }, { iceRestart: true });
                    }
                    else {
                        console.log("creating peer connection to generate offer");
                        return this.Call(params);
                    }
                }
                else {
                    console.log("Non peer call, this.Call is called with params", params);
                    return this.Call(params);
                }
            }
            else {
                //TODO handle other call types
                return { message: "Auto reconnect logic not available for call type -> " + params.callType, status: false };
            }
        }
        else {
            return {
                message: "Unable to auto reconnect call, Session Info not available for this session -> " + uUID,
                status: false
            };
        }
    }
    PeerToPeerReInvite(messageData) {
        var _a, _b;
        let webRTCPeer = this.getPeerById(messageData.sessionUuid, (_a = messageData.from) !== null && _a !== void 0 ? _a : messageData.referenceId);
        if (messageData.sdpType === "sdp_answer") {
            try {
                if (webRTCPeer) {
                    if (messageData.sdp) {
                        webRTCPeer.processAnswer(messageData.sdp, (error) => {
                            if (error) {
                                EventHandler_1.default.SessionSDP(error, this);
                                return console.error(error);
                            }
                        });
                    }
                }
            }
            catch (e) {
                console.log(e);
            }
            console.log("Peer to Peer call is connected successfully!");
            return;
        }
        let uUID = messageData.sessionUuid;
        let sdp = (_b = messageData.sdp) !== null && _b !== void 0 ? _b : messageData.sdpOffer;
        if (this.sessionInfo && this.sessionInfo[uUID] && this.sessionInfo[uUID].lastReinviteTime && messageData.timestamp < this.sessionInfo[uUID].lastReinviteTime) {
            console.log("Conflict! No need to process Answer, As this peer just send a latest reInvite and answer will be processed on other peer side");
            return;
        }
        if (messageData.callType === "one_to_one") {
            if (webRTCPeer && this.sessionInfo[uUID] && !this.sessionInfo[uUID].isInitiator) {
                webRTCPeer.processOffer(sdp, (error, answerSdp) => {
                    if (error) {
                        EventHandler_1.default.SessionSDP(error, this);
                        return console.error(error);
                    }
                    this.onOfferIncomingCall(error, answerSdp, null, uUID, messageData.isPeer, 1);
                    return uUID;
                });
            }
            else {
                if (this.sessionInfo[uUID] && this.sessionInfo[uUID].currentCallParams) {
                    let params = this.sessionInfo[uUID].currentCallParams;
                    params.isPeer = 1;
                    params.sdp = sdp;
                    params.sessionUuid = params.uUID = uUID;
                    params.audio = this.audioStatus[uUID] ? this.audioStatus[uUID] : params.audio;
                    params.video = this.videoStatus[uUID] ? this.videoStatus[uUID] : params.video;
                    params.isReInvite = 1;
                    this.AcceptCall(params).then((results) => {
                        console.log("Reinvite Accept Response: ", results);
                    });
                }
                else {
                    //EventHandler.OnIncomingCall(messageData, this); we can also send this call to app so they can accept manually
                    console.error("Cannot AutoAccept Call!");
                }
            }
        }
    }
    ///////////////////////////////////////////////
    ///////////////////// one to one call
    async Call(params, withStreamHelper = false) {
        return new Promise(async (resolve, rejects) => {
            var _a;
            params.callType = (_a = params.callType) !== null && _a !== void 0 ? _a : "one_to_one";
            params.isInitiator = params.hasOwnProperty('isInitiator') ? params.isInitiator : 1;
            params.isPeer = params.hasOwnProperty('isPeer') ? params.isPeer : 1;
            this.currentFromUser = this.currentUser;
            let options = {};
            try {
                options = await this.createOptions(params);
                if (options && !options.status) {
                    throw options.message;
                }
            }
            catch (e) {
                this.onErrorHandler();
                return rejects({ status: false, message: e });
            }
            if (options.localVideo) {
                this.localVideos[params.uUID] = options.localVideo;
            }
            let WebRTCPeer = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerSendrecv(options, (error) => {
                var _a;
                if (error) {
                    rejects(error);
                    this.onErrorHandler();
                    return console.error(error);
                }
                if (!((_a = this.sessionInfo[params.uUID]) === null || _a === void 0 ? void 0 : _a.participants)) {
                    this.sessionInfo[params.uUID]["participants"] = {};
                }
                if (params.callType === "many_to_many" && params.isPeer) {
                    this.sessionInfo[params.uUID]["participants"][this.getFirstValue(params.to)] = { peerConnection: WebRTCPeer };
                }
                else { //O2O,O2M
                    this.sessionInfo[params.uUID]["participants"][this.currentUser] = { peerConnection: WebRTCPeer };
                }
                WebRTCPeer.generateOffer((error, offerSdp) => {
                    if (params.callType == "one_to_many") {
                        this.onOfferOneToManyCall(error, offerSdp, params.uUID, params);
                    }
                    else {
                        this.onOfferCall(error, offerSdp, this.mediaType, params.uUID, params);
                    }
                    if (withStreamHelper) {
                        resolve([this.streamHelper, params.uUID]);
                    }
                    else {
                        resolve(params.uUID);
                    }
                });
            });
        });
    }
    AudioCall(params) {
        params.video = 0;
        return this.Call(params);
    }
    //////////////////// end one to one call
    ///////////////////////////////////////////////////
    OnPublicURL(messageData) {
        EventHandler_1.default.PublicURL(messageData, this);
    }
    OnScreensharePublicURL(messageData, onlysendrpc = false) {
        console.log('this is custom screen share call response-->', messageData);
        if (onlysendrpc) {
            console.log('this is custom screen share call response and sending rpc only-->', messageData);
            this.sendStateRPC({
                screenStreamUUID: this.associatedCamUUID,
                message: "Screen Share started",
                nativeScreenShare: 0,
                is_screen_on: 1,
                height: window.innerHeight,
                width: window.innerWidth,
                page_url: window.location.href,
                uuid: messageData.sessionUuid,
                type: "CUSTOM_SCREEN_SHARE_REQUEST",
            }, this.associatedCamUUID);
            return;
        }
        this.messageCredentials = messageData.customScreenShare;
        if (messageData.sessionUuid) {
            this.currentCustomScreenUuid = messageData.sessionUuid;
        }
        // EventHandler.PublicScreenShareURL(messageData,this);
        this.setupMessagingSdk(messageData, this.screenshareExtraData);
    }
    async setupMessagingSdk(data, extraData) {
        let uUID = this.associatedCamUUID;
        console.log('this is messages credentials-->', data);
        // return;
        if (!this.screenSharingMobile) {
            this.screenSharingMobile = new ScreenSharingMobile_1.default(this, uUID, data, this.authorizationToken, this.currentUser);
        }
        else {
            this.screenSharingMobile.initializeMessaging(data);
        }
        let result = await this.screenSharingMobile.getScreenShareStream(false, true);
        if (extraData) {
            extraData.image_screen = true;
        }
        this.sendStateRPC({ status: 1 }, uUID, 0, "custom_billing");
        this.sendStateInformation(1, 0, uUID, extraData);
    }
    OnExistingParticipants(messageData) {
        this.sendViewersCountRPC(messageData);
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.OnExistingParticipants(messageData);
        }
    }
    sendViewersCountRPC(messageData) {
        if (this.sessionInfo[messageData.sessionUuid] && this.sessionInfo[messageData.sessionUuid].callType === "one_to_many") {
            this.participantsInCall[messageData.sessionUuid] = messageData.totalParticipants ? (messageData.totalParticipants) : (this.participantsInCall[messageData.sessionUuid] + 1);
            this.sendCustomRPC({
                type: "Viewer_Count",
                message: "Viewers count updated.",
                uuid: messageData.sessionUuid,
                count: this.participantsInCall[messageData.sessionUuid] - 1
            }, messageData.sessionUuid);
        }
    }
    OnNewParticipant(messageData) {
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.OnNewParticipant(messageData);
        }
        else {
            EventHandler_1.default.OnNewParticipant(messageData, this);
            this.sendViewersCountRPC(messageData);
        }
    }
    OnParticipantLeft(messageData) {
        this.sendViewersCountRPC(messageData);
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.OnParticipantLeft(messageData);
        }
    }
    getParticipantsCount(uuid) {
        if (this.participantsInCall[uuid] < 0) {
            this.participantsInCall[uuid] = 0;
        }
        return this.participantsInCall[uuid] - 1;
    }
    StopSession(messageData) {
        if (this.isManyToMany) {
            return;
        }
        EventHandler_1.default.SessionEnd(messageData, this);
        this.DisposeWebrtc(true);
    }
    SessionInvite(messageData) {
        if (this.isManyToMany) {
            return;
        }
        EventHandler_1.default.SessionInvite(messageData, this);
    }
    SessionCancel(messageData, type = 'cancel') {
        console.log("SessionCancel messageData", { messageData });
        // 	referenceId: "f223e4e9a56dc95cb83f32876bbb71d1"
        // requestId: "1658785551552"
        // requestType: "session_cancel"
        // responseCode: 200
        // responseMessage: "session canceled successfully"
        // sessionUuid: "1658785549011-xy"
        // type: "response"
        if (type != 'break') {
            this.sendViewersCountRPC(messageData);
        }
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.OnSessionCancel(messageData);
            return;
        }
        EventHandler_1.default.SessionCancel(messageData, this);
    }
    SetCallerStatus(messageData) {
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.SetParticipantStatus(messageData);
            return;
        }
        EventHandler_1.default.SetCallerStatus(messageData, this);
    }
    async AddCandidate(message) {
        console.log("## AddCandidate");
        if (this.rtcPears) {
            await this.rtcPears.addIceCandidate(message.candidate);
            return;
        }
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.AddCandidate(message);
            return;
        }
        let webRTCPeer = this.getPeerById(message.sessionUuid);
        if (webRTCPeer) {
            webRTCPeer.addIceCandidate(message.candidate, (error) => {
                if (error) {
                    EventHandler_1.default.OnAddCandidate(error, this);
                    return console.error('Error adding candidate: ' + error);
                }
            });
        }
        else if (this.webRtcPeer) {
            this.webRtcPeer.addIceCandidate(message.candidate, (error) => {
                if (error) {
                    EventHandler_1.default.OnAddCandidate(error, this);
                    return console.error('Error adding candidate: ' + error);
                }
            });
        }
        else {
            EventHandler_1.default.OnAddCandidate("No Peer connection found!", this);
            return console.error('Error adding candidate: ' + "No Peer connection found!");
        }
    }
    CallResponse(response) {
        var _a, _b;
        if (this.rtcPears) {
            let answer = new RTCSessionDescription({
                type: 'answer',
                sdp: response.sdpAnswer
            });
            this.rtcPears.setRemoteDescription(answer);
            return;
        }
        if (this.isManyToMany && Object.keys(this.manyToMany).length) {
            this.manyToMany.CallResponse(response);
            return;
        }
        EventHandler_1.default.OnCallResponse(response, this);
        let webRTCPeer = this.getPeerById(response.sessionUuid, (_a = response.from) !== null && _a !== void 0 ? _a : response.referenceId);
        console.info('CallResponse', webRTCPeer, response);
        if (response.response == 'accepted') {
            webRTCPeer.processAnswer((_b = response.sdpAnswer) !== null && _b !== void 0 ? _b : response.sdp, (error) => {
                if (error) {
                    EventHandler_1.default.SessionSDP(error, this);
                    return console.error(error);
                }
            });
        }
    }
    SessionStart(message) {
        var _a;
        if (this.rtcPears) {
            let answer = new RTCSessionDescription({
                type: 'answer',
                sdp: message.sdpAnswer
            });
            this.rtcPears.setRemoteDescription(answer);
            return;
        }
        if (this.isManyToMany && Object.keys(this.manyToMany).length && !this.manyToMany.isPeerCall) {
            this.manyToMany.SessionStart(message);
            return;
        }
        EventHandler_1.default.SessionStart(message, this);
        let webRTCPeer = this.getPeerById(message.sessionUuid);
        if (webRTCPeer) {
            if (message.sdpAnswer || message.sdp) {
                webRTCPeer.processAnswer((_a = message.sdpAnswer) !== null && _a !== void 0 ? _a : message.sdp, (error) => {
                    if (error) {
                        EventHandler_1.default.SessionSDP(error, this);
                        return console.error(error);
                    }
                });
            }
            else {
                console.log("This is peer to peer call no need to process Answer on receiver side.");
            }
        }
        else if (this.webRtcPeer) {
            this.webRtcPeer.processAnswer(message.sdpAnswer, (error) => {
                if (error) {
                    EventHandler_1.default.SessionSDP(error, this);
                    return console.error(error);
                }
            });
        }
        else {
            EventHandler_1.default.SessionSDP("Peer connection not found!", this);
            return console.error("Peer connection not found!");
        }
    }
    async AcceptCall(params) {
        if (!params.uUID) {
            params.uUID = params.sessionUuid;
        }
        params.callType = this.sessionInfo[params.uUID] && this.sessionInfo[params.uUID].callType ? this.sessionInfo[params.uUID].callType : "one_to_one";
        params.isInitiator = 0;
        if (!params.hasOwnProperty('isPeer')) {
            if (this.sessionInfo[params.uUID].hasOwnProperty('isPeer')) {
                params.isPeer = this.sessionInfo[params.uUID].isPeer;
            }
            else {
                params.isPeer = 1;
            }
        }
        return new Promise(async (resolve, rejects) => {
            var _a, _b, _c;
            this.localVideo = params.localVideo;
            let from = this.currentFromUser;
            let uUID = params.uUID = params.sessionUuid;
            this.UUIDSessions[from] = this.UUIDSessions[from] ? this.UUIDSessions[from] : uUID;
            this.UUIDSessionTypes[uUID] = (_a = this.UUIDSessionTypes[uUID]) !== null && _a !== void 0 ? _a : "one_to_one";
            this.UUIDSessionMediaTypes[from] = (_b = this.UUIDSessionMediaTypes[from]) !== null && _b !== void 0 ? _b : (!params.video ? 'audio' : 'video');
            let options = {};
            params.to = (_c = params.to) !== null && _c !== void 0 ? _c : [from];
            try {
                options = await this.createOptions(params);
                if (options && !options.status) {
                    throw options.message;
                }
            }
            catch (e) {
                this.onErrorHandler();
                return rejects({ status: false, message: e });
            }
            if (options.localVideo) {
                this.localVideos[uUID] = options.localVideo;
            }
            if (uUID) {
                let WebRTCPeer = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerSendrecv(options, (error) => {
                    var _a;
                    if (error) {
                        this.onErrorHandler();
                        rejects(error);
                    }
                    let isPeer = params.isPeer || (this.sessionInfo[uUID] && this.sessionInfo[uUID].incomingCallData ? this.sessionInfo[uUID].incomingCallData.isPeer : 0);
                    let sdp = params.sdp || (this.sessionInfo[uUID] && this.sessionInfo[uUID].incomingCallData ? this.sessionInfo[uUID].incomingCallData.callerSdp : "");
                    if (!((_a = this.sessionInfo[uUID]) === null || _a === void 0 ? void 0 : _a.participants)) {
                        this.sessionInfo[uUID]["participants"] = {};
                    }
                    if (params.callType === "many_to_many" && params.isPeer) {
                        this.sessionInfo[uUID]["participants"][from] = { peerConnection: WebRTCPeer };
                    }
                    else { //O2O
                        this.sessionInfo[uUID]["participants"][this.currentUser] = { peerConnection: WebRTCPeer };
                    }
                    if (isPeer) {
                        //This is peer to peer call
                        WebRTCPeer.processOffer(sdp, (error, answerSdp) => {
                            if (error) {
                                EventHandler_1.default.SessionSDP(error, this);
                                return console.error(error);
                            }
                            this.onOfferIncomingCall(error, answerSdp, from, uUID, 1, params);
                            resolve(uUID);
                        });
                    }
                    else {
                        //this is call through server
                        WebRTCPeer.generateOffer((error, offerSdp) => {
                            this.onOfferIncomingCall(error, offerSdp, from, uUID, 0, params);
                            resolve(uUID);
                        });
                    }
                });
            }
            else {
                rejects("Please provide session id of call you want to join!");
            }
        });
    }
    RejectCall(from = null, uuid = null) {
        if (!from) {
            from = this.currentFromUser;
        }
        if (!uuid) {
            uuid = this.UUIDSessions[from];
        }
        // var response = {
        // 	id : 'incomingCallResponse',
        // 	from : from,
        // 	call_response : 'reject',
        // 	message : 'user declined'
        // };
        let response = {
            "requestType": "session_invite",
            "type": "response",
            "from": from,
            "requestId": new Date().getTime().toString(),
            "sessionUuid": uuid,
            "responseCode": 496,
            "responseMessage": "rejected"
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false, from, uuid);
    }
    sendSessionBusy(from = null) {
        if (!from) {
            from = this.currentFromUser;
        }
        let response = {
            "requestType": "session_busy",
            "referenceId": this.currentUser,
            "requestId": new Date().getTime().toString(),
            "sessionUuid": this.UUIDSessions[from],
            "mcToken": this.McToken
        };
        this.SendPacket(response);
    }
    onOfferIncomingCall(error, answerSdp, from, uUID = null, isPeer = 0, params) {
        var _a;
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error("Error generating the offer");
        }
        // var response = {
        // 	id : 'incomingCallResponse',
        // 	from : from,
        // 	call_response : 'accept',
        // 	sdpOffer : offerSdp
        // };
        if (!uUID && from) {
            uUID = this.UUIDSessions[from];
        }
        let response = {
            "type": "response",
            "requestType": (_a = params.requestType) !== null && _a !== void 0 ? _a : "session_invite",
            "sdpOffer": answerSdp,
            "requestId": new Date().getTime().toString(),
            "sessionUuid": uUID,
            "responseCode": 200,
            "mcToken": this.mcToken,
            "referenceId": this.currentUser,
            "responseMessage": "accepted"
        };
        if (isPeer) {
            response.isPeer = 1;
        }
        if (params.requestType === "to_receive_stream" || params.isReInvite) {
            if (params.isReInvite) {
                response.requestType = 'p2p_reInvite';
            }
            else {
                response.to = params.to;
                response.from = params.from;
            }
            delete response.sdpOffer;
            response.sdp = answerSdp;
            response.sdpType = 'sdp_answer';
        }
        console.log("===OnOffering Answer", response);
        this.SendPacket(response);
        this.sendStateInformation(this.videoStatus[uUID], this.audioStatus[uUID], uUID, {});
    }
    /*************
     * Register user to SDK
     */
    Register(referenceId, authorizationToken, reConnect = 0) {
        if (!this.streamHelper) {
            this.streamHelper = new StreamHelper_1.default(this);
        }
        this.streamHelper.getNatType(this.stunServer).then((data) => {
            this.currentUser = referenceId;
            this.authorizationToken = authorizationToken;
            let regMessage = new RegisterModel_1.default();
            if (data.natType && data.publicIps) {
                regMessage.natType = data.natType;
                regMessage.publicIps = data.publicIps;
            }
            regMessage.requestId = new Date().getTime().toString();
            regMessage.projectId = this.projectId;
            regMessage.tenantId = this.projectId;
            regMessage.referenceId = referenceId;
            regMessage.authorizationToken = authorizationToken;
            regMessage.deviceId = this.getDeviceId();
            if (reConnect) {
                regMessage.reConnect = 1;
            }
            regMessage.SendRegisterRequest(this.ws);
        });
    }
    /************************************************************************
     *
     * Call one to many Broadcasting
     *
     */
    PulicBroadCast(params) {
        params["broadcastType"] = 1;
        params["to"] = [];
        return this.Broadcasting(params);
    }
    async createOptions(params, withParams = 0) {
        if (this.socketState !== "registered") {
            return ({ message: "Not registered with VDOTOK! Current state -> " + this.socketState, status: false });
        }
        let uUID = (params.hasOwnProperty("sessionUuid")) ? params["sessionUuid"] : new Date().getTime().toString();
        if (!this.sessionInfo[uUID]) {
            this.sessionInfo[uUID] = { callType: params.callType, isPeer: params.isPeer || 0, isInitiator: params.isInitiator || 0, call_state: "STARTING" };
        }
        this.videoStatus[uUID] = (params.video ? 1 : 0);
        this.isEmptyVideoStarted[uUID] = !this.videoStatus[uUID];
        this.audioStatus[uUID] = (params.audio ? 1 : 0);
        this.isEmptyAudioStarted[uUID] = !this.audioStatus[uUID];
        params.sessionUuid = params.uUID = uUID;
        this.sessionInfo[uUID].mediaType = this.mediaType = params.video ? "video" : "audio";
        this.to = (params.to === "" || Array.isArray(params.to)) ? params.to : [params.to];
        params.assUUID = (params.hasOwnProperty("associatedSessionUuid")) ? params["associatedSessionUuid"] : "";
        params.isPublic = (params.hasOwnProperty("broadcastType")) ? params["broadcastType"] : 0;
        if (!params.data) {
            params.data = {};
        }
        params.data.stateInfo = { video: params.video, audio: params.audio };
        let isInitiator = false;
        if (this.sessionInfo && this.sessionInfo[params.uUID]) {
            isInitiator = this.sessionInfo[params.uUID].isInitiator;
            this.sessionInfo[params.uUID].isPeer = params.isPeer = (params.isPeer || this.sessionInfo[params.uUID].isPeer);
        }
        let vidContraints = {
            mandatory: {
                maxFrameRate: 30,
                minFrameRate: 15,
                /*minWidth: 1080,
                maxWidth: 1080,
                minHeight: 1920,
                maxHeight: 1920*/
            }
        };
        if (!params.video)
            vidContraints = false;
        var constraints = {
            audio: params.audio,
            video: vidContraints
        };
        (0, CommonHelper_1.SetPlaysInline)(params.localVideo);
        let options = {
            mediaConstraints: constraints,
            onicecandidate: (candidate) => this.onIceCandidate(candidate, params.uUID, this.getFirstValue(params.to)),
            onerror: this.onError,
            status: true
        };
        if (this.getFirstValue(params.to)) { //For multiple participants (peer M2M) we will hndle this in that class
            options = this.AddOnTrackHandler(options, uUID, this.getFirstValue(params.to));
        }
        if (!this.streamHelper) {
            this.streamHelper = new StreamHelper_1.default(this);
        }
        if (params.videoType == "screen" || params.videoType == "desktop") {
            params.videoType = "screen";
        }
        if (params.videoType == "camera" || params.videoType == "cam" || params.videoType == "user" || params.videoType == "webcam") {
            params.videoType = "camera";
        }
        if (params.videoType != "camera" && params.videoType != "screen" && params.videoType != "audio") {
            console.info("Valid options are camera or screen, choosing camera");
            params.videoType = "camera";
        }
        let streams = await this.streamHelper.getStream(params.audio, params.video, params.videoType);
        if (params.video && !streams.video) {
            return { status: false, message: "Unable to get video stream" };
        }
        if (streams.video && streams.audio) {
            options.videoStream = streams.combine;
        }
        else if (streams.audio) {
            options.audioStream = streams.audio;
        }
        if (params.localVideo) {
            options.localVideo = params.localVideo;
        }
        else if (streams.combine) {
            options.localVideo = this.getTempVideo(streams.combine);
        }
        if (params.remoteVideo) {
            options.remoteVideo = params.remoteVideo;
        }
        if (streams.video && params.videoType === "screen") {
            streams.video.getVideoTracks()[0].onended = () => {
                this.screenStreamStopped(params.uUID);
            };
        }
        this.sessionInfo[uUID].currentCallParams = params;
        this.nativeScreenShare[params.uUID] = streams.nativeScreenShare;
        if (withParams) {
            options.params = params;
        }
        if (params.isPeer) {
            if (isInitiator) {
                return new Promise((resolve, rejects) => {
                    this.sendStateRPC({}, -1, 0, 'session_init', {
                        to: params.to,
                        from: this.currentFromUser,
                        mediaType: (!params.video ? 'audio' : 'video'),
                        sessionType: "call",
                        callType: params.callType
                    });
                    let initInterval = setInterval(() => {
                        if (this.turnConfigs && this.turnConfigs.receivers && !this.turnConfigs.receivers.length) {
                            this.onErrorHandler();
                            rejects({ status: false, message: "User is offline!" });
                        }
                        if (this.turnConfigs) {
                            clearInterval(initInterval);
                            options.receivers = this.turnConfigs.receivers;
                            options = this.setStunTurn(options);
                            resolve(options);
                        }
                    }, 100);
                });
            }
            else {
                options = this.setStunTurn(options);
            }
        }
        return options;
    }
    getFirstValue(element, checkIsArray = false) {
        let final = element;
        if (Array.isArray(element)) {
            final = element[0];
            if (checkIsArray) {
                return true;
            }
        }
        return final;
    }
    AddOnTrackHandler(options, uUID, refId) {
        options.ontrack = (event) => {
            if (!this.sessionInfo[uUID].streamsCollection) {
                this.sessionInfo[uUID].streamsCollection = [];
            }
            this.sessionInfo[uUID].streamsCollection[refId] = { available: true, stream: event.streams };
            EventHandler_1.default.OnTrack(this.sessionInfo[uUID].streamsCollection, this, refId);
        };
        return options;
    }
    setStunTurn(options) {
        if (this.turnConfigs && this.turnConfigs.status) {
            options.configuration = {
                iceServers: [{
                        urls: [
                            "stun:" + this.stunServer,
                        ]
                    }, {
                        username: this.turnConfigs.username,
                        credential: this.turnConfigs.credential,
                        urls: this.turnConfigs.url
                    }]
            };
        }
        this.turnConfigs = null;
        return options;
    }
    async startScreenShare(uUID, extraData = null) {
        // return Client.startScreenShare(camStreamUUID, {
        // 	is_screen_on: 1,
        // 	is_camera_on: camera,
        // 	width: bodyWidth,
        // 	height: bodyHeight,
        // 	nativeScreenShare: false,
        // 	page_url: window.location.href,
        // 	screenStreamUUID: "image_screen",
        // 	message: "Screen Share started",
        //   })
        let id = `${new Date().getTime().toString()}-xy`;
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = [];
        callRequest.requestId = id;
        callRequest.sessionUuid = id;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = "";
        callRequest.type = "request";
        callRequest.requestType = "session_invite";
        callRequest.mediaType = "video";
        callRequest.callType = "one_to_many";
        callRequest.sessionType = "customScreenShare";
        callRequest.referenceId = this.currentUser;
        callRequest.custom_field("broadcastType", 1);
        callRequest.custom_field("associatedSessionUuid", uUID);
        if (extraData.reInvite && extraData.uuid) {
            callRequest.requestType = 're_invite';
            callRequest.sessionUuid = extraData.uuid;
        }
        else {
            callRequest.requestType = 'session_invite';
            // delete callRequest.referenceId;
        }
        callRequest.SendCallRequest(this.ws);
        console.log('this is request from mobile for screenshare->', callRequest);
        if (uUID) {
            this.associatedCamUUID = uUID;
        }
        if (extraData) {
            this.screenshareExtraData = extraData;
        }
        return callRequest.sessionUuid;
        //  if(!this.screenSharingMobile)
        //  {
        // 	 this.screenSharingMobile = new ScreenSharingMobile(
        // 		 this,
        // 		 uUID
        // 	 );
        //  }
        //  let result =  await this.screenSharingMobile.getScreenShareStream(
        // 	 false,
        // 	 true
        //  );
        //  if(extraData)
        //  {
        // 	 extraData.image_screen = true;
        //  }
        // this.sendStateRPC({status:1}, uUID,0,"custom_billing")
        // this.sendStateInformation(1, 0, uUID, extraData)
        //  return result;
    }
    cancelSession(uuid) {
        console.log('cancel this session-->', uuid);
        let message = {
            "type": "request",
            "requestType": "session_cancel",
            "requestId": new Date().getTime().toString(),
            "sessionUuid": uuid,
            "mcToken": this.mcToken
        };
        console.log('custom screen cancel request-->', message);
        this.SendPacket(message);
    }
    pauseScreenShare(uUID, extraData = null) {
        if (this.screenSharingMobile) {
            this.screenSharingMobile.pauseScreenCapture = true;
            if (extraData) {
                extraData.image_screen = true;
            }
            this.sendStateRPC({ status: 0 }, uUID, 0, "custom_billing");
            this.sendStateInformation(0, 0, uUID, extraData);
            if (extraData.currentCustomScreenSession) {
                this.cancelSession(extraData.currentCustomScreenSession);
                if (this.currentCustomScreenUuid) {
                    this.currentCustomScreenUuid = null;
                }
            }
            return true;
        }
        return false;
    }
    resumeScreenShare(uUID, extraData = null) {
        if (this.screenSharingMobile) {
            this.screenSharingMobile.pauseScreenCapture = false;
            if (extraData) {
                extraData.image_screen = true;
            }
            this.sendStateRPC({ status: 1 }, uUID, 0, "custom_billing");
            this.sendStateInformation(1, 0, uUID, extraData);
            return true;
        }
        return false;
    }
    async takeScreenImage() {
        if (this.screenSharingMobile) {
            return await this.screenSharingMobile.startToGeeCaptureScreen();
        }
        return false;
    }
    getTempVideo(stream) {
        const video = document.createElement("video");
        this.setSrcObject(stream, video);
        video.className = 'vdotok-temp-video';
        video.muted = true;
        video.volume = 0;
        video.width = stream.width || 640;
        video.height = stream.height || 480;
        return video;
    }
    setSrcObject(stream, element) {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        const URL = window.URL || window.webkitURL;
        if ("srcObject" in element) {
            element.srcObject = stream;
        }
        else if ("mozSrcObject" in element) {
            element.mozSrcObject = stream;
        }
        else if ("createObjectURL" in URL) {
            element.src = URL.createObjectURL(stream);
        }
        else {
            console.log("createObjectURL/srcObject both are not supported.");
        }
    }
    async Broadcasting(params) {
        params.callType = "one_to_many";
        params.isInitiator = 1;
        params.isPeer = 0;
        params.sessionType = "call";
        return this.Call(params, true);
    }
    onErrorHandler() {
        if (this.streamHelper) {
            this.streamHelper.removeAllStreams();
        }
    }
    onOfferOneToManyCall(error, offerSdp, uUID, params) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        this.UUIDSessions[this.currentUser] = uUID;
        this.UUIDSessionTypes[uUID] = "one_to_many";
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestId = uUID;
        callRequest.sessionUuid = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.callType = "one_to_many";
        callRequest.sessionType = params.sessionType;
        //////////////////////////////////////////
        ///////for public url/group
        callRequest.custom_field("broadcastType", params.isPublic);
        callRequest.custom_field("associatedSessionUuid", params.assUUID);
        if (params.reInvite && params.refId) {
            callRequest.requestType = 're_invite';
            callRequest.referenceId = params.refId;
        }
        else {
            callRequest.requestType = 'session_invite';
            delete callRequest.referenceId;
        }
        if (params.isRecord) {
            callRequest.isRecord = 1;
        }
        else {
            callRequest.isRecord = 0;
        }
        ///////////////////////////////////////////
        ///////////////////////////////////////////
        callRequest.SendCallRequest(this.ws);
        let webRTCPeer = this.getPeerById(uUID);
        if (webRTCPeer === null || webRTCPeer === void 0 ? void 0 : webRTCPeer.peerConnection) {
            //@ts-ignore
            webRTCPeer.peerConnection.addEventListener("iceconnectionstatechange", this.onIceError.bind(this, uUID, this.currentUser), false);
        }
        this.sendStateInformation(this.videoStatus[uUID], this.audioStatus[uUID], uUID, {
            fromVideo: true,
            reInvite: params.reInvite
        });
    }
    onIceError(uUID, ev, refID) {
        let webRTCPeer = this.getPeerById(uUID, refID);
        let states = ['closed', 'failed', 'disconnected'];
        if ((webRTCPeer === null || webRTCPeer === void 0 ? void 0 : webRTCPeer.peerConnection) && webRTCPeer.peerConnection.iceConnectionState && states.includes(webRTCPeer.peerConnection.iceConnectionState)) { //it will come for all ice
            if (this.reInviteTimeout[uUID]) {
                clearTimeout(this.reInviteTimeout[uUID]);
            }
            console.log("SDK iceconnectionstatechange", ev);
            this.reInviteTimeout[uUID] = setTimeout(() => {
                console.log("Re_inviting because ice state = ", webRTCPeer.peerConnection.iceConnectionState);
                try {
                    let result = this.autoReconnectCall(uUID, null, refID);
                    console.log(result);
                }
                catch (e) {
                    console.log("failed to reinvite on ice fail", e);
                }
            }, 1000);
        }
    }
    /*********************************************************
     *
     * End Call One To Many Type
     *
     *
     *********************************************************/
    /**
     *
     * @param error
     * @param offerSdp
     * @param mediaType
     * @param uUID
     * @param params
     * @returns
     */
    onOfferCall(error, offerSdp, mediaType, uUID, params) {
        var _a;
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = params.to;
        callRequest.requestId = new Date().getTime().toString();
        callRequest.sessionUuid = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.isPeer = params.isPeer; //For peer to peer call
        callRequest.sdpOffer = offerSdp;
        callRequest.mediaType = mediaType;
        callRequest.type = 'request';
        if (params.data && Object.keys(params.data).length) {
            callRequest.data = params.data;
        }
        else {
            callRequest.data = {};
        }
        if (params.with_ai) {
            callRequest.callType = "one_to_one_with_ai";
        }
        else {
            callRequest.callType = params.callType ? params.callType : "one_to_one";
        }
        if (callRequest.callType === "many_to_many" && params.participants && params.participants.length) {
            callRequest.participants = params.participants;
        }
        if (params.reInvite || params.requestType == "to_receive_stream") {
            callRequest.sdp = offerSdp;
            callRequest.sdpType = "sdp_offer";
            callRequest.sdpOffer = "";
            delete callRequest.sdpOffer;
        }
        if (params.reInvite && params.refId) {
            callRequest.referenceId = params.refId;
            callRequest.requestType = 're_invite';
            if (callRequest.isPeer) {
                callRequest.requestType = 'p2p_reInvite';
                this.sessionInfo[uUID].lastReinviteTime = callRequest.timestamp = new Date().getTime().toString();
            }
            callRequest.custom_field("fromUser", this.currentUser);
            callRequest.deleteKey('from');
            callRequest.deleteKey('to');
        }
        else {
            callRequest.requestType = (_a = params.requestType) !== null && _a !== void 0 ? _a : 'session_invite';
            if (params.timeout && params.timeout > 0) {
                this.sessionInfo[uUID].callTimeoutInterval = setTimeout(() => {
                    if (["STARTING", "ALERTING", "CONNECTING", "TRYING"].includes(this.sessionInfo[uUID].call_state)) {
                        this.sendStateRPC({}, uUID, 0, "session_timeout");
                    }
                }, params.timeout * 1000);
            }
            delete callRequest.referenceId;
        }
        callRequest.SendCallRequest(this.ws);
        this.UUIDSessions[this.currentUser] = uUID;
        this.UUIDSessionTypes[uUID] = callRequest.callType;
        console.log(' OnOfferCall :: :: ::', mediaType);
        this.sendStateInformation(this.videoStatus[uUID], this.audioStatus[uUID], uUID, {});
        if (params.reInvite) {
            EventHandler_1.default.SetCallerStatus({
                videoInformation: this.videoStatus[uUID],
                audioInformation: this.audioStatus[uUID],
                sessionUuid: uUID,
                referenceId: params.refId,
                data: {}
            }, this);
        }
    }
    DisposeWebrtc(status, from = null, onlyUUID = null) {
        if (!from) {
            from = this.currentFromUser;
        }
        if (this.sessionInfo) {
            for (var uUID in this.sessionInfo) {
                if (!onlyUUID || (onlyUUID && onlyUUID == uUID)) //only a single session get deleted or all sessions
                 {
                    for (let refId in this.sessionInfo[uUID]["participants"]) {
                        let webRTCPeer = this.getPeerById(uUID, refId);
                        if (webRTCPeer) {
                            webRTCPeer.dispose();
                            if (status) {
                                this.sendDisposePacket(uUID);
                            }
                            if (webRTCPeer === null || webRTCPeer === void 0 ? void 0 : webRTCPeer.peerConnection) {
                                webRTCPeer.peerConnection.removeEventListener("iceconnectionstatechange", this.onIceError, false);
                            }
                        }
                    }
                    if (this.sessionInfo[uUID].callTimeoutInterval) {
                        clearTimeout(this.sessionInfo[uUID].callTimeoutInterval);
                    }
                    delete this.sessionInfo[uUID];
                }
            }
        }
        if (this.webRtcPeer) {
            this.webRtcPeer.dispose();
            this.webRtcPeer = null;
            if (status) {
                this.sendDisposePacket(this.UUIDSessions[from]);
            }
            let session = this.UUIDSessions[from];
            delete this.UUIDSessionTypes[session];
            delete this.UUIDSessions[from];
        }
        /*if(this.pingWorker)
        {
          this.pingWorker.postMessage({method: 'clearPingInterval'});
        }*/
    }
    sendDisposePacket(uUID) {
        var messageStop = {
            "type": "request",
            "requestType": "session_cancel",
            "requestId": new Date().getTime().toString(),
            "sessionUuid": uUID,
            "mcToken": this.mcToken
        };
        this.SendPacket(messageStop);
    }
    onError(error) {
        EventHandler_1.default.OnRTCPeer(error, this);
    }
    onIceCandidate(candidate, uUID, refId) {
        console.log("Local candidate" + JSON.stringify(candidate));
        if (!refId) {
            refId = this.currentUser;
        }
        var message = {
            id: 'ice_candidate',
            requestType: 'ice_candidate',
            type: "request",
            candidate: candidate,
            referenceId: refId,
            sessionUuid: uUID
        };
        console.log("Local candidate Msg", message);
        this.SendPacket(message);
    }
    SendPacket(message) {
        var jsonMessage = JSON.stringify(message);
        console.log('Sending message: ' + jsonMessage, this.ws.readyState);
        if (this.ws != undefined)
            this.ws.send(jsonMessage);
        else
            EventHandler_1.default.OnAuthInitialError('', this);
    }
    /**
     * EndCall
     */
    EndCall(from) {
        if (!from) {
            from = this.currentFromUser;
        }
        if (this.localVideo) {
            this.localVideos.push(this.localVideo);
        }
        for (let UUID in this.localVideos) {
            let video = this.localVideos[UUID];
            if (video && video.srcObject) {
                video.srcObject.getTracks().forEach((track) => {
                    track.stop();
                });
            }
        }
        if (this.streamHelper) {
            this.streamHelper.removeAllStreams();
        }
        this.DisposeWebrtc(true);
        if (this.socketCloseCheck) {
            clearInterval(this.socketCloseCheck);
        }
        if (this.screenSharingMobile) {
            this.screenSharingMobile.disconnectMessaging();
            if (this.currentCustomScreenUuid) {
                this.cancelSession(this.currentCustomScreenUuid);
                this.currentCustomScreenUuid = null;
            }
        }
    }
    CancelCall() {
        let from = this.currentFromUser;
        let response = {
            "type": "request",
            "requestType": "session_cancel",
            "requestId": new Date().getTime().toString(),
            "sessionUuid": this.UUIDSessions[from],
            "mcToken": this.McToken
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false);
    }
    sendStateInformation(video = 0, audio = 0, uUID = null, data = null) {
        let session = (this.isManyToMany) ? this.callSession : this.UUIDSessions[this.currentFromUser];
        if (uUID) {
            session = uUID;
        }
        this.audioStatus[session] = audio;
        this.videoStatus[session] = video;
        let state = {
            "requestType": "state_information",
            "type": "request",
            "requestId": new Date().getTime().toString(),
            "sessionUuid": session,
            "mcToken": this.McToken,
            "referenceId": this.currentUser,
            "audioInformation": audio,
            "videoInformation": video
        };
        if (data) {
            state.data = data;
        }
        this.SendPacket(state);
    }
    /////////////////////
    ////Mic and Camera Events
    SetMicMute(uUID) {
        let session = (this.isManyToMany) ? this.callSession : this.UUIDSessions[this.currentFromUser];
        if (uUID) {
            session = uUID;
        }
        if (this.localVideos[session] && this.localVideos[session] != undefined) {
            let video = (this.videoStatus[session] == 1) ? 1 : 0;
            this.audioStatus[session] = 0;
            this.sendStateInformation(video, 0, session, { fromAudio: true });
            let localVideo = this.localVideos[session];
            if (localVideo.srcObject != null && localVideo.srcObject.getAudioTracks() && localVideo.srcObject.getAudioTracks()[0])
                localVideo.srcObject.getAudioTracks()[0].stop();
            if (localVideo.localName == "audio" && localVideo.audioTracks && localVideo.audioTracks[0]) {
                localVideo.audioTracks[0].stop();
            }
        }
    }
    async replaceStreamTracks(stream, uuid, type = 'video') {
        var _a;
        if (this.isManyToMany) {
            let replaced = false;
            for (let refId in (_a = this.sessionInfo[uuid]) === null || _a === void 0 ? void 0 : _a.participants) {
                replaced = await this.replaceTracksInternal(uuid, stream, type, refId);
                if (!replaced) {
                    console.error("Stream tracks not replaced for", uuid, stream, type, refId);
                }
            }
            return replaced;
        }
        else {
            return this.replaceTracksInternal(uuid, stream, type);
        }
    }
    async replaceTracksInternal(uuid, stream, type, refId = null) {
        let replaced = false;
        let webRTCPeer = this.getPeerById(uuid, refId);
        let senders = webRTCPeer.peerConnection.getSenders();
        for (const sender of senders) {
            if (sender && sender.track && sender.track.kind === type) {
                let t = (stream.getTracks().filter((track) => track.kind === type))[0];
                replaced = await sender.replaceTrack(t);
                if (replaced === undefined) { //as per replaceTrack docs it returns undefined when successfully replaced
                    replaced = true;
                }
                else {
                    console.error("Error while replacing tracks", replaced, uuid, type, refId);
                }
            }
        }
        return replaced;
    }
    /**
     * SetMicMute
     */
    async SetMicUnmute(uUID) {
        let session = (this.isManyToMany) ? this.callSession : this.UUIDSessions[this.currentFromUser];
        if (uUID) {
            session = uUID;
        }
        if (!this.streamHelper) {
            this.streamHelper = new StreamHelper_1.default(this);
        }
        if (this.localVideos[session] && this.localVideos[session] != undefined) {
            let video = (this.videoStatus[session] == 1) ? 1 : 0;
            this.audioStatus[session] = 1;
            let audioStream = null;
            let finalStream = null;
            let localVideo = this.localVideos[session];
            if (this.isEmptyAudioStarted[uUID] || true) {
                try {
                    audioStream = (await this.streamHelper.getStream(1, 0, 'audio')).audio;
                    if (localVideo && localVideo.srcObject && localVideo.srcObject.getAudioTracks() && localVideo.srcObject.getAudioTracks()[0])
                        localVideo.srcObject.getAudioTracks()[0].stop();
                    let replaced = await this.replaceStreamTracks(audioStream, uUID, 'audio');
                    this.isEmptyAudioStarted[uUID] = 0;
                }
                catch (e) {
                    console.log(e);
                    return { status: false, message: e };
                }
            }
            this.sendStateInformation(video, 1, session, { fromAudio: true });
            if (audioStream) {
                finalStream = new MediaStream();
                audioStream.getAudioTracks().forEach((t) => {
                    finalStream.addTrack(t);
                });
            }
            if (localVideo && localVideo.srcObject) {
                if (finalStream) {
                    if (localVideo.srcObject.getVideoTracks() && localVideo.srcObject.getVideoTracks()[0]) {
                        localVideo.srcObject.getVideoTracks().forEach((t) => {
                            finalStream.addTrack(t);
                        });
                    }
                    localVideo.srcObject = finalStream;
                }
                localVideo.srcObject.getAudioTracks()[0].enabled = true;
            }
            else if (localVideo.localName == "audio") {
                if (finalStream) {
                    if (localVideo.videoTracks && localVideo.videoTracks[0]) {
                        finalStream.addTrack(localVideo.videoTracks[0]);
                    }
                    localVideo.srcObject = finalStream;
                }
                localVideo.audioTracks[0].enabled = true;
            }
            return { status: true, error: false };
        }
    }
    /**
     * SetCameraOn
     */
    async SetCameraOn(uUID, facingMode = 'user', extraData = null) {
        let session = (this.isManyToMany) ? this.callSession : this.UUIDSessions[this.currentFromUser];
        if (uUID) {
            session = uUID;
        }
        let videoStream = null;
        let finalStream = null;
        let done = 0;
        this.videoStatus[session] = 1;
        if (!this.streamHelper) {
            this.streamHelper = new StreamHelper_1.default(this);
        }
        if (this.isEmptyVideoStarted[uUID] || true) {
            try {
                if ((facingMode === "environment" && (await this.streamHelper.getBackCameraId())) || facingMode !== "environment") {
                    if (this.localVideos[session] && this.localVideos[session].srcObject && this.localVideos[session].srcObject.getVideoTracks()[0])
                        this.localVideos[session].srcObject.getVideoTracks()[0].stop();
                    let vResults = (await this.streamHelper.getStream(0, 1, (facingMode == 'screen' ? 'screen' : 'camera'), facingMode));
                    videoStream = vResults.video;
                    if (!videoStream) {
                        return { status: false, message: "Unable to get Video Stream!" };
                    }
                    if (videoStream && facingMode == 'screen') {
                        videoStream.getVideoTracks()[0].onended = () => {
                            this.screenStreamStopped(session);
                        };
                    }
                    this.nativeScreenShare[session] = vResults.nativeScreenShare;
                    let replaced = await this.replaceStreamTracks(videoStream, uUID, 'video');
                    this.isEmptyVideoStarted[uUID] = 0;
                    done = 1;
                }
                else {
                    return { status: false, message: 'Back Camera not found!' };
                }
            }
            catch (e) {
                this.videoStatus[session] = 0;
                console.log("Error", e);
                return { status: false, message: e };
            }
        }
        if (done && this.localVideos[session] && this.localVideos[session] != undefined) {
            let localVideo = this.localVideos[session];
            this.sendStateInformation(1, this.audioStatus[session], session, extraData);
            if (videoStream) {
                finalStream = new MediaStream();
                videoStream.getVideoTracks().forEach((t) => {
                    finalStream.addTrack(t);
                });
            }
            if (localVideo && localVideo.srcObject) {
                if (finalStream) {
                    if (localVideo.srcObject.getAudioTracks()[0]) {
                        localVideo.srcObject.getAudioTracks().forEach((t) => {
                            finalStream.addTrack(t);
                        });
                    }
                    localVideo.srcObject = finalStream;
                }
                this.localVideos[session].srcObject.getVideoTracks()[0].enabled = true;
            }
            return { status: true, error: false };
        }
    }
    /**
     * SetCameraOff
     */
    SetCameraOff(uUID, extraData = null) {
        let session = (this.isManyToMany) ? this.callSession : this.UUIDSessions[this.currentFromUser];
        if (uUID) {
            session = uUID;
        }
        try {
            if (this.localVideos[session] && this.localVideos[session] != undefined) {
                this.videoStatus[session] = 0;
                if (this.localVideos[session].srcObject && this.localVideos[session].srcObject.getVideoTracks()[0]) {
                    this.localVideos[session].srcObject.getVideoTracks()[0].stop();
                    this.localVideos[session].srcObject.getVideoTracks()[0].onended = null;
                }
                this.sendStateInformation(0, this.audioStatus[session], session, extraData);
                return true;
            }
        }
        catch (e) {
            console.log("Error while turning off video", e);
            return false;
        }
    }
    sendCustomRPC(data, uUID) {
        let request = {};
        request.requestType = 'custom_rpc';
        request.type = 'request';
        request.requestId = new Date().getTime().toString();
        request.sessionUuid = uUID ? uUID : this.UUIDSessions[this.currentUser];
        request.mcToken = this.McToken;
        request.referenceId = this.currentUser;
        request.data = data;
        this.ws.send(JSON.stringify(request));
    }
    sendStateRPC(data, uUID, store = 1, requestType = 'hv_info', extraParams = {}) {
        let request = {};
        request.requestType = requestType;
        //hv_info --> Host to All viewers Communication
        request.type = 'request';
        request.requestId = new Date().getTime().toString();
        if (uUID === -1) {
            delete request.sessionUuid;
        }
        else {
            request.sessionUuid = uUID ? uUID : this.UUIDSessions[this.currentUser];
        }
        request.mcToken = this.McToken;
        request.referenceId = this.currentUser;
        request.data = data;
        request.store = store; //This information should be save or not for new viewers
        if (extraParams && Object.keys(extraParams).length) {
            request = Object.assign(Object.assign({}, request), extraParams);
        }
        this.ws.send(JSON.stringify(request));
    }
    screenStreamStopped(uuid) {
        EventHandler_1.default.screenOffByUser({ sessionUuid: uuid }, this);
    }
    registerPingWorker() {
        const response = `let pingInterval;
                            onmessage = (res) => {
                                let data = res.data;
                                console.log('Message received from main script');
                                const method = data.method;
                                if (method === 'format') {
                                    postMessage({
                                        data: {
                                            'res': 'I am a customized result string.',
                                        }
                                    });
                                }
                                else if (method === 'startPingInterval')
                                {
                                    if(!data.interval)
                                    {
                                        data.interval =  5000;
                                    }
                                    clearPingInterval();
                                    startPingInterval(data.interval);
                                }
                                else if(method === 'clearPingInterval')
                                {
                                    clearPingInterval();
                                }
                                console.log('Posting message back to main script');
                            }
                            
                            function startPingInterval(interval)
                            {
                                pingInterval = setInterval(()=>{
                                    postMessage({
                                            'sendPing': true
                                    });
                                },interval)
                            }
                            function  clearPingInterval()
                            {
                                if(pingInterval)
                                {
                                    clearInterval(pingInterval);
                                }
                            }
                            `;
        const blob = new Blob([response], { type: 'application/javascript' });
        this.pingWorker = new Worker(URL.createObjectURL(blob));
        if (this.pingWorker) {
            // event processing
            this.pingWorker.onmessage = (e) => {
                if (e && e.data && e.data.sendPing) {
                    this.sendPing();
                }
                else {
                    //console.log(`Response: ${JSON.stringify(e)}`);
                }
            };
            //Start pinging server
            this.pingWorker.postMessage({ method: 'startPingInterval', interval: 5000 });
        }
    }
    sendPing() {
        try {
            let pingCount = 0;
            if (!pingCount || true) {
                this.sendStateRPC({}, -1, 0, 'ping');
                console.log("SDK Ping sent!");
            }
        }
        catch (e) {
            console.log("Error while sending ping to server.", e);
        }
    }
    updateBandwidthRestriction(sdp, bandwidth) {
        let modifier = 'AS';
        // @ts-ignore
        if (adapter.browserDetails.browser === 'firefox') {
            bandwidth = (bandwidth >>> 0) * 1000;
            modifier = 'TIAS';
        }
        if (sdp.indexOf('b=' + modifier + ':') === -1) {
            // insert b= after c= line.
            sdp = sdp.replace(/c=IN (.*)\r\n/, 'c=IN $1\r\nb=' + modifier + ':' + bandwidth + '\r\n');
        }
        else {
            sdp = sdp.replace(new RegExp('b=' + modifier + ':.*\r\n'), 'b=' + modifier + ':' + bandwidth + '\r\n');
        }
        return sdp;
    }
    removeBandwidthRestriction(sdp) {
        return sdp.replace(/b=AS:.*\r\n/, '').replace(/b=TIAS:.*\r\n/, '');
    }
    ////////////////////////////////////////////////////////////
    /////////////// MANY TO MANY CALLS
    GroupCall(params) {
        this.currentFromUser = this.currentUser;
        let manyTomany = new PeerM2M_1.default(this);
        let uUID = new Date().getTime().toString();
        params.uUID = uUID;
        this.localVideos[uUID] = params.localVideo;
        this.manyToMany = manyTomany;
        this.isManyToMany = true;
        this.sessionInfo[uUID] = { callType: "many_to_many", isPeer: params.isPeer || 0, isInitiator: 1, call_state: "STARTING" };
        return this.manyToMany.GroupCall(params);
    }
    JoinGroupCall(params) {
        let manyTomany = new PeerM2M_1.default(this);
        manyTomany.callSession = this.callSession;
        manyTomany.mediaType = this.mediaType;
        this.manyToMany = manyTomany;
        this.mediaType = params.callType;
        this.localVideo = params.localVideo;
        this.isManyToMany = true;
        return this.manyToMany.JoinGroupCall(params, this.callSession);
    }
    /**
     * SetParticipantVideo
     */
    SetParticipantVideo(refId, partiVideo) {
        this.manyToMany.SetParticipantVideo(refId, partiVideo);
    }
    LeaveGroupCall() {
        this.manyToMany.LeaveGroupCall();
    }
    Disconnect() {
        this.cleanIntervals();
        this.selfClose = true;
        if (this.ws) {
            this.ws.close();
        }
        this.sessionInfo = [];
    }
    getPeerById(uUID, refId = null) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (!refId || this.sessionInfo[uUID].callType != "many_to_many") {
            refId = this.currentUser;
        }
        let webRTCPeer = (_c = (_b = (_a = this.sessionInfo[uUID]) === null || _a === void 0 ? void 0 : _a.participants) === null || _b === void 0 ? void 0 : _b[refId]) === null || _c === void 0 ? void 0 : _c.peerConnection;
        //if there is only one peer and not found above then we are auto piking it.
        if (!webRTCPeer && ((_d = this.sessionInfo[uUID]) === null || _d === void 0 ? void 0 : _d.participants)) {
            let all = Object.keys((_e = this.sessionInfo[uUID]) === null || _e === void 0 ? void 0 : _e.participants);
            if (all.length == 1) {
                webRTCPeer = (_h = (_g = (_f = this.sessionInfo[uUID]) === null || _f === void 0 ? void 0 : _f.participants) === null || _g === void 0 ? void 0 : _g[all[0]]) === null || _h === void 0 ? void 0 : _h.peerConnection;
            }
        }
        if (!webRTCPeer) {
            console.error("Unable to find peer connection object", uUID, refId, this.sessionInfo);
            console.trace();
        }
        return webRTCPeer;
    }
    getDeviceId() {
        let machineId = localStorage.getItem('VDOTOKDeviceId');
        if (!machineId) {
            machineId = crypto.randomUUID();
            localStorage.setItem('VDOTOKDeviceId', machineId);
        }
        return machineId;
    }
}
exports.default = Client;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
const CommonHelper_1 = __webpack_require__(5);
class EventHandlerService {
    constructor() {
    }
    OnAuthError(error, instance) {
        instance.emit("error", { type: "Authorization", message: "Your credentials for vidtok are invalid." + error });
    }
    OnAuthInitialError(error, instance) {
        instance.emit("error", { type: "Authorization", message: "You are not connected with vidtok server." + error });
    }
    OnConnection(res, instance) {
        instance.emit("connected", { type: "Success", message: "Vidtok server is connected successfully" });
    }
    OnDisconnection(err, instance) {
        instance.emit("disconnected", { type: "Error", message: "Vidtok server is disconnected." + err });
    }
    OnRegister(res, instance) {
        let socResponse = res.response;
        let status = socResponse.trim();
        if (status == "accepted") {
            instance.emit("register", { type: "REGISTER_ACCEPTED", message: "User is registered successfully" });
        }
        else {
            let message = socResponse.split(":")[1];
            message = message.trim();
            instance.emit("error", { type: "REGISTER_REJECTED", message: message });
        }
    }
    OnCallResponse(res, instance) {
        let status = res.response;
        let from = res.from;
        if (status == "accepted") {
            if (res.hasOwnProperty('associatedSessionUuid')) {
                let resObject = { type: "RECONNECT_PREVIOUS_SESSION", message: "Reconnect previous session ", from: from, reconnect_session_uuid: res.associatedSessionUuid, callType: "one_to_many", primary_session: res.sessionUuid };
                if (res["callType"])
                    resObject["callType"] = res["callType"];
                instance.emit("call", resObject);
            }
            let resObject = {
                type: "CALL_ACCEPTED",
                message: "Call is accepted by receiver",
                from: from,
                callType: "one_to_one",
                uuid: res.sessionUuid,
                data: res.data
            };
            if (res["callType"])
                resObject["callType"] = res["callType"];
            instance.emit("call", resObject);
        }
        else {
            let resObject = {
                type: "CALL_REJECTED",
                message: "Call is rejected by receiver",
                from: from,
                callType: "one_to_one",
                uuid: res.sessionUuid,
                data: res.data
            };
            if (res["callType"])
                resObject["callType"] = res["callType"];
            instance.emit("call", resObject);
            instance.DisposeWebrtc(true);
        }
    }
    OnIncomingCall(res, instance) {
        let from = res.from;
        let callType = (res["callType"] != undefined) ? res["callType"] : "one_to_one";
        if (callType == "many_to_many") {
            instance.emit("groupCall", {
                type: "CALL_RECEIVED",
                message: "Received a call",
                from: from,
                callType: res.mediaType,
                session: callType,
                data: res.data,
                uuid: res.sessionUuid,
            });
            // instance.emit("groupCall",{type:"PARTICIPANT_LIST",message:"Participant List is available",participant_list:participantList});
        }
        else
            instance.emit("call", {
                type: "CALL_RECEIVED",
                message: "Received a call",
                from: from,
                callType: res.mediaType,
                session: callType,
                uuid: res.sessionUuid,
                data: res.data
            });
    }
    OnIncomingGroupCall(res, instance) {
        let from = res.from;
        let callType = res["callType"];
        instance.emit("groupCall", {
            type: "CALL_RECEIVED",
            message: "Received a call",
            from: from,
            callType: res.mediaType,
            session: callType,
            uuid: res.sessionUuid,
            data: res.data,
            to: res.participants
        });
    }
    SessionStart(res, instance) {
        instance.emit("call", { type: "CALL_STARTED", message: "Call is being started" });
    }
    CustomScreenshareSessionStart(res, instance) {
        instance.emit("call", { type: "CALL_STARTED", message: "Call is being started", screen_type: 'Custom_Screen_share' });
    }
    sendScrollRpcToApp(res, instance) {
        instance.emit("call", { type: "S_S_I_E", message: "scroll event ", data: res });
    }
    GroupSessionStart(res, instance) {
        instance.emit("groupCall", { type: "CALL_STARTED", message: "Call is being started" });
    }
    SessionSDP(res, instance) {
        instance.emit("error", { type: "PROCESS_ANSWER", message: "Unable to process remote SDP." });
    }
    SessionBreak(res, instance) {
        instance.emit("call", {
            type: "SESSION_BREAK",
            message: "Current Call Session break with other user.",
            data: res.data,
            uuid: res.sessionUuid
        });
    }
    OnAddCandidate(error, instance) {
        instance.emit("error", { type: "CALL_ADDCANDIDATE", message: "Unable to add ice candidate." });
    }
    OnOfferIncomingCall(error, instance) {
        instance.emit("error", { type: "CALL_OFFERGENERATING", message: "Unable to add generate incoming call offer." });
    }
    OnCustomRPC(res, instance) {
        if (res.data.type === "CUSTOM_SCREEN_SHARE_REQUEST") {
            instance.emit("call", { type: "CUSTOM_SCREEN_SHARE_REQUEST", message: "Mobile screenshare request received.", data: res.data, uuid: res.data.uuid });
        }
        else {
            instance.emit("call", {
                type: "Custom_RPC",
                message: "A Custom Data Packet received.",
                data: res.data,
                uuid: res.sessionUuid
            });
        }
    }
    OnRTCPeer(error, instance) {
        instance.emit("error", { type: "CALL_RTCPEER", message: "Unable to add to create webrtc peer." + error });
    }
    SessionEnd(res, instance) {
        let session = (0, CommonHelper_1.GetKeyByValue)(instance.UUIDSessions, res.sessionUuid);
        let callType = (res["callType"] != undefined) ? res["callType"] : "one_to_one";
        if (res["responseCode"] != undefined && res["responseCode"] == 487) {
            instance.emit("call", {
                type: "MISSED_CALL",
                message: "Session canceled/Missed Call",
                from: session,
                callType: res.mediaType,
                session: callType,
                data: res.data
            });
        }
        else {
            instance.emit("call", {
                type: "CALL_ENDED",
                message: "Call is being ended",
                from: session,
                callType: callType,
                uuid: res.sessionUuid,
                data: res.data
            });
        }
    }
    SessionInvite(res, instance) {
        let session = (0, CommonHelper_1.GetKeyByValue)(instance.UUIDSessions, res.sessionUuid);
        //let callType=(res["callType"]!=undefined)?res["callType"]:"one_to_one";
        let callType = instance.UUIDSessionTypes[res.sessionUuid];
        if (res["responseCode"] != undefined) {
            switch (res.responseCode) {
                case 100:
                    instance.emit("call", {
                        type: "TRYING",
                        message: "Trying to find the receiver",
                        to: instance.to,
                        callType: callType
                    });
                    this.updateCallState(instance, res.sessionUuid, "TRYING");
                    break;
                case 180:
                    instance.emit("call", {
                        type: "CONNECTING",
                        message: "Trying to connect the receiver",
                        to: instance.to,
                        callType: callType
                    });
                    this.updateCallState(instance, res.sessionUuid, "CONNECTING");
                    break;
                case 183:
                    instance.emit("call", {
                        type: "ALERTING",
                        message: "Alerting the receiver",
                        to: instance.to,
                        callType: callType
                    });
                    this.updateCallState(instance, res.sessionUuid, "ALERTING");
                    break;
                case 200:
                    if (res.responseMessage == "no session exist against this URL") {
                        instance.emit("call", {
                            type: "SESSION_END",
                            message: "No Session exist or Call ended.",
                            to: instance.to,
                            callType: callType,
                            uuid: res.sessionUuid
                        });
                        this.updateCallState(instance, res.sessionUuid, "ENDED");
                    }
                    else {
                        instance.emit("call", {
                            type: "CALL_ACCEPTED",
                            message: "Call is accepted by receiver",
                            to: instance.to,
                            callType: callType,
                            data: res.data
                        });
                        this.updateCallState(instance, res.sessionUuid, "ACCEPTED");
                    }
                    break;
                case 402:
                    if (callType == "one_to_one" || callType == "one_to_one_with_ai")
                        instance.DisposeWebrtc(true);
                    instance.emit("call", { type: "INSUFFICIENT_FUNDS", message: res.responseMessage, uuid: res.sessionUuid });
                    this.updateCallState(instance, res.sessionUuid, "ENDED");
                    break;
                case 404:
                    if (res.responseMessage == "invalid target") {
                        instance.emit("call", {
                            type: "INVALID_TARGET",
                            message: "Receiver is not found",
                            to: instance.to,
                            callType: callType
                        });
                    }
                    else {
                        instance.emit("call", {
                            type: "SESSION_END",
                            message: "No Session exist or Call ended.",
                            to: instance.to,
                            callType: callType,
                            uuid: res.sessionUuid
                        });
                    }
                    this.updateCallState(instance, res.sessionUuid, "ENDED");
                    if (callType == "one_to_one" || callType == "one_to_one_with_ai")
                        instance.DisposeWebrtc(true);
                    break;
                default:
                    if (res.responseCode === 400 && res.responseMessage == "bad request") {
                        instance.emit("call", {
                            type: "BAD_REQUEST",
                            message: "Please check your last RPC it is not correct!",
                            to: instance.to,
                            callType: callType,
                            uuid: res.sessionUuid,
                            data: res.data
                        });
                        return;
                    }
                    if (callType == "one_to_one" || callType == "one_to_one_with_ai")
                        instance.DisposeWebrtc(true);
                    instance.emit("call", {
                        type: "CALL_REJECTED",
                        message: "Receiver has rejected the call",
                        to: instance.to,
                        callType: callType,
                        uuid: res.sessionUuid,
                        data: res.data
                    });
                    this.updateCallState(instance, res.sessionUuid, "ENDED");
            }
        }
    }
    updateCallState(instance, uuid, state) {
        var _a;
        if ((_a = instance === null || instance === void 0 ? void 0 : instance.sessionInfo) === null || _a === void 0 ? void 0 : _a[uuid]) {
            instance.sessionInfo[uuid].call_state = state;
        }
    }
    SessionBusy(res, instance) {
        if (res.responseCode === 486) {
            let session = (0, CommonHelper_1.GetKeyByValue)(instance.UUIDSessions, res.sessionUuid);
            instance.emit("call", {
                type: "CALL_REJECTED",
                message: "User is Busy",
                from: session,
                callType: res.callType,
                uuid: res.sessionUuid
            });
            this.updateCallState(instance, res.sessionUuid, "ENDED");
        }
        else {
            console.log(res.responseMessage);
        }
    }
    SessionCancel(res, instance) {
        let session = (0, CommonHelper_1.GetKeyByValue)(instance.UUIDSessions, res.sessionUuid);
        let callType = instance.UUIDSessionTypes[res.sessionUuid];
        // let callType=(res["callType"]!=undefined)?res["callType"]:"one_to_one";
        // if(res["responseCode"]!=undefined && res["responseCode"]==487){
        //     instance.emit("call",{type:"MISSED_CALL",message:"Session canceled/Missed Call",from:session,callType:callType});
        // }
        // else{
        //     instance.emit("call",{type:"CALL_ENDED",message:"Call is being ended",from:session,callType:callType});
        // }
        // //410
        // //if(callType=="one_to_one")
        // let flag=(callType=="one_to_one");
        // instance.DisposeWebrtc(flag);
        let customScreenShareFlag = res.sessionUuid.includes('-xy');
        if (res["responseCode"] != undefined) {
            switch (res.responseCode) {
                case 487:
                    instance.emit("call", {
                        type: "MISSED_CALL",
                        message: "Session canceled/Missed Call",
                        from: session,
                        callType: callType
                    });
                    break;
                case 480:
                    instance.emit("call", {
                        type: "PARTICIPANT_UNAVAILABLE",
                        message: "User is Unavailable",
                        from: session,
                        callType: callType
                    });
                    break;
                case 410:
                    instance.emit("call", {
                        type: "PARTICIPANT_LEFT",
                        message: "Participant has left the call",
                        from: res.referenceId,
                        callType: callType
                    });
                    break;
                case 401:
                    console.log("SessionCancel i'm here", { res });
                    instance.emit("call", {
                        type: "SESSION_BLOCKED",
                        message: "Show has blocked by provider",
                        uuid: res.sessionUuid
                    });
                    break;
                case 402:
                    console.log("SessionCancel i'm here", { res });
                    instance.emit("call", { type: "INSUFFICIENT_FUNDS", message: res.responseMessage, uuid: res.sessionUuid });
                    break;
                case 403:
                    console.log("SessionCancel i'm here", { res });
                    instance.emit("call", {
                        type: "SESSION_SUSPENSION",
                        message: "Show has suspended by provider",
                        uuid: res.sessionUuid
                    });
                    break;
                default:
                    if (customScreenShareFlag) {
                        instance.emit("call", { type: "CALL_ENDED", message: "Call is being ended", uuid: res.sessionUuid });
                        return;
                    }
                    // if(callType=="one_to_one")
                    instance.DisposeWebrtc(false);
                    instance.emit("call", {
                        type: "CALL_ENDED",
                        message: "Call is being ended",
                        to: instance.to,
                        callType: callType,
                        uuid: res.sessionUuid,
                        data: res.data
                    });
            }
        }
        this.updateCallState(instance, res.sessionUuid, "ENDED");
    }
    SetCallerStatus(res, instance) {
        instance.emit("call", {
            type: "CALL_STATUS",
            message: "Call Status",
            video_status: res.videoInformation,
            audio_status: res.audioInformation,
            uuid: res.sessionUuid,
            from: res.referenceId,
            data: res.data
        });
    }
    PublicURL(res, instance) {
        instance.emit("call", {
            type: "PUBLIC_URL",
            message: "Public URL Available for Broadcast!",
            url: res.url,
            uuid: res.sessionUuid
        });
    }
    OnNewParticipant(res, instance) {
        instance.emit("call", {
            type: "NEW_PARTICIPANT",
            message: "New participant arrived.",
            participant: res.referenceId,
            uuid: res.sessionUuid
        });
    }
    screenOffByUser(res, instance) {
        instance.emit("call", { type: "SCREEN_OFF", message: "User turned off screen", uuid: res.sessionUuid });
    }
    sdkError(res, instance) {
        instance.emit("call", { type: "SDK_ERROR", message: res.message, uuid: res.sessionUuid });
    }
    /**
     *
     * MANY TO MANY EVENTS
     *
     */
    SetExistingParticipants(res, instance) {
        instance.emit("groupCall", {
            type: "PARTICIPANT_LIST",
            message: "Participant List is available",
            participant_list: res.referenceIds
        });
    }
    SetParticipantStatus(res, instance) {
        instance.emit("groupCall", {
            type: "PARTICIPANT_STATUS",
            message: "Participant Status",
            participant: res.referenceId,
            video_status: res.videoInformation,
            audio_status: res.audioInformation
        });
    }
    OnTrack(trackCollection, instance, refId) {
        instance.emit("call", {
            type: "REMOTE_STREAM",
            message: "Remote Peer Stream Received",
            stream: trackCollection,
            participant: refId
        });
    }
}
const EventHandler = new EventHandlerService();
exports.default = EventHandler;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UuidGenerator = exports.SetPlaysInline = exports.IsDOM = exports.GetKeyByValue = void 0;
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/no-explicit-any */
function GetKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}
exports.GetKeyByValue = GetKeyByValue;
function IsDOM(Obj) {
    return Obj instanceof Element;
}
exports.IsDOM = IsDOM;
function SetPlaysInline(element) {
    if (IsDOM(element))
        element.setAttribute('playsinline', true);
}
exports.SetPlaysInline = SetPlaysInline;
function UuidGenerator() {
    let idstr = String.fromCharCode(Math.floor((Math.random() * 25) + 65));
    do {
        const ascicode = Math.floor((Math.random() * 42) + 48);
        if (ascicode < 58 || ascicode > 64) {
            idstr += String.fromCharCode(ascicode);
        }
    } while (idstr.length < 32);
    return (idstr);
}
exports.UuidGenerator = UuidGenerator;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Constants_1 = __webpack_require__(7);
class AuthService {
    constructor() { }
    /////////////////////////////////////
    ///////// Authentication with server
    async Authorization(cId, cSec) {
        let clientData = {
            projectId: cId,
            auth_token: cSec
        };
        // console.log("====clientData====",clientData);
        return fetch(`${Constants_1.SERVER}/AuthenticateSDK`, {
            method: 'POST',
            body: JSON.stringify(clientData),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
            }
        })
            .then((data) => data.json())
            .then((resp) => {
            return resp;
        })
            .catch((err) => {
            console.log(err);
            return err;
        });
    }
}
const Auth = new AuthService();
exports.default = Auth;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SERVER = void 0;
exports.SERVER = "https://vtkapi.vdotok.dev/API/v0";


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const RegisterSchema_1 = __webpack_require__(9);
class RegisterModel {
    constructor() {
        this.RegPacket = RegisterSchema_1.default;
    }
    set id(id) {
        this.RegPacket.id = id;
    }
    get id() {
        return this.RegPacket.id;
    }
    set type(type) {
        this.RegPacket.type = type;
    }
    get type() {
        return this.RegPacket.type;
    }
    set requestType(requestType) {
        this.RegPacket.requestType = requestType;
    }
    get requestType() {
        return this.RegPacket.requestType;
    }
    set requestId(requestId) {
        this.RegPacket.requestId = requestId;
    }
    get requestId() {
        return this.RegPacket.requestId;
    }
    set tenantId(tenantId) {
        this.RegPacket.tenantId = tenantId;
    }
    get tenantId() {
        return this.RegPacket.tenantId;
    }
    set projectId(tenantId) {
        this.RegPacket.projectId = tenantId;
    }
    get projectId() {
        return this.RegPacket.projectId;
    }
    set referenceId(referenceId) {
        this.RegPacket.referenceId = referenceId;
    }
    get referenceId() {
        return this.RegPacket.referenceId;
    }
    set authorizationToken(authorizationToken) {
        this.RegPacket.authorizationToken = authorizationToken;
    }
    get authorizationToken() {
        return this.RegPacket.authorizationToken;
    }
    set socketType(socketType) {
        this.RegPacket.socketType = socketType;
    }
    get socketType() {
        return this.RegPacket.socketType;
    }
    set natType(natType) {
        this.RegPacket.natType = natType;
    }
    get natType() {
        return this.RegPacket.natType;
    }
    set publicIps(publicIps) {
        this.RegPacket.publicIps = publicIps;
    }
    get publicIps() {
        return this.RegPacket.publicIps;
    }
    set reConnect(reConnect) {
        this.RegPacket.reConnect = reConnect;
    }
    get reConnect() {
        return this.RegPacket.reConnect;
    }
    set deviceId(deviceId) {
        this.RegPacket.deviceId = deviceId;
    }
    get deviceId() {
        return this.RegPacket.deviceId;
    }
    /**
     * name
     */
    SendRegisterRequest(server) {
        const regMessage = JSON.stringify(this.RegPacket);
        console.log("Send===RegisterRequest", regMessage);
        server.send(regMessage);
    }
}
exports.default = RegisterModel;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // "id":"register",
    // "name":"client2",
    "requestType": "register",
    "type": "request",
    "requestId": "YX9BLHSS0WLCI6ESCS2D29T5UW2YFJSY",
    "tenantId": "12345",
    "projectId": "12345",
    "referenceId": "0d00e363ef75c8cc76d1ee79e950b30c",
    "authorizationToken": "e2a10ce93bb2affbe767e843c0bfc76c",
    "socketType": 0
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 *
 * @RegisterEventHandlerService is the class used for handling register events
 *
 */
class RegisterEventHandlerService {
    constructor() { }
    SetRegisterResponse(resMessage, instance) {
        switch (resMessage.responseCode) {
            case 200:
                instance.McToken = resMessage.mcToken;
                instance.emit("register", { type: "Success", message: "You are registered successfully with vidtok server." });
                break;
            default:
                instance.emit("error", { type: "Register", message: "You are not registered with vidtok server." + resMessage.responseMessage });
        }
    }
}
const RegisterEventHandler = new RegisterEventHandlerService();
exports.default = RegisterEventHandler;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable prettier/prettier */
const CallRequestSchema_1 = __webpack_require__(12);
class CallRequestModel {
    constructor() {
        this.ReqPacket = CallRequestSchema_1.default;
    }
    // set id(id:any){
    // this.ReqPacket.id=id;
    //         }
    // get id(){
    //     return this.ReqPacket.id;
    //         }
    set from(from) {
        this.ReqPacket.from = from;
    }
    get from() {
        return this.ReqPacket.from;
    }
    set timestamp(timestamp) {
        this.ReqPacket.timestamp = timestamp;
    }
    get timestamp() {
        return this.ReqPacket.timestamp;
    }
    set to(to) {
        this.ReqPacket.to = to;
    }
    get to() {
        return this.ReqPacket.to;
    }
    set type(type) {
        this.ReqPacket.type = type;
    }
    get type() {
        return this.ReqPacket.type;
    }
    set requestType(requestType) {
        this.ReqPacket.requestType = requestType;
    }
    get requestType() {
        return this.ReqPacket.requestType;
    }
    set sessionType(sessionType) {
        this.ReqPacket.sessionType = sessionType;
    }
    get sessionType() {
        return this.ReqPacket.sessionType;
    }
    set requestId(requestId) {
        this.ReqPacket.requestId = requestId;
    }
    get requestId() {
        return this.ReqPacket.requestId;
    }
    set sessionUuid(sessionUuid) {
        this.ReqPacket.sessionUuid = sessionUuid;
    }
    get sessionUuid() {
        return this.ReqPacket.sessionUuid;
    }
    set mcToken(mcToken) {
        this.ReqPacket.mcToken = mcToken;
    }
    get mcToken() {
        return this.ReqPacket.mcToken;
    }
    set sdpOffer(sdpOffer) {
        this.ReqPacket.sdpOffer = sdpOffer;
    }
    get sdpOffer() {
        return this.ReqPacket.sdpOffer;
    }
    set sdp(sdp) {
        this.ReqPacket.sdp = sdp;
    }
    get sdp() {
        return this.ReqPacket.sdp;
    }
    set sdpType(sdpType) {
        this.ReqPacket.sdpType = sdpType;
    }
    get sdpType() {
        return this.ReqPacket.sdpType;
    }
    set callType(type) {
        this.ReqPacket.callType = type;
    }
    get callType() {
        return this.ReqPacket.callType;
    }
    set data(type) {
        this.ReqPacket.data = type;
    }
    get data() {
        return this.ReqPacket.data;
    }
    set mediaType(mediaType) {
        this.ReqPacket.mediaType = mediaType;
    }
    get mediaType() {
        return this.ReqPacket.mediaType;
    }
    get referenceId() {
        return this.ReqPacket.referenceId;
    }
    set referenceId(referenceId) {
        this.ReqPacket.referenceId = referenceId;
    }
    set isRecord(isRecord) {
        this.ReqPacket.isRecord = isRecord;
    }
    get isRecord() {
        return this.ReqPacket.isRecord;
    }
    set isPeer(isPeer) {
        this.ReqPacket.isPeer = isPeer;
    }
    get isPeer() {
        return this.ReqPacket.isPeer;
    }
    set participants(participants) {
        this.ReqPacket.participants = participants;
    }
    get participants() {
        return this.ReqPacket.participants;
    }
    custom_field(field, value) {
        this.ReqPacket[field] = value;
    }
    deleteKey(key) {
        if (this.ReqPacket[key]) {
            delete this.ReqPacket[key];
        }
    }
    /**
     * @method for sending a call request
     */
    SendCallRequest(server) {
        let reqMessage = JSON.stringify(this.ReqPacket);
        console.log("Send===CallRequest", reqMessage);
        server.send(reqMessage);
    }
}
exports.default = CallRequestModel;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    //"id":"call",
    "from": "User-A",
    "to": "User-B",
    "type": "request",
    "requestType": "session_invite",
    "sessionType": "call",
    "callType": "one_to_one",
    "mediaType": "video",
    "requestId": "UUID",
    "sessionUuid": "sgdjkfgskjdgfs6876868",
    "mcToken": "",
    "sdpOffer": "",
    "data": {},
    "timestamp": "",
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const ScreenSharingMobile_1 = __webpack_require__(14);
class SingleStreamHelper {
    constructor(emitter = null, showId = null) {
        this.audioStream = null;
        this.videoStream = null;
        this.aStream = null;
        this.audioContext = null;
        this.audioContextDest = null;
        this.createdFromContext = 0;
        this.emptyStreamInterval = null;
        this.currentStreamType = "camera";
        this.currentFaceMode = "user";
        this.publicIps = [];
        this.checkOnlineStatus = async () => {
            try {
                const online = await fetch("/1pixel.png");
                return online.status >= 200 && online.status < 300; // either true or false
            }
            catch (err) {
                return false; // definitely offline
            }
        };
        this.emitter = emitter;
        this.showId = showId;
    }
    async getBackCameraId() {
        const devices = await navigator.mediaDevices.enumerateDevices();
        let deviceId = null;
        let isAndroid = false;
        //For android phones
        for (let i = 0; i < devices.length; i++) {
            if (devices[i].kind === "videoinput") {
                if (devices[i].label.includes("0")) {
                    deviceId = devices[i].deviceId;
                    isAndroid = true;
                    break;
                }
            }
        }
        //For Iphones
        if (!isAndroid) {
            for (let i = 0; i < devices.length; i++) {
                if (devices[i].kind === "videoinput") {
                    if (devices[i].label &&
                        devices[i].label.toLowerCase().includes("back")) {
                        deviceId = devices[i].deviceId;
                        break;
                    }
                }
            }
        }
        return deviceId;
    }
    delay(time) {
        return new Promise((resolve) => setTimeout(resolve, time));
    }
    async getStream(audio = true, video = true, type = "camera", facingMode = "user") {
        const options = { audio: false, video: false };
        if (audio) {
            options.audio = {
                echoCancellation: true,
                noiseSuppression: true,
            };
        }
        if (video && this.videoStream && this.videoStream.active && this.currentStreamType === type && type === "camera") {
            if ((audio && this.createdFromContext) || (audio && !this.audioStream.active)) {
                this.audioStream = await navigator.mediaDevices.getUserMedia({ audio: options.audio });
            }
            return {
                audio: this.audioStream,
                video: this.videoStream,
                combine: this.getCombine()
            };
        }
        if (audio && this.audioStream && this.audioStream.active && type === "audio") {
            return {
                audio: this.audioStream,
                video: this.videoStream,
                combine: this.getCombine()
            };
        }
        if (video && type == "screen") {
            this.screenSharingMobile = new ScreenSharingMobile_1.default(this.emitter);
            this.videoStream = await this.screenSharingMobile.getScreenShareStream(false);
            this.currentStreamType = type;
        }
        if (video && type == "camera") {
            if (this.aStream) {
                this.aStream
                    .getVideoTracks()
                    .forEach(function (track) {
                    track.stop();
                });
                await this.delay(1000); //Wait for camera to properly close on some mobile devices
            }
            options.video = {
                width: { ideal: 1024 },
                height: { ideal: 768 },
                frameRate: { ideal: 18 },
                aspectRatio: { ideal: 1.7777777778 },
            };
            if (facingMode === "environment") {
                const deviceId = await this.getBackCameraId();
                if (deviceId) {
                    options.video.deviceId = { exact: deviceId };
                }
                else {
                    options.video.facingMode = { exact: facingMode };
                }
                this.currentFaceMode = facingMode;
            }
            else if (this.detectMob()) {
                options.video.facingMode = { exact: "user" };
                this.currentFaceMode = "user";
            }
            else {
                this.currentFaceMode = "user";
            }
            this.currentStreamType = type;
        }
        this.aStream = new MediaStream();
        if (options.audio || options.video) {
            try {
                this.aStream = await navigator.mediaDevices.getUserMedia(options);
            }
            catch (e) {
                console.error(e);
            }
        }
        if (options.audio && this.aStream) {
            this.createdFromContext = 0;
            this.audioStream = new MediaStream(this.aStream.getAudioTracks());
        }
        else {
            this.audioStream = new MediaStream([this.silence()]);
            this.createdFromContext = 1;
        }
        if (options.video && this.aStream) {
            this.videoStream = new MediaStream(this.aStream.getVideoTracks());
        }
        else if (type != "audio" && !(video && type == "screen")) {
            this.videoStream = new MediaStream([
                this.black({ width: 640, height: 480 }),
            ]);
        }
        const finalResults = {
            video: this.videoStream,
            audio: this.audioStream,
            combine: this.getCombine(),
        };
        if (this.screenSharingMobile && video && type == "screen") {
            finalResults.nativeScreenShare = this.screenSharingMobile.nativeScreenShare;
        }
        return finalResults;
    }
    getCombine() {
        const combine = [];
        if (this.videoStream) {
            /*try {
              const constraints = {
                width: { min: 640, ideal: 1280 },
                height: { min: 480, ideal: 720 },
                advanced: [{ width: 1920, height: 1280 }, { aspectRatio: 1.333 }],
              };
              await this.videoStream
                .getVideoTracks()[0]
                .applyConstraints(constraints);
            } catch (e) {
              // eslint-disable-next-line no-console
              console.log("Failed to set constraints", e);
            }*/
            combine.push(this.videoStream.getVideoTracks()[0]);
        }
        if (this.audioStream) {
            combine.push(this.audioStream.getAudioTracks()[0]);
        }
        return new MediaStream(combine);
    }
    detectMob() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i,
        ];
        return toMatch.some((toMatchItem) => {
            // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
            return navigator.userAgent.match(toMatchItem);
        });
    }
    removeAllStreams() {
        if (this.aStream) {
            this.aStream.getTracks().forEach(function (track) {
                track.stop();
            });
        }
        if (this.videoStream) {
            this.videoStream.getTracks().forEach(function (track) {
                track.stop();
            });
        }
        if (this.audioStream) {
            this.audioStream.getTracks().forEach(function (track) {
                track.stop();
            });
        }
        if (this.audioContext && this.audioContext.state !== "closed") {
            this.audioContext.close();
        }
        if (this.screenSharingMobile &&
            this.screenSharingMobile.onceAutoScrollDone) {
            clearInterval(this.screenSharingMobile.onceAutoScrollDone);
        }
        if (this.emptyStreamInterval) {
            clearInterval(this.emptyStreamInterval);
        }
    }
    silence() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext;
        this.audioContext = new AudioContext();
        const ctx = new AudioContext(), oscillator = ctx.createOscillator();
        const dst = oscillator.connect(ctx.createMediaStreamDestination());
        oscillator.start();
        return Object.assign(dst.stream.getAudioTracks()[0], { enabled: false });
    }
    black({ width = 640, height = 480 } = {}) {
        const canvas = Object.assign(document.createElement("canvas"), {
            width,
            height,
        });
        const ctx = canvas.getContext("2d");
        let logic = 1;
        /*const pat = ctx.createPattern(
            document.getElementById("girl_image"),
            "repeat"
        );*/
        this.emptyStreamInterval = setInterval(() => {
            ctx.fillRect(0, 0, width, height);
            if (logic) {
                ctx.fillStyle = "rgba(0,0,0,0.93)"; // pat; // set the fill style
                logic = 0;
            }
            else {
                ctx.fillStyle = "#000"; // set the fill style
                logic = 1;
            }
            ctx.rect(0, 0, width, height); // create a rectangle
            ctx.fill(); // fill it with the pattern.
        }, 1000);
        const stream = canvas.captureStream(30);
        stream.getVideoTracks()[0].enabled = false;
        return stream.getVideoTracks()[0];
    }
    blackSilence(...args) {
        return new MediaStream([this.black(...args), this.silence()]);
    }
    getNatType(stunServer) {
        // tslint:disable-next-line:no-shadowed-variable
        return new Promise((resolve, rejects) => {
            // parseCandidate from https://github.com/fippo/sdp
            function parseCandidate(line) {
                let parts;
                // Parse both variants.
                if (line.indexOf("a=candidate:") === 0) {
                    parts = line.substring(12).split(" ");
                }
                else {
                    parts = line.substring(10).split(" ");
                }
                const candidate = {
                    foundation: parts[0],
                    component: parts[1],
                    protocol: parts[2].toLowerCase(),
                    priority: parseInt(parts[3], 10),
                    ip: parts[4],
                    port: parseInt(parts[5], 10),
                    // skip parts[6] == 'typ'
                    type: parts[7],
                };
                for (let i = 8; i < parts.length; i += 2) {
                    switch (parts[i]) {
                        case "raddr":
                            candidate.relatedAddress = parts[i + 1];
                            break;
                        case "rport":
                            candidate.relatedPort = parseInt(parts[i + 1], 10);
                            break;
                        case "tcptype":
                            candidate.tcpType = parts[i + 1];
                            break;
                        default:
                            // Unknown extensions are silently ignored.
                            break;
                    }
                }
                return candidate;
            }
            const candidates = [];
            const pc = new RTCPeerConnection({
                iceServers: [{ urls: "stun:" + stunServer }],
            });
            const dc = pc.createDataChannel("foo");
            dc.onopen = (ev) => {
                const obj = {
                    message: "hello world!",
                    timestamp: new Date(),
                };
                dc.send(JSON.stringify(obj));
            };
            dc.onerror = (ev) => {
                rejects(ev);
            };
            dc.onclose = (ev) => {
                //console.log("channel state close", ev);
            };
            pc.onicecandidate = (e) => {
                // eslint-disable-next-line no-console
                console.log("cand", e.candidate);
                if (e.candidate && e.candidate.candidate.includes("srflx")) {
                    const cand = parseCandidate(e.candidate.candidate);
                    //console.log(JSON.stringify(cand));
                    if (!candidates[cand.relatedPort]) {
                        candidates[cand.relatedPort] = [];
                    }
                    candidates[cand.relatedPort].push(cand);
                    this.publicIps.push(cand.ip + ":" + cand.port);
                }
                else if (!e.candidate || pc.iceGatheringState === "complete") {
                    if (Object.keys(candidates).length === 1) {
                        const ports = candidates[Object.keys(candidates)[0]];
                        const NatType = ports.length === 1 ? "normal" : "symmetric";
                        resolve({ natType: NatType, publicIps: this.publicIps });
                        // eslint-disable-next-line no-console
                        console.log("candidates", candidates, ports, this.publicIps, NatType);
                        pc.close();
                    }
                    else {
                        resolve({ natType: "Undefined", publicIps: this.publicIps });
                    }
                }
            };
            pc.createOffer().then((offer) => pc.setLocalDescription(offer));
        });
    }
}
exports.default = SingleStreamHelper;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
//import * as html2canvas from "html2canvas";
const PhantomHelper_1 = __webpack_require__(15);
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
//@ts-ignore
const MVDOTOK = __webpack_require__(16);
class ScreenSharingMobile {
    constructor(instance = null, showId = null, data = null, authToken = null, refID = null) {
        this.nativeScreenShare = false;
        this.pauseScreenCapture = false;
        this.useServerSideRendering = false;
        this.MclientInstance = null;
        this.messageCredentials = null;
        this.authToken = null;
        this.RefID = null;
        this.oldBlob = null;
        this.socketInstance = null;
        this.showId = null;
        // eslint-disable-next-line @typescript-eslint/member-ordering,tree-shaking/no-side-effects-in-initialization
        this.toGeeScreenDebounce = ScreenSharingMobile.toGeeDebounce(
        // eslint-disable-next-line @typescript-eslint/unbound-method,tree-shaking/no-side-effects-in-initialization
        this.startToGeeCaptureScreen.bind(this), 1000, 0);
        // eslint-disable-next-line @typescript-eslint/member-ordering,tree-shaking/no-side-effects-in-initialization
        this.toGeeScreenDebounceShort = ScreenSharingMobile.toGeeDebounce(
        // eslint-disable-next-line @typescript-eslint/unbound-method,tree-shaking/no-side-effects-in-initialization
        this.startToGeeCaptureScreen.bind(this), 300, 0);
        this.socketInstance = instance;
        this.showId = showId;
        this.phantomHelper = new PhantomHelper_1.default();
        if (this.socketInstance) {
            this.phantomHelper.refId = this.socketInstance.currentUser;
            this.phantomHelper.token = this.socketInstance.authorizationToken;
            this.phantomHelper.htmlNormalizationCode = this.socketInstance.htmlNormalizationCode;
        }
        this.useServerSideRendering = this.detectMob() ? 2 : 0;
        this.authToken = authToken;
        this.RefID = refID;
        this.initializeMessaging(data);
    }
    initializeMessaging(data) {
        if (!data || (data && !data.customScreenShare)) {
            return;
        }
        if (this.MclientInstance) {
            this.MclientInstance.Disconnect();
        }
        this.MclientInstance = null;
        this.messageCredentials = data;
        // eslint-disable-next-line no-console
        console.log("message credentials in screenshare class-->", this.messageCredentials);
        const messagesCredentials = {
            projectId: this.messageCredentials.customScreenShare.projectId,
            secret: "5ff420e1fd72bca845c889bdfe01d19d",
            host: this.messageCredentials.customScreenShare.completeAddress,
        };
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        //@ts-ignore
        this.MclientInstance = new MVDOTOK.Client(messagesCredentials);
        // eslint-disable-next-line no-console
        console.log("** Mclient in sdk after initializing==>", this.MclientInstance);
        // eslint-disable-next-line no-console
        console.log("** before registering Mclient in sdk==>", this.authToken, this.RefID);
        this.MclientInstance.Register(this.RefID, this.authToken);
        this.MclientInstance.on("connect", (res) => {
            // eslint-disable-next-line no-console
            console.log("**res on connect sdk in vdotok sdk", res);
            this.subscribeChannel({
                key: this.messageCredentials.customScreenShare.topicKey,
                channel: this.messageCredentials.customScreenShare.topicName,
                //   last: 100,
            });
            // subscribeChannel({
            //   key: messageChannelKey,
            //   channel: messageChannelName,
            //   last: 100,
            // });
            // msgScrollTimeout = setTimeout(() => {
            //   scrollToLastMessage();
            // }, 1500);
            // // this.getGroups();
        });
        this.MclientInstance.on("subscribed", (response) => {
            // eslint-disable-next-line no-console
            console.log("** res on subscribing channel in sdk-->", response);
        });
        this.MclientInstance.on("message", (response) => {
            // eslint-disable-next-line no-console
            console.log("**res on message ", response);
        });
    }
    subscribeChannel(channel) {
        this.MclientInstance.Subscribe(channel);
    }
    detectMob() {
        const toMatch = [
            /Android/i,
            /webOS/i,
            /iPhone/i,
            /iPad/i,
            /iPod/i,
            /BlackBerry/i,
            /Windows Phone/i,
        ];
        return toMatch.some((toMatchItem) => {
            // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
            return navigator.userAgent.match(toMatchItem);
        });
    }
    async getScreenShareStream(withAudio = true, imageLogic = null) {
        let stream = null;
        if (imageLogic) {
            this.useServerSideRendering = 2;
        }
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia && !imageLogic) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                stream = await navigator.mediaDevices.getDisplayMedia({
                    video: {
                        width: { ideal: 1920 },
                        height: { ideal: 1080 },
                        frameRate: { ideal: 18 },
                        aspectRatio: { ideal: 1.7777777778 },
                    },
                    audio: withAudio /*{
                          cursor: 'always' ,//| 'motion' | 'never'
                          displaySurface:  'browser' //| 'application' | 'monitor' | 'window'
                      }*/,
                });
                this.nativeScreenShare = true;
            }
            else {
                stream = await this.getCustomScreen();
            }
        }
        catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            if (e.message === "Permission denied") {
                return null; //user cancelled screen sharing
            }
            stream = await this.getCustomScreen();
        }
        return stream;
    }
    imageSrcToBase64(img) {
        // adds CORS headers to the proxied request
        // https://github.com/Rob--W/cors-anywhere
        const proxyUrl = "http://proxy.vdotok.dev:8888/";
        const isBase64 = /^data:image\/(png|jpeg);base64,/.test(img.src);
        if (isBase64) {
            return;
        }
        //const agent = new HttpsProxyAgent("http://proxy.vdotok.dev:8888");
        return fetch(img.src, {
            headers: {
                "X-User-Agent": "agent",
            },
        })
            .then((res) => res.blob())
            .then((blob) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onerror = reject;
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(blob);
        }))
            .then((dataURL) => {
            img.src = dataURL;
        });
    }
    toDataURL(img) {
        const isBase64 = /^data:image\/(png|jpeg);base64,/.test(img.src);
        if (isBase64) {
            return;
        }
        return new Promise(function (resolve, reject) {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
                const reader = new FileReader();
                reader.onerror = reject;
                reader.onloadend = function () {
                    img.src = reader.result;
                    resolve(reader.result);
                };
                reader.readAsDataURL(xhr.response);
            };
            xhr.open("GET", img.src, true);
            xhr.responseType = "blob";
            xhr.send();
        });
    }
    async getCustomScreen() {
        /*const imgs = document.querySelectorAll("img");
        return Promise.all(
          [].slice.call(imgs).map((img) => this.toDataURL(img))
        ).then(async () => {*/
        this.pauseScreenCapture = false;
        if (this.useServerSideRendering === 2) {
            const startedAdding = await this.startToGeeCaptureScreen();
            this.toGeeListenToScreenChanges();
            return startedAdding;
        }
        else {
            let stream = null;
            this.nativeScreenShare = false;
            const canvas = ScreenSharingMobile.getTogeeScreenCanvas(); //create a canvas in dom if not exist and store in window.tooGeeStreamCanvas
            if (canvas) {
                const startedAdding = await this.startToGeeCaptureScreen();
                stream = canvas.captureStream(30);
                this.toGeeListenToScreenChanges();
            }
            return stream;
        }
        /*});*/
    }
    toGeeListenToScreenChanges() {
        const userActions = ["keydown", "touchend", "orientationchange"];
        for (const action of userActions) {
            window.addEventListener(action, this.toGeeScreenDebounce.bind(this));
        }
        document.addEventListener("touchmove", this.toGeeScreenDebounceShort.bind(this)); // for mobile
        window.onscroll = (e // for web
        ) => {
            this.startToGeeCaptureScreen(e);
        };
        this.toGeeListenToDomChanges();
    }
    toGeeListenToDomChanges() {
        // Select the node that will be observed for mutations
        const targetNode = document.body;
        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: true, subtree: true };
        // Callback function to execute when mutations are observed
        const callback = (mutationsList, observer) => {
            // Use traditional 'for loops' for IE 11
            let createNewPic = 0;
            for (const mutation of mutationsList) {
                if (mutation.type === "childList") {
                    for (const addedNodes of mutation.addedNodes) {
                        if (addedNodes.className &&
                            !addedNodes.className.includes("html2canvas")) {
                            createNewPic = 1;
                            break;
                        }
                    }
                    for (const removedNode of mutation.removedNodes) {
                        if (removedNode.className &&
                            !removedNode.className.includes("html2canvas")) {
                            createNewPic = 1;
                            break;
                        }
                    }
                    //console.log('A child node has been added or removed.');
                }
                /*else if (mutation.type === 'attributes') {
                                    console.log('The ' + mutation.attributeName + ' attribute was modified.');
                                }*/
            }
            if (createNewPic) {
                this.toGeeScreenDebounce();
            }
        };
        // Create an observer instance linked to the callback function
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        window.toGeeScreenObserver = new MutationObserver(callback);
        // Start observing the target node for configured mutations
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        window.toGeeScreenObserver.observe(targetNode, config);
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    static getTogeeScreenCanvas() {
        let toGeeCanvas = document.getElementById("toGee_screen_share_canvas");
        if (!toGeeCanvas) {
            toGeeCanvas = document.createElement("canvas");
            document.body.appendChild(toGeeCanvas);
            toGeeCanvas.id = "toGee_screen_share_canvas";
            toGeeCanvas.setAttribute("data-html2canvas-ignore", "");
            toGeeCanvas.width = window.innerWidth;
            toGeeCanvas.height = window.innerHeight;
            //toGeeCanvas.style.display = "none";
            toGeeCanvas.style.opacity = 0;
            toGeeCanvas.style.position = "absolute";
            toGeeCanvas.style.zIndex = -1;
            toGeeCanvas.style.top = "-1000em";
            toGeeCanvas.style.left = "-1000em";
        }
        /*toGeeCanvas.width = window.innerWidth+5;
                toGeeCanvas.height = window.outerHeight+5;
                window.tooGeeStreamCanvas = toGeeCanvas;
                window.tooGeeStreamCanvasCTX = toGeeCanvas.getContext('2d');*/
        return toGeeCanvas;
    }
    async startToGeeCaptureScreen(e = null) {
        if (this.pauseScreenCapture) {
            // eslint-disable-next-line no-console
            console.log("Screen sharing is pause!");
            return;
        }
        if (!this.phantomHelper) {
            this.phantomHelper = new PhantomHelper_1.default();
            if (this.socketInstance) {
                this.phantomHelper.refId = this.socketInstance.currentUser;
                this.phantomHelper.token = this.socketInstance.authorizationToken;
                this.phantomHelper.htmlNormalizationCode = this.socketInstance.htmlNormalizationCode;
            }
        }
        // eslint-disable-next-line no-console
        //console.trace();
        let innerCanvas;
        let createdNew = false;
        let useExisting = 0;
        if (e && (e.type == "scroll" || e.type == "touchmove")) {
            // eslint-disable-next-line no-console
            console.log(window.scrollY, window.scrollX, window.innerWidth);
            useExisting = 1;
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        if (useExisting && window.toGeeScreenInnerCanvas) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            innerCanvas = window.toGeeScreenInnerCanvas;
        }
        else {
            if (!this.useServerSideRendering) {
                ScreenSharingMobile.toGeePrepareVideos(); //html2canvas library not support video tags capturing so i am taking current frame pictures and setting video background according to that
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore
                window.toGeeScreenInnerCanvas = innerCanvas = await html2canvas(document.body, {
                    onclone: (cloned) => {
                        //console.log(cloned);
                    },
                    backgroundColor: "#ffffff",
                    scale: 1,
                    /*dpi:300,
                      async : true, // setting it to false may slow the generation a bit down
                      allowTaint : true,
                      foreignObjectRendering : true,*/
                    imageTimeout: 8200,
                    logging: true,
                    removeContainer: false,
                    proxy: "https://host.togee.io/html2canvasproxy.php",
                });
            }
            else if (this.useServerSideRendering === 1) {
                const apiResults = await this.phantomHelper.getScreenShotServer();
                if (apiResults) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    window.toGeeScreenInnerCanvas = innerCanvas = apiResults;
                    createdNew = true;
                }
            }
            else if (this.useServerSideRendering === 2) {
                const apiResults = await this.phantomHelper.getScreenShotServer(null, null, null, null, this.showId, true);
                if (apiResults) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    window.toGeeScreenInnerCanvas = innerCanvas = apiResults;
                    createdNew = true;
                }
            }
        }
        if (this.useServerSideRendering === 1) {
            const image = new Image();
            image.onload = () => {
                this.drawOnCanvas(image);
            };
            if (createdNew) {
                if (this.oldBlob) {
                    URL.revokeObjectURL(this.oldBlob);
                }
                this.oldBlob = URL.createObjectURL(innerCanvas);
            }
            image.src = this.oldBlob;
        }
        else if (!this.useServerSideRendering) {
            this.drawOnCanvas(innerCanvas);
        }
        else if (this.useServerSideRendering === 2) {
            this.drawOnCanvas(innerCanvas, true, createdNew);
        }
        if (!ScreenSharingMobile.onceAutoScrollDone &&
            this.useServerSideRendering !== 2) {
            ScreenSharingMobile.onceAutoScrollDone = setInterval(() => {
                this.startToGeeCaptureScreen({ type: "scroll" });
            }, 300);
        }
        return true;
    }
    disconnectMessaging() {
        if (this.MclientInstance) {
            this.MclientInstance.Disconnect();
        }
    }
    sendScrollMessage(data) {
        let idd = new Date().getTime().toString();
        let msg = {
            type: "S_S_I_E",
            from: this.RefID,
            content: data,
            id: idd,
            date: new Date().getTime(),
            key: this.messageCredentials.customScreenShare.topicKey,
            to: this.messageCredentials.customScreenShare.topicName,
        };
        console.log('before sending message in msg sdk scroll-->', msg);
        if (this.MclientInstance) {
            this.MclientInstance.SendMessage(msg);
        }
    }
    drawOnCanvas(image, sendSocket = false, isNew = false) {
        const sHeight = window.scrollY < 0
            ? 0
            : window.scrollY >
                document.documentElement.scrollHeight -
                    document.documentElement.clientHeight
                ? document.documentElement.scrollHeight -
                    document.documentElement.clientHeight
                : window.scrollY;
        if (sendSocket) {
            if (this.socketInstance) {
                if (!isNew) {
                    // this.socketInstance.sendCustomRPC(
                    //   {
                    //     type: "S_S_I", //SCROLL_SCREEN_IMAGE
                    //     x: window.scrollX < 0 ? 0 : window.scrollX,
                    //     y: sHeight,
                    //     w: window.innerWidth,
                    //     h: window.innerHeight,
                    //   },
                    //   this.showId
                    // );
                    this.sendScrollMessage({
                        type: "S_S_I",
                        x: window.scrollX < 0 ? 0 : window.scrollX,
                        y: sHeight,
                        w: window.innerWidth,
                        h: window.innerHeight,
                        t: Date.now(),
                    });
                }
                else {
                    this.socketInstance.sendStateRPC({
                        type: "N_S_I",
                        image: image,
                        x: window.scrollX < 0 ? 0 : window.scrollX,
                        y: sHeight,
                        w: window.innerWidth,
                        h: window.innerHeight,
                        page_url: window.location.href,
                        t: Date.now(),
                    }, this.showId);
                    this.socketInstance.emit("call", {
                        type: "New_Image_Sent",
                        message: "new image sent to viewers",
                        showId: this.showId,
                    });
                }
            }
            return;
        }
        const canvas = ScreenSharingMobile.getTogeeScreenCanvas();
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, window.scrollX < 0 ? 0 : window.scrollX, sHeight, window.innerWidth, window.innerHeight, // source rectangle
        0, 0, canvas.width, canvas.height); // destination rectangle);
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    static toGeePrepareVideos() {
        let canvas;
        let ctx;
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        if (window.tooGeeVideosHackCanvas) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            canvas = window.tooGeeVideosHackCanvas;
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            ctx = window.tooGeeVideosHackCanvasCTX;
        }
        else {
            canvas = document.createElement("canvas"); // create a canvas element
            canvas.setAttribute("id", "tooGeeVideosHackCanvas");
            ctx = canvas.getContext("2d");
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            window.tooGeeVideosHackCanvasCTX = ctx;
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            window.tooGeeVideosHackCanvas = canvas;
        }
        const videos = document.querySelectorAll("video");
        let w, h;
        for (let i = 0, len = videos.length; i < len; i++) {
            const v = videos[i];
            if (!v.src)
                //continue // no video here
                try {
                    w = v.videoWidth;
                    h = v.videoHeight;
                    canvas.width = w;
                    canvas.height = h;
                    ctx.fillRect(0, 0, w, h);
                    ctx.drawImage(v, 0, 0, w, h);
                    v.style.backgroundImage = `url(${canvas.toDataURL()})`; // here is the magic
                    v.style.backgroundSize = "contain";
                    ctx.clearRect(0, 0, w, h); // clean the canvas
                }
                catch (e) {
                    continue;
                }
        }
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    static toGeeDebounce(func, wait, immediate) {
        let timeout;
        return function () {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            // eslint-disable-next-line @typescript-eslint/no-this-alias
            const context = this, 
            // eslint-disable-next-line prefer-rest-params
            args = arguments;
            const later = function () {
                timeout = null;
                if (!immediate)
                    func.apply(context, args);
            };
            const callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow)
                func.apply(context, args);
        };
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering,@typescript-eslint/explicit-function-return-type
    static getScreenShot(height, width = null, url = null, refId = null, token = null, htmlNormalizationCode = null) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        const phantomHelper = new PhantomHelper_1.default();
        if (refId && token) {
            phantomHelper.refId = refId;
            phantomHelper.token = token;
        }
        if (htmlNormalizationCode) {
            phantomHelper.htmlNormalizationCode = htmlNormalizationCode;
        }
        return phantomHelper.getScreenShotServer(height, width, ".jpg", null, null, false, url);
        /*return html2canvas(document.\body, {
          onclone: (cloned: any) => {
            //console.log(cloned);
          },
          backgroundColor: "#ffffff",
          scale: 1, // I am not sure whether it helped or not but I remember setting it // it depends on the browser used whether it is allowed or not
          height,
          /!*dpi:300,
                async : true, // setting it to false may slow the generation a bit down
                allowTaint : true,
                foreignObjectRendering : true,*!/
    
          imageTimeout: 800, // this further delays loading, however this solved a no images in captured screenshot issue
          logging: false,
        });*/
    }
}
exports.default = ScreenSharingMobile;
//_toGee Code Start//
ScreenSharingMobile.onceAutoScrollDone = false;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//import * as JSZip from "jszip";
Object.defineProperty(exports, "__esModule", { value: true });
class PhantomHelper {
    constructor() {
        this.pendingCalls = 0;
        this.latestParams = null;
        this.refId = null;
        this.token = null;
        this.htmlNormalizationCode = null;
    }
    async getZip(data) {
        /*const zip = new JSZip();
        zip.file("Hello.txt", data);
        const content = await zip.generateAsync({ type: "base64" });
        //console.log("blob content", content)
        return content;*/
    }
    getHtml(tag) {
        document.querySelectorAll("canvas").forEach((canvas) => {
            if (!canvas.hasAttribute("id") || !canvas.getAttribute("id")) {
                canvas.setAttribute("id", "dynamic_canvas_" + Math.round(Math.random() * 100));
            }
        });
        let html = document.getElementsByTagName(tag)[0];
        if (html) {
            html = html.innerHTML.trim();
        }
        else {
            return "";
        }
        const template = document.createElement("template");
        template.innerHTML = html;
        document.querySelectorAll("canvas").forEach((canvas) => {
            const img = new Image();
            for (let index = canvas.attributes.length - 1; index > -1; --index) {
                const attribute = canvas.attributes[index];
                img.setAttribute(attribute.name, attribute.value);
            }
            img.src = canvas.toDataURL();
            const canvas2 = template.content.querySelector("#" + canvas.id);
            if (canvas2.classList.contains("togee_doddle_canvas")) {
                img.style.top = window.scrollY + "px";
            }
            canvas2.parentNode.replaceChild(img, canvas2);
        });
        const realHtml = document.querySelector("html");
        const tempHtml = document.createElement("html");
        if (realHtml) {
            for (let index = realHtml.attributes.length - 1; index > -1; --index) {
                const attribute = realHtml.attributes[index];
                tempHtml.setAttribute(attribute.name, attribute.value);
            }
        }
        const realBody = document.querySelector("body");
        const tempBody = document.createElement("body");
        if (realBody) {
            for (let index = realBody.attributes.length - 1; index > -1; --index) {
                const attribute = realBody.attributes[index];
                tempBody.setAttribute(attribute.name, attribute.value);
            }
        }
        // @ts-ignore
        tempHtml.appendChild(document.querySelector("head").cloneNode(true));
        tempBody.innerHTML = template.innerHTML;
        tempHtml.appendChild(tempBody);
        Array.prototype.forEach.call(tempHtml.querySelectorAll("*[data-html2canvas-ignore],*[data-togee-ignore], script"), function (node) {
            node.parentNode.removeChild(node);
        });
        if (this.htmlNormalizationCode) {
            const tempDom = document.createElement("span");
            tempDom.innerHTML = this.htmlNormalizationCode;
            tempHtml.appendChild(tempDom);
        }
        return tempHtml.outerHTML.trim();
    }
    makeFixedElementsVisible(tempHtml) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        const fixedElements = [...tempHtml.querySelectorAll("*")].filter((x) => getComputedStyle(x, null).getPropertyValue("position") === "fixed" &&
            !x.classList.contains("togee_chat_bot_container") &&
            !x.classList.contains("togee_snakbar") &&
            !x.classList.contains("togee_video_container") &&
            x.getBoundingClientRect().width);
        console.log(fixedElements);
    }
    async waitUntil() {
        return await new Promise((resolve) => {
            const interval = setInterval(() => {
                if (!PhantomHelper.screenShotInProgress) {
                    resolve("foo");
                    clearInterval(interval);
                }
            }, 1000);
        });
    }
    async getScreenShotServer(height = null, width = null, ext = null, client = null, showId = null, onlySave = false, url = null) {
        try {
            height = height ? height : document.body.scrollHeight;
            width = width ? width : window.outerWidth;
            ext = ext ? ext : ".webp";
            client = client ? client : window.location.hostname;
            showId = showId ? showId : +new Date();
            //const content = await this.getZip(this.getHtml("html"));
            const content = url ? url : this.getHtml("body");
            const body = {
                html: content,
                host: window.location.href,
                width: width,
                height: height,
                viewportHeight: window.innerHeight,
                extension: ext,
                type: url ? "url" : "html",
                env: "p",
                showId,
                client,
                onlySave,
            };
            if (PhantomHelper.screenShotInProgress) {
                this.pendingCalls++;
                this.latestParams = body;
                // eslint-disable-next-line no-console
                console.log("SDK API Latest PArams", this.latestParams);
                await this.waitUntil();
            }
            else {
                this.pendingCalls = 1;
            }
            let response = null;
            if (this.pendingCalls == 1) {
                this.pendingCalls = 0;
                response = await this.hitAPI(body);
            }
            else {
                this.pendingCalls--;
            }
            // console.log("res ",response);
            return response;
        }
        catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
            PhantomHelper.screenShotInProgress = 0;
            return null;
        }
    }
    async hitAPI(body) {
        var _a, _b;
        body.html = body.type == "url" ? body.html : this.getHtml("body"); //latest html content
        body.ref_id = (_a = this.refId) !== null && _a !== void 0 ? _a : "123123";
        body.token = (_b = this.token) !== null && _b !== void 0 ? _b : "123456";
        PhantomHelper.screenShotInProgress = 1;
        //const apiUrl = `https://d-host.togee.io:4600`;
        //Screen share service dev env : https://screen-share-service.vdotok.dev:443
        const apiUrl = `https://screen-share-service.vdotok.com:443/CreateScreenShot/`;
        const response = await fetch(apiUrl, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
            PhantomHelper.screenShotInProgress = 0;
            if (body.onlySave) {
                return response.json();
            }
            else {
                return response.blob();
            }
        })
            .catch(function (error) {
            // eslint-disable-next-line no-console
            console.log(error);
            PhantomHelper.screenShotInProgress = 0;
            return null;
        });
        return response;
    }
}
exports.default = PhantomHelper;
// eslint-disable-next-line @typescript-eslint/no-empty-function
PhantomHelper.screenShotInProgress = 0;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

/*! ========= vdotok-messaging==================== */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _Client_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Client", function() { return _Client_index__WEBPACK_IMPORTED_MODULE_1__["default"]; });

// Helpful name and version exports

const version = _version__WEBPACK_IMPORTED_MODULE_0__["LIBRARY_VERSION"];
const name = "vdotok-messaging";

// Export namespaced web




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIBRARY_VERSION", function() { return LIBRARY_VERSION; });
const LIBRARY_VERSION = "0.18.0";


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Client; });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Services_FileMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _Services_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _Modals_MessageModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _Helpers_FileHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(15);
/* harmony import */ var _Modals_MessageSchema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14);
/* eslint-disable prettier/prettier */
/* eslint-disable no-eval */

//import { connect } from 'mqtt';





// eslint-disable-next-line tree-shaking/no-side-effects-in-initialization
global.Buffer = global.Buffer || __webpack_require__(17).Buffer;
// eslint-disable-next-line @typescript-eslint/no-var-requires,tree-shaking/no-side-effects-in-initialization
const mqtt = __webpack_require__(21);
const connect = mqtt.connect;
/* Norgics SMS Service
 * @class NCS
 */
const FileTypes = {
    0: "image",
    1: "audio",
    2: "video",
    3: "file"
};
class Client extends events__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"] {
    /**
     *
     * @param options
     * input from client host,port,username,secret
     */
    constructor(options) {
        super();
        this.Host = '';
        this.Port = '';
        this.Username = '';
        this.Password = '';
        this.Connection = '';
        this.ChennalKey = '';
        this.reConnectivity = '';
        this.projectID = '';
        this.projectSecretKey = '';
        /**
         *
         * @property @private
         */
        this.QueueFiles = {};
        // this.Host=options.host;
        // this.Port=options.port;
        // this.Username=options.credentials.username;
        // this.Password=options.credentials.password;
        // this.reConnectivity=options.reConnectivity;
        // if(options.clientId)
        // this.clientId=options.clientId;
        this.projectSecretKey = options.secret;
        this.projectID = options.projectID;
        if (options.host) {
            this.Host = options.host;
        }
        else {
            this.Authentication();
        }
        this.registerPingWorker();
    }
    static consoleLog(...args) {
        // eslint-disable-next-line no-console
        console.log(...args);
    }
    /**
     * Connetion with server and user registeration
     */
    Register(username, password) {
        this.Username = username;
        this.Password = password;
        /**
         * Connetion with server
         */
        //let hostString=`${options.host}:${options.port}`;
        const hostString = `${this.Host}`;
        if (hostString.length == 0)
            return this.emit("authentication_error", { message: `SDK is not authorized.` });
        Client.consoleLog("hostString===", hostString, this.Username, " ===password=== ", this.Password);
        //wss://vte2.vdotok.com:443
        const client = connect(hostString, { username: username, password: password });
        this.Connection = client;
        /***
         * Set CallBacks
         */
        client.on('message', (topic, message, packet) => {
            //console.log('on MessagePacket', packet, "====Received-====message", message.toString());
            //{"time":1604670380,"event":"status","channel":"3927/","who":[{"id":"FJDE5NXLZ2SDWL7PXSQYUHXUHM"}]}
            try {
                let JsonPacket = JSON.parse(message.toString());
                if (JsonPacket.hasOwnProperty("event")) {
                    this.SetPresenceEvent(JsonPacket);
                }
                else if (JsonPacket.hasOwnProperty("status") && JsonPacket["status"] == 200) {
                    //console.log('on Createion',JsonPacket);
                    this.emit("create", JsonPacket);
                }
                else {
                    this.SetMessagePacket(JsonPacket);
                }
            }
            catch (e) {
                //console.log("pppppppp",packet)
                //const string = new TextDecoder().decode(packet.payload);
                //console.log("==============090", string)
                this.SetMessagePacket(packet);
                //console.log('on MessagePacket', topic, "====Receivedasdsa", message.toString());
            }
        });
        client.on('connect', () => {
            this.emit("connect");
        });
        client.on('packetsend', (data) => {
            Client.consoleLog('on packetsend', data, (new Date()).toLocaleString());
        });
        client.on('packetreceive', (data) => {
            //Client.consoleLog('on packetreceive',data);
        });
        client.on('presence', (data) => {
            // Client.consoleLog('on presence',data);
        });
        client.on('disconnect', (data) => {
            this.emit("disconnect", data);
        });
        client.on('error', (data) => {
            this.emit("error", data);
        });
        /**********************end callbacks************************************* */
    }
    CreateChannel(channel) {
        const channelOptions = {
            "key": "cWV91camkwd99XO9rvHmamvXxGdyeHK5",
            "channel": channel + "/",
            "type": "rwslp",
            "ttl": 999999
        };
        this.Connection.publish("emitter/keygen/", JSON.stringify(channelOptions));
    }
    Subscribe(options) {
        let ChannelString = `${options.key}/${options.channel}`;
        if (options && options.last) {
            ChannelString += `?last=${options.last}`;
        }
        this.Connection.subscribe(ChannelString, [], (err, granted) => {
            //Client.consoleLog("===Subscrib===",err,granted);
            if (granted && granted != undefined) {
                this.SendPresence(options);
                // this.emit("subscribed",options);
            }
        });
    }
    UnSubscribe(options) {
        const unSubCString = `${options.key}/${options.channel}`;
        this.Connection.unsubscribe(unSubCString, [], (err) => {
            if (err == null) {
                this.emit("unsubscribed", options);
            }
        });
    }
    Presence(options) {
        // this.Connection.unsubscribe(); 
        //   this.Connection.presence({
        //     key: options.key,
        //     channel: options.channel,
        //     changes: true,
        //     status: true
        // });
        // client.subscribe('presence', function (err) {
        //   if (!err) {
        //     client.publish('presence', 'Hello mqtt')
        //   }
        // })
    }
    /**
     *
     * @param options
     * Send Message contains options param containing key,channel and message
     */
    SendMessage(options) {
        let newChannelString = `${options.key}/${options.to}`;
        //Client.consoleLog("====SendM String===",newChannelString);
        if (options && options.ttl) {
            newChannelString += `?ttl=${options.ttl}`;
        }
        this.Connection.publish(newChannelString, JSON.stringify(options), {}, () => {
            this.Connection.on('message', (topic, message, packet) => {
                if (topic == options.to) {
                    const payload = packet.payload;
                    const cmd = packet.cmd;
                    if (cmd == "publish" && payload != null && payload == JSON.stringify(options)) {
                        // Client.consoleLog("===ReceivedMessage",message.toString());     
                        this.emit("messagesent", { channel: topic, message: message });
                    }
                }
                // Client.consoleLog('on packetreceive after sending',topic,message,packet);
            });
        });
    }
    SendReceipt(options) {
        const newChannelString = `${options.key}/${options.to}`;
        //Client.consoleLog("====SendM String===",newChannelString);
        this.Connection.publish(newChannelString, JSON.stringify(options), {}, () => {
            this.Connection.on('message', (topic, message, packet) => {
                if (topic == options.to) {
                    const payload = packet.payload;
                    const cmd = packet.cmd;
                    if (cmd == "publish" && payload != null && payload == JSON.stringify(options)) {
                        //  Client.consoleLog("===ReceivedMessage",message.toString());     
                        this.emit("messagesent", { channel: topic, message: message });
                    }
                }
                // Client.consoleLog('on packetreceive after sending',topic,message,packet);
            });
        });
    }
    /***
     *
     * PUBLIC METHOD for send raw data
     *  */
    SendRawMessage(message, options) {
        const newChannelString = `${options.key}/${options.to}`;
        this.Connection.publish(newChannelString, message, {}, () => {
            this.Connection.on('message', (topic, message, packet) => {
                if (topic == options.topic) {
                    const payload = packet.payload;
                    const cmd = packet.cmd;
                    if (cmd == "publish" && payload != null && payload == JSON.stringify(options)) {
                        this.emit("messagesent", { channel: topic, message: message });
                    }
                }
            });
        });
    }
    SendFile(file, parameters) {
        _Services_FileMessage__WEBPACK_IMPORTED_MODULE_1__["default"].SendFile(file, parameters, this);
        // let newChannelString=`${options.key}/${options.topic}`;
        // Client.consoleLog("====SendM String===",newChannelString);
        // this.Connection.publish(newChannelString, JSON.stringify(options),{},()=>{
        //   this.Connection.on('message',  (topic:any, message:any,packet:any)=> {
        //     if(topic==options.to){
        //       let payload=packet.payload;
        //               let cmd=packet.cmd;
        //               if(cmd=="publish" && payload!=null && payload==JSON.stringify(options)){
        //               //  Client.consoleLog("===ReceivedMessage",message.toString());     
        //                 this.emit("messagesent",{channel:topic,message:message});
        //               }
        //     }
        //     Client.consoleLog('on packetreceive after sending',topic,message,packet);
        //   });
        // });
    }
    /**
     *
     * @public @method disconnect
     */
    Disconnect() {
        if (this.pingWorker) {
            this.pingWorker.postMessage({ method: 'clearPingInterval' });
        }
        this.Connection.end();
    }
    /***
     * @private method for emitting file message
     */
    async SetFileMessage(files, packet) {
        //Client.consoleLog("QueuFiles==",this.QueueFiles);
        const message = _Modals_MessageSchema__WEBPACK_IMPORTED_MODULE_5__["default"];
        // message.content=files.Content;
        message.type = files.Header.type;
        message.size = files.Header.size;
        message.to = files.Header.topic;
        message.key = files.Header.key;
        message.from = files.Header.from;
        message["isBuffering"] = false;
        message["ext"] = files.Header.fileExtension;
        message.id = packet.headerId;
        message["filename"] = this.Username + Math.random() + '.' + files.Header.fileExtension.toLowerCase();
        // message.content=await BufferToBase64Async(files.Content,files.Header.fileExtension);
        message.content = await Object(_Helpers_FileHelper__WEBPACK_IMPORTED_MODULE_4__["ArrayBase64ToStringBase64Async"])(files.Content, files.Header.fileExtension);
        message.type = FileTypes[message.type];
        this.emit("message", message);
        this.Connection._sendPacket({ cmd: "pingreq" });
        delete this.QueueFiles[packet.headerId];
        // message.content=await BufferToBase64Async(files.Content,files.Header.fileExtension).then((f:any)=>{
        //   Client.consoleLog("ShowFileMessageNext==",f);
        //   message.content=f;
        //   message.type=FileTypes[message.type];
        //   this.emit("message",message);
        //   delete this.QueueFiles[packet.headerId];
        //  });
        // message.ShowFileMessage(this);
    }
    /***
     * @private method for emitting file message
     */
    SetFileLoadingMessage(packet) {
        let message = new _Modals_MessageModel__WEBPACK_IMPORTED_MODULE_3__["default"]();
        message.content = "";
        message.type = packet.type;
        message.size = packet.size;
        message.to = packet.topic;
        message.key = packet.key;
        message.from = packet.from;
        message["isBuffering"] = true;
        message["ext"] = packet.fileExtension;
        message.id = packet.headerId;
        message.ShowFileLoadingMessage(this);
    }
    Authentication() {
        // Client.consoleLog("====DER===",this.projectID,this.projectSecret,this.clientToken);
        // this.Connect('wss://kurento3.togee.io:8443/call');
        _Services_Auth__WEBPACK_IMPORTED_MODULE_2__["default"].Authorization(this.projectID, this.projectSecretKey).then(response => {
            Client.consoleLog("====Authorization Chat====", response);
            if (response.status == 200) {
                //"wss://vte3.vdotok.com:443"
                this.Host = `${response.messaging_server_map.protocol}://${response.messaging_server_map.host}:${response.messaging_server_map.port}`;
                this.emit("authenticated", {});
            }
            else
                this.emit("authentication_error", { message: `SDK Credentials are invalid.Reason:${response.message}` });
        });
    }
    /*****************************************************************************
     * @private methods
     *****************************************************************************/
    //////////////////Presence Related Methods
    //////////////////////////////////////////////////////////////////////////////
    SendPresence(channelData) {
        const options = { "key": channelData.key, "channel": channelData.channel, "changes": true, "status": true };
        this.Connection.publish("emitter/presence/", JSON.stringify(options), {}, () => {
            this.Connection.on('message', (topic, message, packet) => {
                //presence sent
            });
        });
    }
    //////////////////Presence Related Methods
    //////////////////////////////////////////////////////////////////////////////
    SetPresenceEvent(JsonData) {
        if (JsonData["event"] == 'status') {
            // Client.consoleLog("it will be subscribed===",JsonData);
            this.emit("subscribed", JsonData);
        }
        if (JsonData["event"] == 'subscribe') {
            this.emit("online", JsonData);
        }
        if (JsonData["event"] == 'unsubscribe') {
            this.emit("offline", JsonData);
        }
    }
    /**
     * @private method
     */
    SetMessagePacket(JsonPacket) {
        let isFile = false;
        const isFileHeader = _Services_FileMessage__WEBPACK_IMPORTED_MODULE_1__["default"].MapHeaderPacket(JsonPacket);
        const isFileMessage = _Services_FileMessage__WEBPACK_IMPORTED_MODULE_1__["default"].MapFileMessagePacket(JsonPacket);
        //Client.consoleLog("isFileHeader Message",JsonPacket);
        //Client.consoleLog("isFileHeader ",isFileHeader);
        //Client.consoleLog("isFileHeader Message",isFileMessage);
        if (isFileHeader) {
            isFile = true;
            this.QueueFiles[JsonPacket.headerId] = { Header: JsonPacket, Content: [] };
            this.SetFileLoadingMessage(JsonPacket);
        }
        if (isFileMessage) {
            isFile = true;
            const files = this.QueueFiles[JsonPacket.headerId];
            // Client.consoleLog("isFileHeader Files",files);
            if (files != undefined) {
                const newContent = files.Content;
                files.Content = newContent.concat(JsonPacket.content);
                this.QueueFiles[JsonPacket.headerId] = Object.assign({}, files);
                //Client.consoleLog("isFileHeader isJsonPacket",JsonPacket,files.Header.totalPacket==JsonPacket.packetNo);
                if (files.Header.totalPacket == JsonPacket.packetNo) {
                    this.SetFileMessage(files, JsonPacket);
                }
            }
        }
        if (!isFileMessage && !isFileHeader) {
            this.emit("message", JsonPacket);
        }
        //
    }
    registerPingWorker() {
        window.URL = window.URL || window.webkitURL;
        const response = `let pingInterval;
                            onmessage = (res) => {
                                let data = res.data;
                                console.log('Message received from main script');
                                const method = data.method;
                                if (method === 'format') {
                                    postMessage({
                                        data: {
                                            'res': 'I am a customized result string.',
                                        }
                                    });
                                }
                                else if (method === 'startPingInterval')
                                {
                                    if(!data.interval)
                                    {
                                        data.interval =  5000;
                                    }
                                    startPingInterval(data.interval);
                                }
                                else if(method === 'clearPingInterval')
                                {
                                    clearPingInterval();
                                }
                                console.log('Posting message back to main script');
                            }
                            
                            function startPingInterval(interval)
                            {
                                pingInterval = setInterval(()=>{
                                    postMessage({
                                            'sendPing': true
                                    });
                                },interval)
                            }
                            function  clearPingInterval()
                            {
                                if(pingInterval)
                                {
                                    clearInterval(pingInterval);
                                }
                            } 
                            `;
        const blob = new Blob([response], { type: 'application/javascript' });
        this.pingWorker = new Worker(URL.createObjectURL(blob));
        if (this.pingWorker) {
            // event processing
            this.pingWorker.onmessage = (e) => {
                if (e && e.data && e.data.sendPing && this.Connection) {
                    this.Connection._checkPing();
                }
                else {
                    //console.log(`Response: ${JSON.stringify(e)}`);
                }
            };
            //Start pinging server
            this.pingWorker.postMessage({ method: 'startPingInterval', interval: 3000 });
        }
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Helpers_ArrayHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _Modals_FileHeaderModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _Modals_FileMessageModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);



//import FileTypes from '../Modals/FileTypes';
const FileTypes = {
    image: 0,
    audio: 1,
    video: 2,
    file: 3
};
class File {
    constructor() { }
    SendFile(file, params, instance) {
        let fileOjbect = Object(_Helpers_ArrayHelper__WEBPACK_IMPORTED_MODULE_0__["GetFileObject"])(file);
        //console.log("===PEEE===Jaon===",fileOjbect);
        Object(_Helpers_ArrayHelper__WEBPACK_IMPORTED_MODULE_0__["GetBinaryArrayOfFile"])(fileOjbect.file, fileOjbect.fileType).then((binArray) => {
            //console.log("===PEEE===Jaon===",binArray.length,binArray);
            let fileSize = binArray.length;
            let newParams = Object.assign(Object.assign(Object.assign({}, params), fileOjbect), { size: fileSize });
            let chunkArray = [];
            let limit = 12000; //if we use 2000 limit it gives currpt file
            if (fileSize > limit) {
                chunkArray = Object(_Helpers_ArrayHelper__WEBPACK_IMPORTED_MODULE_0__["MakeChunkArray"])(binArray, limit);
                newParams.totalPacket = chunkArray.length;
                let headerID = this.SendHeaderFirst(newParams, instance);
                chunkArray.forEach((bytes, index) => {
                    let chunkNo = index + 1;
                    this.SendChunkPacket(bytes, headerID, chunkNo, params, instance);
                });
            }
            else {
                let headerParams = Object.assign(Object.assign({}, newParams), { totalPacket: 1 });
                let headerID = this.SendHeaderFirst(headerParams, instance);
                this.SendChunkPacket(binArray, headerID, 1, headerParams, instance);
            }
        });
    }
    SendHeaderFirst(params, instance) {
        // console.log("SendHeaderFirst",params);
        let fileHeader = new _Modals_FileHeaderModel__WEBPACK_IMPORTED_MODULE_1__["default"]();
        let headerId = params.id;
        fileHeader.from = params.from;
        fileHeader.fileExtension = params.ext;
        fileHeader.headerId = headerId;
        fileHeader.topic = params.topic;
        fileHeader.size = params.size;
        fileHeader.key = params.key;
        fileHeader.type = FileTypes[params.type];
        fileHeader.totalPacket = params.totalPacket;
        fileHeader.Send(instance.Connection);
        return headerId;
    }
    SendChunkPacket(bin, headerId, packetNo, params, instance) {
        console.log("Binarray", bin);
        bin = Array.from(bin);
        bin = btoa(bin.map((item) => String.fromCharCode(item)).join(""));
        console.log("Binarray Normal== ", bin);
        //bin=JSON.stringify(normalArray);
        // console.log("Binarray2== ",bin);
        let fileMessageModel = new _Modals_FileMessageModel__WEBPACK_IMPORTED_MODULE_2__["default"]();
        fileMessageModel.messageId = Object(_Helpers_ArrayHelper__WEBPACK_IMPORTED_MODULE_0__["GetUUID"])();
        fileMessageModel.content = bin;
        fileMessageModel.packetNo = packetNo;
        fileMessageModel.from = params.from;
        fileMessageModel.headerId = headerId;
        fileMessageModel.topic = params.topic;
        fileMessageModel.key = params.key;
        fileMessageModel.type = FileTypes[params.type];
        fileMessageModel.Send(instance.Connection);
        instance.Connection._sendPacket({ cmd: "pingreq" });
    }
    MapHeaderPacket(packet) {
        let fileHeader = new _Modals_FileHeaderModel__WEBPACK_IMPORTED_MODULE_1__["default"]();
        return fileHeader.MapHeader(packet);
    }
    MapFileMessagePacket(packet) {
        let fileMessage = new _Modals_FileMessageModel__WEBPACK_IMPORTED_MODULE_2__["default"]();
        return fileMessage.MapMessage(packet);
    }
    SetMessagePacket(packet, instance) { }
}
const FileService = new File();
/* harmony default export */ __webpack_exports__["default"] = (FileService);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUUID", function() { return GetUUID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadFileToUnInt8Array", function() { return ReadFileToUnInt8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Base64ToUnInt8Array", function() { return Base64ToUnInt8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBase64ToUInt8Array", function() { return NewBase64ToUInt8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetBinaryArrayOfFile", function() { return GetBinaryArrayOfFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsBase64", function() { return IsBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetFileObject", function() { return GetFileObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MakeChunkArray", function() { return MakeChunkArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JsonToUint8Array", function() { return JsonToUint8Array; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Uin8ArrayToJson", function() { return Uin8ArrayToJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertJsonUTF8", function() { return ConvertJsonUTF8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertStrUTF8", function() { return ConvertStrUTF8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextEncoderUTF8", function() { return TextEncoderUTF8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferToBase64Async", function() { return BufferToBase64Async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ByteToBase64", function() { return ByteToBase64; });
// export function GetUUID() {
//   return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//       var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
//       return v.toString(16).toUpperCase();
//   });
// } 
function GetUUID() {
    return new Date().getTime().toString();
}
function ReadFileToUnInt8Array(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (res) => {
            let arrayBuffer = reader.result;
            let array = new Uint8Array(arrayBuffer);
            resolve(array);
        };
        reader.onerror = err => reject(err);
        reader.readAsArrayBuffer(file);
    });
}
function Base64ToUnInt8Array(base64) {
    base64 = base64.substr(base64.indexOf(',') + 1);
    return new Promise((resolve, reject) => {
        var dataUrl = "data:application/octet-binary;base64," + base64;
        //console.log("helo Base String==:: ",base64);
        fetch(dataUrl)
            .then((res) => res.arrayBuffer())
            .then((buffer) => {
            resolve(new Uint8Array(buffer));
        });
    });
}
function NewBase64ToUInt8Array(str) {
    return TextEncoderUTF8(str);
}
async function GetBinaryArrayOfFile(File, FileType) {
    let Int8Array;
    switch (FileType) {
        case 'File':
            Int8Array = await ReadFileToUnInt8Array(File);
            break;
        case 'Base64':
            Int8Array = await Base64ToUnInt8Array(File);
            BufferToBase64Async(Int8Array);
            // Int8Array= await ConvertStrUTF8(File);
            break;
        default:
            Int8Array = [];
            break;
    }
    return Int8Array;
}
function IsBase64(encodedString) {
    //var regexBase64 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    // return regexBase64.test(encodedString);
    return (typeof encodedString == "string" && encodedString.indexOf(";base64") > -1);
}
function GetFileObject(file) {
    let fileObj = { fileType: "", file: "", ext: "" };
    if (IsBase64(file)) {
        fileObj.fileType = "Base64";
        fileObj.file = file;
        fileObj.ext = file.substring(file.indexOf('/') + 1, file.indexOf(';base64'));
    }
    else {
        if (typeof file == "object") {
            if (file[0] != undefined) {
                fileObj.fileType = "File";
                fileObj.file = file[0];
                fileObj.ext = file[0].name.split('.').pop();
            }
            if (file["name"] != undefined) {
                fileObj.fileType = "File";
                fileObj.file = file;
                fileObj.ext = file.name.split('.').pop();
            }
        }
    }
    return fileObj;
}
function MakeChunkArray(array, chunkSize) {
    const R = [];
    for (let i = 0, len = array.length; i < len; i += chunkSize)
        R.push(array.slice(i, i + chunkSize));
    return R;
}
function JsonToUint8Array(json) {
    let str = JSON.stringify(json, null, 0);
    let ret = new Uint8Array(str.length);
    for (let i = 0; i < str.length; i++) {
        ret[i] = str.charCodeAt(i);
    }
    return ret;
}
function Uin8ArrayToJson(binArray) {
    let str = "";
    for (let i = 0; i < binArray.length; i++) {
        str += String.fromCharCode(parseInt(binArray[i]));
    }
    return JSON.parse(str);
}
function ConvertJsonUTF8(object) {
    return TextEncoderUTF8(JSON.stringify(object));
    //return new TextEncoder().encode(JSON.stringify(object))
}
function ConvertStrUTF8(str) {
    return new TextEncoder().encode((str));
}
function TextEncoderUTF8(str) {
    "use strict";
    var Len = str.length, resPos = -1;
    // The Uint8Array's length must be at least 3x the length of the string because an invalid UTF-16
    //  takes up the equivelent space of 3 UTF-8 characters to encode it properly. However, Array's
    //  have an auto expanding length and 1.5x should be just the right balance for most uses.
    var resArr = typeof Uint8Array === "undefined" ? new Array(Len * 1.5) : new Uint8Array(Len * 3);
    for (var point = 0, nextcode = 0, i = 0; i !== Len;) {
        point = str.charCodeAt(i), i += 1;
        if (point >= 0xD800 && point <= 0xDBFF) {
            if (i === Len) {
                resArr[resPos += 1] = 0xef /*0b11101111*/;
                resArr[resPos += 1] = 0xbf /*0b10111111*/;
                resArr[resPos += 1] = 0xbd /*0b10111101*/;
                break;
            }
            // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
            nextcode = str.charCodeAt(i);
            if (nextcode >= 0xDC00 && nextcode <= 0xDFFF) {
                point = (point - 0xD800) * 0x400 + nextcode - 0xDC00 + 0x10000;
                i += 1;
                if (point > 0xffff) {
                    resArr[resPos += 1] = (0x1e /*0b11110*/ << 3) | (point >>> 18);
                    resArr[resPos += 1] = (0x2 /*0b10*/ << 6) | ((point >>> 12) & 0x3f /*0b00111111*/);
                    resArr[resPos += 1] = (0x2 /*0b10*/ << 6) | ((point >>> 6) & 0x3f /*0b00111111*/);
                    resArr[resPos += 1] = (0x2 /*0b10*/ << 6) | (point & 0x3f /*0b00111111*/);
                    continue;
                }
            }
            else {
                resArr[resPos += 1] = 0xef /*0b11101111*/;
                resArr[resPos += 1] = 0xbf /*0b10111111*/;
                resArr[resPos += 1] = 0xbd /*0b10111101*/;
                continue;
            }
        }
        if (point <= 0x007f) {
            resArr[resPos += 1] = (0x0 /*0b0*/ << 7) | point;
        }
        else if (point <= 0x07ff) {
            resArr[resPos += 1] = (0x6 /*0b110*/ << 5) | (point >>> 6);
            resArr[resPos += 1] = (0x2 /*0b10*/ << 6) | (point & 0x3f /*0b00111111*/);
        }
        else {
            resArr[resPos += 1] = (0xe /*0b1110*/ << 4) | (point >>> 12);
            resArr[resPos += 1] = (0x2 /*0b10*/ << 6) | ((point >>> 6) & 0x3f /*0b00111111*/);
            resArr[resPos += 1] = (0x2 /*0b10*/ << 6) | (point & 0x3f /*0b00111111*/);
        }
    }
    if (typeof Uint8Array !== "undefined")
        return resArr.subarray(0, resPos + 1);
    // else // IE 6-9
    resArr.length = resPos + 1; // trim off extra weight
    return resArr;
}
function BufferToBase64Async(buffer) {
    var blob = new Blob([buffer], { type: 'application/octet-binary' });
    //  console.log("buffer to blob:" + blob)
    return new Promise((resolve, reject) => {
        let fileReader = new FileReader();
        fileReader.onload = function () {
            let dataUrl = fileReader.result;
            // console.log("blob to dataUrl: " + dataUrl);
            let base64 = dataUrl.substr(dataUrl.indexOf(',') + 1);
            resolve(base64);
        };
        fileReader.readAsDataURL(blob);
    });
}
function ByteToBase64(bytes) {
}


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileHeaderModel; });
/* harmony import */ var _FileHeaderSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);

class FileHeaderModel {
    constructor() {
        this.message = _FileHeaderSchema__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
    set from(val) {
        this.message.from = val;
    }
    get from() {
        return this.message.from;
    }
    set fileExtension(val) {
        this.message.fileExtension = val;
    }
    get fileExtension() {
        return this.message.fileExtension;
    }
    set headerId(val) {
        this.message.headerId = val;
    }
    get headerId() {
        return this.message.headerId;
    }
    set topic(val) {
        this.message.topic = val;
    }
    get topic() {
        return this.message.topic;
    }
    set size(val) {
        this.message.size = val;
    }
    get size() {
        return this.message.size;
    }
    set key(val) {
        this.message.key = val;
    }
    get key() {
        return this.message.key;
    }
    set totalPacket(val) {
        this.message.totalPacket = val;
    }
    get totalPacket() {
        return this.message.totalPacket;
    }
    set type(val) {
        this.message.type = val;
    }
    get type() {
        return this.message.type;
    }
    set date(val) {
        this.message.date = val;
    }
    get date() {
        return this.message.date;
    }
    Send(connection) {
        let cString = `${this.message.key}/${this.message.topic}`;
        connection.publish(cString, JSON.stringify(this.message), {}, () => {
        });
    }
    MapHeader(message) {
        let messageProtocol = Object.keys(this.message);
        let receivedMessageKeys = Object.keys(message);
        let maper = messageProtocol.filter((k) => {
            return receivedMessageKeys.indexOf(k) > -1;
        });
        // console.log("MapReceipt==::::==",messageProtocol,receivedMessageKeys,maper,maper.length==messageProtocol.length);
        return maper.length == messageProtocol.length;
    }
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    from: "",
    fileExtension: "",
    headerId: "",
    size: "",
    topic: "",
    key: "",
    totalPacket: 0,
    type: 0,
    date: (new Date().getTime())
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileMessageModel; });
/* harmony import */ var _FileMessageSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);

class FileMessageModel {
    constructor() {
        this.message = _FileMessageSchema__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
    set messageId(val) {
        this.message.messageId = val;
    }
    get messageId() {
        return this.message.messageId;
    }
    set content(val) {
        this.message.content = val;
    }
    get content() {
        return this.message.content;
    }
    set packetNo(val) {
        this.message.packetNo = val;
    }
    get packetNo() {
        return this.message.packetNo;
    }
    set from(val) {
        this.message.from = val;
    }
    get from() {
        return this.message.from;
    }
    set headerId(val) {
        this.message.headerId = val;
    }
    get headerId() {
        return this.message.headerId;
    }
    set topic(val) {
        this.message.topic = val;
    }
    get topic() {
        return this.message.topic;
    }
    set key(val) {
        this.message.key = val;
    }
    get key() {
        return this.message.key;
    }
    set type(val) {
        this.message.type = val;
    }
    get type() {
        return this.message.type;
    }
    Send(connection) {
        let cString = `${this.message.key}/${this.message.topic}`;
        // let bufferArray=JsonToUint8Array(this.message);
        let message = JSON.stringify(this.message);
        //JSON.stringify(this.message)
        // console.log("Binarray",message);
        connection.publish(cString, message, {}, () => {
        });
    }
    MapMessage(message) {
        let messageProtocol = Object.keys(this.message);
        let receivedMessageKeys = Object.keys(message);
        let maper = messageProtocol.filter(k => {
            return receivedMessageKeys.indexOf(k) > -1;
        });
        // console.log("MapReceipt==::::==",messageProtocol,receivedMessageKeys,maper,maper.length==messageProtocol.length);
        return maper.length == messageProtocol.length;
    }
}


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    messageId: "",
    content: [],
    packetNo: 0,
    from: "",
    headerId: "",
    topic: "",
    key: "",
    type: ""
});


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);

class AuthService {
    constructor() { }
    /////////////////////////////////////
    ///////// Authentication with server
    async Authorization(cId, cSec) {
        let clientData = {
            project_id: cId,
            auth_token: cSec
        };
        // console.log("====clientData====",clientData);
        return fetch(`${_Constants__WEBPACK_IMPORTED_MODULE_0__["SERVER"]}/AuthenticateSDK`, {
            method: 'POST',
            body: JSON.stringify(clientData),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
            }
        })
            .then((data) => data.json())
            .then((resp) => {
            return resp;
        })
            .catch((err) => {
            console.log(err);
            return err;
        });
    }
}
const Auth = new AuthService();
/* harmony default export */ __webpack_exports__["default"] = (Auth);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVER", function() { return SERVER; });
const SERVER = "https://vtkapi.vdotok.dev/API/v0";


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessageModel; });
/* harmony import */ var _MessageSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _Helpers_FileHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);


const FileTypes = {
    0: "image",
    1: "audio",
    2: "video",
    3: "file"
};
class MessageModel {
    constructor() {
        this.message = _MessageSchema__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
    set from(val) {
        this.message.from = val;
    }
    get from() {
        return this.message.from;
    }
    set content(val) {
        this.message.content = val;
    }
    get content() {
        return this.message.content;
    }
    set id(val) {
        this.message.id = val;
    }
    get id() {
        return this.message.id;
    }
    set size(val) {
        this.message.size = val;
    }
    get size() {
        return this.message.size;
    }
    set key(val) {
        this.message.key = val;
    }
    get key() {
        return this.message.key;
    }
    set type(val) {
        this.message.type = val;
    }
    get type() {
        return this.message.type;
    }
    set to(val) {
        this.message.to = val;
    }
    get to() {
        return this.message.to;
    }
    set isGroupMessage(val) {
        this.message.isGroupMsg = val;
    }
    get isGroupMessage() {
        return this.message.isGroupMessage;
    }
    set isBuffering(val) {
        this.message.isBuffering = val;
    }
    get isBuffering() {
        return this.message.isBuffering;
    }
    set ext(val) {
        this.message.ext = val;
    }
    get ext() {
        return this.message.ext;
    }
    set filename(val) {
        this.message.filename = val;
    }
    get filename() {
        return this.message.filename;
    }
    set date(val) {
        this.message.date = val;
    }
    get date() {
        return this.message.date;
    }
    set status(val) {
        this.message.status = val;
    }
    get status() {
        return this.message.status;
    }
    set subtype(val) {
        this.message.subtype = val;
    }
    get subtype() {
        return this.message.subtype;
    }
    ShowFileMessage(instance) {
        //console.log("ShowFileMessage",this.message);
        Object(_Helpers_FileHelper__WEBPACK_IMPORTED_MODULE_1__["BufferToBase64Async"])(this.message.content, this.message.ext).then((f) => {
            //  console.log("ShowFileMessageNext==",f);
            this.message.content = f;
            this.message.type = FileTypes[this.message.type];
            instance.emit("message", this.message);
        });
    }
    ShowFileLoadingMessage(instance) {
        this.message.type = FileTypes[this.message.type];
        //console.log("ShowFileLoadingMessage",this.message);
        instance.emit("message", this.message);
    }
    MapMessage(message) {
        const messageProtocol = Object.keys(this.message);
        const receivedMessageKeys = Object.keys(message);
        const maper = messageProtocol.filter((k) => {
            return receivedMessageKeys.includes(k);
        });
        return maper.length == messageProtocol.length;
    }
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    from: "",
    content: "",
    id: "",
    size: 0,
    key: "",
    type: "",
    to: "",
    isGroupMessage: false,
    date: (new Date().getTime()),
    status: 1,
    subtype: 0,
    isBuffering: true
});


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BufferToBase64Async", function() { return BufferToBase64Async; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayBase64ToStringBase64Async", function() { return ArrayBase64ToStringBase64Async; });
/* harmony import */ var _Modals_FileExtensionSchema__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);

function BufferToBase64Async(buffer, ext) {
    const uint8Array = new Uint8Array(buffer);
    let blob = new Blob([uint8Array], { type: "application/octet-binary" });
    //  console.log("buffer to blob:" + blob)
    return new Promise((resolve, reject) => {
        let fileReader = new FileReader();
        fileReader.onload = function () {
            let dataUrl = fileReader.result;
            // console.log("blob to dataUrl: " + dataUrl);
            let base64 = dataUrl.substr(dataUrl.indexOf(",") + 1);
            let mimeType = _Modals_FileExtensionSchema__WEBPACK_IMPORTED_MODULE_0__["default"][ext];
            let completeFile = `data:${mimeType};base64,${base64}`;
            //  console.log("completeFile: " , completeFile);
            resolve(completeFile);
        };
        fileReader.readAsDataURL(blob);
    });
}
function ArrayBase64ToStringBase64Async(buffer, ext) {
    return new Promise((resolve, reject) => {
        console.log("completeFile buffer: ", buffer);
        let base64 = buffer.join("");
        ext = ext.toLowerCase();
        let mimeType = _Modals_FileExtensionSchema__WEBPACK_IMPORTED_MODULE_0__["default"][ext];
        let completeFile = `data:${mimeType};base64,${base64}`;
        //  console.log("completeFile: " , completeFile);
        resolve(completeFile);
    });
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const FileExtensionSchema = {
    'ai': 'application/postscript',
    'aif': 'audio/x-aiff',
    'aifc': 'audio/x-aiff',
    'aiff': 'audio/x-aiff',
    'asc': 'text/plain',
    'atom': 'application/atom+xml',
    'au': 'audio/basic',
    'avi': 'video/x-msvideo',
    'bcpio': 'application/x-bcpio',
    'bin': 'application/octet-stream',
    'bmp': 'image/bmp',
    'cdf': 'application/x-netcdf',
    'cgm': 'image/cgm',
    'class': 'application/octet-stream',
    'cpio': 'application/x-cpio',
    'cpt': 'application/mac-compactpro',
    'csh': 'application/x-csh',
    'css': 'text/css',
    'csv': 'text/csv',
    'dcr': 'application/x-director',
    'dir': 'application/x-director',
    'djv': 'image/vnd.djvu',
    'djvu': 'image/vnd.djvu',
    'dll': 'application/octet-stream',
    'dmg': 'application/octet-stream',
    'dms': 'application/octet-stream',
    'doc': 'application/msword',
    'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'dotx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.template',
    'dtd': 'application/xml-dtd',
    'dvi': 'application/x-dvi',
    'dxr': 'application/x-director',
    'eps': 'application/postscript',
    'etx': 'text/x-setext',
    'exe': 'application/octet-stream',
    'ez': 'application/andrew-inset',
    'gif': 'image/gif',
    'gram': 'application/srgs',
    'grxml': 'application/srgs+xml',
    'gtar': 'application/x-gtar',
    'hdf': 'application/x-hdf',
    'hqx': 'application/mac-binhex40',
    'htm': 'text/html',
    'html': 'text/html',
    'ice': 'x-conference/x-cooltalk',
    'ico': 'image/x-icon',
    'ics': 'text/calendar',
    'ief': 'image/ief',
    'ifb': 'text/calendar',
    'iges': 'model/iges',
    'igs': 'model/iges',
    'jpe': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpeg',
    'js': 'application/x-javascript',
    'json': 'application/json',
    'kar': 'audio/midi',
    'latex': 'application/x-latex',
    'lha': 'application/octet-stream',
    'lzh': 'application/octet-stream',
    'log': 'application/octet-stream',
    'm3u': 'audio/x-mpegurl',
    'man': 'application/x-troff-man',
    'mathml': 'application/mathml+xml',
    'me': 'application/x-troff-me',
    'mesh': 'model/mesh',
    'mid': 'audio/midi',
    'midi': 'audio/midi',
    'mif': 'application/vnd.mif',
    'mov': 'video/quicktime',
    'movie': 'video/x-sgi-movie',
    'mp2': 'audio/mpeg',
    'mp3': 'audio/mpeg',
    'mpe': 'video/mpeg',
    'mpeg': 'video/mpeg',
    'mpg': 'video/mpeg',
    'mp4': 'video/mp4',
    'mpga': 'audio/mpeg',
    'ms': 'application/x-troff-ms',
    'msh': 'model/mesh',
    'mxu': 'video/vnd.mpegurl',
    'nc': 'application/x-netcdf',
    'oda': 'application/oda',
    'ogg': 'audio/ogg',
    'oga': 'audio/ogg',
    'pbm': 'image/x-portable-bitmap',
    'pdb': 'chemical/x-pdb',
    'pdf': 'application/pdf',
    'pgm': 'image/x-portable-graymap',
    'pgn': 'application/x-chess-pgn',
    'png': 'image/png',
    'pnm': 'image/x-portable-anymap',
    'ppm': 'image/x-portable-pixmap',
    'ppt': 'application/vnd.ms-powerpoint',
    'ps': 'application/postscript',
    'qt': 'video/quicktime',
    'ra': 'audio/x-pn-realaudio',
    'ram': 'audio/x-pn-realaudio',
    'ras': 'image/x-cmu-raster',
    'rdf': 'application/rdf+xml',
    'rgb': 'image/x-rgb',
    'rm': 'application/vnd.rn-realmedia',
    'roff': 'application/x-troff',
    'rss': 'application/rss+xml',
    'rtf': 'text/rtf',
    'rtx': 'text/richtext',
    'sgm': 'text/sgml',
    'sgml': 'text/sgml',
    'sh': 'application/x-sh',
    'shar': 'application/x-shar',
    'silo': 'model/mesh',
    'sit': 'application/x-stuffit',
    'skd': 'application/x-koan',
    'skm': 'application/x-koan',
    'skp': 'application/x-koan',
    'skt': 'application/x-koan',
    'smi': 'application/smil',
    'smil': 'application/smil',
    'snd': 'audio/basic',
    'so': 'application/octet-stream',
    'spl': 'application/x-futuresplash',
    'src': 'application/x-wais-source',
    'sv4cpio': 'application/x-sv4cpio',
    'sv4crc': 'application/x-sv4crc',
    'svg': 'image/svg+xml',
    'svgz': 'image/svg+xml',
    'swf': 'application/x-shockwave-flash',
    't': 'application/x-troff',
    'tar': 'application/x-tar',
    'tcl': 'application/x-tcl',
    'tex': 'application/x-tex',
    'texi': 'application/x-texinfo',
    'texinfo': 'application/x-texinfo',
    'tif': 'image/tiff',
    'tiff': 'image/tiff',
    'tr': 'application/x-troff',
    'tsv': 'text/tab-separated-values',
    'txt': 'text/plain',
    'ustar': 'application/x-ustar',
    'vcd': 'application/x-cdlink',
    'vrml': 'model/vrml',
    'vxml': 'application/voicexml+xml',
    'wav': 'audio/x-wav',
    'aac': 'audio/aac',
    'wbmp': 'image/vnd.wap.wbmp',
    'wbxml': 'application/vnd.wap.wbxml',
    'wml': 'text/vnd.wap.wml',
    'wmlc': 'application/vnd.wap.wmlc',
    'wmls': 'text/vnd.wap.wmlscript',
    'wmlsc': 'application/vnd.wap.wmlscriptc',
    'wrl': 'model/vrml',
    'xbm': 'image/x-xbitmap',
    'xht': 'application/xhtml+xml',
    'xhtml': 'application/xhtml+xml',
    'xls': 'application/vnd.ms-excel',
    'xml': 'application/xml',
    'xpm': 'image/x-xpixmap',
    'xsl': 'application/xml',
    'xslt': 'application/xslt+xml',
    'xul': 'application/vnd.mozilla.xul+xml',
    'xwd': 'image/x-xwindowdump',
    'xyz': 'chemical/x-xyz',
    'zip': 'application/zip',
    'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
};
/* harmony default export */ __webpack_exports__["default"] = (FileExtensionSchema);


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(18)
var ieee754 = __webpack_require__(19)
var isArray = __webpack_require__(20)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return require(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (process,global){
'use strict'

/**
 * Module dependencies
 */
var EventEmitter = require('events').EventEmitter
var Store = require('./store')
var mqttPacket = require('mqtt-packet')
var Writable = require('readable-stream').Writable
var inherits = require('inherits')
var reInterval = require('reinterval')
var validations = require('./validations')
var xtend = require('xtend')
var debug = require('debug')('mqttjs:client')
var nextTick = process ? process.nextTick : function (callback) { setTimeout(callback, 0) }
var setImmediate = global.setImmediate || function (callback) {
  // works in node v0.8
  nextTick(callback)
}
var defaultConnectOptions = {
  keepalive: 60,
  reschedulePings: true,
  protocolId: 'MQTT',
  protocolVersion: 4,
  reconnectPeriod: 1000,
  connectTimeout: 30 * 1000,
  clean: true,
  resubscribe: true
}

var socketErrors = [
  'ECONNREFUSED',
  'EADDRINUSE',
  'ECONNRESET',
  'ENOTFOUND'
]

// Other Socket Errors: EADDRINUSE, ECONNRESET, ENOTFOUND.

var errors = {
  0: '',
  1: 'Unacceptable protocol version',
  2: 'Identifier rejected',
  3: 'Server unavailable',
  4: 'Bad username or password',
  5: 'Not authorized',
  16: 'No matching subscribers',
  17: 'No subscription existed',
  128: 'Unspecified error',
  129: 'Malformed Packet',
  130: 'Protocol Error',
  131: 'Implementation specific error',
  132: 'Unsupported Protocol Version',
  133: 'Client Identifier not valid',
  134: 'Bad User Name or Password',
  135: 'Not authorized',
  136: 'Server unavailable',
  137: 'Server busy',
  138: 'Banned',
  139: 'Server shutting down',
  140: 'Bad authentication method',
  141: 'Keep Alive timeout',
  142: 'Session taken over',
  143: 'Topic Filter invalid',
  144: 'Topic Name invalid',
  145: 'Packet identifier in use',
  146: 'Packet Identifier not found',
  147: 'Receive Maximum exceeded',
  148: 'Topic Alias invalid',
  149: 'Packet too large',
  150: 'Message rate too high',
  151: 'Quota exceeded',
  152: 'Administrative action',
  153: 'Payload format invalid',
  154: 'Retain not supported',
  155: 'QoS not supported',
  156: 'Use another server',
  157: 'Server moved',
  158: 'Shared Subscriptions not supported',
  159: 'Connection rate exceeded',
  160: 'Maximum connect time',
  161: 'Subscription Identifiers not supported',
  162: 'Wildcard Subscriptions not supported'
}

function defaultId () {
  return 'mqttjs_' + Math.random().toString(16).substr(2, 8)
}

function sendPacket (client, packet, cb) {
  debug('sendPacket :: packet: %O', packet)
  debug('sendPacket :: emitting `packetsend`')
  client.emit('packetsend', packet)

  debug('sendPacket :: writing to stream')
  var result = mqttPacket.writeToStream(packet, client.stream, client.options)
  debug('sendPacket :: writeToStream result %s', result)
  if (!result && cb) {
    debug('sendPacket :: handle events on `drain` once through callback.')
    client.stream.once('drain', cb)
  } else if (cb) {
    debug('sendPacket :: invoking cb')
    cb()
  }
}

function flush (queue) {
  if (queue) {
    debug('flush: queue exists? %b', !!(queue))
    Object.keys(queue).forEach(function (messageId) {
      if (typeof queue[messageId].cb === 'function') {
        queue[messageId].cb(new Error('Connection closed'))
        delete queue[messageId]
      }
    })
  }
}

function flushVolatile (queue) {
  if (queue) {
    debug('flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function')
    Object.keys(queue).forEach(function (messageId) {
      if (queue[messageId].volatile && typeof queue[messageId].cb === 'function') {
        queue[messageId].cb(new Error('Connection closed'))
        delete queue[messageId]
      }
    })
  }
}

function storeAndSend (client, packet, cb, cbStorePut) {
  debug('storeAndSend :: store packet with cmd %s to outgoingStore', packet.cmd)
  client.outgoingStore.put(packet, function storedPacket (err) {
    if (err) {
      return cb && cb(err)
    }
    cbStorePut()
    sendPacket(client, packet, cb)
  })
}

function nop (error) {
  debug('nop ::', error)
}

/**
 * MqttClient constructor
 *
 * @param {Stream} stream - stream
 * @param {Object} [options] - connection options
 * (see Connection#connect)
 */
function MqttClient (streamBuilder, options) {
  var k
  var that = this

  if (!(this instanceof MqttClient)) {
    return new MqttClient(streamBuilder, options)
  }

  this.options = options || {}

  // Defaults
  for (k in defaultConnectOptions) {
    if (typeof this.options[k] === 'undefined') {
      this.options[k] = defaultConnectOptions[k]
    } else {
      this.options[k] = options[k]
    }
  }

  debug('MqttClient :: options.protocol', options.protocol)
  debug('MqttClient :: options.protocolVersion', options.protocolVersion)
  debug('MqttClient :: options.username', options.username)
  debug('MqttClient :: options.keepalive', options.keepalive)
  debug('MqttClient :: options.reconnectPeriod', options.reconnectPeriod)
  debug('MqttClient :: options.rejectUnauthorized', options.rejectUnauthorized)

  this.options.clientId = (typeof options.clientId === 'string') ? options.clientId : defaultId()

  debug('MqttClient :: clientId', this.options.clientId)

  this.options.customHandleAcks = (options.protocolVersion === 5 && options.customHandleAcks) ? options.customHandleAcks : function () { arguments[3](0) }

  this.streamBuilder = streamBuilder

  // Inflight message storages
  this.outgoingStore = options.outgoingStore || new Store()
  this.incomingStore = options.incomingStore || new Store()

  // Should QoS zero messages be queued when the connection is broken?
  this.queueQoSZero = options.queueQoSZero === undefined ? true : options.queueQoSZero

  // map of subscribed topics to support reconnection
  this._resubscribeTopics = {}

  // map of a subscribe messageId and a topic
  this.messageIdToTopic = {}

  // Ping timer, setup in _setupPingTimer
  this.pingTimer = null
  // Is the client connected?
  this.connected = false
  // Are we disconnecting?
  this.disconnecting = false
  // Packet queue
  this.queue = []
  // connack timer
  this.connackTimer = null
  // Reconnect timer
  this.reconnectTimer = null
  // Is processing store?
  this._storeProcessing = false
  // Packet Ids are put into the store during store processing
  this._packetIdsDuringStoreProcessing = {}
  /**
   * MessageIDs starting with 1
   * ensure that nextId is min. 1, see https://github.com/mqttjs/MQTT.js/issues/810
   */
  this.nextId = Math.max(1, Math.floor(Math.random() * 65535))

  // Inflight callbacks
  this.outgoing = {}

  // True if connection is first time.
  this._firstConnection = true

  // Send queued packets
  this.on('connect', function () {
    var queue = this.queue

    function deliver () {
      var entry = queue.shift()
      debug('deliver :: entry %o', entry)
      var packet = null

      if (!entry) {
        return
      }

      packet = entry.packet
      debug('deliver :: call _sendPacket for %o', packet)
      that._sendPacket(
        packet,
        function (err) {
          if (entry.cb) {
            entry.cb(err)
          }
          deliver()
        }
      )
    }

    debug('connect :: sending queued packets')
    deliver()
  })

  this.on('close', function () {
    debug('close :: connected set to `false`')
    this.connected = false

    debug('close :: clearing connackTimer')
    clearTimeout(this.connackTimer)

    debug('close :: clearing ping timer')
    if (that.pingTimer !== null) {
      that.pingTimer.clear()
      that.pingTimer = null
    }

    debug('close :: calling _setupReconnect')
    this._setupReconnect()
  })
  EventEmitter.call(this)

  debug('MqttClient :: setting up stream')
  this._setupStream()
}
inherits(MqttClient, EventEmitter)

/**
 * setup the event handlers in the inner stream.
 *
 * @api private
 */
MqttClient.prototype._setupStream = function () {
  var connectPacket
  var that = this
  var writable = new Writable()
  var parser = mqttPacket.parser(this.options)
  var completeParse = null
  var packets = []

  debug('_setupStream :: calling method to clear reconnect')
  this._clearReconnect()

  debug('_setupStream :: using streamBuilder provided to client to create stream')
  this.stream = this.streamBuilder(this)

  parser.on('packet', function (packet) {
    debug('parser :: on packet push to packets array.')
    packets.push(packet)
  })

  function nextTickWork () {
    if (packets.length) {
      nextTick(work)
    } else {
      var done = completeParse
      completeParse = null
      done()
    }
  }

  function work () {
    debug('work :: getting next packet in queue')
    var packet = packets.shift()

    if (packet) {
      debug('work :: packet pulled from queue')
      that._handlePacket(packet, nextTickWork)
    } else {
      debug('work :: no packets in queue')
      var done = completeParse
      completeParse = null
      debug('work :: done flag is %s', !!(done))
      if (done) done()
    }
  }

  writable._write = function (buf, enc, done) {
    completeParse = done
    debug('writable stream :: parsing buffer')
    parser.parse(buf)
    work()
  }

  function streamErrorHandler (error) {
    debug('streamErrorHandler :: error', error.message)
    if (socketErrors.includes(error.code)) {
      // handle error
      debug('streamErrorHandler :: emitting error')
      that.emit('error', error)
    } else {
      nop(error)
    }
  }

  debug('_setupStream :: pipe stream to writable stream')
  this.stream.pipe(writable)

  // Suppress connection errors
  this.stream.on('error', streamErrorHandler)

  // Echo stream close
  this.stream.on('close', function () {
    debug('(%s)stream :: on close', that.options.clientId)
    flushVolatile(that.outgoing)
    debug('stream: emit close to MqttClient')
    that.emit('close')
  })

  // Send a connect packet
  debug('_setupStream: sending packet `connect`')
  connectPacket = Object.create(this.options)
  connectPacket.cmd = 'connect'
  // avoid message queue
  sendPacket(this, connectPacket)

  // Echo connection errors
  parser.on('error', this.emit.bind(this, 'error'))

  // auth
  if (this.options.properties) {
    if (!this.options.properties.authenticationMethod && this.options.properties.authenticationData) {
      that.end(() =>
        this.emit('error', new Error('Packet has no Authentication Method')
        ))
      return this
    }
    if (this.options.properties.authenticationMethod && this.options.authPacket && typeof this.options.authPacket === 'object') {
      var authPacket = xtend({cmd: 'auth', reasonCode: 0}, this.options.authPacket)
      sendPacket(this, authPacket)
    }
  }

  // many drain listeners are needed for qos 1 callbacks if the connection is intermittent
  this.stream.setMaxListeners(1000)

  clearTimeout(this.connackTimer)
  this.connackTimer = setTimeout(function () {
    debug('!!connectTimeout hit!! Calling _cleanUp with force `true`')
    that._cleanUp(true)
  }, this.options.connectTimeout)
}

MqttClient.prototype._handlePacket = function (packet, done) {
  var options = this.options

  if (options.protocolVersion === 5 && options.properties && options.properties.maximumPacketSize && options.properties.maximumPacketSize < packet.length) {
    this.emit('error', new Error('exceeding packets size ' + packet.cmd))
    this.end({reasonCode: 149, properties: { reasonString: 'Maximum packet size was exceeded' }})
    return this
  }
  debug('_handlePacket :: emitting packetreceive')
  this.emit('packetreceive', packet)

  switch (packet.cmd) {
    case 'publish':
      this._handlePublish(packet, done)
      break
    case 'puback':
    case 'pubrec':
    case 'pubcomp':
    case 'suback':
    case 'unsuback':
      this._handleAck(packet)
      done()
      break
    case 'pubrel':
      this._handlePubrel(packet, done)
      break
    case 'connack':
      this._handleConnack(packet)
      done()
      break
    case 'pingresp':
      this._handlePingresp(packet)
      done()
      break
    case 'disconnect':
      this._handleDisconnect(packet)
      done()
      break
    default:
      // do nothing
      // maybe we should do an error handling
      // or just log it
      break
  }
}

MqttClient.prototype._checkDisconnecting = function (callback) {
  if (this.disconnecting) {
    if (callback) {
      callback(new Error('client disconnecting'))
    } else {
      this.emit('error', new Error('client disconnecting'))
    }
  }
  return this.disconnecting
}

/**
 * publish - publish <message> to <topic>
 *
 * @param {String} topic - topic to publish to
 * @param {String, Buffer} message - message to publish
 * @param {Object} [opts] - publish options, includes:
 *    {Number} qos - qos level to publish on
 *    {Boolean} retain - whether or not to retain the message
 *    {Boolean} dup - whether or not mark a message as duplicate
 *    {Function} cbStorePut - function(){} called when message is put into `outgoingStore`
 * @param {Function} [callback] - function(err){}
 *    called when publish succeeds or fails
 * @returns {MqttClient} this - for chaining
 * @api public
 *
 * @example client.publish('topic', 'message');
 * @example
 *     client.publish('topic', 'message', {qos: 1, retain: true, dup: true});
 * @example client.publish('topic', 'message', console.log);
 */
MqttClient.prototype.publish = function (topic, message, opts, callback) {
  debug('publish :: message `%s` to topic `%s`', message, topic)
  var packet
  var options = this.options

  // .publish(topic, payload, cb);
  if (typeof opts === 'function') {
    callback = opts
    opts = null
  }

  // default opts
  var defaultOpts = {qos: 0, retain: false, dup: false}
  opts = xtend(defaultOpts, opts)

  if (this._checkDisconnecting(callback)) {
    return this
  }

  packet = {
    cmd: 'publish',
    topic: topic,
    payload: message,
    qos: opts.qos,
    retain: opts.retain,
    messageId: this._nextId(),
    dup: opts.dup
  }

  if (options.protocolVersion === 5) {
    packet.properties = opts.properties
    if ((!options.properties && packet.properties && packet.properties.topicAlias) || ((opts.properties && options.properties) &&
      ((opts.properties.topicAlias && options.properties.topicAliasMaximum && opts.properties.topicAlias > options.properties.topicAliasMaximum) ||
        (!options.properties.topicAliasMaximum && opts.properties.topicAlias)))) {
      /*
      if we are don`t setup topic alias or
      topic alias maximum less than topic alias or
      server don`t give topic alias maximum,
      we are removing topic alias from packet
      */
      delete packet.properties.topicAlias
    }
  }

  debug('publish :: qos', opts.qos)
  switch (opts.qos) {
    case 1:
    case 2:
      // Add to callbacks
      this.outgoing[packet.messageId] = {
        volatile: false,
        cb: callback || nop
      }
      if (this._storeProcessing) {
        debug('_storeProcessing enabled')
        this._packetIdsDuringStoreProcessing[packet.messageId] = false
        this._storePacket(packet, undefined, opts.cbStorePut)
      } else {
        debug('MqttClient:publish: packet cmd: %s', packet.cmd)
        this._sendPacket(packet, undefined, opts.cbStorePut)
      }
      break
    default:
      if (this._storeProcessing) {
        debug('_storeProcessing enabled')
        this._storePacket(packet, callback, opts.cbStorePut)
      } else {
        debug('MqttClient:publish: packet cmd: %s', packet.cmd)
        this._sendPacket(packet, callback, opts.cbStorePut)
      }
      break
  }

  return this
}

/**
 * subscribe - subscribe to <topic>
 *
 * @param {String, Array, Object} topic - topic(s) to subscribe to, supports objects in the form {'topic': qos}
 * @param {Object} [opts] - optional subscription options, includes:
 *    {Number} qos - subscribe qos level
 * @param {Function} [callback] - function(err, granted){} where:
 *    {Error} err - subscription error (none at the moment!)
 *    {Array} granted - array of {topic: 't', qos: 0}
 * @returns {MqttClient} this - for chaining
 * @api public
 * @example client.subscribe('topic');
 * @example client.subscribe('topic', {qos: 1});
 * @example client.subscribe({'topic': {qos: 0}, 'topic2': {qos: 1}}, console.log);
 * @example client.subscribe('topic', console.log);
 */
MqttClient.prototype.subscribe = function () {
  var packet
  var args = new Array(arguments.length)
  for (var i = 0; i < arguments.length; i++) {
    args[i] = arguments[i]
  }
  var subs = []
  var obj = args.shift()
  var resubscribe = obj.resubscribe
  var callback = args.pop() || nop
  var opts = args.pop()
  var invalidTopic
  var that = this
  var version = this.options.protocolVersion

  delete obj.resubscribe

  if (typeof obj === 'string') {
    obj = [obj]
  }

  if (typeof callback !== 'function') {
    opts = callback
    callback = nop
  }

  invalidTopic = validations.validateTopics(obj)
  if (invalidTopic !== null) {
    setImmediate(callback, new Error('Invalid topic ' + invalidTopic))
    return this
  }

  if (this._checkDisconnecting(callback)) {
    debug('subscribe: discconecting true')
    return this
  }

  var defaultOpts = {
    qos: 0
  }
  if (version === 5) {
    defaultOpts.nl = false
    defaultOpts.rap = false
    defaultOpts.rh = 0
  }
  opts = xtend(defaultOpts, opts)

  if (Array.isArray(obj)) {
    obj.forEach(function (topic) {
      debug('subscribe: array topic %s', topic)
      if (!that._resubscribeTopics.hasOwnProperty(topic) ||
        that._resubscribeTopics[topic].qos < opts.qos ||
          resubscribe) {
        var currentOpts = {
          topic: topic,
          qos: opts.qos
        }
        if (version === 5) {
          currentOpts.nl = opts.nl
          currentOpts.rap = opts.rap
          currentOpts.rh = opts.rh
          currentOpts.properties = opts.properties
        }
        debug('subscribe: pushing topic `%s` and qos `%s` to subs list', currentOpts.topic, currentOpts.qos)
        subs.push(currentOpts)
      }
    })
  } else {
    Object
      .keys(obj)
      .forEach(function (k) {
        debug('subscribe: object topic %s', k)
        if (!that._resubscribeTopics.hasOwnProperty(k) ||
          that._resubscribeTopics[k].qos < obj[k].qos ||
            resubscribe) {
          var currentOpts = {
            topic: k,
            qos: obj[k].qos
          }
          if (version === 5) {
            currentOpts.nl = obj[k].nl
            currentOpts.rap = obj[k].rap
            currentOpts.rh = obj[k].rh
            currentOpts.properties = opts.properties
          }
          debug('subscribe: pushing `%s` to subs list', currentOpts)
          subs.push(currentOpts)
        }
      })
  }

  packet = {
    cmd: 'subscribe',
    subscriptions: subs,
    qos: 1,
    retain: false,
    dup: false,
    messageId: this._nextId()
  }

  if (opts.properties) {
    packet.properties = opts.properties
  }

  if (!subs.length) {
    callback(null, [])
    return
  }

  // subscriptions to resubscribe to in case of disconnect
  if (this.options.resubscribe) {
    debug('subscribe :: resubscribe true')
    var topics = []
    subs.forEach(function (sub) {
      if (that.options.reconnectPeriod > 0) {
        var topic = { qos: sub.qos }
        if (version === 5) {
          topic.nl = sub.nl || false
          topic.rap = sub.rap || false
          topic.rh = sub.rh || 0
          topic.properties = sub.properties
        }
        that._resubscribeTopics[sub.topic] = topic
        topics.push(sub.topic)
      }
    })
    that.messageIdToTopic[packet.messageId] = topics
  }

  this.outgoing[packet.messageId] = {
    volatile: true,
    cb: function (err, packet) {
      if (!err) {
        var granted = packet.granted
        for (var i = 0; i < granted.length; i += 1) {
          subs[i].qos = granted[i]
        }
      }

      callback(err, subs)
    }
  }
  debug('subscribe :: call _sendPacket')
  this._sendPacket(packet)

  return this
}

/**
 * unsubscribe - unsubscribe from topic(s)
 *
 * @param {String, Array} topic - topics to unsubscribe from
 * @param {Object} [opts] - optional subscription options, includes:
 *    {Object} properties - properties of unsubscribe packet
 * @param {Function} [callback] - callback fired on unsuback
 * @returns {MqttClient} this - for chaining
 * @api public
 * @example client.unsubscribe('topic');
 * @example client.unsubscribe('topic', console.log);
 */
MqttClient.prototype.unsubscribe = function () {
  var packet = {
    cmd: 'unsubscribe',
    qos: 1,
    messageId: this._nextId()
  }
  var that = this
  var args = new Array(arguments.length)
  for (var i = 0; i < arguments.length; i++) {
    args[i] = arguments[i]
  }
  var topic = args.shift()
  var callback = args.pop() || nop
  var opts = args.pop()

  if (typeof topic === 'string') {
    topic = [topic]
  }

  if (typeof callback !== 'function') {
    opts = callback
    callback = nop
  }

  if (this._checkDisconnecting(callback)) {
    return this
  }

  if (typeof topic === 'string') {
    packet.unsubscriptions = [topic]
  } else if (Array.isArray(topic)) {
    packet.unsubscriptions = topic
  }

  if (this.options.resubscribe) {
    packet.unsubscriptions.forEach(function (topic) {
      delete that._resubscribeTopics[topic]
    })
  }

  if (typeof opts === 'object' && opts.properties) {
    packet.properties = opts.properties
  }

  this.outgoing[packet.messageId] = {
    volatile: true,
    cb: callback
  }

  debug('unsubscribe: call _sendPacket')
  this._sendPacket(packet)

  return this
}

/**
 * end - close connection
 *
 * @returns {MqttClient} this - for chaining
 * @param {Boolean} force - do not wait for all in-flight messages to be acked
 * @param {Function} cb - called when the client has been closed
 *
 * @api public
 */
MqttClient.prototype.end = function (force, opts, cb) {
  var that = this

  debug('end :: (%s)', this.options.clientId)

  if (force == null || typeof force !== 'boolean') {
    cb = opts || nop
    opts = force
    force = false
    if (typeof opts !== 'object') {
      cb = opts
      opts = null
      if (typeof cb !== 'function') {
        cb = nop
      }
    }
  }

  if (typeof opts !== 'object') {
    cb = opts
    opts = null
  }

  debug('end :: cb? %s', !!cb)
  cb = cb || nop

  function closeStores () {
    debug('end :: closeStores: closing incoming and outgoing stores')
    that.disconnected = true
    that.incomingStore.close(function (e1) {
      that.outgoingStore.close(function (e2) {
        debug('end :: closeStores: emitting end')
        that.emit('end')
        if (cb) {
          let err = e1 || e2
          debug('end :: closeStores: invoking callback with args')
          cb(err)
        }
      })
    })
    if (that._deferredReconnect) {
      that._deferredReconnect()
    }
  }

  function finish () {
    // defer closesStores of an I/O cycle,
    // just to make sure things are
    // ok for websockets
    debug('end :: (%s) :: finish :: calling _cleanUp with force %s', that.options.clientId, force)
    that._cleanUp(force, () => {
      debug('end :: finish :: calling process.nextTick on closeStores')
      // var boundProcess = nextTick.bind(null, closeStores)
      nextTick(closeStores.bind(that))
    }, opts)
  }

  if (this.disconnecting) {
    cb()
    return this
  }

  this._clearReconnect()

  this.disconnecting = true

  if (!force && Object.keys(this.outgoing).length > 0) {
    // wait 10ms, just to be sure we received all of it
    debug('end :: (%s) :: calling finish in 10ms once outgoing is empty', that.options.clientId)
    this.once('outgoingEmpty', setTimeout.bind(null, finish, 10))
  } else {
    debug('end :: (%s) :: immediately calling finish', that.options.clientId)
    finish()
  }

  return this
}

/**
 * removeOutgoingMessage - remove a message in outgoing store
 * the outgoing callback will be called withe Error('Message removed') if the message is removed
 *
 * @param {Number} messageId - messageId to remove message
 * @returns {MqttClient} this - for chaining
 * @api public
 *
 * @example client.removeOutgoingMessage(client.getLastMessageId());
 */
MqttClient.prototype.removeOutgoingMessage = function (messageId) {
  var cb = this.outgoing[messageId] ? this.outgoing[messageId].cb : null
  delete this.outgoing[messageId]
  this.outgoingStore.del({messageId: messageId}, function () {
    cb(new Error('Message removed'))
  })
  return this
}

/**
 * reconnect - connect again using the same options as connect()
 *
 * @param {Object} [opts] - optional reconnect options, includes:
 *    {Store} incomingStore - a store for the incoming packets
 *    {Store} outgoingStore - a store for the outgoing packets
 *    if opts is not given, current stores are used
 * @returns {MqttClient} this - for chaining
 *
 * @api public
 */
MqttClient.prototype.reconnect = function (opts) {
  debug('client reconnect')
  var that = this
  var f = function () {
    if (opts) {
      that.options.incomingStore = opts.incomingStore
      that.options.outgoingStore = opts.outgoingStore
    } else {
      that.options.incomingStore = null
      that.options.outgoingStore = null
    }
    that.incomingStore = that.options.incomingStore || new Store()
    that.outgoingStore = that.options.outgoingStore || new Store()
    that.disconnecting = false
    that.disconnected = false
    that._deferredReconnect = null
    that._reconnect()
  }

  if (this.disconnecting && !this.disconnected) {
    this._deferredReconnect = f
  } else {
    f()
  }
  return this
}

/**
 * _reconnect - implement reconnection
 * @api privateish
 */
MqttClient.prototype._reconnect = function () {
  debug('_reconnect: emitting reconnect to client')
  this.emit('reconnect')
  debug('_reconnect: calling _setupStream')
  this._setupStream()
}

/**
 * _setupReconnect - setup reconnect timer
 */
MqttClient.prototype._setupReconnect = function () {
  var that = this

  if (!that.disconnecting && !that.reconnectTimer && (that.options.reconnectPeriod > 0)) {
    if (!this.reconnecting) {
      debug('_setupReconnect :: emit `offline` state')
      this.emit('offline')
      debug('_setupReconnect :: set `reconnecting` to `true`')
      this.reconnecting = true
    }
    debug('_setupReconnect :: setting reconnectTimer for %d ms', that.options.reconnectPeriod)
    that.reconnectTimer = setInterval(function () {
      debug('reconnectTimer :: reconnect triggered!')
      that._reconnect()
    }, that.options.reconnectPeriod)
  } else {
    debug('_setupReconnect :: doing nothing...')
  }
}

/**
 * _clearReconnect - clear the reconnect timer
 */
MqttClient.prototype._clearReconnect = function () {
  debug('_clearReconnect : clearing reconnect timer')
  if (this.reconnectTimer) {
    clearInterval(this.reconnectTimer)
    this.reconnectTimer = null
  }
}

/**
 * _cleanUp - clean up on connection end
 * @api private
 */
MqttClient.prototype._cleanUp = function (forced, done) {
  var opts = arguments[2]
  if (done) {
    debug('_cleanUp :: done callback provided for on stream close')
    this.stream.on('close', done)
  }

  debug('_cleanUp :: forced? %s', forced)
  if (forced) {
    if ((this.options.reconnectPeriod === 0) && this.options.clean) {
      flush(this.outgoing)
    }
    debug('_cleanUp :: (%s) :: destroying stream', this.options.clientId)
    this.stream.destroy()
  } else {
    var packet = xtend({ cmd: 'disconnect' }, opts)
    debug('_cleanUp :: (%s) :: call _sendPacket with disconnect packet', this.options.clientId)
    this._sendPacket(
      packet,
      setImmediate.bind(
        null,
        this.stream.end.bind(this.stream)
      )
    )
  }

  if (!this.disconnecting) {
    debug('_cleanUp :: client not disconnecting. Clearing and resetting reconnect.')
    this._clearReconnect()
    this._setupReconnect()
  }

  if (this.pingTimer !== null) {
    debug('_cleanUp :: clearing pingTimer')
    this.pingTimer.clear()
    this.pingTimer = null
  }

  if (done && !this.connected) {
    debug('_cleanUp :: (%s) :: removing stream `done` callback `close` listener', this.options.clientId)
    this.stream.removeListener('close', done)
    done()
  }
}

/**
 * _sendPacket - send or queue a packet
 * @param {Object} packet - packet options
 * @param {Function} cb - callback when the packet is sent
 * @param {Function} cbStorePut - called when message is put into outgoingStore
 * @api private
 */
MqttClient.prototype._sendPacket = function (packet, cb, cbStorePut) {
  debug('_sendPacket :: (%s) ::  start', this.options.clientId)
  cbStorePut = cbStorePut || nop

  if (!this.connected) {
    debug('_sendPacket :: client not connected. Storing packet offline.')
    this._storePacket(packet, cb, cbStorePut)
    return
  }

  // When sending a packet, reschedule the ping timer
  this._shiftPingInterval()

  switch (packet.cmd) {
    case 'publish':
      break
    case 'pubrel':
      storeAndSend(this, packet, cb, cbStorePut)
      return
    default:
      sendPacket(this, packet, cb)
      return
  }

  switch (packet.qos) {
    case 2:
    case 1:
      storeAndSend(this, packet, cb, cbStorePut)
      break
    /**
     * no need of case here since it will be caught by default
     * and jshint comply that before default it must be a break
     * anyway it will result in -1 evaluation
     */
    case 0:
      /* falls through */
    default:
      sendPacket(this, packet, cb)
      break
  }
  debug('_sendPacket :: (%s) ::  end', this.options.clientId)
}

/**
 * _storePacket - queue a packet
 * @param {Object} packet - packet options
 * @param {Function} cb - callback when the packet is sent
 * @param {Function} cbStorePut - called when message is put into outgoingStore
 * @api private
 */
MqttClient.prototype._storePacket = function (packet, cb, cbStorePut) {
  debug('_storePacket :: packet: %o', packet)
  debug('_storePacket :: cb? %s', !!cb)
  cbStorePut = cbStorePut || nop

  // check that the packet is not a qos of 0, or that the command is not a publish
  if (((packet.qos || 0) === 0 && this.queueQoSZero) || packet.cmd !== 'publish') {
    this.queue.push({ packet: packet, cb: cb })
  } else if (packet.qos > 0) {
    cb = this.outgoing[packet.messageId] ? this.outgoing[packet.messageId].cb : null
    this.outgoingStore.put(packet, function (err) {
      if (err) {
        return cb && cb(err)
      }
      cbStorePut()
    })
  } else if (cb) {
    cb(new Error('No connection to broker'))
  }
}

/**
 * _setupPingTimer - setup the ping timer
 *
 * @api private
 */
MqttClient.prototype._setupPingTimer = function () {
  debug('_setupPingTimer :: keepalive %d (seconds)', this.options.keepalive)
  var that = this

  if (!this.pingTimer && this.options.keepalive) {
    this.pingResp = true
    this.pingTimer = reInterval(function () {
      that._checkPing()
    }, this.options.keepalive * 1000)
  }
}

/**
 * _shiftPingInterval - reschedule the ping interval
 *
 * @api private
 */
MqttClient.prototype._shiftPingInterval = function () {
  if (this.pingTimer && this.options.keepalive && this.options.reschedulePings) {
    this.pingTimer.reschedule(this.options.keepalive * 1000)
  }
}
/**
 * _checkPing - check if a pingresp has come back, and ping the server again
 *
 * @api private
 */
MqttClient.prototype._checkPing = function () {
  debug('_checkPing :: checking ping...')
  if (this.pingResp) {
    debug('_checkPing :: ping response received. Clearing flag and sending `pingreq`')
    this.pingResp = false
    this._sendPacket({ cmd: 'pingreq' })
  } else {
    // do a forced cleanup since socket will be in bad shape
    debug('_checkPing :: calling _cleanUp with force true')
    this._cleanUp(true)
  }
}

/**
 * _handlePingresp - handle a pingresp
 *
 * @api private
 */
MqttClient.prototype._handlePingresp = function () {
  this.pingResp = true
}

/**
 * _handleConnack
 *
 * @param {Object} packet
 * @api private
 */
MqttClient.prototype._handleConnack = function (packet) {
  debug('_handleConnack')
  var options = this.options
  var version = options.protocolVersion
  var rc = version === 5 ? packet.reasonCode : packet.returnCode

  clearTimeout(this.connackTimer)

  if (packet.properties) {
    if (packet.properties.topicAliasMaximum) {
      if (!options.properties) { options.properties = {} }
      options.properties.topicAliasMaximum = packet.properties.topicAliasMaximum
    }
    if (packet.properties.serverKeepAlive && options.keepalive) {
      options.keepalive = packet.properties.serverKeepAlive
      this._shiftPingInterval()
    }
    if (packet.properties.maximumPacketSize) {
      if (!options.properties) { options.properties = {} }
      options.properties.maximumPacketSize = packet.properties.maximumPacketSize
    }
  }

  if (rc === 0) {
    this.reconnecting = false
    this._onConnect(packet)
  } else if (rc > 0) {
    var err = new Error('Connection refused: ' + errors[rc])
    err.code = rc
    this.emit('error', err)
  }
}

/**
 * _handlePublish
 *
 * @param {Object} packet
 * @api private
 */
/*
those late 2 case should be rewrite to comply with coding style:

case 1:
case 0:
  // do not wait sending a puback
  // no callback passed
  if (1 === qos) {
    this._sendPacket({
      cmd: 'puback',
      messageId: messageId
    });
  }
  // emit the message event for both qos 1 and 0
  this.emit('message', topic, message, packet);
  this.handleMessage(packet, done);
  break;
default:
  // do nothing but every switch mus have a default
  // log or throw an error about unknown qos
  break;

for now i just suppressed the warnings
*/
MqttClient.prototype._handlePublish = function (packet, done) {
  debug('_handlePublish: packet %o', packet)
  done = typeof done !== 'undefined' ? done : nop
  var topic = packet.topic.toString()
  var message = packet.payload
  var qos = packet.qos
  var messageId = packet.messageId
  var that = this
  var options = this.options
  var validReasonCodes = [0, 16, 128, 131, 135, 144, 145, 151, 153]
  debug('_handlePublish: qos %d', qos)
  switch (qos) {
    case 2: {
      options.customHandleAcks(topic, message, packet, function (error, code) {
        if (!(error instanceof Error)) {
          code = error
          error = null
        }
        if (error) { return that.emit('error', error) }
        if (validReasonCodes.indexOf(code) === -1) { return that.emit('error', new Error('Wrong reason code for pubrec')) }
        if (code) {
          that._sendPacket({cmd: 'pubrec', messageId: messageId, reasonCode: code}, done)
        } else {
          that.incomingStore.put(packet, function () {
            that._sendPacket({cmd: 'pubrec', messageId: messageId}, done)
          })
        }
      })
      break
    }
    case 1: {
      // emit the message event
      options.customHandleAcks(topic, message, packet, function (error, code) {
        if (!(error instanceof Error)) {
          code = error
          error = null
        }
        if (error) { return that.emit('error', error) }
        if (validReasonCodes.indexOf(code) === -1) { return that.emit('error', new Error('Wrong reason code for puback')) }
        if (!code) { that.emit('message', topic, message, packet) }
        that.handleMessage(packet, function (err) {
          if (err) {
            return done && done(err)
          }
          that._sendPacket({cmd: 'puback', messageId: messageId, reasonCode: code}, done)
        })
      })
      break
    }
    case 0:
      // emit the message event
      this.emit('message', topic, message, packet)
      this.handleMessage(packet, done)
      break
    default:
      // do nothing
      debug('_handlePublish: unknown QoS. Doing nothing.')
      // log or throw an error about unknown qos
      break
  }
}

/**
 * Handle messages with backpressure support, one at a time.
 * Override at will.
 *
 * @param Packet packet the packet
 * @param Function callback call when finished
 * @api public
 */
MqttClient.prototype.handleMessage = function (packet, callback) {
  callback()
}

/**
 * _handleAck
 *
 * @param {Object} packet
 * @api private
 */

MqttClient.prototype._handleAck = function (packet) {
  /* eslint no-fallthrough: "off" */
  var messageId = packet.messageId
  var type = packet.cmd
  var response = null
  var cb = this.outgoing[messageId] ? this.outgoing[messageId].cb : null
  var that = this
  var err

  if (!cb) {
    debug('_handleAck :: Server sent an ack in error. Ignoring.')
    // Server sent an ack in error, ignore it.
    return
  }

  // Process
  debug('_handleAck :: packet type', type)
  switch (type) {
    case 'pubcomp':
      // same thing as puback for QoS 2
    case 'puback':
      var pubackRC = packet.reasonCode
      // Callback - we're done
      if (pubackRC && pubackRC > 0 && pubackRC !== 16) {
        err = new Error('Publish error: ' + errors[pubackRC])
        err.code = pubackRC
        cb(err, packet)
      }
      delete this.outgoing[messageId]
      this.outgoingStore.del(packet, cb)
      break
    case 'pubrec':
      response = {
        cmd: 'pubrel',
        qos: 2,
        messageId: messageId
      }
      var pubrecRC = packet.reasonCode

      if (pubrecRC && pubrecRC > 0 && pubrecRC !== 16) {
        err = new Error('Publish error: ' + errors[pubrecRC])
        err.code = pubrecRC
        cb(err, packet)
      } else {
        this._sendPacket(response)
      }
      break
    case 'suback':
      delete this.outgoing[messageId]
      for (var grantedI = 0; grantedI < packet.granted.length; grantedI++) {
        if ((packet.granted[grantedI] & 0x80) !== 0) {
          // suback with Failure status
          var topics = this.messageIdToTopic[messageId]
          if (topics) {
            topics.forEach(function (topic) {
              delete that._resubscribeTopics[topic]
            })
          }
        }
      }
      cb(null, packet)
      break
    case 'unsuback':
      delete this.outgoing[messageId]
      cb(null)
      break
    default:
      that.emit('error', new Error('unrecognized packet type'))
  }

  if (this.disconnecting &&
      Object.keys(this.outgoing).length === 0) {
    this.emit('outgoingEmpty')
  }
}

/**
 * _handlePubrel
 *
 * @param {Object} packet
 * @api private
 */
MqttClient.prototype._handlePubrel = function (packet, callback) {
  debug('handling pubrel packet')
  callback = typeof callback !== 'undefined' ? callback : nop
  var messageId = packet.messageId
  var that = this

  var comp = {cmd: 'pubcomp', messageId: messageId}

  that.incomingStore.get(packet, function (err, pub) {
    if (!err) {
      that.emit('message', pub.topic, pub.payload, pub)
      that.handleMessage(pub, function (err) {
        if (err) {
          return callback(err)
        }
        that.incomingStore.del(pub, nop)
        that._sendPacket(comp, callback)
      })
    } else {
      that._sendPacket(comp, callback)
    }
  })
}

/**
 * _handleDisconnect
 *
 * @param {Object} packet
 * @api private
 */
MqttClient.prototype._handleDisconnect = function (packet) {
  this.emit('disconnect', packet)
}

/**
 * _nextId
 * @return unsigned int
 */
MqttClient.prototype._nextId = function () {
  // id becomes current state of this.nextId and increments afterwards
  var id = this.nextId++
  // Ensure 16 bit unsigned int (max 65535, nextId got one higher)
  if (this.nextId === 65536) {
    this.nextId = 1
  }
  return id
}

/**
 * getLastMessageId
 * @return unsigned int
 */
MqttClient.prototype.getLastMessageId = function () {
  return (this.nextId === 1) ? 65535 : (this.nextId - 1)
}

/**
 * _resubscribe
 * @api private
 */
MqttClient.prototype._resubscribe = function (connack) {
  debug('_resubscribe')
  var _resubscribeTopicsKeys = Object.keys(this._resubscribeTopics)
  if (!this._firstConnection &&
      (this.options.clean || (this.options.protocolVersion === 5 && !connack.sessionPresent)) &&
      _resubscribeTopicsKeys.length > 0) {
    if (this.options.resubscribe) {
      if (this.options.protocolVersion === 5) {
        debug('_resubscribe: protocolVersion 5')
        for (var topicI = 0; topicI < _resubscribeTopicsKeys.length; topicI++) {
          var resubscribeTopic = {}
          resubscribeTopic[_resubscribeTopicsKeys[topicI]] = this._resubscribeTopics[_resubscribeTopicsKeys[topicI]]
          resubscribeTopic.resubscribe = true
          this.subscribe(resubscribeTopic, {properties: resubscribeTopic[_resubscribeTopicsKeys[topicI]].properties})
        }
      } else {
        this._resubscribeTopics.resubscribe = true
        this.subscribe(this._resubscribeTopics)
      }
    } else {
      this._resubscribeTopics = {}
    }
  }

  this._firstConnection = false
}

/**
 * _onConnect
 *
 * @api private
 */
MqttClient.prototype._onConnect = function (packet) {
  if (this.disconnected) {
    this.emit('connect', packet)
    return
  }

  var that = this

  this._setupPingTimer()
  this._resubscribe(packet)

  this.connected = true

  function startStreamProcess () {
    var outStore = that.outgoingStore.createStream()

    function clearStoreProcessing () {
      that._storeProcessing = false
      that._packetIdsDuringStoreProcessing = {}
    }

    that.once('close', remove)
    outStore.on('error', function (err) {
      clearStoreProcessing()
      that.removeListener('close', remove)
      that.emit('error', err)
    })

    function remove () {
      outStore.destroy()
      outStore = null
      clearStoreProcessing()
    }

    function storeDeliver () {
      // edge case, we wrapped this twice
      if (!outStore) {
        return
      }
      that._storeProcessing = true

      var packet = outStore.read(1)

      var cb

      if (!packet) {
        // read when data is available in the future
        outStore.once('readable', storeDeliver)
        return
      }

      // Skip already processed store packets
      if (that._packetIdsDuringStoreProcessing[packet.messageId]) {
        storeDeliver()
        return
      }

      // Avoid unnecessary stream read operations when disconnected
      if (!that.disconnecting && !that.reconnectTimer) {
        cb = that.outgoing[packet.messageId] ? that.outgoing[packet.messageId].cb : null
        that.outgoing[packet.messageId] = {
          volatile: false,
          cb: function (err, status) {
            // Ensure that the original callback passed in to publish gets invoked
            if (cb) {
              cb(err, status)
            }

            storeDeliver()
          }
        }
        that._packetIdsDuringStoreProcessing[packet.messageId] = true
        that._sendPacket(packet)
      } else if (outStore.destroy) {
        outStore.destroy()
      }
    }

    outStore.on('end', function () {
      var allProcessed = true
      for (var id in that._packetIdsDuringStoreProcessing) {
        if (!that._packetIdsDuringStoreProcessing[id]) {
          allProcessed = false
          break
        }
      }
      if (allProcessed) {
        clearStoreProcessing()
        that.removeListener('close', remove)
        that.emit('connect', packet)
      } else {
        startStreamProcess()
      }
    })
    storeDeliver()
  }
  // start flowing
  startStreamProcess()
}

module.exports = MqttClient

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./store":7,"./validations":8,"_process":101,"debug":17,"events":83,"inherits":88,"mqtt-packet":93,"readable-stream":115,"reinterval":116,"xtend":140}],2:[function(require,module,exports){
(function (Buffer){
'use strict'

var Transform = require('readable-stream').Transform
var duplexify = require('duplexify')
var base64 = require('base64-js')

/* global FileReader */
var my
var proxy
var stream
var isInitialized = false

function buildProxy () {
  var proxy = new Transform()
  proxy._write = function (chunk, encoding, next) {
    my.sendSocketMessage({
      data: chunk.buffer,
      success: function () {
        next()
      },
      fail: function () {
        next(new Error())
      }
    })
  }
  proxy._flush = function socketEnd (done) {
    my.closeSocket({
      success: function () {
        done()
      }
    })
  }

  return proxy
}

function setDefaultOpts (opts) {
  if (!opts.hostname) {
    opts.hostname = 'localhost'
  }
  if (!opts.path) {
    opts.path = '/'
  }

  if (!opts.wsOptions) {
    opts.wsOptions = {}
  }
}

function buildUrl (opts, client) {
  var protocol = opts.protocol === 'alis' ? 'wss' : 'ws'
  var url = protocol + '://' + opts.hostname + opts.path
  if (opts.port && opts.port !== 80 && opts.port !== 443) {
    url = protocol + '://' + opts.hostname + ':' + opts.port + opts.path
  }
  if (typeof (opts.transformWsUrl) === 'function') {
    url = opts.transformWsUrl(url, opts, client)
  }
  return url
}

function bindEventHandler () {
  if (isInitialized) return

  isInitialized = true

  my.onSocketOpen(function () {
    stream.setReadable(proxy)
    stream.setWritable(proxy)
    stream.emit('connect')
  })

  my.onSocketMessage(function (res) {
    if (typeof res.data === 'string') {
      var array = base64.toByteArray(res.data)
      var buffer = Buffer.from(array)
      proxy.push(buffer)
    } else {
      var reader = new FileReader()
      reader.addEventListener('load', function () {
        var data = reader.result

        if (data instanceof ArrayBuffer) data = Buffer.from(data)
        else data = Buffer.from(data, 'utf8')
        proxy.push(data)
      })
      reader.readAsArrayBuffer(res.data)
    }
  })

  my.onSocketClose(function () {
    stream.end()
    stream.destroy()
  })

  my.onSocketError(function (res) {
    stream.destroy(res)
  })
}

function buildStream (client, opts) {
  opts.hostname = opts.hostname || opts.host

  if (!opts.hostname) {
    throw new Error('Could not determine host. Specify host manually.')
  }

  var websocketSubProtocol =
    (opts.protocolId === 'MQIsdp') && (opts.protocolVersion === 3)
      ? 'mqttv3.1'
      : 'mqtt'

  setDefaultOpts(opts)

  var url = buildUrl(opts, client)
  my = opts.my
  my.connectSocket({
    url: url,
    protocols: websocketSubProtocol
  })

  proxy = buildProxy()
  stream = duplexify.obj()

  bindEventHandler()

  return stream
}

module.exports = buildStream

}).call(this,require("buffer").Buffer)
},{"base64-js":10,"buffer":13,"duplexify":19,"readable-stream":115}],3:[function(require,module,exports){
'use strict'
var net = require('net')
var debug = require('debug')('mqttjs:tcp')

/*
  variables port and host can be removed since
  you have all required information in opts object
*/
function streamBuilder (client, opts) {
  var port, host
  opts.port = opts.port || 1883
  opts.hostname = opts.hostname || opts.host || 'localhost'

  port = opts.port
  host = opts.hostname

  debug('port %d and host %s', port, host)
  return net.createConnection(port, host)
}

module.exports = streamBuilder

},{"debug":17,"net":12}],4:[function(require,module,exports){
'use strict'
var tls = require('tls')
var debug = require('debug')('mqttjs:tls')

function buildBuilder (mqttClient, opts) {
  var connection
  opts.port = opts.port || 8883
  opts.host = opts.hostname || opts.host || 'localhost'
  opts.servername = opts.host

  opts.rejectUnauthorized = opts.rejectUnauthorized !== false

  delete opts.path

  debug('port %d host %s rejectUnauthorized %b', opts.port, opts.host, opts.rejectUnauthorized)

  connection = tls.connect(opts)
  /* eslint no-use-before-define: [2, "nofunc"] */
  connection.on('secureConnect', function () {
    if (opts.rejectUnauthorized && !connection.authorized) {
      connection.emit('error', new Error('TLS not authorized'))
    } else {
      connection.removeListener('error', handleTLSerrors)
    }
  })

  function handleTLSerrors (err) {
    // How can I get verify this error is a tls error?
    if (opts.rejectUnauthorized) {
      mqttClient.emit('error', err)
    }

    // close this connection to match the behaviour of net
    // otherwise all we get is an error from the connection
    // and close event doesn't fire. This is a work around
    // to enable the reconnect code to work the same as with
    // net.createConnection
    connection.end()
  }

  connection.on('error', handleTLSerrors)
  return connection
}

module.exports = buildBuilder

},{"debug":17,"tls":12}],5:[function(require,module,exports){
(function (process){
'use strict'

const WS = require('ws')
const debug = require('debug')('mqttjs:ws')
const duplexify = require('duplexify')
const Buffer = require('safe-buffer').Buffer
const urlModule = require('url')
const Transform = require('readable-stream').Transform

let WSS_OPTIONS = [
  'rejectUnauthorized',
  'ca',
  'cert',
  'key',
  'pfx',
  'passphrase'
]
// eslint-disable-next-line camelcase
const IS_BROWSER = (typeof process !== 'undefined' && process.title === 'browser') || typeof __webpack_require__ === 'function'
function buildUrl (opts, client) {
  let url = opts.protocol + '://' + opts.hostname + ':' + opts.port + opts.path
  if (typeof (opts.transformWsUrl) === 'function') {
    url = opts.transformWsUrl(url, opts, client)
  }
  return url
}

function setDefaultOpts (opts) {
  let options = opts
  if (!opts.hostname) {
    options.hostname = 'localhost'
  }
  if (!opts.port) {
    if (opts.protocol === 'wss') {
      options.port = 443
    } else {
      options.port = 80
    }
  }
  if (!opts.path) {
    options.path = '/'
  }

  if (!opts.wsOptions) {
    options.wsOptions = {}
  }
  if (!IS_BROWSER && opts.protocol === 'wss') {
    // Add cert/key/ca etc options
    WSS_OPTIONS.forEach(function (prop) {
      if (opts.hasOwnProperty(prop) && !opts.wsOptions.hasOwnProperty(prop)) {
        options.wsOptions[prop] = opts[prop]
      }
    })
  }

  return options
}

function setDefaultBrowserOpts (opts) {
  let options = setDefaultOpts(opts)

  if (!options.hostname) {
    options.hostname = options.host
  }

  if (!options.hostname) {
    // Throwing an error in a Web Worker if no `hostname` is given, because we
    // can not determine the `hostname` automatically.  If connecting to
    // localhost, please supply the `hostname` as an argument.
    if (typeof (document) === 'undefined') {
      throw new Error('Could not determine host. Specify host manually.')
    }
    const parsed = urlModule.parse(document.URL)
    options.hostname = parsed.hostname

    if (!options.port) {
      options.port = parsed.port
    }
  }

  // objectMode should be defined for logic
  if (options.objectMode === undefined) {
    options.objectMode = !(options.binary === true || options.binary === undefined)
  }

  return options
}

function createWebSocket (client, url, opts) {
  debug('createWebSocket')
  debug('protocol: ' + opts.protocolId + ' ' + opts.protocolVersion)
  const websocketSubProtocol =
    (opts.protocolId === 'MQIsdp') && (opts.protocolVersion === 3)
      ? 'mqttv3.1'
      : 'mqtt'

  debug('creating new Websocket for url: ' + url + ' and protocol: ' + websocketSubProtocol)
  let socket = new WS(url, [websocketSubProtocol], opts.wsOptions)
  return socket
}

function createBrowserWebSocket (client, opts) {
  const websocketSubProtocol =
  (opts.protocolId === 'MQIsdp') && (opts.protocolVersion === 3)
    ? 'mqttv3.1'
    : 'mqtt'

  let url = buildUrl(opts, client)
  /* global WebSocket */
  let socket = new WebSocket(url, [websocketSubProtocol])
  socket.binaryType = 'arraybuffer'
  return socket
}

function streamBuilder (client, opts) {
  debug('streamBuilder')
  let options = setDefaultOpts(opts)
  const url = buildUrl(options, client)
  let socket = createWebSocket(client, url, options)
  let webSocketStream = WS.createWebSocketStream(socket, options.wsOptions)
  webSocketStream.url = url
  return webSocketStream
}

function browserStreamBuilder (client, opts) {
  debug('browserStreamBuilder')
  let stream
  let options = setDefaultBrowserOpts(opts)
  // sets the maximum socket buffer size before throttling
  const bufferSize = options.browserBufferSize || 1024 * 512

  const bufferTimeout = opts.browserBufferTimeout || 1000

  const coerceToBuffer = !opts.objectMode

  let socket = createBrowserWebSocket(client, opts)

  let proxy = buildProxy(opts, socketWriteBrowser, socketEndBrowser)

  if (!opts.objectMode) {
    proxy._writev = writev
  }
  proxy.on('close', () => { socket.close() })

  const eventListenerSupport = (typeof socket.addEventListener === 'undefined')

  // was already open when passed in
  if (socket.readyState === socket.OPEN) {
    stream = proxy
  } else {
    stream = stream = duplexify(undefined, undefined, opts)
    if (!opts.objectMode) {
      stream._writev = writev
    }

    if (eventListenerSupport) {
      socket.addEventListener('open', onopen)
    } else {
      socket.onopen = onopen
    }
  }

  stream.socket = socket

  if (eventListenerSupport) {
    socket.addEventListener('close', onclose)
    socket.addEventListener('error', onerror)
    socket.addEventListener('message', onmessage)
  } else {
    socket.onclose = onclose
    socket.onerror = onerror
    socket.onmessage = onmessage
  }

  // methods for browserStreamBuilder

  function buildProxy (options, socketWrite, socketEnd) {
    let proxy = new Transform({
      objectModeMode: options.objectMode
    })

    proxy._write = socketWrite
    proxy._flush = socketEnd

    return proxy
  }

  function onopen () {
    stream.setReadable(proxy)
    stream.setWritable(proxy)
    stream.emit('connect')
  }

  function onclose () {
    stream.end()
    stream.destroy()
  }

  function onerror (err) {
    stream.destroy(err)
  }

  function onmessage (event) {
    let data = event.data
    if (data instanceof ArrayBuffer) data = Buffer.from(data)
    else data = Buffer.from(data, 'utf8')
    proxy.push(data)
  }

  // this is to be enabled only if objectMode is false
  function writev (chunks, cb) {
    const buffers = new Array(chunks.length)
    for (let i = 0; i < chunks.length; i++) {
      if (typeof chunks[i].chunk === 'string') {
        buffers[i] = Buffer.from(chunks[i], 'utf8')
      } else {
        buffers[i] = chunks[i].chunk
      }
    }

    this._write(Buffer.concat(buffers), 'binary', cb)
  }

  function socketWriteBrowser (chunk, enc, next) {
    if (socket.bufferedAmount > bufferSize) {
      // throttle data until buffered amount is reduced.
      setTimeout(socketWriteBrowser, bufferTimeout, chunk, enc, next)
    }

    if (coerceToBuffer && typeof chunk === 'string') {
      chunk = Buffer.from(chunk, 'utf8')
    }

    try {
      socket.send(chunk)
    } catch (err) {
      return next(err)
    }

    next()
  }

  function socketEndBrowser (done) {
    socket.close()
    done()
  }

  // end methods for browserStreamBuilder

  return stream
}

if (IS_BROWSER) {
  module.exports = browserStreamBuilder
} else {
  module.exports = streamBuilder
}

}).call(this,require('_process'))
},{"_process":101,"debug":17,"duplexify":19,"readable-stream":115,"safe-buffer":117,"url":132,"ws":139}],6:[function(require,module,exports){
(function (Buffer){
'use strict'

var Transform = require('readable-stream').Transform
var duplexify = require('duplexify')

/* global wx */
var socketTask
var proxy
var stream

function buildProxy () {
  var proxy = new Transform()
  proxy._write = function (chunk, encoding, next) {
    socketTask.send({
      data: chunk.buffer,
      success: function () {
        next()
      },
      fail: function (errMsg) {
        next(new Error(errMsg))
      }
    })
  }
  proxy._flush = function socketEnd (done) {
    socketTask.close({
      success: function () {
        done()
      }
    })
  }

  return proxy
}

function setDefaultOpts (opts) {
  if (!opts.hostname) {
    opts.hostname = 'localhost'
  }
  if (!opts.path) {
    opts.path = '/'
  }

  if (!opts.wsOptions) {
    opts.wsOptions = {}
  }
}

function buildUrl (opts, client) {
  var protocol = opts.protocol === 'wxs' ? 'wss' : 'ws'
  var url = protocol + '://' + opts.hostname + opts.path
  if (opts.port && opts.port !== 80 && opts.port !== 443) {
    url = protocol + '://' + opts.hostname + ':' + opts.port + opts.path
  }
  if (typeof (opts.transformWsUrl) === 'function') {
    url = opts.transformWsUrl(url, opts, client)
  }
  return url
}

function bindEventHandler () {
  socketTask.onOpen(function () {
    stream.setReadable(proxy)
    stream.setWritable(proxy)
    stream.emit('connect')
  })

  socketTask.onMessage(function (res) {
    var data = res.data

    if (data instanceof ArrayBuffer) data = Buffer.from(data)
    else data = Buffer.from(data, 'utf8')
    proxy.push(data)
  })

  socketTask.onClose(function () {
    stream.end()
    stream.destroy()
  })

  socketTask.onError(function (res) {
    stream.destroy(new Error(res.errMsg))
  })
}

function buildStream (client, opts) {
  opts.hostname = opts.hostname || opts.host

  if (!opts.hostname) {
    throw new Error('Could not determine host. Specify host manually.')
  }

  var websocketSubProtocol =
    (opts.protocolId === 'MQIsdp') && (opts.protocolVersion === 3)
      ? 'mqttv3.1'
      : 'mqtt'

  setDefaultOpts(opts)

  var url = buildUrl(opts, client)
  socketTask = wx.connectSocket({
    url: url,
    protocols: [websocketSubProtocol]
  })

  proxy = buildProxy()
  stream = duplexify.obj()
  stream._destroy = function (err, cb) {
    socketTask.close({
      success: function () {
        cb && cb(err)
      }
    })
  }

  var destroyRef = stream.destroy
  stream.destroy = function () {
    stream.destroy = destroyRef

    var self = this
    setTimeout(function () {
      socketTask.close({
        fail: function () {
          self._destroy(new Error())
        }
      })
    }, 0)
  }.bind(stream)

  bindEventHandler()

  return stream
}

module.exports = buildStream

}).call(this,require("buffer").Buffer)
},{"buffer":13,"duplexify":19,"readable-stream":115}],7:[function(require,module,exports){
'use strict'

/**
 * Module dependencies
 */
var xtend = require('xtend')

var Readable = require('readable-stream').Readable
var streamsOpts = { objectMode: true }
var defaultStoreOptions = {
  clean: true
}

/**
 * es6-map can preserve insertion order even if ES version is older.
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Description
 * It should be noted that a Map which is a map of an object, especially
 * a dictionary of dictionaries, will only map to the object's insertion
 * order. In ES2015 this is ordered for objects but for older versions of
 * ES, this may be random and not ordered.
 *
 */
var Map = require('es6-map')

/**
 * In-memory implementation of the message store
 * This can actually be saved into files.
 *
 * @param {Object} [options] - store options
 */
function Store (options) {
  if (!(this instanceof Store)) {
    return new Store(options)
  }

  this.options = options || {}

  // Defaults
  this.options = xtend(defaultStoreOptions, options)

  this._inflights = new Map()
}

/**
 * Adds a packet to the store, a packet is
 * anything that has a messageId property.
 *
 */
Store.prototype.put = function (packet, cb) {
  this._inflights.set(packet.messageId, packet)

  if (cb) {
    cb()
  }

  return this
}

/**
 * Creates a stream with all the packets in the store
 *
 */
Store.prototype.createStream = function () {
  var stream = new Readable(streamsOpts)
  var destroyed = false
  var values = []
  var i = 0

  this._inflights.forEach(function (value, key) {
    values.push(value)
  })

  stream._read = function () {
    if (!destroyed && i < values.length) {
      this.push(values[i++])
    } else {
      this.push(null)
    }
  }

  stream.destroy = function () {
    if (destroyed) {
      return
    }

    var self = this

    destroyed = true

    setTimeout(function () {
      self.emit('close')
    }, 0)
  }

  return stream
}

/**
 * deletes a packet from the store.
 */
Store.prototype.del = function (packet, cb) {
  packet = this._inflights.get(packet.messageId)
  if (packet) {
    this._inflights.delete(packet.messageId)
    cb(null, packet)
  } else if (cb) {
    cb(new Error('missing packet'))
  }

  return this
}

/**
 * get a packet from the store.
 */
Store.prototype.get = function (packet, cb) {
  packet = this._inflights.get(packet.messageId)
  if (packet) {
    cb(null, packet)
  } else if (cb) {
    cb(new Error('missing packet'))
  }

  return this
}

/**
 * Close the store
 */
Store.prototype.close = function (cb) {
  if (this.options.clean) {
    this._inflights = null
  }
  if (cb) {
    cb()
  }
}

module.exports = Store

},{"es6-map":68,"readable-stream":115,"xtend":140}],8:[function(require,module,exports){
'use strict'

/**
 * Validate a topic to see if it's valid or not.
 * A topic is valid if it follow below rules:
 * - Rule #1: If any part of the topic is not `+` or `#`, then it must not contain `+` and '#'
 * - Rule #2: Part `#` must be located at the end of the mailbox
 *
 * @param {String} topic - A topic
 * @returns {Boolean} If the topic is valid, returns true. Otherwise, returns false.
 */
function validateTopic (topic) {
  var parts = topic.split('/')

  for (var i = 0; i < parts.length; i++) {
    if (parts[i] === '+') {
      continue
    }

    if (parts[i] === '#') {
      // for Rule #2
      return i === parts.length - 1
    }

    if (parts[i].indexOf('+') !== -1 || parts[i].indexOf('#') !== -1) {
      return false
    }
  }

  return true
}

/**
 * Validate an array of topics to see if any of them is valid or not
  * @param {Array} topics - Array of topics
 * @returns {String} If the topics is valid, returns null. Otherwise, returns the invalid one
 */
function validateTopics (topics) {
  if (topics.length === 0) {
    return 'empty_topic_list'
  }
  for (var i = 0; i < topics.length; i++) {
    if (!validateTopic(topics[i])) {
      return topics[i]
    }
  }
  return null
}

module.exports = {
  validateTopics: validateTopics
}

},{}],9:[function(require,module,exports){
(function (process){
'use strict'

var MqttClient = require('../client')
var Store = require('../store')
var url = require('url')
var xtend = require('xtend')
var debug = require('debug')('mqttjs')

var protocols = {}

// eslint-disable-next-line camelcase
if ((typeof process !== 'undefined' && process.title !== 'browser') || typeof __webpack_require__ === 'function') {
  protocols.mqtt = require('./tcp')
  protocols.tcp = require('./tcp')
  protocols.ssl = require('./tls')
  protocols.tls = require('./tls')
  protocols.mqtts = require('./tls')
} else {
  protocols.wx = require('./wx')
  protocols.wxs = require('./wx')

  protocols.ali = require('./ali')
  protocols.alis = require('./ali')
}

protocols.ws = require('./ws')
protocols.wss = require('./ws')

/**
 * Parse the auth attribute and merge username and password in the options object.
 *
 * @param {Object} [opts] option object
 */
function parseAuthOptions (opts) {
  var matches
  if (opts.auth) {
    matches = opts.auth.match(/^(.+):(.+)$/)
    if (matches) {
      opts.username = matches[1]
      opts.password = matches[2]
    } else {
      opts.username = opts.auth
    }
  }
}

/**
 * connect - connect to an MQTT broker.
 *
 * @param {String} [brokerUrl] - url of the broker, optional
 * @param {Object} opts - see MqttClient#constructor
 */
function connect (brokerUrl, opts) {
  debug('connecting to an MQTT broker...')
  if ((typeof brokerUrl === 'object') && !opts) {
    opts = brokerUrl
    brokerUrl = null
  }

  opts = opts || {}

  if (brokerUrl) {
    var parsed = url.parse(brokerUrl, true)
    if (parsed.port != null) {
      parsed.port = Number(parsed.port)
    }

    opts = xtend(parsed, opts)

    if (opts.protocol === null) {
      throw new Error('Missing protocol')
    }
    opts.protocol = opts.protocol.replace(/:$/, '')
  }

  // merge in the auth options if supplied
  parseAuthOptions(opts)

  // support clientId passed in the query string of the url
  if (opts.query && typeof opts.query.clientId === 'string') {
    opts.clientId = opts.query.clientId
  }

  if (opts.cert && opts.key) {
    if (opts.protocol) {
      if (['mqtts', 'wss', 'wxs', 'alis'].indexOf(opts.protocol) === -1) {
        switch (opts.protocol) {
          case 'mqtt':
            opts.protocol = 'mqtts'
            break
          case 'ws':
            opts.protocol = 'wss'
            break
          case 'wx':
            opts.protocol = 'wxs'
            break
          case 'ali':
            opts.protocol = 'alis'
            break
          default:
            throw new Error('Unknown protocol for secure connection: "' + opts.protocol + '"!')
        }
      }
    } else {
      // A cert and key was provided, however no protocol was specified, so we will throw an error.
      throw new Error('Missing secure protocol key')
    }
  }

  if (!protocols[opts.protocol]) {
    var isSecure = ['mqtts', 'wss'].indexOf(opts.protocol) !== -1
    opts.protocol = [
      'mqtt',
      'mqtts',
      'ws',
      'wss',
      'wx',
      'wxs',
      'ali',
      'alis'
    ].filter(function (key, index) {
      if (isSecure && index % 2 === 0) {
        // Skip insecure protocols when requesting a secure one.
        return false
      }
      return (typeof protocols[key] === 'function')
    })[0]
  }

  if (opts.clean === false && !opts.clientId) {
    throw new Error('Missing clientId for unclean clients')
  }

  if (opts.protocol) {
    opts.defaultProtocol = opts.protocol
  }

  function wrapper (client) {
    if (opts.servers) {
      if (!client._reconnectCount || client._reconnectCount === opts.servers.length) {
        client._reconnectCount = 0
      }

      opts.host = opts.servers[client._reconnectCount].host
      opts.port = opts.servers[client._reconnectCount].port
      opts.protocol = (!opts.servers[client._reconnectCount].protocol ? opts.defaultProtocol : opts.servers[client._reconnectCount].protocol)
      opts.hostname = opts.host

      client._reconnectCount++
    }

    debug('calling streambuilder for', opts.protocol)
    return protocols[opts.protocol](client, opts)
  }
  var client = new MqttClient(wrapper, opts)
  client.on('error', function () { /* Automatically set up client error handling */ })
  return client
}

module.exports = connect
module.exports.connect = connect
module.exports.MqttClient = MqttClient
module.exports.Store = Store

}).call(this,require('_process'))
},{"../client":1,"../store":7,"./ali":2,"./tcp":3,"./tls":4,"./ws":5,"./wx":6,"_process":101,"debug":17,"url":132,"xtend":140}],10:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],11:[function(require,module,exports){
var DuplexStream = require('readable-stream/duplex')
  , util         = require('util')
  , Buffer       = require('safe-buffer').Buffer


function BufferList (callback) {
  if (!(this instanceof BufferList))
    return new BufferList(callback)

  this._bufs  = []
  this.length = 0

  if (typeof callback == 'function') {
    this._callback = callback

    var piper = function piper (err) {
      if (this._callback) {
        this._callback(err)
        this._callback = null
      }
    }.bind(this)

    this.on('pipe', function onPipe (src) {
      src.on('error', piper)
    })
    this.on('unpipe', function onUnpipe (src) {
      src.removeListener('error', piper)
    })
  } else {
    this.append(callback)
  }

  DuplexStream.call(this)
}


util.inherits(BufferList, DuplexStream)


BufferList.prototype._offset = function _offset (offset) {
  var tot = 0, i = 0, _t
  if (offset === 0) return [ 0, 0 ]
  for (; i < this._bufs.length; i++) {
    _t = tot + this._bufs[i].length
    if (offset < _t || i == this._bufs.length - 1)
      return [ i, offset - tot ]
    tot = _t
  }
}


BufferList.prototype.append = function append (buf) {
  var i = 0

  if (Buffer.isBuffer(buf)) {
    this._appendBuffer(buf);
  } else if (Array.isArray(buf)) {
    for (; i < buf.length; i++)
      this.append(buf[i])
  } else if (buf instanceof BufferList) {
    // unwrap argument into individual BufferLists
    for (; i < buf._bufs.length; i++)
      this.append(buf._bufs[i])
  } else if (buf != null) {
    // coerce number arguments to strings, since Buffer(number) does
    // uninitialized memory allocation
    if (typeof buf == 'number')
      buf = buf.toString()

    this._appendBuffer(Buffer.from(buf));
  }

  return this
}


BufferList.prototype._appendBuffer = function appendBuffer (buf) {
  this._bufs.push(buf)
  this.length += buf.length
}


BufferList.prototype._write = function _write (buf, encoding, callback) {
  this._appendBuffer(buf)

  if (typeof callback == 'function')
    callback()
}


BufferList.prototype._read = function _read (size) {
  if (!this.length)
    return this.push(null)

  size = Math.min(size, this.length)
  this.push(this.slice(0, size))
  this.consume(size)
}


BufferList.prototype.end = function end (chunk) {
  DuplexStream.prototype.end.call(this, chunk)

  if (this._callback) {
    this._callback(null, this.slice())
    this._callback = null
  }
}


BufferList.prototype.get = function get (index) {
  return this.slice(index, index + 1)[0]
}


BufferList.prototype.slice = function slice (start, end) {
  if (typeof start == 'number' && start < 0)
    start += this.length
  if (typeof end == 'number' && end < 0)
    end += this.length
  return this.copy(null, 0, start, end)
}


BufferList.prototype.copy = function copy (dst, dstStart, srcStart, srcEnd) {
  if (typeof srcStart != 'number' || srcStart < 0)
    srcStart = 0
  if (typeof srcEnd != 'number' || srcEnd > this.length)
    srcEnd = this.length
  if (srcStart >= this.length)
    return dst || Buffer.alloc(0)
  if (srcEnd <= 0)
    return dst || Buffer.alloc(0)

  var copy   = !!dst
    , off    = this._offset(srcStart)
    , len    = srcEnd - srcStart
    , bytes  = len
    , bufoff = (copy && dstStart) || 0
    , start  = off[1]
    , l
    , i

  // copy/slice everything
  if (srcStart === 0 && srcEnd == this.length) {
    if (!copy) { // slice, but full concat if multiple buffers
      return this._bufs.length === 1
        ? this._bufs[0]
        : Buffer.concat(this._bufs, this.length)
    }

    // copy, need to copy individual buffers
    for (i = 0; i < this._bufs.length; i++) {
      this._bufs[i].copy(dst, bufoff)
      bufoff += this._bufs[i].length
    }

    return dst
  }

  // easy, cheap case where it's a subset of one of the buffers
  if (bytes <= this._bufs[off[0]].length - start) {
    return copy
      ? this._bufs[off[0]].copy(dst, dstStart, start, start + bytes)
      : this._bufs[off[0]].slice(start, start + bytes)
  }

  if (!copy) // a slice, we need something to copy in to
    dst = Buffer.allocUnsafe(len)

  for (i = off[0]; i < this._bufs.length; i++) {
    l = this._bufs[i].length - start

    if (bytes > l) {
      this._bufs[i].copy(dst, bufoff, start)
    } else {
      this._bufs[i].copy(dst, bufoff, start, start + bytes)
      break
    }

    bufoff += l
    bytes -= l

    if (start)
      start = 0
  }

  return dst
}

BufferList.prototype.shallowSlice = function shallowSlice (start, end) {
  start = start || 0
  end = end || this.length

  if (start < 0)
    start += this.length
  if (end < 0)
    end += this.length

  var startOffset = this._offset(start)
    , endOffset = this._offset(end)
    , buffers = this._bufs.slice(startOffset[0], endOffset[0] + 1)

  if (endOffset[1] == 0)
    buffers.pop()
  else
    buffers[buffers.length-1] = buffers[buffers.length-1].slice(0, endOffset[1])

  if (startOffset[1] != 0)
    buffers[0] = buffers[0].slice(startOffset[1])

  return new BufferList(buffers)
}

BufferList.prototype.toString = function toString (encoding, start, end) {
  return this.slice(start, end).toString(encoding)
}

BufferList.prototype.consume = function consume (bytes) {
  while (this._bufs.length) {
    if (bytes >= this._bufs[0].length) {
      bytes -= this._bufs[0].length
      this.length -= this._bufs[0].length
      this._bufs.shift()
    } else {
      this._bufs[0] = this._bufs[0].slice(bytes)
      this.length -= bytes
      break
    }
  }
  return this
}


BufferList.prototype.duplicate = function duplicate () {
  var i = 0
    , copy = new BufferList()

  for (; i < this._bufs.length; i++)
    copy.append(this._bufs[i])

  return copy
}


BufferList.prototype.destroy = function destroy () {
  this._bufs.length = 0
  this.length = 0
  this.push(null)
}


;(function () {
  var methods = {
      'readDoubleBE' : 8
    , 'readDoubleLE' : 8
    , 'readFloatBE'  : 4
    , 'readFloatLE'  : 4
    , 'readInt32BE'  : 4
    , 'readInt32LE'  : 4
    , 'readUInt32BE' : 4
    , 'readUInt32LE' : 4
    , 'readInt16BE'  : 2
    , 'readInt16LE'  : 2
    , 'readUInt16BE' : 2
    , 'readUInt16LE' : 2
    , 'readInt8'     : 1
    , 'readUInt8'    : 1
  }

  for (var m in methods) {
    (function (m) {
      BufferList.prototype[m] = function (offset) {
        return this.slice(offset, offset + methods[m])[m](0)
      }
    }(m))
  }
}())


module.exports = BufferList

},{"readable-stream/duplex":106,"safe-buffer":117,"util":137}],12:[function(require,module,exports){

},{}],13:[function(require,module,exports){
(function (Buffer){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this,require("buffer").Buffer)
},{"base64-js":10,"buffer":13,"ieee754":87}],14:[function(require,module,exports){
(function (Buffer){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.

function isArray(arg) {
  if (Array.isArray) {
    return Array.isArray(arg);
  }
  return objectToString(arg) === '[object Array]';
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = Buffer.isBuffer;

function objectToString(o) {
  return Object.prototype.toString.call(o);
}

}).call(this,{"isBuffer":require("../../is-buffer/index.js")})
},{"../../is-buffer/index.js":89}],15:[function(require,module,exports){
"use strict";

var isValue             = require("type/value/is")
  , ensureValue         = require("type/value/ensure")
  , ensurePlainFunction = require("type/plain-function/ensure")
  , copy                = require("es5-ext/object/copy")
  , normalizeOptions    = require("es5-ext/object/normalize-options")
  , map                 = require("es5-ext/object/map");

var bind = Function.prototype.bind
  , defineProperty = Object.defineProperty
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , define;

define = function (name, desc, options) {
	var value = ensureValue(desc) && ensurePlainFunction(desc.value), dgs;
	dgs = copy(desc);
	delete dgs.writable;
	delete dgs.value;
	dgs.get = function () {
		if (!options.overwriteDefinition && hasOwnProperty.call(this, name)) return value;
		desc.value = bind.call(value, options.resolveContext ? options.resolveContext(this) : this);
		defineProperty(this, name, desc);
		return this[name];
	};
	return dgs;
};

module.exports = function (props/*, options*/) {
	var options = normalizeOptions(arguments[1]);
	if (isValue(options.resolveContext)) ensurePlainFunction(options.resolveContext);
	return map(props, function (desc, name) { return define(name, desc, options); });
};

},{"es5-ext/object/copy":41,"es5-ext/object/map":49,"es5-ext/object/normalize-options":50,"type/plain-function/ensure":126,"type/value/ensure":130,"type/value/is":131}],16:[function(require,module,exports){
"use strict";

var isValue         = require("type/value/is")
  , isPlainFunction = require("type/plain-function/is")
  , assign          = require("es5-ext/object/assign")
  , normalizeOpts   = require("es5-ext/object/normalize-options")
  , contains        = require("es5-ext/string/#/contains");

var d = (module.exports = function (dscr, value/*, options*/) {
	var c, e, w, options, desc;
	if (arguments.length < 2 || typeof dscr !== "string") {
		options = value;
		value = dscr;
		dscr = null;
	} else {
		options = arguments[2];
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
		w = contains.call(dscr, "w");
	} else {
		c = w = true;
		e = false;
	}

	desc = { value: value, configurable: c, enumerable: e, writable: w };
	return !options ? desc : assign(normalizeOpts(options), desc);
});

d.gs = function (dscr, get, set/*, options*/) {
	var c, e, options, desc;
	if (typeof dscr !== "string") {
		options = set;
		set = get;
		get = dscr;
		dscr = null;
	} else {
		options = arguments[3];
	}
	if (!isValue(get)) {
		get = undefined;
	} else if (!isPlainFunction(get)) {
		options = get;
		get = set = undefined;
	} else if (!isValue(set)) {
		set = undefined;
	} else if (!isPlainFunction(set)) {
		options = set;
		set = undefined;
	}
	if (isValue(dscr)) {
		c = contains.call(dscr, "c");
		e = contains.call(dscr, "e");
	} else {
		c = true;
		e = false;
	}

	desc = { get: get, set: set, configurable: c, enumerable: e };
	return !options ? desc : assign(normalizeOpts(options), desc);
};

},{"es5-ext/object/assign":38,"es5-ext/object/normalize-options":50,"es5-ext/string/#/contains":57,"type/plain-function/is":127,"type/value/is":131}],17:[function(require,module,exports){
(function (process){
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */
function log(...args) {
	// This hackery is required for IE8/9, where
	// the `console.log` function doesn't have 'apply'
	return typeof console === 'object' &&
		console.log &&
		console.log(...args);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = require('./common')(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};

}).call(this,require('_process'))
},{"./common":18,"_process":101}],18:[function(require,module,exports){

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = require('ms');

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* Active `debug` instances.
	*/
	createDebug.instances = [];

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return match;
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.enabled = createDebug.enabled(namespace);
		debug.useColors = createDebug.useColors();
		debug.color = selectColor(namespace);
		debug.destroy = destroy;
		debug.extend = extend;
		// Debug.formatArgs = formatArgs;
		// debug.rawLog = rawLog;

		// env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		createDebug.instances.push(debug);

		return debug;
	}

	function destroy() {
		const index = createDebug.instances.indexOf(this);
		if (index !== -1) {
			createDebug.instances.splice(index, 1);
			return true;
		}
		return false;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}

		for (i = 0; i < createDebug.instances.length; i++) {
			const instance = createDebug.instances[i];
			instance.enabled = createDebug.enabled(instance.namespace);
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;

},{"ms":98}],19:[function(require,module,exports){
(function (process,Buffer){
var stream = require('readable-stream')
var eos = require('end-of-stream')
var inherits = require('inherits')
var shift = require('stream-shift')

var SIGNAL_FLUSH = (Buffer.from && Buffer.from !== Uint8Array.from)
  ? Buffer.from([0])
  : new Buffer([0])

var onuncork = function(self, fn) {
  if (self._corked) self.once('uncork', fn)
  else fn()
}

var autoDestroy = function (self, err) {
  if (self._autoDestroy) self.destroy(err)
}

var destroyer = function(self, end) {
  return function(err) {
    if (err) autoDestroy(self, err.message === 'premature close' ? null : err)
    else if (end && !self._ended) self.end()
  }
}

var end = function(ws, fn) {
  if (!ws) return fn()
  if (ws._writableState && ws._writableState.finished) return fn()
  if (ws._writableState) return ws.end(fn)
  ws.end()
  fn()
}

var toStreams2 = function(rs) {
  return new (stream.Readable)({objectMode:true, highWaterMark:16}).wrap(rs)
}

var Duplexify = function(writable, readable, opts) {
  if (!(this instanceof Duplexify)) return new Duplexify(writable, readable, opts)
  stream.Duplex.call(this, opts)

  this._writable = null
  this._readable = null
  this._readable2 = null

  this._autoDestroy = !opts || opts.autoDestroy !== false
  this._forwardDestroy = !opts || opts.destroy !== false
  this._forwardEnd = !opts || opts.end !== false
  this._corked = 1 // start corked
  this._ondrain = null
  this._drained = false
  this._forwarding = false
  this._unwrite = null
  this._unread = null
  this._ended = false

  this.destroyed = false

  if (writable) this.setWritable(writable)
  if (readable) this.setReadable(readable)
}

inherits(Duplexify, stream.Duplex)

Duplexify.obj = function(writable, readable, opts) {
  if (!opts) opts = {}
  opts.objectMode = true
  opts.highWaterMark = 16
  return new Duplexify(writable, readable, opts)
}

Duplexify.prototype.cork = function() {
  if (++this._corked === 1) this.emit('cork')
}

Duplexify.prototype.uncork = function() {
  if (this._corked && --this._corked === 0) this.emit('uncork')
}

Duplexify.prototype.setWritable = function(writable) {
  if (this._unwrite) this._unwrite()

  if (this.destroyed) {
    if (writable && writable.destroy) writable.destroy()
    return
  }

  if (writable === null || writable === false) {
    this.end()
    return
  }

  var self = this
  var unend = eos(writable, {writable:true, readable:false}, destroyer(this, this._forwardEnd))

  var ondrain = function() {
    var ondrain = self._ondrain
    self._ondrain = null
    if (ondrain) ondrain()
  }

  var clear = function() {
    self._writable.removeListener('drain', ondrain)
    unend()
  }

  if (this._unwrite) process.nextTick(ondrain) // force a drain on stream reset to avoid livelocks

  this._writable = writable
  this._writable.on('drain', ondrain)
  this._unwrite = clear

  this.uncork() // always uncork setWritable
}

Duplexify.prototype.setReadable = function(readable) {
  if (this._unread) this._unread()

  if (this.destroyed) {
    if (readable && readable.destroy) readable.destroy()
    return
  }

  if (readable === null || readable === false) {
    this.push(null)
    this.resume()
    return
  }

  var self = this
  var unend = eos(readable, {writable:false, readable:true}, destroyer(this))

  var onreadable = function() {
    self._forward()
  }

  var onend = function() {
    self.push(null)
  }

  var clear = function() {
    self._readable2.removeListener('readable', onreadable)
    self._readable2.removeListener('end', onend)
    unend()
  }

  this._drained = true
  this._readable = readable
  this._readable2 = readable._readableState ? readable : toStreams2(readable)
  this._readable2.on('readable', onreadable)
  this._readable2.on('end', onend)
  this._unread = clear

  this._forward()
}

Duplexify.prototype._read = function() {
  this._drained = true
  this._forward()
}

Duplexify.prototype._forward = function() {
  if (this._forwarding || !this._readable2 || !this._drained) return
  this._forwarding = true

  var data

  while (this._drained && (data = shift(this._readable2)) !== null) {
    if (this.destroyed) continue
    this._drained = this.push(data)
  }

  this._forwarding = false
}

Duplexify.prototype.destroy = function(err) {
  if (this.destroyed) return
  this.destroyed = true

  var self = this
  process.nextTick(function() {
    self._destroy(err)
  })
}

Duplexify.prototype._destroy = function(err) {
  if (err) {
    var ondrain = this._ondrain
    this._ondrain = null
    if (ondrain) ondrain(err)
    else this.emit('error', err)
  }

  if (this._forwardDestroy) {
    if (this._readable && this._readable.destroy) this._readable.destroy()
    if (this._writable && this._writable.destroy) this._writable.destroy()
  }

  this.emit('close')
}

Duplexify.prototype._write = function(data, enc, cb) {
  if (this.destroyed) return cb()
  if (this._corked) return onuncork(this, this._write.bind(this, data, enc, cb))
  if (data === SIGNAL_FLUSH) return this._finish(cb)
  if (!this._writable) return cb()

  if (this._writable.write(data) === false) this._ondrain = cb
  else cb()
}

Duplexify.prototype._finish = function(cb) {
  var self = this
  this.emit('preend')
  onuncork(this, function() {
    end(self._forwardEnd && self._writable, function() {
      // haxx to not emit prefinish twice
      if (self._writableState.prefinished === false) self._writableState.prefinished = true
      self.emit('prefinish')
      onuncork(self, cb)
    })
  })
}

Duplexify.prototype.end = function(data, enc, cb) {
  if (typeof data === 'function') return this.end(null, null, data)
  if (typeof enc === 'function') return this.end(data, null, enc)
  this._ended = true
  if (data) this.write(data)
  if (!this._writableState.ending) this.write(SIGNAL_FLUSH)
  return stream.Writable.prototype.end.call(this, cb)
}

module.exports = Duplexify

}).call(this,require('_process'),require("buffer").Buffer)
},{"_process":101,"buffer":13,"end-of-stream":20,"inherits":88,"readable-stream":115,"stream-shift":118}],20:[function(require,module,exports){
(function (process){
var once = require('once');

var noop = function() {};

var isRequest = function(stream) {
	return stream.setHeader && typeof stream.abort === 'function';
};

var isChildProcess = function(stream) {
	return stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3
};

var eos = function(stream, opts, callback) {
	if (typeof opts === 'function') return eos(stream, null, opts);
	if (!opts) opts = {};

	callback = once(callback || noop);

	var ws = stream._writableState;
	var rs = stream._readableState;
	var readable = opts.readable || (opts.readable !== false && stream.readable);
	var writable = opts.writable || (opts.writable !== false && stream.writable);
	var cancelled = false;

	var onlegacyfinish = function() {
		if (!stream.writable) onfinish();
	};

	var onfinish = function() {
		writable = false;
		if (!readable) callback.call(stream);
	};

	var onend = function() {
		readable = false;
		if (!writable) callback.call(stream);
	};

	var onexit = function(exitCode) {
		callback.call(stream, exitCode ? new Error('exited with error code: ' + exitCode) : null);
	};

	var onerror = function(err) {
		callback.call(stream, err);
	};

	var onclose = function() {
		process.nextTick(onclosenexttick);
	};

	var onclosenexttick = function() {
		if (cancelled) return;
		if (readable && !(rs && (rs.ended && !rs.destroyed))) return callback.call(stream, new Error('premature close'));
		if (writable && !(ws && (ws.ended && !ws.destroyed))) return callback.call(stream, new Error('premature close'));
	};

	var onrequest = function() {
		stream.req.on('finish', onfinish);
	};

	if (isRequest(stream)) {
		stream.on('complete', onfinish);
		stream.on('abort', onclose);
		if (stream.req) onrequest();
		else stream.on('request', onrequest);
	} else if (writable && !ws) { // legacy streams
		stream.on('end', onlegacyfinish);
		stream.on('close', onlegacyfinish);
	}

	if (isChildProcess(stream)) stream.on('exit', onexit);

	stream.on('end', onend);
	stream.on('finish', onfinish);
	if (opts.error !== false) stream.on('error', onerror);
	stream.on('close', onclose);

	return function() {
		cancelled = true;
		stream.removeListener('complete', onfinish);
		stream.removeListener('abort', onclose);
		stream.removeListener('request', onrequest);
		if (stream.req) stream.req.removeListener('finish', onfinish);
		stream.removeListener('end', onlegacyfinish);
		stream.removeListener('close', onlegacyfinish);
		stream.removeListener('finish', onfinish);
		stream.removeListener('exit', onexit);
		stream.removeListener('end', onend);
		stream.removeListener('error', onerror);
		stream.removeListener('close', onclose);
	};
};

module.exports = eos;

}).call(this,require('_process'))
},{"_process":101,"once":99}],21:[function(require,module,exports){
// Inspired by Google Closure:
// http://closure-library.googlecode.com/svn/docs/
// closure_goog_array_array.js.html#goog.array.clear

"use strict";

var value = require("../../object/valid-value");

module.exports = function () {
	value(this).length = 0;
	return this;
};

},{"../../object/valid-value":56}],22:[function(require,module,exports){
"use strict";

var numberIsNaN       = require("../../number/is-nan")
  , toPosInt          = require("../../number/to-pos-integer")
  , value             = require("../../object/valid-value")
  , indexOf           = Array.prototype.indexOf
  , objHasOwnProperty = Object.prototype.hasOwnProperty
  , abs               = Math.abs
  , floor             = Math.floor;

module.exports = function (searchElement/*, fromIndex*/) {
	var i, length, fromIndex, val;
	if (!numberIsNaN(searchElement)) return indexOf.apply(this, arguments);

	length = toPosInt(value(this).length);
	fromIndex = arguments[1];
	if (isNaN(fromIndex)) fromIndex = 0;
	else if (fromIndex >= 0) fromIndex = floor(fromIndex);
	else fromIndex = toPosInt(this.length) - floor(abs(fromIndex));

	for (i = fromIndex; i < length; ++i) {
		if (objHasOwnProperty.call(this, i)) {
			val = this[i];
			if (numberIsNaN(val)) return i; // Jslint: ignore
		}
	}
	return -1;
};

},{"../../number/is-nan":32,"../../number/to-pos-integer":36,"../../object/valid-value":56}],23:[function(require,module,exports){
"use strict";

module.exports = require("./is-implemented")() ? Array.from : require("./shim");

},{"./is-implemented":24,"./shim":25}],24:[function(require,module,exports){
"use strict";

module.exports = function () {
	var from = Array.from, arr, result;
	if (typeof from !== "function") return false;
	arr = ["raz", "dwa"];
	result = from(arr);
	return Boolean(result && result !== arr && result[1] === "dwa");
};

},{}],25:[function(require,module,exports){
"use strict";

var iteratorSymbol = require("es6-symbol").iterator
  , isArguments    = require("../../function/is-arguments")
  , isFunction     = require("../../function/is-function")
  , toPosInt       = require("../../number/to-pos-integer")
  , callable       = require("../../object/valid-callable")
  , validValue     = require("../../object/valid-value")
  , isValue        = require("../../object/is-value")
  , isString       = require("../../string/is-string")
  , isArray        = Array.isArray
  , call           = Function.prototype.call
  , desc           = { configurable: true, enumerable: true, writable: true, value: null }
  , defineProperty = Object.defineProperty;

// eslint-disable-next-line complexity, max-lines-per-function
module.exports = function (arrayLike/*, mapFn, thisArg*/) {
	var mapFn = arguments[1]
	  , thisArg = arguments[2]
	  , Context
	  , i
	  , j
	  , arr
	  , length
	  , code
	  , iterator
	  , result
	  , getIterator
	  , value;

	arrayLike = Object(validValue(arrayLike));

	if (isValue(mapFn)) callable(mapFn);
	if (!this || this === Array || !isFunction(this)) {
		// Result: Plain array
		if (!mapFn) {
			if (isArguments(arrayLike)) {
				// Source: Arguments
				length = arrayLike.length;
				if (length !== 1) return Array.apply(null, arrayLike);
				arr = new Array(1);
				arr[0] = arrayLike[0];
				return arr;
			}
			if (isArray(arrayLike)) {
				// Source: Array
				arr = new Array((length = arrayLike.length));
				for (i = 0; i < length; ++i) arr[i] = arrayLike[i];
				return arr;
			}
		}
		arr = [];
	} else {
		// Result: Non plain array
		Context = this;
	}

	if (!isArray(arrayLike)) {
		if ((getIterator = arrayLike[iteratorSymbol]) !== undefined) {
			// Source: Iterator
			iterator = callable(getIterator).call(arrayLike);
			if (Context) arr = new Context();
			result = iterator.next();
			i = 0;
			while (!result.done) {
				value = mapFn ? call.call(mapFn, thisArg, result.value, i) : result.value;
				if (Context) {
					desc.value = value;
					defineProperty(arr, i, desc);
				} else {
					arr[i] = value;
				}
				result = iterator.next();
				++i;
			}
			length = i;
		} else if (isString(arrayLike)) {
			// Source: String
			length = arrayLike.length;
			if (Context) arr = new Context();
			for (i = 0, j = 0; i < length; ++i) {
				value = arrayLike[i];
				if (i + 1 < length) {
					code = value.charCodeAt(0);
					// eslint-disable-next-line max-depth
					if (code >= 0xd800 && code <= 0xdbff) value += arrayLike[++i];
				}
				value = mapFn ? call.call(mapFn, thisArg, value, j) : value;
				if (Context) {
					desc.value = value;
					defineProperty(arr, j, desc);
				} else {
					arr[j] = value;
				}
				++j;
			}
			length = j;
		}
	}
	if (length === undefined) {
		// Source: array or array-like
		length = toPosInt(arrayLike.length);
		if (Context) arr = new Context(length);
		for (i = 0; i < length; ++i) {
			value = mapFn ? call.call(mapFn, thisArg, arrayLike[i], i) : arrayLike[i];
			if (Context) {
				desc.value = value;
				defineProperty(arr, i, desc);
			} else {
				arr[i] = value;
			}
		}
	}
	if (Context) {
		desc.value = null;
		arr.length = length;
	}
	return arr;
};

},{"../../function/is-arguments":26,"../../function/is-function":27,"../../number/to-pos-integer":36,"../../object/is-value":45,"../../object/valid-callable":55,"../../object/valid-value":56,"../../string/is-string":60,"es6-symbol":74}],26:[function(require,module,exports){
"use strict";

var objToString = Object.prototype.toString
  , id = objToString.call((function () { return arguments; })());

module.exports = function (value) { return objToString.call(value) === id; };

},{}],27:[function(require,module,exports){
"use strict";

var objToString = Object.prototype.toString
  , isFunctionStringTag = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);

module.exports = function (value) {
	return typeof value === "function" && isFunctionStringTag(objToString.call(value));
};

},{}],28:[function(require,module,exports){
"use strict";

// eslint-disable-next-line no-empty-function
module.exports = function () {};

},{}],29:[function(require,module,exports){
"use strict";

module.exports = require("./is-implemented")() ? Math.sign : require("./shim");

},{"./is-implemented":30,"./shim":31}],30:[function(require,module,exports){
"use strict";

module.exports = function () {
	var sign = Math.sign;
	if (typeof sign !== "function") return false;
	return sign(10) === 1 && sign(-20) === -1;
};

},{}],31:[function(require,module,exports){
"use strict";

module.exports = function (value) {
	value = Number(value);
	if (isNaN(value) || value === 0) return value;
	return value > 0 ? 1 : -1;
};

},{}],32:[function(require,module,exports){
"use strict";

module.exports = require("./is-implemented")() ? Number.isNaN : require("./shim");

},{"./is-implemented":33,"./shim":34}],33:[function(require,module,exports){
"use strict";

module.exports = function () {
	var numberIsNaN = Number.isNaN;
	if (typeof numberIsNaN !== "function") return false;
	return !numberIsNaN({}) && numberIsNaN(NaN) && !numberIsNaN(34);
};

},{}],34:[function(require,module,exports){
"use strict";

module.exports = function (value) {
	// eslint-disable-next-line no-self-compare
	return value !== value;
};

},{}],35:[function(require,module,exports){
"use strict";

var sign  = require("../math/sign")
  , abs   = Math.abs
  , floor = Math.floor;

module.exports = function (value) {
	if (isNaN(value)) return 0;
	value = Number(value);
	if (value === 0 || !isFinite(value)) return value;
	return sign(value) * floor(abs(value));
};

},{"../math/sign":29}],36:[function(require,module,exports){
"use strict";

var toInteger = require("./to-integer")
  , max       = Math.max;

module.exports = function (value) { return max(0, toInteger(value)); };

},{"./to-integer":35}],37:[function(require,module,exports){
// Internal method, used by iteration functions.
// Calls a function for each key-value pair found in object
// Optionally takes compareFn to iterate object in specific order

"use strict";

var callable                = require("./valid-callable")
  , value                   = require("./valid-value")
  , bind                    = Function.prototype.bind
  , call                    = Function.prototype.call
  , keys                    = Object.keys
  , objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;

module.exports = function (method, defVal) {
	return function (obj, cb/*, thisArg, compareFn*/) {
		var list, thisArg = arguments[2], compareFn = arguments[3];
		obj = Object(value(obj));
		callable(cb);

		list = keys(obj);
		if (compareFn) {
			list.sort(typeof compareFn === "function" ? bind.call(compareFn, obj) : undefined);
		}
		if (typeof method !== "function") method = list[method];
		return call.call(method, list, function (key, index) {
			if (!objPropertyIsEnumerable.call(obj, key)) return defVal;
			return call.call(cb, thisArg, obj[key], key, obj, index);
		});
	};
};

},{"./valid-callable":55,"./valid-value":56}],38:[function(require,module,exports){
"use strict";

module.exports = require("./is-implemented")() ? Object.assign : require("./shim");

},{"./is-implemented":39,"./shim":40}],39:[function(require,module,exports){
"use strict";

module.exports = function () {
	var assign = Object.assign, obj;
	if (typeof assign !== "function") return false;
	obj = { foo: "raz" };
	assign(obj, { bar: "dwa" }, { trzy: "trzy" });
	return obj.foo + obj.bar + obj.trzy === "razdwatrzy";
};

},{}],40:[function(require,module,exports){
"use strict";

var keys  = require("../keys")
  , value = require("../valid-value")
  , max   = Math.max;

module.exports = function (dest, src/*, …srcn*/) {
	var error, i, length = max(arguments.length, 2), assign;
	dest = Object(value(dest));
	assign = function (key) {
		try {
			dest[key] = src[key];
		} catch (e) {
			if (!error) error = e;
		}
	};
	for (i = 1; i < length; ++i) {
		src = arguments[i];
		keys(src).forEach(assign);
	}
	if (error !== undefined) throw error;
	return dest;
};

},{"../keys":46,"../valid-value":56}],41:[function(require,module,exports){
"use strict";

var aFrom  = require("../array/from")
  , assign = require("./assign")
  , value  = require("./valid-value");

module.exports = function (obj/*, propertyNames, options*/) {
	var copy = Object(value(obj)), propertyNames = arguments[1], options = Object(arguments[2]);
	if (copy !== obj && !propertyNames) return copy;
	var result = {};
	if (propertyNames) {
		aFrom(propertyNames, function (propertyName) {
			if (options.ensure || propertyName in obj) result[propertyName] = obj[propertyName];
		});
	} else {
		assign(result, obj);
	}
	return result;
};

},{"../array/from":23,"./assign":38,"./valid-value":56}],42:[function(require,module,exports){
// Workaround for http://code.google.com/p/v8/issues/detail?id=2804

"use strict";

var create = Object.create, shim;

if (!require("./set-prototype-of/is-implemented")()) {
	shim = require("./set-prototype-of/shim");
}

module.exports = (function () {
	var nullObject, polyProps, desc;
	if (!shim) return create;
	if (shim.level !== 1) return create;

	nullObject = {};
	polyProps = {};
	desc = { configurable: false, enumerable: false, writable: true, value: undefined };
	Object.getOwnPropertyNames(Object.prototype).forEach(function (name) {
		if (name === "__proto__") {
			polyProps[name] = {
				configurable: true,
				enumerable: false,
				writable: true,
				value: undefined
			};
			return;
		}
		polyProps[name] = desc;
	});
	Object.defineProperties(nullObject, polyProps);

	Object.defineProperty(shim, "nullPolyfill", {
		configurable: false,
		enumerable: false,
		writable: false,
		value: nullObject
	});

	return function (prototype, props) {
		return create(prototype === null ? nullObject : prototype, props);
	};
})();

},{"./set-prototype-of/is-implemented":53,"./set-prototype-of/shim":54}],43:[function(require,module,exports){
"use strict";

module.exports = require("./_iterate")("forEach");

},{"./_iterate":37}],44:[function(require,module,exports){
"use strict";

var isValue = require("./is-value");

var map = { function: true, object: true };

module.exports = function (value) { return (isValue(value) && map[typeof value]) || false; };

},{"./is-value":45}],45:[function(require,module,exports){
"use strict";

var _undefined = require("../function/noop")(); // Support ES3 engines

module.exports = function (val) { return val !== _undefined && val !== null; };

},{"../function/noop":28}],46:[function(require,module,exports){
"use strict";

module.exports = require("./is-implemented")() ? Object.keys : require("./shim");

},{"./is-implemented":47,"./shim":48}],47:[function(require,module,exports){
"use strict";

module.exports = function () {
	try {
		Object.keys("primitive");
		return true;
	} catch (e) {
		return false;
	}
};

},{}],48:[function(require,module,exports){
"use strict";

var isValue = require("../is-value");

var keys = Object.keys;

module.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };

},{"../is-value":45}],49:[function(require,module,exports){
"use strict";

var callable = require("./valid-callable")
  , forEach  = require("./for-each")
  , call     = Function.prototype.call;

module.exports = function (obj, cb/*, thisArg*/) {
	var result = {}, thisArg = arguments[2];
	callable(cb);
	forEach(obj, function (value, key, targetObj, index) {
		result[key] = call.call(cb, thisArg, value, key, targetObj, index);
	});
	return result;
};

},{"./for-each":43,"./valid-callable":55}],50:[function(require,module,exports){
"use strict";

var isValue = require("./is-value");

var forEach = Array.prototype.forEach, create = Object.create;

var process = function (src, obj) {
	var key;
	for (key in src) obj[key] = src[key];
};

// eslint-disable-next-line no-unused-vars
module.exports = function (opts1/*, …options*/) {
	var result = create(null);
	forEach.call(arguments, function (options) {
		if (!isValue(options)) return;
		process(Object(options), result);
	});
	return result;
};

},{"./is-value":45}],51:[function(require,module,exports){
"use strict";

var forEach = Array.prototype.forEach, create = Object.create;

// eslint-disable-next-line no-unused-vars
module.exports = function (arg/*, …args*/) {
	var set = create(null);
	forEach.call(arguments, function (name) { set[name] = true; });
	return set;
};

},{}],52:[function(require,module,exports){
"use strict";

module.exports = require("./is-implemented")() ? Object.setPrototypeOf : require("./shim");

},{"./is-implemented":53,"./shim":54}],53:[function(require,module,exports){
"use strict";

var create = Object.create, getPrototypeOf = Object.getPrototypeOf, plainObject = {};

module.exports = function (/* CustomCreate*/) {
	var setPrototypeOf = Object.setPrototypeOf, customCreate = arguments[0] || create;
	if (typeof setPrototypeOf !== "function") return false;
	return getPrototypeOf(setPrototypeOf(customCreate(null), plainObject)) === plainObject;
};

},{}],54:[function(require,module,exports){
/* eslint no-proto: "off" */

// Big thanks to @WebReflection for sorting this out
// https://gist.github.com/WebReflection/5593554

"use strict";

var isObject         = require("../is-object")
  , value            = require("../valid-value")
  , objIsPrototypeOf = Object.prototype.isPrototypeOf
  , defineProperty   = Object.defineProperty
  , nullDesc         = { configurable: true, enumerable: false, writable: true, value: undefined }
  , validate;

validate = function (obj, prototype) {
	value(obj);
	if (prototype === null || isObject(prototype)) return obj;
	throw new TypeError("Prototype must be null or an object");
};

module.exports = (function (status) {
	var fn, set;
	if (!status) return null;
	if (status.level === 2) {
		if (status.set) {
			set = status.set;
			fn = function (obj, prototype) {
				set.call(validate(obj, prototype), prototype);
				return obj;
			};
		} else {
			fn = function (obj, prototype) {
				validate(obj, prototype).__proto__ = prototype;
				return obj;
			};
		}
	} else {
		fn = function self(obj, prototype) {
			var isNullBase;
			validate(obj, prototype);
			isNullBase = objIsPrototypeOf.call(self.nullPolyfill, obj);
			if (isNullBase) delete self.nullPolyfill.__proto__;
			if (prototype === null) prototype = self.nullPolyfill;
			obj.__proto__ = prototype;
			if (isNullBase) defineProperty(self.nullPolyfill, "__proto__", nullDesc);
			return obj;
		};
	}
	return Object.defineProperty(fn, "level", {
		configurable: false,
		enumerable: false,
		writable: false,
		value: status.level
	});
})(
	(function () {
		var tmpObj1 = Object.create(null)
		  , tmpObj2 = {}
		  , set
		  , desc = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__");

		if (desc) {
			try {
				set = desc.set; // Opera crashes at this point
				set.call(tmpObj1, tmpObj2);
			} catch (ignore) {}
			if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { set: set, level: 2 };
		}

		tmpObj1.__proto__ = tmpObj2;
		if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { level: 2 };

		tmpObj1 = {};
		tmpObj1.__proto__ = tmpObj2;
		if (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { level: 1 };

		return false;
	})()
);

require("../create");

},{"../create":42,"../is-object":44,"../valid-value":56}],55:[function(require,module,exports){
"use strict";

module.exports = function (fn) {
	if (typeof fn !== "function") throw new TypeError(fn + " is not a function");
	return fn;
};

},{}],56:[function(require,module,exports){
"use strict";

var isValue = require("./is-value");

module.exports = function (value) {
	if (!isValue(value)) throw new TypeError("Cannot use null or undefined");
	return value;
};

},{"./is-value":45}],57:[function(require,module,exports){
"use strict";

module.exports = require("./is-implemented")() ? String.prototype.contains : require("./shim");

},{"./is-implemented":58,"./shim":59}],58:[function(require,module,exports){
"use strict";

var str = "razdwatrzy";

module.exports = function () {
	if (typeof str.contains !== "function") return false;
	return str.contains("dwa") === true && str.contains("foo") === false;
};

},{}],59:[function(require,module,exports){
"use strict";

var indexOf = String.prototype.indexOf;

module.exports = function (searchString/*, position*/) {
	return indexOf.call(this, searchString, arguments[1]) > -1;
};

},{}],60:[function(require,module,exports){
"use strict";

var objToString = Object.prototype.toString, id = objToString.call("");

module.exports = function (value) {
	return (
		typeof value === "string" ||
		(value &&
			typeof value === "object" &&
			(value instanceof String || objToString.call(value) === id)) ||
		false
	);
};

},{}],61:[function(require,module,exports){
"use strict";

var setPrototypeOf = require("es5-ext/object/set-prototype-of")
  , contains       = require("es5-ext/string/#/contains")
  , d              = require("d")
  , Symbol         = require("es6-symbol")
  , Iterator       = require("./");

var defineProperty = Object.defineProperty, ArrayIterator;

ArrayIterator = module.exports = function (arr, kind) {
	if (!(this instanceof ArrayIterator)) throw new TypeError("Constructor requires 'new'");
	Iterator.call(this, arr);
	if (!kind) kind = "value";
	else if (contains.call(kind, "key+value")) kind = "key+value";
	else if (contains.call(kind, "key")) kind = "key";
	else kind = "value";
	defineProperty(this, "__kind__", d("", kind));
};
if (setPrototypeOf) setPrototypeOf(ArrayIterator, Iterator);

// Internal %ArrayIteratorPrototype% doesn't expose its constructor
delete ArrayIterator.prototype.constructor;

ArrayIterator.prototype = Object.create(Iterator.prototype, {
	_resolve: d(function (i) {
		if (this.__kind__ === "value") return this.__list__[i];
		if (this.__kind__ === "key+value") return [i, this.__list__[i]];
		return i;
	})
});
defineProperty(ArrayIterator.prototype, Symbol.toStringTag, d("c", "Array Iterator"));

},{"./":64,"d":16,"es5-ext/object/set-prototype-of":52,"es5-ext/string/#/contains":57,"es6-symbol":74}],62:[function(require,module,exports){
"use strict";

var isArguments = require("es5-ext/function/is-arguments")
  , callable    = require("es5-ext/object/valid-callable")
  , isString    = require("es5-ext/string/is-string")
  , get         = require("./get");

var isArray = Array.isArray, call = Function.prototype.call, some = Array.prototype.some;

module.exports = function (iterable, cb /*, thisArg*/) {
	var mode, thisArg = arguments[2], result, doBreak, broken, i, length, char, code;
	if (isArray(iterable) || isArguments(iterable)) mode = "array";
	else if (isString(iterable)) mode = "string";
	else iterable = get(iterable);

	callable(cb);
	doBreak = function () {
		broken = true;
	};
	if (mode === "array") {
		some.call(iterable, function (value) {
			call.call(cb, thisArg, value, doBreak);
			return broken;
		});
		return;
	}
	if (mode === "string") {
		length = iterable.length;
		for (i = 0; i < length; ++i) {
			char = iterable[i];
			if (i + 1 < length) {
				code = char.charCodeAt(0);
				if (code >= 0xd800 && code <= 0xdbff) char += iterable[++i];
			}
			call.call(cb, thisArg, char, doBreak);
			if (broken) break;
		}
		return;
	}
	result = iterable.next();

	while (!result.done) {
		call.call(cb, thisArg, result.value, doBreak);
		if (broken) return;
		result = iterable.next();
	}
};

},{"./get":63,"es5-ext/function/is-arguments":26,"es5-ext/object/valid-callable":55,"es5-ext/string/is-string":60}],63:[function(require,module,exports){
"use strict";

var isArguments    = require("es5-ext/function/is-arguments")
  , isString       = require("es5-ext/string/is-string")
  , ArrayIterator  = require("./array")
  , StringIterator = require("./string")
  , iterable       = require("./valid-iterable")
  , iteratorSymbol = require("es6-symbol").iterator;

module.exports = function (obj) {
	if (typeof iterable(obj)[iteratorSymbol] === "function") return obj[iteratorSymbol]();
	if (isArguments(obj)) return new ArrayIterator(obj);
	if (isString(obj)) return new StringIterator(obj);
	return new ArrayIterator(obj);
};

},{"./array":61,"./string":66,"./valid-iterable":67,"es5-ext/function/is-arguments":26,"es5-ext/string/is-string":60,"es6-symbol":74}],64:[function(require,module,exports){
"use strict";

var clear    = require("es5-ext/array/#/clear")
  , assign   = require("es5-ext/object/assign")
  , callable = require("es5-ext/object/valid-callable")
  , value    = require("es5-ext/object/valid-value")
  , d        = require("d")
  , autoBind = require("d/auto-bind")
  , Symbol   = require("es6-symbol");

var defineProperty = Object.defineProperty, defineProperties = Object.defineProperties, Iterator;

module.exports = Iterator = function (list, context) {
	if (!(this instanceof Iterator)) throw new TypeError("Constructor requires 'new'");
	defineProperties(this, {
		__list__: d("w", value(list)),
		__context__: d("w", context),
		__nextIndex__: d("w", 0)
	});
	if (!context) return;
	callable(context.on);
	context.on("_add", this._onAdd);
	context.on("_delete", this._onDelete);
	context.on("_clear", this._onClear);
};

// Internal %IteratorPrototype% doesn't expose its constructor
delete Iterator.prototype.constructor;

defineProperties(
	Iterator.prototype,
	assign(
		{
			_next: d(function () {
				var i;
				if (!this.__list__) return undefined;
				if (this.__redo__) {
					i = this.__redo__.shift();
					if (i !== undefined) return i;
				}
				if (this.__nextIndex__ < this.__list__.length) return this.__nextIndex__++;
				this._unBind();
				return undefined;
			}),
			next: d(function () {
				return this._createResult(this._next());
			}),
			_createResult: d(function (i) {
				if (i === undefined) return { done: true, value: undefined };
				return { done: false, value: this._resolve(i) };
			}),
			_resolve: d(function (i) {
				return this.__list__[i];
			}),
			_unBind: d(function () {
				this.__list__ = null;
				delete this.__redo__;
				if (!this.__context__) return;
				this.__context__.off("_add", this._onAdd);
				this.__context__.off("_delete", this._onDelete);
				this.__context__.off("_clear", this._onClear);
				this.__context__ = null;
			}),
			toString: d(function () {
				return "[object " + (this[Symbol.toStringTag] || "Object") + "]";
			})
		},
		autoBind({
			_onAdd: d(function (index) {
				if (index >= this.__nextIndex__) return;
				++this.__nextIndex__;
				if (!this.__redo__) {
					defineProperty(this, "__redo__", d("c", [index]));
					return;
				}
				this.__redo__.forEach(function (redo, i) {
					if (redo >= index) this.__redo__[i] = ++redo;
				}, this);
				this.__redo__.push(index);
			}),
			_onDelete: d(function (index) {
				var i;
				if (index >= this.__nextIndex__) return;
				--this.__nextIndex__;
				if (!this.__redo__) return;
				i = this.__redo__.indexOf(index);
				if (i !== -1) this.__redo__.splice(i, 1);
				this.__redo__.forEach(function (redo, j) {
					if (redo > index) this.__redo__[j] = --redo;
				}, this);
			}),
			_onClear: d(function () {
				if (this.__redo__) clear.call(this.__redo__);
				this.__nextIndex__ = 0;
			})
		})
	)
);

defineProperty(
	Iterator.prototype,
	Symbol.iterator,
	d(function () {
		return this;
	})
);

},{"d":16,"d/auto-bind":15,"es5-ext/array/#/clear":21,"es5-ext/object/assign":38,"es5-ext/object/valid-callable":55,"es5-ext/object/valid-value":56,"es6-symbol":74}],65:[function(require,module,exports){
"use strict";

var isArguments = require("es5-ext/function/is-arguments")
  , isValue     = require("es5-ext/object/is-value")
  , isString    = require("es5-ext/string/is-string");

var iteratorSymbol = require("es6-symbol").iterator
  , isArray        = Array.isArray;

module.exports = function (value) {
	if (!isValue(value)) return false;
	if (isArray(value)) return true;
	if (isString(value)) return true;
	if (isArguments(value)) return true;
	return typeof value[iteratorSymbol] === "function";
};

},{"es5-ext/function/is-arguments":26,"es5-ext/object/is-value":45,"es5-ext/string/is-string":60,"es6-symbol":74}],66:[function(require,module,exports){
// Thanks @mathiasbynens
// http://mathiasbynens.be/notes/javascript-unicode#iterating-over-symbols

"use strict";

var setPrototypeOf = require("es5-ext/object/set-prototype-of")
  , d              = require("d")
  , Symbol         = require("es6-symbol")
  , Iterator       = require("./");

var defineProperty = Object.defineProperty, StringIterator;

StringIterator = module.exports = function (str) {
	if (!(this instanceof StringIterator)) throw new TypeError("Constructor requires 'new'");
	str = String(str);
	Iterator.call(this, str);
	defineProperty(this, "__length__", d("", str.length));
};
if (setPrototypeOf) setPrototypeOf(StringIterator, Iterator);

// Internal %ArrayIteratorPrototype% doesn't expose its constructor
delete StringIterator.prototype.constructor;

StringIterator.prototype = Object.create(Iterator.prototype, {
	_next: d(function () {
		if (!this.__list__) return undefined;
		if (this.__nextIndex__ < this.__length__) return this.__nextIndex__++;
		this._unBind();
		return undefined;
	}),
	_resolve: d(function (i) {
		var char = this.__list__[i], code;
		if (this.__nextIndex__ === this.__length__) return char;
		code = char.charCodeAt(0);
		if (code >= 0xd800 && code <= 0xdbff) return char + this.__list__[this.__nextIndex__++];
		return char;
	})
});
defineProperty(StringIterator.prototype, Symbol.toStringTag, d("c", "String Iterator"));

},{"./":64,"d":16,"es5-ext/object/set-prototype-of":52,"es6-symbol":74}],67:[function(require,module,exports){
"use strict";

var isIterable = require("./is-iterable");

module.exports = function (value) {
	if (!isIterable(value)) throw new TypeError(value + " is not iterable");
	return value;
};

},{"./is-iterable":65}],68:[function(require,module,exports){
'use strict';

module.exports = require('./is-implemented')() ? Map : require('./polyfill');

},{"./is-implemented":69,"./polyfill":73}],69:[function(require,module,exports){
'use strict';

module.exports = function () {
	var map, iterator, result;
	if (typeof Map !== 'function') return false;
	try {
		// WebKit doesn't support arguments and crashes
		map = new Map([['raz', 'one'], ['dwa', 'two'], ['trzy', 'three']]);
	} catch (e) {
		return false;
	}
	if (String(map) !== '[object Map]') return false;
	if (map.size !== 3) return false;
	if (typeof map.clear !== 'function') return false;
	if (typeof map.delete !== 'function') return false;
	if (typeof map.entries !== 'function') return false;
	if (typeof map.forEach !== 'function') return false;
	if (typeof map.get !== 'function') return false;
	if (typeof map.has !== 'function') return false;
	if (typeof map.keys !== 'function') return false;
	if (typeof map.set !== 'function') return false;
	if (typeof map.values !== 'function') return false;

	iterator = map.entries();
	result = iterator.next();
	if (result.done !== false) return false;
	if (!result.value) return false;
	if (result.value[0] !== 'raz') return false;
	if (result.value[1] !== 'one') return false;

	return true;
};

},{}],70:[function(require,module,exports){
// Exports true if environment provides native `Map` implementation,
// whatever that is.

'use strict';

module.exports = (function () {
	if (typeof Map === 'undefined') return false;
	return (Object.prototype.toString.call(new Map()) === '[object Map]');
}());

},{}],71:[function(require,module,exports){
'use strict';

module.exports = require('es5-ext/object/primitive-set')('key',
	'value', 'key+value');

},{"es5-ext/object/primitive-set":51}],72:[function(require,module,exports){
'use strict';

var setPrototypeOf    = require('es5-ext/object/set-prototype-of')
  , d                 = require('d')
  , Iterator          = require('es6-iterator')
  , toStringTagSymbol = require('es6-symbol').toStringTag
  , kinds             = require('./iterator-kinds')

  , defineProperties = Object.defineProperties
  , unBind = Iterator.prototype._unBind
  , MapIterator;

MapIterator = module.exports = function (map, kind) {
	if (!(this instanceof MapIterator)) return new MapIterator(map, kind);
	Iterator.call(this, map.__mapKeysData__, map);
	if (!kind || !kinds[kind]) kind = 'key+value';
	defineProperties(this, {
		__kind__: d('', kind),
		__values__: d('w', map.__mapValuesData__)
	});
};
if (setPrototypeOf) setPrototypeOf(MapIterator, Iterator);

MapIterator.prototype = Object.create(Iterator.prototype, {
	constructor: d(MapIterator),
	_resolve: d(function (i) {
		if (this.__kind__ === 'value') return this.__values__[i];
		if (this.__kind__ === 'key') return this.__list__[i];
		return [this.__list__[i], this.__values__[i]];
	}),
	_unBind: d(function () {
		this.__values__ = null;
		unBind.call(this);
	}),
	toString: d(function () { return '[object Map Iterator]'; })
});
Object.defineProperty(MapIterator.prototype, toStringTagSymbol,
	d('c', 'Map Iterator'));

},{"./iterator-kinds":71,"d":16,"es5-ext/object/set-prototype-of":52,"es6-iterator":64,"es6-symbol":74}],73:[function(require,module,exports){
'use strict';

var clear          = require('es5-ext/array/#/clear')
  , eIndexOf       = require('es5-ext/array/#/e-index-of')
  , setPrototypeOf = require('es5-ext/object/set-prototype-of')
  , callable       = require('es5-ext/object/valid-callable')
  , validValue     = require('es5-ext/object/valid-value')
  , d              = require('d')
  , ee             = require('event-emitter')
  , Symbol         = require('es6-symbol')
  , iterator       = require('es6-iterator/valid-iterable')
  , forOf          = require('es6-iterator/for-of')
  , Iterator       = require('./lib/iterator')
  , isNative       = require('./is-native-implemented')

  , call = Function.prototype.call
  , defineProperties = Object.defineProperties, getPrototypeOf = Object.getPrototypeOf
  , MapPoly;

module.exports = MapPoly = function (/*iterable*/) {
	var iterable = arguments[0], keys, values, self;
	if (!(this instanceof MapPoly)) throw new TypeError('Constructor requires \'new\'');
	if (isNative && setPrototypeOf && (Map !== MapPoly)) {
		self = setPrototypeOf(new Map(), getPrototypeOf(this));
	} else {
		self = this;
	}
	if (iterable != null) iterator(iterable);
	defineProperties(self, {
		__mapKeysData__: d('c', keys = []),
		__mapValuesData__: d('c', values = [])
	});
	if (!iterable) return self;
	forOf(iterable, function (value) {
		var key = validValue(value)[0];
		value = value[1];
		if (eIndexOf.call(keys, key) !== -1) return;
		keys.push(key);
		values.push(value);
	}, self);
	return self;
};

if (isNative) {
	if (setPrototypeOf) setPrototypeOf(MapPoly, Map);
	MapPoly.prototype = Object.create(Map.prototype, {
		constructor: d(MapPoly)
	});
}

ee(defineProperties(MapPoly.prototype, {
	clear: d(function () {
		if (!this.__mapKeysData__.length) return;
		clear.call(this.__mapKeysData__);
		clear.call(this.__mapValuesData__);
		this.emit('_clear');
	}),
	delete: d(function (key) {
		var index = eIndexOf.call(this.__mapKeysData__, key);
		if (index === -1) return false;
		this.__mapKeysData__.splice(index, 1);
		this.__mapValuesData__.splice(index, 1);
		this.emit('_delete', index, key);
		return true;
	}),
	entries: d(function () { return new Iterator(this, 'key+value'); }),
	forEach: d(function (cb/*, thisArg*/) {
		var thisArg = arguments[1], iterator, result;
		callable(cb);
		iterator = this.entries();
		result = iterator._next();
		while (result !== undefined) {
			call.call(cb, thisArg, this.__mapValuesData__[result],
				this.__mapKeysData__[result], this);
			result = iterator._next();
		}
	}),
	get: d(function (key) {
		var index = eIndexOf.call(this.__mapKeysData__, key);
		if (index === -1) return;
		return this.__mapValuesData__[index];
	}),
	has: d(function (key) {
		return (eIndexOf.call(this.__mapKeysData__, key) !== -1);
	}),
	keys: d(function () { return new Iterator(this, 'key'); }),
	set: d(function (key, value) {
		var index = eIndexOf.call(this.__mapKeysData__, key), emit;
		if (index === -1) {
			index = this.__mapKeysData__.push(key) - 1;
			emit = true;
		}
		this.__mapValuesData__[index] = value;
		if (emit) this.emit('_add', index, key);
		return this;
	}),
	size: d.gs(function () { return this.__mapKeysData__.length; }),
	values: d(function () { return new Iterator(this, 'value'); }),
	toString: d(function () { return '[object Map]'; })
}));
Object.defineProperty(MapPoly.prototype, Symbol.iterator, d(function () {
	return this.entries();
}));
Object.defineProperty(MapPoly.prototype, Symbol.toStringTag, d('c', 'Map'));

},{"./is-native-implemented":70,"./lib/iterator":72,"d":16,"es5-ext/array/#/clear":21,"es5-ext/array/#/e-index-of":22,"es5-ext/object/set-prototype-of":52,"es5-ext/object/valid-callable":55,"es5-ext/object/valid-value":56,"es6-iterator/for-of":62,"es6-iterator/valid-iterable":67,"es6-symbol":74,"event-emitter":82}],74:[function(require,module,exports){
"use strict";

module.exports = require("./is-implemented")()
	? require("ext/global-this").Symbol
	: require("./polyfill");

},{"./is-implemented":75,"./polyfill":80,"ext/global-this":85}],75:[function(require,module,exports){
"use strict";

var global     = require("ext/global-this")
  , validTypes = { object: true, symbol: true };

module.exports = function () {
	var Symbol = global.Symbol;
	var symbol;
	if (typeof Symbol !== "function") return false;
	symbol = Symbol("test symbol");
	try { String(symbol); }
	catch (e) { return false; }

	// Return 'true' also for polyfills
	if (!validTypes[typeof Symbol.iterator]) return false;
	if (!validTypes[typeof Symbol.toPrimitive]) return false;
	if (!validTypes[typeof Symbol.toStringTag]) return false;

	return true;
};

},{"ext/global-this":85}],76:[function(require,module,exports){
"use strict";

module.exports = function (value) {
	if (!value) return false;
	if (typeof value === "symbol") return true;
	if (!value.constructor) return false;
	if (value.constructor.name !== "Symbol") return false;
	return value[value.constructor.toStringTag] === "Symbol";
};

},{}],77:[function(require,module,exports){
"use strict";

var d = require("d");

var create = Object.create, defineProperty = Object.defineProperty, objPrototype = Object.prototype;

var created = create(null);
module.exports = function (desc) {
	var postfix = 0, name, ie11BugWorkaround;
	while (created[desc + (postfix || "")]) ++postfix;
	desc += postfix || "";
	created[desc] = true;
	name = "@@" + desc;
	defineProperty(
		objPrototype,
		name,
		d.gs(null, function (value) {
			// For IE11 issue see:
			// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
			//    ie11-broken-getters-on-dom-objects
			// https://github.com/medikoo/es6-symbol/issues/12
			if (ie11BugWorkaround) return;
			ie11BugWorkaround = true;
			defineProperty(this, name, d(value));
			ie11BugWorkaround = false;
		})
	);
	return name;
};

},{"d":16}],78:[function(require,module,exports){
"use strict";

var d            = require("d")
  , NativeSymbol = require("ext/global-this").Symbol;

module.exports = function (SymbolPolyfill) {
	return Object.defineProperties(SymbolPolyfill, {
		// To ensure proper interoperability with other native functions (e.g. Array.from)
		// fallback to eventual native implementation of given symbol
		hasInstance: d(
			"", (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill("hasInstance")
		),
		isConcatSpreadable: d(
			"",
			(NativeSymbol && NativeSymbol.isConcatSpreadable) ||
				SymbolPolyfill("isConcatSpreadable")
		),
		iterator: d("", (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill("iterator")),
		match: d("", (NativeSymbol && NativeSymbol.match) || SymbolPolyfill("match")),
		replace: d("", (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill("replace")),
		search: d("", (NativeSymbol && NativeSymbol.search) || SymbolPolyfill("search")),
		species: d("", (NativeSymbol && NativeSymbol.species) || SymbolPolyfill("species")),
		split: d("", (NativeSymbol && NativeSymbol.split) || SymbolPolyfill("split")),
		toPrimitive: d(
			"", (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill("toPrimitive")
		),
		toStringTag: d(
			"", (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill("toStringTag")
		),
		unscopables: d(
			"", (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill("unscopables")
		)
	});
};

},{"d":16,"ext/global-this":85}],79:[function(require,module,exports){
"use strict";

var d              = require("d")
  , validateSymbol = require("../../../validate-symbol");

var registry = Object.create(null);

module.exports = function (SymbolPolyfill) {
	return Object.defineProperties(SymbolPolyfill, {
		for: d(function (key) {
			if (registry[key]) return registry[key];
			return (registry[key] = SymbolPolyfill(String(key)));
		}),
		keyFor: d(function (symbol) {
			var key;
			validateSymbol(symbol);
			for (key in registry) {
				if (registry[key] === symbol) return key;
			}
			return undefined;
		})
	});
};

},{"../../../validate-symbol":81,"d":16}],80:[function(require,module,exports){
// ES2015 Symbol polyfill for environments that do not (or partially) support it

"use strict";

var d                    = require("d")
  , validateSymbol       = require("./validate-symbol")
  , NativeSymbol         = require("ext/global-this").Symbol
  , generateName         = require("./lib/private/generate-name")
  , setupStandardSymbols = require("./lib/private/setup/standard-symbols")
  , setupSymbolRegistry  = require("./lib/private/setup/symbol-registry");

var create = Object.create
  , defineProperties = Object.defineProperties
  , defineProperty = Object.defineProperty;

var SymbolPolyfill, HiddenSymbol, isNativeSafe;

if (typeof NativeSymbol === "function") {
	try {
		String(NativeSymbol());
		isNativeSafe = true;
	} catch (ignore) {}
} else {
	NativeSymbol = null;
}

// Internal constructor (not one exposed) for creating Symbol instances.
// This one is used to ensure that `someSymbol instanceof Symbol` always return false
HiddenSymbol = function Symbol(description) {
	if (this instanceof HiddenSymbol) throw new TypeError("Symbol is not a constructor");
	return SymbolPolyfill(description);
};

// Exposed `Symbol` constructor
// (returns instances of HiddenSymbol)
module.exports = SymbolPolyfill = function Symbol(description) {
	var symbol;
	if (this instanceof Symbol) throw new TypeError("Symbol is not a constructor");
	if (isNativeSafe) return NativeSymbol(description);
	symbol = create(HiddenSymbol.prototype);
	description = description === undefined ? "" : String(description);
	return defineProperties(symbol, {
		__description__: d("", description),
		__name__: d("", generateName(description))
	});
};

setupStandardSymbols(SymbolPolyfill);
setupSymbolRegistry(SymbolPolyfill);

// Internal tweaks for real symbol producer
defineProperties(HiddenSymbol.prototype, {
	constructor: d(SymbolPolyfill),
	toString: d("", function () { return this.__name__; })
});

// Proper implementation of methods exposed on Symbol.prototype
// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
defineProperties(SymbolPolyfill.prototype, {
	toString: d(function () { return "Symbol (" + validateSymbol(this).__description__ + ")"; }),
	valueOf: d(function () { return validateSymbol(this); })
});
defineProperty(
	SymbolPolyfill.prototype,
	SymbolPolyfill.toPrimitive,
	d("", function () {
		var symbol = validateSymbol(this);
		if (typeof symbol === "symbol") return symbol;
		return symbol.toString();
	})
);
defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d("c", "Symbol"));

// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
defineProperty(
	HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
	d("c", SymbolPolyfill.prototype[SymbolPolyfill.toStringTag])
);

// Note: It's important to define `toPrimitive` as last one, as some implementations
// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
// And that may invoke error in definition flow:
// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
defineProperty(
	HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
	d("c", SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive])
);

},{"./lib/private/generate-name":77,"./lib/private/setup/standard-symbols":78,"./lib/private/setup/symbol-registry":79,"./validate-symbol":81,"d":16,"ext/global-this":85}],81:[function(require,module,exports){
"use strict";

var isSymbol = require("./is-symbol");

module.exports = function (value) {
	if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
	return value;
};

},{"./is-symbol":76}],82:[function(require,module,exports){
'use strict';

var d        = require('d')
  , callable = require('es5-ext/object/valid-callable')

  , apply = Function.prototype.apply, call = Function.prototype.call
  , create = Object.create, defineProperty = Object.defineProperty
  , defineProperties = Object.defineProperties
  , hasOwnProperty = Object.prototype.hasOwnProperty
  , descriptor = { configurable: true, enumerable: false, writable: true }

  , on, once, off, emit, methods, descriptors, base;

on = function (type, listener) {
	var data;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) {
		data = descriptor.value = create(null);
		defineProperty(this, '__ee__', descriptor);
		descriptor.value = null;
	} else {
		data = this.__ee__;
	}
	if (!data[type]) data[type] = listener;
	else if (typeof data[type] === 'object') data[type].push(listener);
	else data[type] = [data[type], listener];

	return this;
};

once = function (type, listener) {
	var once, self;

	callable(listener);
	self = this;
	on.call(this, type, once = function () {
		off.call(self, type, once);
		apply.call(listener, this, arguments);
	});

	once.__eeOnceListener__ = listener;
	return this;
};

off = function (type, listener) {
	var data, listeners, candidate, i;

	callable(listener);

	if (!hasOwnProperty.call(this, '__ee__')) return this;
	data = this.__ee__;
	if (!data[type]) return this;
	listeners = data[type];

	if (typeof listeners === 'object') {
		for (i = 0; (candidate = listeners[i]); ++i) {
			if ((candidate === listener) ||
					(candidate.__eeOnceListener__ === listener)) {
				if (listeners.length === 2) data[type] = listeners[i ? 0 : 1];
				else listeners.splice(i, 1);
			}
		}
	} else {
		if ((listeners === listener) ||
				(listeners.__eeOnceListener__ === listener)) {
			delete data[type];
		}
	}

	return this;
};

emit = function (type) {
	var i, l, listener, listeners, args;

	if (!hasOwnProperty.call(this, '__ee__')) return;
	listeners = this.__ee__[type];
	if (!listeners) return;

	if (typeof listeners === 'object') {
		l = arguments.length;
		args = new Array(l - 1);
		for (i = 1; i < l; ++i) args[i - 1] = arguments[i];

		listeners = listeners.slice();
		for (i = 0; (listener = listeners[i]); ++i) {
			apply.call(listener, this, args);
		}
	} else {
		switch (arguments.length) {
		case 1:
			call.call(listeners, this);
			break;
		case 2:
			call.call(listeners, this, arguments[1]);
			break;
		case 3:
			call.call(listeners, this, arguments[1], arguments[2]);
			break;
		default:
			l = arguments.length;
			args = new Array(l - 1);
			for (i = 1; i < l; ++i) {
				args[i - 1] = arguments[i];
			}
			apply.call(listeners, this, args);
		}
	}
};

methods = {
	on: on,
	once: once,
	off: off,
	emit: emit
};

descriptors = {
	on: d(on),
	once: d(once),
	off: d(off),
	emit: d(emit)
};

base = defineProperties({}, descriptors);

module.exports = exports = function (o) {
	return (o == null) ? create(base) : defineProperties(Object(o), descriptors);
};
exports.methods = methods;

},{"d":16,"es5-ext/object/valid-callable":55}],83:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var objectCreate = Object.create || objectCreatePolyfill
var objectKeys = Object.keys || objectKeysPolyfill
var bind = Function.prototype.bind || functionBindPolyfill

function EventEmitter() {
  if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
    this._events = objectCreate(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

var hasDefineProperty;
try {
  var o = {};
  if (Object.defineProperty) Object.defineProperty(o, 'x', { value: 0 });
  hasDefineProperty = o.x === 0;
} catch (err) { hasDefineProperty = false }
if (hasDefineProperty) {
  Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function() {
      return defaultMaxListeners;
    },
    set: function(arg) {
      // check whether the input is a positive number (whose value is zero or
      // greater and not a NaN).
      if (typeof arg !== 'number' || arg < 0 || arg !== arg)
        throw new TypeError('"defaultMaxListeners" must be a positive number');
      defaultMaxListeners = arg;
    }
  });
} else {
  EventEmitter.defaultMaxListeners = defaultMaxListeners;
}

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || isNaN(n))
    throw new TypeError('"n" argument must be a positive number');
  this._maxListeners = n;
  return this;
};

function $getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return $getMaxListeners(this);
};

// These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.
function emitNone(handler, isFn, self) {
  if (isFn)
    handler.call(self);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self);
  }
}
function emitOne(handler, isFn, self, arg1) {
  if (isFn)
    handler.call(self, arg1);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1);
  }
}
function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn)
    handler.call(self, arg1, arg2);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2);
  }
}
function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn)
    handler.call(self, arg1, arg2, arg3);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].call(self, arg1, arg2, arg3);
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn)
    handler.apply(self, args);
  else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      listeners[i].apply(self, args);
  }
}

EventEmitter.prototype.emit = function emit(type) {
  var er, handler, len, args, i, events;
  var doError = (type === 'error');

  events = this._events;
  if (events)
    doError = (doError && events.error == null);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    if (arguments.length > 1)
      er = arguments[1];
    if (er instanceof Error) {
      throw er; // Unhandled 'error' event
    } else {
      // At least give some kind of context to the user
      var err = new Error('Unhandled "error" event. (' + er + ')');
      err.context = er;
      throw err;
    }
    return false;
  }

  handler = events[type];

  if (!handler)
    return false;

  var isFn = typeof handler === 'function';
  len = arguments.length;
  switch (len) {
      // fast cases
    case 1:
      emitNone(handler, isFn, this);
      break;
    case 2:
      emitOne(handler, isFn, this, arguments[1]);
      break;
    case 3:
      emitTwo(handler, isFn, this, arguments[1], arguments[2]);
      break;
    case 4:
      emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
      break;
      // slower
    default:
      args = new Array(len - 1);
      for (i = 1; i < len; i++)
        args[i - 1] = arguments[i];
      emitMany(handler, isFn, this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');

  events = target._events;
  if (!events) {
    events = target._events = objectCreate(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type,
          listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
          prepend ? [listener, existing] : [existing, listener];
    } else {
      // If we've already got an array, just append.
      if (prepend) {
        existing.unshift(listener);
      } else {
        existing.push(listener);
      }
    }

    // Check for listener leak
    if (!existing.warned) {
      m = $getMaxListeners(target);
      if (m && m > 0 && existing.length > m) {
        existing.warned = true;
        var w = new Error('Possible EventEmitter memory leak detected. ' +
            existing.length + ' "' + String(type) + '" listeners ' +
            'added. Use emitter.setMaxListeners() to ' +
            'increase limit.');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;
        if (typeof console === 'object' && console.warn) {
          console.warn('%s: %s', w.name, w.message);
        }
      }
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    switch (arguments.length) {
      case 0:
        return this.listener.call(this.target);
      case 1:
        return this.listener.call(this.target, arguments[0]);
      case 2:
        return this.listener.call(this.target, arguments[0], arguments[1]);
      case 3:
        return this.listener.call(this.target, arguments[0], arguments[1],
            arguments[2]);
      default:
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; ++i)
          args[i] = arguments[i];
        this.listener.apply(this.target, args);
    }
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = bind.call(onceWrapper, state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  if (typeof listener !== 'function')
    throw new TypeError('"listener" argument must be a function');
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      if (typeof listener !== 'function')
        throw new TypeError('"listener" argument must be a function');

      events = this._events;
      if (!events)
        return this;

      list = events[type];
      if (!list)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = objectCreate(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else
          spliceOne(list, position);

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (!events)
        return this;

      // not listening for removeListener, no need to emit
      if (!events.removeListener) {
        if (arguments.length === 0) {
          this._events = objectCreate(null);
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0)
            this._events = objectCreate(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = objectKeys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = objectCreate(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (!events)
    return [];

  var evlistener = events[type];
  if (!evlistener)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};

// About 1.5x faster than the two-arg version of Array#splice().
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1)
    list[i] = list[k];
  list.pop();
}

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function objectCreatePolyfill(proto) {
  var F = function() {};
  F.prototype = proto;
  return new F;
}
function objectKeysPolyfill(obj) {
  var keys = [];
  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k)) {
    keys.push(k);
  }
  return k;
}
function functionBindPolyfill(context) {
  var fn = this;
  return function () {
    return fn.apply(context, arguments);
  };
}

},{}],84:[function(require,module,exports){
var naiveFallback = function () {
	if (typeof self === "object" && self) return self;
	if (typeof window === "object" && window) return window;
	throw new Error("Unable to resolve global `this`");
};

module.exports = (function () {
	if (this) return this;

	// Unexpected strict mode (may happen if e.g. bundled into ESM module)

	// Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis
	// In all ES5+ engines global object inherits from Object.prototype
	// (if you approached one that doesn't please report)
	try {
		Object.defineProperty(Object.prototype, "__global__", {
			get: function () { return this; },
			configurable: true
		});
	} catch (error) {
		// Unfortunate case of Object.prototype being sealed (via preventExtensions, seal or freeze)
		return naiveFallback();
	}
	try {
		// Safari case (window.__global__ is resolved with global context, but __global__ does not)
		if (!__global__) return naiveFallback();
		return __global__;
	} finally {
		delete Object.prototype.__global__;
	}
})();

},{}],85:[function(require,module,exports){
"use strict";

module.exports = require("./is-implemented")() ? globalThis : require("./implementation");

},{"./implementation":84,"./is-implemented":86}],86:[function(require,module,exports){
"use strict";

module.exports = function () {
	if (typeof globalThis !== "object") return false;
	if (!globalThis) return false;
	return globalThis.Array === Array;
};

},{}],87:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],88:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}

},{}],89:[function(require,module,exports){
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}

},{}],90:[function(require,module,exports){
var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};

},{}],91:[function(require,module,exports){
'use strict'

var Buffer = require('safe-buffer').Buffer

/* Protocol - protocol constants */
var protocol = module.exports

/* Command code => mnemonic */
protocol.types = {
  0: 'reserved',
  1: 'connect',
  2: 'connack',
  3: 'publish',
  4: 'puback',
  5: 'pubrec',
  6: 'pubrel',
  7: 'pubcomp',
  8: 'subscribe',
  9: 'suback',
  10: 'unsubscribe',
  11: 'unsuback',
  12: 'pingreq',
  13: 'pingresp',
  14: 'disconnect',
  15: 'auth'
}

/* Mnemonic => Command code */
protocol.codes = {}
for (var k in protocol.types) {
  var v = protocol.types[k]
  protocol.codes[v] = k
}

/* Header */
protocol.CMD_SHIFT = 4
protocol.CMD_MASK = 0xF0
protocol.DUP_MASK = 0x08
protocol.QOS_MASK = 0x03
protocol.QOS_SHIFT = 1
protocol.RETAIN_MASK = 0x01

/* Length */
protocol.LENGTH_MASK = 0x7F
protocol.LENGTH_FIN_MASK = 0x80

/* Connack */
protocol.SESSIONPRESENT_MASK = 0x01
protocol.SESSIONPRESENT_HEADER = Buffer.from([protocol.SESSIONPRESENT_MASK])
protocol.CONNACK_HEADER = Buffer.from([protocol.codes['connack'] << protocol.CMD_SHIFT])

/* Connect */
protocol.USERNAME_MASK = 0x80
protocol.PASSWORD_MASK = 0x40
protocol.WILL_RETAIN_MASK = 0x20
protocol.WILL_QOS_MASK = 0x18
protocol.WILL_QOS_SHIFT = 3
protocol.WILL_FLAG_MASK = 0x04
protocol.CLEAN_SESSION_MASK = 0x02
protocol.CONNECT_HEADER = Buffer.from([protocol.codes['connect'] << protocol.CMD_SHIFT])

/* Properties */
protocol.properties = {
  sessionExpiryInterval: 17,
  willDelayInterval: 24,
  receiveMaximum: 33,
  maximumPacketSize: 39,
  topicAliasMaximum: 34,
  requestResponseInformation: 25,
  requestProblemInformation: 23,
  userProperties: 38,
  authenticationMethod: 21,
  authenticationData: 22,
  payloadFormatIndicator: 1,
  messageExpiryInterval: 2,
  contentType: 3,
  responseTopic: 8,
  correlationData: 9,
  maximumQoS: 36,
  retainAvailable: 37,
  assignedClientIdentifier: 18,
  reasonString: 31,
  wildcardSubscriptionAvailable: 40,
  subscriptionIdentifiersAvailable: 41,
  sharedSubscriptionAvailable: 42,
  serverKeepAlive: 19,
  responseInformation: 26,
  serverReference: 28,
  topicAlias: 35,
  subscriptionIdentifier: 11
}
protocol.propertiesCodes = {}
for (var prop in protocol.properties) {
  var id = protocol.properties[prop]
  protocol.propertiesCodes[id] = prop
}
protocol.propertiesTypes = {
  sessionExpiryInterval: 'int32',
  willDelayInterval: 'int32',
  receiveMaximum: 'int16',
  maximumPacketSize: 'int32',
  topicAliasMaximum: 'int16',
  requestResponseInformation: 'byte',
  requestProblemInformation: 'byte',
  userProperties: 'pair',
  authenticationMethod: 'string',
  authenticationData: 'binary',
  payloadFormatIndicator: 'byte',
  messageExpiryInterval: 'int32',
  contentType: 'string',
  responseTopic: 'string',
  correlationData: 'binary',
  maximumQoS: 'int8',
  retainAvailable: 'byte',
  assignedClientIdentifier: 'string',
  reasonString: 'string',
  wildcardSubscriptionAvailable: 'byte',
  subscriptionIdentifiersAvailable: 'byte',
  sharedSubscriptionAvailable: 'byte',
  serverKeepAlive: 'int16',
  responseInformation: 'string',
  serverReference: 'string',
  topicAlias: 'int16',
  subscriptionIdentifier: 'var'
}

function genHeader (type) {
  return [0, 1, 2].map(function (qos) {
    return [0, 1].map(function (dup) {
      return [0, 1].map(function (retain) {
        var buf = Buffer.alloc(1)
        buf.writeUInt8(
          protocol.codes[type] << protocol.CMD_SHIFT |
          (dup ? protocol.DUP_MASK : 0) |
          qos << protocol.QOS_SHIFT | retain, 0, true)
        return buf
      })
    })
  })
}

/* Publish */
protocol.PUBLISH_HEADER = genHeader('publish')

/* Subscribe */
protocol.SUBSCRIBE_HEADER = genHeader('subscribe')
protocol.SUBSCRIBE_OPTIONS_QOS_MASK = 0x03
protocol.SUBSCRIBE_OPTIONS_NL_MASK = 0x01
protocol.SUBSCRIBE_OPTIONS_NL_SHIFT = 2
protocol.SUBSCRIBE_OPTIONS_RAP_MASK = 0x01
protocol.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3
protocol.SUBSCRIBE_OPTIONS_RH_MASK = 0x03
protocol.SUBSCRIBE_OPTIONS_RH_SHIFT = 4
protocol.SUBSCRIBE_OPTIONS_RH = [0x00, 0x10, 0x20]
protocol.SUBSCRIBE_OPTIONS_NL = 0x04
protocol.SUBSCRIBE_OPTIONS_RAP = 0x08
protocol.SUBSCRIBE_OPTIONS_QOS = [0x00, 0x01, 0x02]

/* Unsubscribe */
protocol.UNSUBSCRIBE_HEADER = genHeader('unsubscribe')

/* Confirmations */
protocol.ACKS = {
  unsuback: genHeader('unsuback'),
  puback: genHeader('puback'),
  pubcomp: genHeader('pubcomp'),
  pubrel: genHeader('pubrel'),
  pubrec: genHeader('pubrec')
}

protocol.SUBACK_HEADER = Buffer.from([protocol.codes['suback'] << protocol.CMD_SHIFT])

/* Protocol versions */
protocol.VERSION3 = Buffer.from([3])
protocol.VERSION4 = Buffer.from([4])
protocol.VERSION5 = Buffer.from([5])

/* QoS */
protocol.QOS = [0, 1, 2].map(function (qos) {
  return Buffer.from([qos])
})

/* Empty packets */
protocol.EMPTY = {
  pingreq: Buffer.from([protocol.codes['pingreq'] << 4, 0]),
  pingresp: Buffer.from([protocol.codes['pingresp'] << 4, 0]),
  disconnect: Buffer.from([protocol.codes['disconnect'] << 4, 0])
}

},{"safe-buffer":117}],92:[function(require,module,exports){
'use strict'

var Buffer = require('safe-buffer').Buffer
var writeToStream = require('./writeToStream')
var EE = require('events').EventEmitter
var inherits = require('inherits')

function generate (packet, opts) {
  var stream = new Accumulator()
  writeToStream(packet, stream, opts)
  return stream.concat()
}

function Accumulator () {
  this._array = new Array(20)
  this._i = 0
}

inherits(Accumulator, EE)

Accumulator.prototype.write = function (chunk) {
  this._array[this._i++] = chunk
  return true
}

Accumulator.prototype.concat = function () {
  var length = 0
  var lengths = new Array(this._array.length)
  var list = this._array
  var pos = 0
  var i
  var result

  for (i = 0; i < list.length && list[i] !== undefined; i++) {
    if (typeof list[i] !== 'string') lengths[i] = list[i].length
    else lengths[i] = Buffer.byteLength(list[i])

    length += lengths[i]
  }

  result = Buffer.allocUnsafe(length)

  for (i = 0; i < list.length && list[i] !== undefined; i++) {
    if (typeof list[i] !== 'string') {
      list[i].copy(result, pos)
      pos += lengths[i]
    } else {
      result.write(list[i], pos)
      pos += lengths[i]
    }
  }

  return result
}

module.exports = generate

},{"./writeToStream":97,"events":83,"inherits":88,"safe-buffer":117}],93:[function(require,module,exports){
'use strict'

exports.parser = require('./parser')
exports.generate = require('./generate')
exports.writeToStream = require('./writeToStream')

},{"./generate":92,"./parser":96,"./writeToStream":97}],94:[function(require,module,exports){
'use strict'

var Buffer = require('safe-buffer').Buffer
var max = 65536
var cache = {}

function generateBuffer (i) {
  var buffer = Buffer.allocUnsafe(2)
  buffer.writeUInt8(i >> 8, 0)
  buffer.writeUInt8(i & 0x00FF, 0 + 1)

  return buffer
}

function generateCache () {
  for (var i = 0; i < max; i++) {
    cache[i] = generateBuffer(i)
  }
}

/**
 * calcVariableByteIntLength - calculate the variable byte integer
 * length field
 *
 * @api private
 */
function calcVariableByteIntLength (length) {
  if (length >= 0 && length < 128) return 1
  else if (length >= 128 && length < 16384) return 2
  else if (length >= 16384 && length < 2097152) return 3
  else if (length >= 2097152 && length < 268435456) return 4
  else return 0
}

function genBufVariableByteInt (num) {
  var digit = 0
  var pos = 0
  var length = calcVariableByteIntLength(num)
  var buffer = Buffer.allocUnsafe(length)

  do {
    digit = num % 128 | 0
    num = num / 128 | 0
    if (num > 0) digit = digit | 0x80

    buffer.writeUInt8(digit, pos++)
  } while (num > 0)

  return {
    data: buffer,
    length: length
  }
}

function generate4ByteBuffer (num) {
  var buffer = Buffer.allocUnsafe(4)
  buffer.writeUInt32BE(num, 0)
  return buffer
}

module.exports = {
  cache: cache,
  generateCache: generateCache,
  generateNumber: generateBuffer,
  genBufVariableByteInt: genBufVariableByteInt,
  generate4ByteBuffer: generate4ByteBuffer
}

},{"safe-buffer":117}],95:[function(require,module,exports){

function Packet () {
  this.cmd = null
  this.retain = false
  this.qos = 0
  this.dup = false
  this.length = -1
  this.topic = null
  this.payload = null
}

module.exports = Packet

},{}],96:[function(require,module,exports){
'use strict'

var bl = require('bl')
var inherits = require('inherits')
var EE = require('events').EventEmitter
var Packet = require('./packet')
var constants = require('./constants')
var debug = require('debug')('mqtt-packet:parser')

function Parser (opt) {
  if (!(this instanceof Parser)) return new Parser(opt)

  this.settings = opt || {}

  this._states = [
    '_parseHeader',
    '_parseLength',
    '_parsePayload',
    '_newPacket'
  ]

  this._resetState()
}

inherits(Parser, EE)

Parser.prototype._resetState = function () {
  debug('_resetState: resetting packet, error, _list, and _stateCounter')
  this.packet = new Packet()
  this.error = null
  this._list = bl()
  this._stateCounter = 0
}

Parser.prototype.parse = function (buf) {
  if (this.error) this._resetState()

  this._list.append(buf)
  debug('parse: current state: %s', this._states[this._stateCounter])
  while ((this.packet.length !== -1 || this._list.length > 0) &&
  this[this._states[this._stateCounter]]() &&
  !this.error) {
    this._stateCounter++
    debug('parse: state complete. _stateCounter is now: %d', this._stateCounter)
    debug('parse: packet.length: %d, buffer list length: %d', this.packet.length, this._list.length)
    if (this._stateCounter >= this._states.length) this._stateCounter = 0
  }
  debug('parse: exited while loop. packet: %d, buffer list length: %d', this.packet.length, this._list.length)
  return this._list.length
}

Parser.prototype._parseHeader = function () {
  // There is at least one byte in the buffer
  var zero = this._list.readUInt8(0)
  this.packet.cmd = constants.types[zero >> constants.CMD_SHIFT]
  this.packet.retain = (zero & constants.RETAIN_MASK) !== 0
  this.packet.qos = (zero >> constants.QOS_SHIFT) & constants.QOS_MASK
  this.packet.dup = (zero & constants.DUP_MASK) !== 0
  debug('_parseHeader: packet: %o', this.packet)

  this._list.consume(1)

  return true
}

Parser.prototype._parseLength = function () {
  // There is at least one byte in the list
  var result = this._parseVarByteNum(true)

  if (result) {
    this.packet.length = result.value
    this._list.consume(result.bytes)
  }
  debug('_parseLength %d', result.value)
  return !!result
}

Parser.prototype._parsePayload = function () {
  debug('_parsePayload: payload %O', this._list)
  var result = false

  // Do we have a payload? Do we have enough data to complete the payload?
  // PINGs have no payload
  if (this.packet.length === 0 || this._list.length >= this.packet.length) {
    this._pos = 0

    switch (this.packet.cmd) {
      case 'connect':
        this._parseConnect()
        break
      case 'connack':
        this._parseConnack()
        break
      case 'publish':
        this._parsePublish()
        break
      case 'puback':
      case 'pubrec':
      case 'pubrel':
      case 'pubcomp':
        this._parseConfirmation()
        break
      case 'subscribe':
        this._parseSubscribe()
        break
      case 'suback':
        this._parseSuback()
        break
      case 'unsubscribe':
        this._parseUnsubscribe()
        break
      case 'unsuback':
        this._parseUnsuback()
        break
      case 'pingreq':
      case 'pingresp':
        // These are empty, nothing to do
        break
      case 'disconnect':
        this._parseDisconnect()
        break
      case 'auth':
        this._parseAuth()
        break
      default:
        this._emitError(new Error('Not supported'))
    }

    result = true
  }
  debug('_parsePayload complete result: %s', result)
  return result
}

Parser.prototype._parseConnect = function () {
  debug('_parseConnect')
  var protocolId // Protocol ID
  var clientId // Client ID
  var topic // Will topic
  var payload // Will payload
  var password // Password
  var username // Username
  var flags = {}
  var packet = this.packet

  // Parse protocolId
  protocolId = this._parseString()

  if (protocolId === null) return this._emitError(new Error('Cannot parse protocolId'))
  if (protocolId !== 'MQTT' && protocolId !== 'MQIsdp') {
    return this._emitError(new Error('Invalid protocolId'))
  }

  packet.protocolId = protocolId

  // Parse constants version number
  if (this._pos >= this._list.length) return this._emitError(new Error('Packet too short'))

  packet.protocolVersion = this._list.readUInt8(this._pos)

  if (packet.protocolVersion !== 3 && packet.protocolVersion !== 4 && packet.protocolVersion !== 5) {
    return this._emitError(new Error('Invalid protocol version'))
  }

  this._pos++

  if (this._pos >= this._list.length) {
    return this._emitError(new Error('Packet too short'))
  }

  // Parse connect flags
  flags.username = (this._list.readUInt8(this._pos) & constants.USERNAME_MASK)
  flags.password = (this._list.readUInt8(this._pos) & constants.PASSWORD_MASK)
  flags.will = (this._list.readUInt8(this._pos) & constants.WILL_FLAG_MASK)

  if (flags.will) {
    packet.will = {}
    packet.will.retain = (this._list.readUInt8(this._pos) & constants.WILL_RETAIN_MASK) !== 0
    packet.will.qos = (this._list.readUInt8(this._pos) &
                          constants.WILL_QOS_MASK) >> constants.WILL_QOS_SHIFT
  }

  packet.clean = (this._list.readUInt8(this._pos) & constants.CLEAN_SESSION_MASK) !== 0
  this._pos++

  // Parse keepalive
  packet.keepalive = this._parseNum()
  if (packet.keepalive === -1) return this._emitError(new Error('Packet too short'))

  // parse properties
  if (packet.protocolVersion === 5) {
    var properties = this._parseProperties()
    if (Object.getOwnPropertyNames(properties).length) {
      packet.properties = properties
    }
  }
  // Parse clientId
  clientId = this._parseString()
  if (clientId === null) return this._emitError(new Error('Packet too short'))
  packet.clientId = clientId
  debug('_parseConnect: packet.clientId: %s', packet.clientId)

  if (flags.will) {
    if (packet.protocolVersion === 5) {
      var willProperties = this._parseProperties()
      if (Object.getOwnPropertyNames(willProperties).length) {
        packet.will.properties = willProperties
      }
    }
    // Parse will topic
    topic = this._parseString()
    if (topic === null) return this._emitError(new Error('Cannot parse will topic'))
    packet.will.topic = topic
    debug('_parseConnect: packet.will.topic: %s', packet.will.topic)

    // Parse will payload
    payload = this._parseBuffer()
    if (payload === null) return this._emitError(new Error('Cannot parse will payload'))
    packet.will.payload = payload
    debug('_parseConnect: packet.will.paylaod: %s', packet.will.payload)
  }

  // Parse username
  if (flags.username) {
    username = this._parseString()
    if (username === null) return this._emitError(new Error('Cannot parse username'))
    packet.username = username
    debug('_parseConnect: packet.username: %s', packet.username)
  }

  // Parse password
  if (flags.password) {
    password = this._parseBuffer()
    if (password === null) return this._emitError(new Error('Cannot parse password'))
    packet.password = password
  }
  // need for right parse auth packet and self set up
  this.settings = packet
  debug('_parseConnect: complete')
  return packet
}

Parser.prototype._parseConnack = function () {
  debug('_parseConnack')
  var packet = this.packet

  if (this._list.length < 2) return null

  packet.sessionPresent = !!(this._list.readUInt8(this._pos++) & constants.SESSIONPRESENT_MASK)
  if (this.settings.protocolVersion === 5) {
    packet.reasonCode = this._list.readUInt8(this._pos++)
  } else {
    packet.returnCode = this._list.readUInt8(this._pos++)
  }

  if (packet.returnCode === -1 || packet.reasonCode === -1) return this._emitError(new Error('Cannot parse return code'))
  // mqtt 5 properties
  if (this.settings.protocolVersion === 5) {
    var properties = this._parseProperties()
    if (Object.getOwnPropertyNames(properties).length) {
      packet.properties = properties
    }
  }
  debug('_parseConnack: complete')
}

Parser.prototype._parsePublish = function () {
  debug('_parsePublish')
  var packet = this.packet
  packet.topic = this._parseString()

  if (packet.topic === null) return this._emitError(new Error('Cannot parse topic'))

  // Parse messageId
  if (packet.qos > 0) if (!this._parseMessageId()) { return }

  // Properties mqtt 5
  if (this.settings.protocolVersion === 5) {
    var properties = this._parseProperties()
    if (Object.getOwnPropertyNames(properties).length) {
      packet.properties = properties
    }
  }

  packet.payload = this._list.slice(this._pos, packet.length)
  debug('_parsePublish: payload from buffer list: %o', packet.payload)
}

Parser.prototype._parseSubscribe = function () {
  debug('_parseSubscribe')
  var packet = this.packet
  var topic
  var options
  var qos
  var rh
  var rap
  var nl
  var subscription

  if (packet.qos !== 1) {
    return this._emitError(new Error('Wrong subscribe header'))
  }

  packet.subscriptions = []

  if (!this._parseMessageId()) { return }

  // Properties mqtt 5
  if (this.settings.protocolVersion === 5) {
    var properties = this._parseProperties()
    if (Object.getOwnPropertyNames(properties).length) {
      packet.properties = properties
    }
  }

  while (this._pos < packet.length) {
    // Parse topic
    topic = this._parseString()
    if (topic === null) return this._emitError(new Error('Cannot parse topic'))
    if (this._pos >= packet.length) return this._emitError(new Error('Malformed Subscribe Payload'))

    options = this._parseByte()
    qos = options & constants.SUBSCRIBE_OPTIONS_QOS_MASK
    nl = ((options >> constants.SUBSCRIBE_OPTIONS_NL_SHIFT) & constants.SUBSCRIBE_OPTIONS_NL_MASK) !== 0
    rap = ((options >> constants.SUBSCRIBE_OPTIONS_RAP_SHIFT) & constants.SUBSCRIBE_OPTIONS_RAP_MASK) !== 0
    rh = (options >> constants.SUBSCRIBE_OPTIONS_RH_SHIFT) & constants.SUBSCRIBE_OPTIONS_RH_MASK

    subscription = { topic: topic, qos: qos }

    // mqtt 5 options
    if (this.settings.protocolVersion === 5) {
      subscription.nl = nl
      subscription.rap = rap
      subscription.rh = rh
    }

    // Push pair to subscriptions
    debug('_parseSubscribe: push subscription `%s` to subscription', subscription)
    packet.subscriptions.push(subscription)
  }
}

Parser.prototype._parseSuback = function () {
  debug('_parseSuback')
  var packet = this.packet
  this.packet.granted = []

  if (!this._parseMessageId()) { return }

  // Properties mqtt 5
  if (this.settings.protocolVersion === 5) {
    var properties = this._parseProperties()
    if (Object.getOwnPropertyNames(properties).length) {
      packet.properties = properties
    }
  }

  // Parse granted QoSes
  while (this._pos < this.packet.length) {
    this.packet.granted.push(this._list.readUInt8(this._pos++))
  }
}

Parser.prototype._parseUnsubscribe = function () {
  debug('_parseUnsubscribe')
  var packet = this.packet

  packet.unsubscriptions = []

  // Parse messageId
  if (!this._parseMessageId()) { return }

  // Properties mqtt 5
  if (this.settings.protocolVersion === 5) {
    var properties = this._parseProperties()
    if (Object.getOwnPropertyNames(properties).length) {
      packet.properties = properties
    }
  }

  while (this._pos < packet.length) {
    var topic

    // Parse topic
    topic = this._parseString()
    if (topic === null) return this._emitError(new Error('Cannot parse topic'))

    // Push topic to unsubscriptions
    debug('_parseUnsubscribe: push topic `%s` to unsubscriptions', topic)
    packet.unsubscriptions.push(topic)
  }
}

Parser.prototype._parseUnsuback = function () {
  debug('_parseUnsuback')
  var packet = this.packet
  if (!this._parseMessageId()) return this._emitError(new Error('Cannot parse messageId'))
  // Properties mqtt 5
  if (this.settings.protocolVersion === 5) {
    var properties = this._parseProperties()
    if (Object.getOwnPropertyNames(properties).length) {
      packet.properties = properties
    }
    // Parse granted QoSes
    packet.granted = []
    while (this._pos < this.packet.length) {
      this.packet.granted.push(this._list.readUInt8(this._pos++))
    }
  }
}

// parse packets like puback, pubrec, pubrel, pubcomp
Parser.prototype._parseConfirmation = function () {
  debug('_parseConfirmation: packet.cmd: `%s`', this.packet.cmd)
  var packet = this.packet

  this._parseMessageId()

  if (this.settings.protocolVersion === 5) {
    if (packet.length > 2) {
      // response code
      packet.reasonCode = this._parseByte()
      debug('_parseConfirmation: packet.reasonCode `%d`', packet.reasonCode)
    }

    if (packet.length > 3) {
      // properies mqtt 5
      var properties = this._parseProperties()
      if (Object.getOwnPropertyNames(properties).length) {
        packet.properties = properties
      }
    }
  }

  return true
}

// parse disconnect packet
Parser.prototype._parseDisconnect = function () {
  var packet = this.packet
  debug('_parseDisconnect')

  if (this.settings.protocolVersion === 5) {
    // response code
    packet.reasonCode = this._parseByte()
    // properies mqtt 5
    var properties = this._parseProperties()
    if (Object.getOwnPropertyNames(properties).length) {
      packet.properties = properties
    }
  }

  debug('_parseDisconnect result: true')
  return true
}

// parse auth packet
Parser.prototype._parseAuth = function () {
  debug('_parseAuth')
  var packet = this.packet

  if (this.settings.protocolVersion !== 5) {
    return this._emitError(new Error('Not supported auth packet for this version MQTT'))
  }

  // response code
  packet.reasonCode = this._parseByte()
  // properies mqtt 5
  var properties = this._parseProperties()
  if (Object.getOwnPropertyNames(properties).length) {
    packet.properties = properties
  }

  debug('_parseAuth: result: true')
  return true
}

Parser.prototype._parseMessageId = function () {
  var packet = this.packet

  packet.messageId = this._parseNum()

  if (packet.messageId === null) {
    this._emitError(new Error('Cannot parse messageId'))
    return false
  }

  debug('_parseMessageId: packet.messageId %d', packet.messageId)
  return true
}

Parser.prototype._parseString = function (maybeBuffer) {
  var length = this._parseNum()
  var result
  var end = length + this._pos

  if (length === -1 || end > this._list.length || end > this.packet.length) return null

  result = this._list.toString('utf8', this._pos, end)
  this._pos += length
  debug('_parseString: result: %s', result)
  return result
}

Parser.prototype._parseStringPair = function () {
  debug('_parseStringPair')
  return {
    name: this._parseString(),
    value: this._parseString()
  }
}

Parser.prototype._parseBuffer = function () {
  var length = this._parseNum()
  var result
  var end = length + this._pos

  if (length === -1 || end > this._list.length || end > this.packet.length) return null

  result = this._list.slice(this._pos, end)

  this._pos += length
  debug('_parseBuffer: result: %o', result)
  return result
}

Parser.prototype._parseNum = function () {
  if (this._list.length - this._pos < 2) return -1

  var result = this._list.readUInt16BE(this._pos)
  this._pos += 2
  debug('_parseNum: result: %s', result)
  return result
}

Parser.prototype._parse4ByteNum = function () {
  if (this._list.length - this._pos < 4) return -1

  var result = this._list.readUInt32BE(this._pos)
  this._pos += 4
  debug('_parse4ByteNum: result: %s', result)
  return result
}

Parser.prototype._parseVarByteNum = function (fullInfoFlag) {
  debug('_parseVarByteNum')
  var bytes = 0
  var mul = 1
  var length = 0
  var result = true
  var current
  var padding = this._pos ? this._pos : 0

  while (bytes < 5) {
    current = this._list.readUInt8(padding + bytes++)
    length += mul * (current & constants.LENGTH_MASK)
    mul *= 0x80

    if ((current & constants.LENGTH_FIN_MASK) === 0) break
    if (this._list.length <= bytes) {
      result = false
      break
    }
  }

  if (padding) {
    this._pos += bytes
  }

  result = result
    ? fullInfoFlag ? {
      bytes: bytes,
      value: length
    } : length
    : false

  debug('_parseVarByteNum: result: %o', result)
  return result
}

Parser.prototype._parseByte = function () {
  var result = this._list.readUInt8(this._pos)
  this._pos++
  debug('_parseByte: result: %o', result)
  return result
}

Parser.prototype._parseByType = function (type) {
  debug('_parseByType: type: %s', type)
  switch (type) {
    case 'byte': {
      return this._parseByte() !== 0
    }
    case 'int8': {
      return this._parseByte()
    }
    case 'int16': {
      return this._parseNum()
    }
    case 'int32': {
      return this._parse4ByteNum()
    }
    case 'var': {
      return this._parseVarByteNum()
    }
    case 'string': {
      return this._parseString()
    }
    case 'pair': {
      return this._parseStringPair()
    }
    case 'binary': {
      return this._parseBuffer()
    }
  }
}

Parser.prototype._parseProperties = function () {
  debug('_parseProperties')
  var length = this._parseVarByteNum()
  var start = this._pos
  var end = start + length
  var result = {}
  while (this._pos < end) {
    var type = this._parseByte()
    var name = constants.propertiesCodes[type]
    if (!name) {
      this._emitError(new Error('Unknown property'))
      return false
    }
    // user properties process
    if (name === 'userProperties') {
      if (!result[name]) {
        result[name] = {}
      }
      var currentUserProperty = this._parseByType(constants.propertiesTypes[name])
      if (result[name][currentUserProperty.name]) {
        if (Array.isArray(result[name][currentUserProperty.name])) {
          result[name][currentUserProperty.name].push(currentUserProperty.value)
        } else {
          var currentValue = result[name][currentUserProperty.name]
          result[name][currentUserProperty.name] = [currentValue]
          result[name][currentUserProperty.name].push(currentUserProperty.value)
        }
      } else {
        result[name][currentUserProperty.name] = currentUserProperty.value
      }
      continue
    }
    if (result[name]) {
      if (Array.isArray(result[name])) {
        result[name].push(this._parseByType(constants.propertiesTypes[name]))
      } else {
        result[name] = [result[name]]
        result[name].push(this._parseByType(constants.propertiesTypes[name]))
      }
    } else {
      result[name] = this._parseByType(constants.propertiesTypes[name])
    }
  }
  return result
}

Parser.prototype._newPacket = function () {
  debug('_newPacket')
  if (this.packet) {
    this._list.consume(this.packet.length)
    debug('_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d', this.packet.cmd, this.packet.payload, this.packet.length)
    this.emit('packet', this.packet)
  }
  debug('_newPacket: new packet')
  this.packet = new Packet()

  this._pos = 0

  return true
}

Parser.prototype._emitError = function (err) {
  debug('_emitError')
  this.error = err
  this.emit('error', err)
}

module.exports = Parser

},{"./constants":91,"./packet":95,"bl":11,"debug":17,"events":83,"inherits":88}],97:[function(require,module,exports){
'use strict'

var protocol = require('./constants')
var Buffer = require('safe-buffer').Buffer
var empty = Buffer.allocUnsafe(0)
var zeroBuf = Buffer.from([0])
var numbers = require('./numbers')
var nextTick = require('process-nextick-args').nextTick
var debug = require('debug')('mqtt-packet:writeToStream')

var numCache = numbers.cache
var generateNumber = numbers.generateNumber
var generateCache = numbers.generateCache
var genBufVariableByteInt = numbers.genBufVariableByteInt
var generate4ByteBuffer = numbers.generate4ByteBuffer
var writeNumber = writeNumberCached
var toGenerate = true

function generate (packet, stream, opts) {
  debug('generate called')
  if (stream.cork) {
    stream.cork()
    nextTick(uncork, stream)
  }

  if (toGenerate) {
    toGenerate = false
    generateCache()
  }
  debug('generate: packet.cmd: %s', packet.cmd)
  switch (packet.cmd) {
    case 'connect':
      return connect(packet, stream, opts)
    case 'connack':
      return connack(packet, stream, opts)
    case 'publish':
      return publish(packet, stream, opts)
    case 'puback':
    case 'pubrec':
    case 'pubrel':
    case 'pubcomp':
      return confirmation(packet, stream, opts)
    case 'subscribe':
      return subscribe(packet, stream, opts)
    case 'suback':
      return suback(packet, stream, opts)
    case 'unsubscribe':
      return unsubscribe(packet, stream, opts)
    case 'unsuback':
      return unsuback(packet, stream, opts)
    case 'pingreq':
    case 'pingresp':
      return emptyPacket(packet, stream, opts)
    case 'disconnect':
      return disconnect(packet, stream, opts)
    case 'auth':
      return auth(packet, stream, opts)
    default:
      stream.emit('error', new Error('Unknown command'))
      return false
  }
}
/**
 * Controls numbers cache.
 * Set to "false" to allocate buffers on-the-flight instead of pre-generated cache
 */
Object.defineProperty(generate, 'cacheNumbers', {
  get: function () {
    return writeNumber === writeNumberCached
  },
  set: function (value) {
    if (value) {
      if (!numCache || Object.keys(numCache).length === 0) toGenerate = true
      writeNumber = writeNumberCached
    } else {
      toGenerate = false
      writeNumber = writeNumberGenerated
    }
  }
})

function uncork (stream) {
  stream.uncork()
}

function connect (packet, stream, opts) {
  var settings = packet || {}
  var protocolId = settings.protocolId || 'MQTT'
  var protocolVersion = settings.protocolVersion || 4
  var will = settings.will
  var clean = settings.clean
  var keepalive = settings.keepalive || 0
  var clientId = settings.clientId || ''
  var username = settings.username
  var password = settings.password
  /* mqtt5 new oprions */
  var properties = settings.properties

  if (clean === undefined) clean = true

  var length = 0

  // Must be a string and non-falsy
  if (!protocolId ||
     (typeof protocolId !== 'string' && !Buffer.isBuffer(protocolId))) {
    stream.emit('error', new Error('Invalid protocolId'))
    return false
  } else length += protocolId.length + 2

  // Must be 3 or 4 or 5
  if (protocolVersion !== 3 && protocolVersion !== 4 && protocolVersion !== 5) {
    stream.emit('error', new Error('Invalid protocol version'))
    return false
  } else length += 1

  // ClientId might be omitted in 3.1.1, but only if cleanSession is set to 1
  if ((typeof clientId === 'string' || Buffer.isBuffer(clientId)) &&
     (clientId || protocolVersion === 4) && (clientId || clean)) {
    length += clientId.length + 2
  } else {
    if (protocolVersion < 4) {
      stream.emit('error', new Error('clientId must be supplied before 3.1.1'))
      return false
    }
    if ((clean * 1) === 0) {
      stream.emit('error', new Error('clientId must be given if cleanSession set to 0'))
      return false
    }
  }

  // Must be a two byte number
  if (typeof keepalive !== 'number' ||
      keepalive < 0 ||
      keepalive > 65535 ||
      keepalive % 1 !== 0) {
    stream.emit('error', new Error('Invalid keepalive'))
    return false
  } else length += 2

  // Connect flags
  length += 1

  // Properties
  if (protocolVersion === 5) {
    var propertiesData = getProperties(stream, properties)
    if (!propertiesData) { return false }
    length += propertiesData.length
  }

  // If will exists...
  if (will) {
    // It must be an object
    if (typeof will !== 'object') {
      stream.emit('error', new Error('Invalid will'))
      return false
    }
    // It must have topic typeof string
    if (!will.topic || typeof will.topic !== 'string') {
      stream.emit('error', new Error('Invalid will topic'))
      return false
    } else {
      length += Buffer.byteLength(will.topic) + 2
    }

    // Payload
    length += 2 // payload length
    if (will.payload) {
      if (will.payload.length >= 0) {
        if (typeof will.payload === 'string') {
          length += Buffer.byteLength(will.payload)
        } else {
          length += will.payload.length
        }
      } else {
        stream.emit('error', new Error('Invalid will payload'))
        return false
      }
    }
    // will properties
    var willProperties = {}
    if (protocolVersion === 5) {
      willProperties = getProperties(stream, will.properties)
      if (!willProperties) { return false }
      length += willProperties.length
    }
  }

  // Username
  var providedUsername = false
  if (username != null) {
    if (isStringOrBuffer(username)) {
      providedUsername = true
      length += Buffer.byteLength(username) + 2
    } else {
      stream.emit('error', new Error('Invalid username'))
      return false
    }
  }

  // Password
  if (password != null) {
    if (!providedUsername) {
      stream.emit('error', new Error('Username is required to use password'))
      return false
    }

    if (isStringOrBuffer(password)) {
      length += byteLength(password) + 2
    } else {
      stream.emit('error', new Error('Invalid password'))
      return false
    }
  }

  // Generate header
  stream.write(protocol.CONNECT_HEADER)

  // Generate length
  writeVarByteInt(stream, length)

  // Generate protocol ID
  writeStringOrBuffer(stream, protocolId)
  stream.write(
    protocolVersion === 4
      ? protocol.VERSION4
      : protocolVersion === 5
        ? protocol.VERSION5
        : protocol.VERSION3
  )

  // Connect flags
  var flags = 0
  flags |= (username != null) ? protocol.USERNAME_MASK : 0
  flags |= (password != null) ? protocol.PASSWORD_MASK : 0
  flags |= (will && will.retain) ? protocol.WILL_RETAIN_MASK : 0
  flags |= (will && will.qos) ? will.qos << protocol.WILL_QOS_SHIFT : 0
  flags |= will ? protocol.WILL_FLAG_MASK : 0
  flags |= clean ? protocol.CLEAN_SESSION_MASK : 0

  stream.write(Buffer.from([flags]))

  // Keepalive
  writeNumber(stream, keepalive)

  // Properties
  if (protocolVersion === 5) {
    propertiesData.write()
  }

  // Client ID
  writeStringOrBuffer(stream, clientId)

  // Will
  if (will) {
    if (protocolVersion === 5) {
      willProperties.write()
    }
    writeString(stream, will.topic)
    writeStringOrBuffer(stream, will.payload)
  }

  // Username and password
  if (username != null) {
    writeStringOrBuffer(stream, username)
  }
  if (password != null) {
    writeStringOrBuffer(stream, password)
  }
  // This is a small packet that happens only once on a stream
  // We assume the stream is always free to receive more data after this
  return true
}

function connack (packet, stream, opts) {
  var version = opts ? opts.protocolVersion : 4
  var settings = packet || {}
  var rc = version === 5 ? settings.reasonCode : settings.returnCode
  var properties = settings.properties
  var length = 2 // length of rc and sessionHeader

  // Check return code
  if (typeof rc !== 'number') {
    stream.emit('error', new Error('Invalid return code'))
    return false
  }
  // mqtt5 properties
  var propertiesData = null
  if (version === 5) {
    propertiesData = getProperties(stream, properties)
    if (!propertiesData) { return false }
    length += propertiesData.length
  }

  stream.write(protocol.CONNACK_HEADER)
  // length
  writeVarByteInt(stream, length)
  stream.write(settings.sessionPresent ? protocol.SESSIONPRESENT_HEADER : zeroBuf)

  stream.write(Buffer.from([rc]))
  if (propertiesData != null) {
    propertiesData.write()
  }
  return true
}

function publish (packet, stream, opts) {
  debug('publish: packet: %o', packet)
  var version = opts ? opts.protocolVersion : 4
  var settings = packet || {}
  var qos = settings.qos || 0
  var retain = settings.retain ? protocol.RETAIN_MASK : 0
  var topic = settings.topic
  var payload = settings.payload || empty
  var id = settings.messageId
  var properties = settings.properties

  var length = 0

  // Topic must be a non-empty string or Buffer
  if (typeof topic === 'string') length += Buffer.byteLength(topic) + 2
  else if (Buffer.isBuffer(topic)) length += topic.length + 2
  else {
    stream.emit('error', new Error('Invalid topic'))
    return false
  }

  // Get the payload length
  if (!Buffer.isBuffer(payload)) length += Buffer.byteLength(payload)
  else length += payload.length

  // Message ID must a number if qos > 0
  if (qos && typeof id !== 'number') {
    stream.emit('error', new Error('Invalid messageId'))
    return false
  } else if (qos) length += 2

  // mqtt5 properties
  var propertiesData = null
  if (version === 5) {
    propertiesData = getProperties(stream, properties)
    if (!propertiesData) { return false }
    length += propertiesData.length
  }

  // Header
  stream.write(protocol.PUBLISH_HEADER[qos][settings.dup ? 1 : 0][retain ? 1 : 0])

  // Remaining length
  writeVarByteInt(stream, length)

  // Topic
  writeNumber(stream, byteLength(topic))
  stream.write(topic)

  // Message ID
  if (qos > 0) writeNumber(stream, id)

  // Properties
  if (propertiesData != null) {
    propertiesData.write()
  }

  // Payload
  debug('publish: payload: %o', payload)
  return stream.write(payload)
}

/* Puback, pubrec, pubrel and pubcomp */
function confirmation (packet, stream, opts) {
  var version = opts ? opts.protocolVersion : 4
  var settings = packet || {}
  var type = settings.cmd || 'puback'
  var id = settings.messageId
  var dup = (settings.dup && type === 'pubrel') ? protocol.DUP_MASK : 0
  var qos = 0
  var reasonCode = settings.reasonCode
  var properties = settings.properties
  var length = version === 5 ? 3 : 2

  if (type === 'pubrel') qos = 1

  // Check message ID
  if (typeof id !== 'number') {
    stream.emit('error', new Error('Invalid messageId'))
    return false
  }

  // properies mqtt 5
  var propertiesData = null
  if (version === 5) {
    // Confirm should not add empty property length with no properties (rfc 3.4.2.2.1)
    if (typeof properties === 'object') {
      propertiesData = getPropertiesByMaximumPacketSize(stream, properties, opts, length)
      if (!propertiesData) { return false }
      length += propertiesData.length
    }
  }

  // Header
  stream.write(protocol.ACKS[type][qos][dup][0])

  // Length
  writeVarByteInt(stream, length)

  // Message ID
  writeNumber(stream, id)

  // reason code in header
  if (version === 5) {
    stream.write(Buffer.from([reasonCode]))
  }

  // properies mqtt 5
  if (propertiesData !== null) {
    propertiesData.write()
  }
  return true
}

function subscribe (packet, stream, opts) {
  debug('subscribe: packet: ')
  var version = opts ? opts.protocolVersion : 4
  var settings = packet || {}
  var dup = settings.dup ? protocol.DUP_MASK : 0
  var id = settings.messageId
  var subs = settings.subscriptions
  var properties = settings.properties

  var length = 0

  // Check message ID
  if (typeof id !== 'number') {
    stream.emit('error', new Error('Invalid messageId'))
    return false
  } else length += 2

  // properies mqtt 5
  var propertiesData = null
  if (version === 5) {
    propertiesData = getProperties(stream, properties)
    if (!propertiesData) { return false }
    length += propertiesData.length
  }

  // Check subscriptions
  if (typeof subs === 'object' && subs.length) {
    for (var i = 0; i < subs.length; i += 1) {
      var itopic = subs[i].topic
      var iqos = subs[i].qos

      if (typeof itopic !== 'string') {
        stream.emit('error', new Error('Invalid subscriptions - invalid topic'))
        return false
      }
      if (typeof iqos !== 'number') {
        stream.emit('error', new Error('Invalid subscriptions - invalid qos'))
        return false
      }

      if (version === 5) {
        var nl = subs[i].nl || false
        if (typeof nl !== 'boolean') {
          stream.emit('error', new Error('Invalid subscriptions - invalid No Local'))
          return false
        }
        var rap = subs[i].rap || false
        if (typeof rap !== 'boolean') {
          stream.emit('error', new Error('Invalid subscriptions - invalid Retain as Published'))
          return false
        }
        var rh = subs[i].rh || 0
        if (typeof rh !== 'number' || rh > 2) {
          stream.emit('error', new Error('Invalid subscriptions - invalid Retain Handling'))
          return false
        }
      }

      length += Buffer.byteLength(itopic) + 2 + 1
    }
  } else {
    stream.emit('error', new Error('Invalid subscriptions'))
    return false
  }

  // Generate header
  debug('subscribe: writing to stream: %o', protocol.SUBSCRIBE_HEADER)
  stream.write(protocol.SUBSCRIBE_HEADER[1][dup ? 1 : 0][0])

  // Generate length
  writeVarByteInt(stream, length)

  // Generate message ID
  writeNumber(stream, id)

  // properies mqtt 5
  if (propertiesData !== null) {
    propertiesData.write()
  }

  var result = true

  // Generate subs
  for (var j = 0; j < subs.length; j++) {
    var sub = subs[j]
    var jtopic = sub.topic
    var jqos = sub.qos
    var jnl = +sub.nl
    var jrap = +sub.rap
    var jrh = sub.rh
    var joptions

    // Write topic string
    writeString(stream, jtopic)

    // options process
    joptions = protocol.SUBSCRIBE_OPTIONS_QOS[jqos]
    if (version === 5) {
      joptions |= jnl ? protocol.SUBSCRIBE_OPTIONS_NL : 0
      joptions |= jrap ? protocol.SUBSCRIBE_OPTIONS_RAP : 0
      joptions |= jrh ? protocol.SUBSCRIBE_OPTIONS_RH[jrh] : 0
    }
    // Write options
    result = stream.write(Buffer.from([joptions]))
  }

  return result
}

function suback (packet, stream, opts) {
  var version = opts ? opts.protocolVersion : 4
  var settings = packet || {}
  var id = settings.messageId
  var granted = settings.granted
  var properties = settings.properties
  var length = 0

  // Check message ID
  if (typeof id !== 'number') {
    stream.emit('error', new Error('Invalid messageId'))
    return false
  } else length += 2

  // Check granted qos vector
  if (typeof granted === 'object' && granted.length) {
    for (var i = 0; i < granted.length; i += 1) {
      if (typeof granted[i] !== 'number') {
        stream.emit('error', new Error('Invalid qos vector'))
        return false
      }
      length += 1
    }
  } else {
    stream.emit('error', new Error('Invalid qos vector'))
    return false
  }

  // properies mqtt 5
  var propertiesData = null
  if (version === 5) {
    propertiesData = getPropertiesByMaximumPacketSize(stream, properties, opts, length)
    if (!propertiesData) { return false }
    length += propertiesData.length
  }

  // header
  stream.write(protocol.SUBACK_HEADER)

  // Length
  writeVarByteInt(stream, length)

  // Message ID
  writeNumber(stream, id)

  // properies mqtt 5
  if (propertiesData !== null) {
    propertiesData.write()
  }

  return stream.write(Buffer.from(granted))
}

function unsubscribe (packet, stream, opts) {
  var version = opts ? opts.protocolVersion : 4
  var settings = packet || {}
  var id = settings.messageId
  var dup = settings.dup ? protocol.DUP_MASK : 0
  var unsubs = settings.unsubscriptions
  var properties = settings.properties

  var length = 0

  // Check message ID
  if (typeof id !== 'number') {
    stream.emit('error', new Error('Invalid messageId'))
    return false
  } else {
    length += 2
  }
  // Check unsubs
  if (typeof unsubs === 'object' && unsubs.length) {
    for (var i = 0; i < unsubs.length; i += 1) {
      if (typeof unsubs[i] !== 'string') {
        stream.emit('error', new Error('Invalid unsubscriptions'))
        return false
      }
      length += Buffer.byteLength(unsubs[i]) + 2
    }
  } else {
    stream.emit('error', new Error('Invalid unsubscriptions'))
    return false
  }
  // properies mqtt 5
  var propertiesData = null
  if (version === 5) {
    propertiesData = getProperties(stream, properties)
    if (!propertiesData) { return false }
    length += propertiesData.length
  }

  // Header
  stream.write(protocol.UNSUBSCRIBE_HEADER[1][dup ? 1 : 0][0])

  // Length
  writeVarByteInt(stream, length)

  // Message ID
  writeNumber(stream, id)

  // properies mqtt 5
  if (propertiesData !== null) {
    propertiesData.write()
  }

  // Unsubs
  var result = true
  for (var j = 0; j < unsubs.length; j++) {
    result = writeString(stream, unsubs[j])
  }

  return result
}

function unsuback (packet, stream, opts) {
  var version = opts ? opts.protocolVersion : 4
  var settings = packet || {}
  var id = settings.messageId
  var dup = settings.dup ? protocol.DUP_MASK : 0
  var granted = settings.granted
  var properties = settings.properties
  var type = settings.cmd
  var qos = 0

  var length = 2

  // Check message ID
  if (typeof id !== 'number') {
    stream.emit('error', new Error('Invalid messageId'))
    return false
  }

  // Check granted
  if (version === 5) {
    if (typeof granted === 'object' && granted.length) {
      for (var i = 0; i < granted.length; i += 1) {
        if (typeof granted[i] !== 'number') {
          stream.emit('error', new Error('Invalid qos vector'))
          return false
        }
        length += 1
      }
    } else {
      stream.emit('error', new Error('Invalid qos vector'))
      return false
    }
  }

  // properies mqtt 5
  var propertiesData = null
  if (version === 5) {
    propertiesData = getPropertiesByMaximumPacketSize(stream, properties, opts, length)
    if (!propertiesData) { return false }
    length += propertiesData.length
  }

  // Header
  stream.write(protocol.ACKS[type][qos][dup][0])

  // Length
  writeVarByteInt(stream, length)

  // Message ID
  writeNumber(stream, id)

  // properies mqtt 5
  if (propertiesData !== null) {
    propertiesData.write()
  }

  // payload
  if (version === 5) {
    stream.write(Buffer.from(granted))
  }
  return true
}

function emptyPacket (packet, stream, opts) {
  return stream.write(protocol.EMPTY[packet.cmd])
}

function disconnect (packet, stream, opts) {
  var version = opts ? opts.protocolVersion : 4
  var settings = packet || {}
  var reasonCode = settings.reasonCode
  var properties = settings.properties
  var length = version === 5 ? 1 : 0

  // properies mqtt 5
  var propertiesData = null
  if (version === 5) {
    propertiesData = getPropertiesByMaximumPacketSize(stream, properties, opts, length)
    if (!propertiesData) { return false }
    length += propertiesData.length
  }

  // Header
  stream.write(Buffer.from([protocol.codes['disconnect'] << 4]))

  // Length
  writeVarByteInt(stream, length)

  // reason code in header
  if (version === 5) {
    stream.write(Buffer.from([reasonCode]))
  }

  // properies mqtt 5
  if (propertiesData !== null) {
    propertiesData.write()
  }

  return true
}

function auth (packet, stream, opts) {
  var version = opts ? opts.protocolVersion : 4
  var settings = packet || {}
  var reasonCode = settings.reasonCode
  var properties = settings.properties
  var length = version === 5 ? 1 : 0

  if (version !== 5) stream.emit('error', new Error('Invalid mqtt version for auth packet'))

  // properies mqtt 5
  var propertiesData = getPropertiesByMaximumPacketSize(stream, properties, opts, length)
  if (!propertiesData) { return false }
  length += propertiesData.length

  // Header
  stream.write(Buffer.from([protocol.codes['auth'] << 4]))

  // Length
  writeVarByteInt(stream, length)

  // reason code in header
  stream.write(Buffer.from([reasonCode]))

  // properies mqtt 5
  if (propertiesData !== null) {
    propertiesData.write()
  }
  return true
}

/**
 * writeVarByteInt - write an MQTT style variable byte integer to the buffer
 *
 * @param <Buffer> buffer - destination
 * @param <Number> pos - offset
 * @param <Number> length - length (>0)
 * @returns <Number> number of bytes written
 *
 * @api private
 */

var varByteIntCache = {}
function writeVarByteInt (stream, num) {
  var buffer = varByteIntCache[num]

  if (!buffer) {
    buffer = genBufVariableByteInt(num).data
    if (num < 16384) varByteIntCache[num] = buffer
  }
  debug('writeVarByteInt: writing to stream: %o', buffer)
  stream.write(buffer)
}

/**
 * writeString - write a utf8 string to the buffer
 *
 * @param <Buffer> buffer - destination
 * @param <Number> pos - offset
 * @param <String> string - string to write
 * @return <Number> number of bytes written
 *
 * @api private
 */

function writeString (stream, string) {
  var strlen = Buffer.byteLength(string)
  writeNumber(stream, strlen)

  debug('writeString: %s', string)
  return stream.write(string, 'utf8')
}

/**
 * writeStringPair - write a utf8 string pairs to the buffer
 *
 * @param <Buffer> buffer - destination
 * @param <String> name - string name to write
 * @param <String> value - string value to write
 * @return <Number> number of bytes written
 *
 * @api private
 */
function writeStringPair (stream, name, value) {
  writeString(stream, name)
  writeString(stream, value)
}

/**
 * writeNumber - write a two byte number to the buffer
 *
 * @param <Buffer> buffer - destination
 * @param <Number> pos - offset
 * @param <String> number - number to write
 * @return <Number> number of bytes written
 *
 * @api private
 */
function writeNumberCached (stream, number) {
  debug('writeNumberCached: number: %d', number)
  debug('writeNumberCached: %o', numCache[number])
  return stream.write(numCache[number])
}
function writeNumberGenerated (stream, number) {
  var generatedNumber = generateNumber(number)
  debug('writeNumberGenerated: %o', generatedNumber)
  return stream.write(generatedNumber)
}
function write4ByteNumber (stream, number) {
  var generated4ByteBuffer = generate4ByteBuffer(number)
  debug('write4ByteNumber: %o', generated4ByteBuffer)
  return stream.write(generated4ByteBuffer)
}
/**
 * writeStringOrBuffer - write a String or Buffer with the its length prefix
 *
 * @param <Buffer> buffer - destination
 * @param <Number> pos - offset
 * @param <String> toWrite - String or Buffer
 * @return <Number> number of bytes written
 */
function writeStringOrBuffer (stream, toWrite) {
  if (typeof toWrite === 'string') {
    writeString(stream, toWrite)
  } else if (toWrite) {
    writeNumber(stream, toWrite.length)
    stream.write(toWrite)
  } else writeNumber(stream, 0)
}

function getProperties (stream, properties) {
  /* connect properties */
  if (typeof properties !== 'object' || properties.length != null) {
    return {
      length: 1,
      write: function () {
        writeProperties(stream, {}, 0)
      }
    }
  }
  var propertiesLength = 0
  function getLengthProperty (name, value) {
    var type = protocol.propertiesTypes[name]
    var length = 0
    switch (type) {
      case 'byte': {
        if (typeof value !== 'boolean') {
          stream.emit('error', new Error('Invalid ' + name + ': ' + value))
          return false
        }
        length += 1 + 1
        break
      }
      case 'int8': {
        if (typeof value !== 'number' || value < 0 || value > 0xff) {
          stream.emit('error', new Error('Invalid ' + name + ': ' + value))
          return false
        }
        length += 1 + 1
        break
      }
      case 'binary': {
        if (value && value === null) {
          stream.emit('error', new Error('Invalid ' + name + ': ' + value))
          return false
        }
        length += 1 + Buffer.byteLength(value) + 2
        break
      }
      case 'int16': {
        if (typeof value !== 'number' || value < 0 || value > 0xffff) {
          stream.emit('error', new Error('Invalid ' + name + ': ' + value))
          return false
        }
        length += 1 + 2
        break
      }
      case 'int32': {
        if (typeof value !== 'number' || value < 0 || value > 0xffffffff) {
          stream.emit('error', new Error('Invalid ' + name + ': ' + value))
          return false
        }
        length += 1 + 4
        break
      }
      case 'var': {
        if (typeof value !== 'number' || value < 0 || value > 0xffffffff) {
          stream.emit('error', new Error('Invalid ' + name + ': ' + value))
          return false
        }
        length += 1 + genBufVariableByteInt(value).length
        break
      }
      case 'string': {
        if (typeof value !== 'string') {
          stream.emit('error', new Error('Invalid ' + name + ': ' + value))
          return false
        }
        length += 1 + 2 + Buffer.byteLength(value.toString())
        break
      }
      case 'pair': {
        if (typeof value !== 'object') {
          stream.emit('error', new Error('Invalid ' + name + ': ' + value))
          return false
        }
        length += Object.getOwnPropertyNames(value).reduce(function (result, name) {
          var currentValue = value[name]
          if (Array.isArray(currentValue)) {
            result += currentValue.reduce(function (currentLength, value) {
              currentLength += 1 + 2 + Buffer.byteLength(name.toString()) + 2 + Buffer.byteLength(value.toString())
              return currentLength
            }, 0)
          } else {
            result += 1 + 2 + Buffer.byteLength(name.toString()) + 2 + Buffer.byteLength(value[name].toString())
          }
          return result
        }, 0)
        break
      }
      default: {
        stream.emit('error', new Error('Invalid property ' + name + ': ' + value))
        return false
      }
    }
    return length
  }
  if (properties) {
    for (var propName in properties) {
      var propLength = 0
      var propValueLength = 0
      var propValue = properties[propName]
      if (Array.isArray(propValue)) {
        for (var valueIndex = 0; valueIndex < propValue.length; valueIndex++) {
          propValueLength = getLengthProperty(propName, propValue[valueIndex])
          if (!propValueLength) { return false }
          propLength += propValueLength
        }
      } else {
        propValueLength = getLengthProperty(propName, propValue)
        if (!propValueLength) { return false }
        propLength = propValueLength
      }
      if (!propLength) return false
      propertiesLength += propLength
    }
  }
  var propertiesLengthLength = genBufVariableByteInt(propertiesLength).length

  return {
    length: propertiesLengthLength + propertiesLength,
    write: function () {
      writeProperties(stream, properties, propertiesLength)
    }
  }
}

function getPropertiesByMaximumPacketSize (stream, properties, opts, length) {
  var mayEmptyProps = ['reasonString', 'userProperties']
  var maximumPacketSize = opts && opts.properties && opts.properties.maximumPacketSize ? opts.properties.maximumPacketSize : 0

  var propertiesData = getProperties(stream, properties)
  if (maximumPacketSize) {
    while (length + propertiesData.length > maximumPacketSize) {
      var currentMayEmptyProp = mayEmptyProps.shift()
      if (currentMayEmptyProp && properties[currentMayEmptyProp]) {
        delete properties[currentMayEmptyProp]
        propertiesData = getProperties(stream, properties)
      } else {
        return false
      }
    }
  }
  return propertiesData
}

function writeProperty (stream, propName, value) {
  var type = protocol.propertiesTypes[propName]
  switch (type) {
    case 'byte': {
      stream.write(Buffer.from([protocol.properties[propName]]))
      stream.write(Buffer.from([+value]))
      break
    }
    case 'int8': {
      stream.write(Buffer.from([protocol.properties[propName]]))
      stream.write(Buffer.from([value]))
      break
    }
    case 'binary': {
      stream.write(Buffer.from([protocol.properties[propName]]))
      writeStringOrBuffer(stream, value)
      break
    }
    case 'int16': {
      stream.write(Buffer.from([protocol.properties[propName]]))
      writeNumber(stream, value)
      break
    }
    case 'int32': {
      stream.write(Buffer.from([protocol.properties[propName]]))
      write4ByteNumber(stream, value)
      break
    }
    case 'var': {
      stream.write(Buffer.from([protocol.properties[propName]]))
      writeVarByteInt(stream, value)
      break
    }
    case 'string': {
      stream.write(Buffer.from([protocol.properties[propName]]))
      writeString(stream, value)
      break
    }
    case 'pair': {
      Object.getOwnPropertyNames(value).forEach(function (name) {
        var currentValue = value[name]
        if (Array.isArray(currentValue)) {
          currentValue.forEach(function (value) {
            stream.write(Buffer.from([protocol.properties[propName]]))
            writeStringPair(stream, name.toString(), value.toString())
          })
        } else {
          stream.write(Buffer.from([protocol.properties[propName]]))
          writeStringPair(stream, name.toString(), currentValue.toString())
        }
      })
      break
    }
    default: {
      stream.emit('error', new Error('Invalid property ' + propName + ' value: ' + value))
      return false
    }
  }
}

function writeProperties (stream, properties, propertiesLength) {
  /* write properties to stream */
  writeVarByteInt(stream, propertiesLength)
  for (var propName in properties) {
    if (properties.hasOwnProperty(propName) && properties[propName] !== null) {
      var value = properties[propName]
      if (Array.isArray(value)) {
        for (var valueIndex = 0; valueIndex < value.length; valueIndex++) {
          writeProperty(stream, propName, value[valueIndex])
        }
      } else {
        writeProperty(stream, propName, value)
      }
    }
  }
}

function byteLength (bufOrString) {
  if (!bufOrString) return 0
  else if (bufOrString instanceof Buffer) return bufOrString.length
  else return Buffer.byteLength(bufOrString)
}

function isStringOrBuffer (field) {
  return typeof field === 'string' || field instanceof Buffer
}

module.exports = generate

},{"./constants":91,"./numbers":94,"debug":17,"process-nextick-args":100,"safe-buffer":117}],98:[function(require,module,exports){
/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

},{}],99:[function(require,module,exports){
var wrappy = require('wrappy')
module.exports = wrappy(once)
module.exports.strict = wrappy(onceStrict)

once.proto = once(function () {
  Object.defineProperty(Function.prototype, 'once', {
    value: function () {
      return once(this)
    },
    configurable: true
  })

  Object.defineProperty(Function.prototype, 'onceStrict', {
    value: function () {
      return onceStrict(this)
    },
    configurable: true
  })
})

function once (fn) {
  var f = function () {
    if (f.called) return f.value
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  f.called = false
  return f
}

function onceStrict (fn) {
  var f = function () {
    if (f.called)
      throw new Error(f.onceError)
    f.called = true
    return f.value = fn.apply(this, arguments)
  }
  var name = fn.name || 'Function wrapped with `once`'
  f.onceError = name + " shouldn't be called more than once"
  f.called = false
  return f
}

},{"wrappy":138}],100:[function(require,module,exports){
(function (process){
'use strict';

if (typeof process === 'undefined' ||
    !process.version ||
    process.version.indexOf('v0.') === 0 ||
    process.version.indexOf('v1.') === 0 && process.version.indexOf('v1.8.') !== 0) {
  module.exports = { nextTick: nextTick };
} else {
  module.exports = process
}

function nextTick(fn, arg1, arg2, arg3) {
  if (typeof fn !== 'function') {
    throw new TypeError('"callback" argument must be a function');
  }
  var len = arguments.length;
  var args, i;
  switch (len) {
  case 0:
  case 1:
    return process.nextTick(fn);
  case 2:
    return process.nextTick(function afterTickOne() {
      fn.call(null, arg1);
    });
  case 3:
    return process.nextTick(function afterTickTwo() {
      fn.call(null, arg1, arg2);
    });
  case 4:
    return process.nextTick(function afterTickThree() {
      fn.call(null, arg1, arg2, arg3);
    });
  default:
    args = new Array(len - 1);
    i = 0;
    while (i < args.length) {
      args[i++] = arguments[i];
    }
    return process.nextTick(function afterTick() {
      fn.apply(null, args);
    });
  }
}


}).call(this,require('_process'))
},{"_process":101}],101:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],102:[function(require,module,exports){
(function (global){
/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define('punycode', function() {
			return punycode;
		});
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}

}(this));

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],103:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],104:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],105:[function(require,module,exports){
'use strict';

exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":103,"./encode":104}],106:[function(require,module,exports){
module.exports = require('./lib/_stream_duplex.js');

},{"./lib/_stream_duplex.js":107}],107:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a duplex stream is just a stream that is both readable and writable.
// Since JS doesn't have multiple prototypal inheritance, this class
// prototypally inherits from Readable, and then parasitically from
// Writable.

'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

/*<replacement>*/
var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
};
/*</replacement>*/

module.exports = Duplex;

/*<replacement>*/
var util = Object.create(require('core-util-is'));
util.inherits = require('inherits');
/*</replacement>*/

var Readable = require('./_stream_readable');
var Writable = require('./_stream_writable');

util.inherits(Duplex, Readable);

{
  // avoid scope creep, the keys array can then be collected
  var keys = objectKeys(Writable.prototype);
  for (var v = 0; v < keys.length; v++) {
    var method = keys[v];
    if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
  }
}

function Duplex(options) {
  if (!(this instanceof Duplex)) return new Duplex(options);

  Readable.call(this, options);
  Writable.call(this, options);

  if (options && options.readable === false) this.readable = false;

  if (options && options.writable === false) this.writable = false;

  this.allowHalfOpen = true;
  if (options && options.allowHalfOpen === false) this.allowHalfOpen = false;

  this.once('end', onend);
}

Object.defineProperty(Duplex.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// the no-half-open enforcer
function onend() {
  // if we allow half-open state, or if the writable side ended,
  // then we're ok.
  if (this.allowHalfOpen || this._writableState.ended) return;

  // no more data can be written.
  // But allow more writes to happen in this tick.
  pna.nextTick(onEndNT, this);
}

function onEndNT(self) {
  self.end();
}

Object.defineProperty(Duplex.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined || this._writableState === undefined) {
      return false;
    }
    return this._readableState.destroyed && this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (this._readableState === undefined || this._writableState === undefined) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
    this._writableState.destroyed = value;
  }
});

Duplex.prototype._destroy = function (err, cb) {
  this.push(null);
  this.end();

  pna.nextTick(cb, err);
};
},{"./_stream_readable":109,"./_stream_writable":111,"core-util-is":14,"inherits":88,"process-nextick-args":100}],108:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a passthrough stream.
// basically just the most minimal sort of Transform stream.
// Every written chunk gets output as-is.

'use strict';

module.exports = PassThrough;

var Transform = require('./_stream_transform');

/*<replacement>*/
var util = Object.create(require('core-util-is'));
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(PassThrough, Transform);

function PassThrough(options) {
  if (!(this instanceof PassThrough)) return new PassThrough(options);

  Transform.call(this, options);
}

PassThrough.prototype._transform = function (chunk, encoding, cb) {
  cb(null, chunk);
};
},{"./_stream_transform":110,"core-util-is":14,"inherits":88}],109:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

module.exports = Readable;

/*<replacement>*/
var isArray = require('isarray');
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Readable.ReadableState = ReadableState;

/*<replacement>*/
var EE = require('events').EventEmitter;

var EElistenerCount = function (emitter, type) {
  return emitter.listeners(type).length;
};
/*</replacement>*/

/*<replacement>*/
var Stream = require('./internal/streams/stream');
/*</replacement>*/

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

/*<replacement>*/
var util = Object.create(require('core-util-is'));
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var debugUtil = require('util');
var debug = void 0;
if (debugUtil && debugUtil.debuglog) {
  debug = debugUtil.debuglog('stream');
} else {
  debug = function () {};
}
/*</replacement>*/

var BufferList = require('./internal/streams/BufferList');
var destroyImpl = require('./internal/streams/destroy');
var StringDecoder;

util.inherits(Readable, Stream);

var kProxyEvents = ['error', 'close', 'destroy', 'pause', 'resume'];

function prependListener(emitter, event, fn) {
  // Sadly this is not cacheable as some libraries bundle their own
  // event emitter implementation with them.
  if (typeof emitter.prependListener === 'function') return emitter.prependListener(event, fn);

  // This is a hack to make sure that our error handler is attached before any
  // userland ones.  NEVER DO THIS. This is here only because this code needs
  // to continue to work with older versions of Node.js that do not include
  // the prependListener() method. The goal is to eventually remove this hack.
  if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);else emitter._events[event] = [fn, emitter._events[event]];
}

function ReadableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag. Used to make read(n) ignore n and to
  // make all the buffer merging and length checks go away
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.readableObjectMode;

  // the point at which it stops calling _read() to fill the buffer
  // Note: 0 is a valid value, means "don't call _read preemptively ever"
  var hwm = options.highWaterMark;
  var readableHwm = options.readableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // A linked list is used to store data chunks instead of an array because the
  // linked list can remove elements from the beginning faster than
  // array.shift()
  this.buffer = new BufferList();
  this.length = 0;
  this.pipes = null;
  this.pipesCount = 0;
  this.flowing = null;
  this.ended = false;
  this.endEmitted = false;
  this.reading = false;

  // a flag to be able to tell if the event 'readable'/'data' is emitted
  // immediately, or on a later tick.  We set this to true at first, because
  // any actions that shouldn't happen until "later" should generally also
  // not happen before the first read call.
  this.sync = true;

  // whenever we return null, then we set a flag to say
  // that we're awaiting a 'readable' event emission.
  this.needReadable = false;
  this.emittedReadable = false;
  this.readableListening = false;
  this.resumeScheduled = false;

  // has it been destroyed
  this.destroyed = false;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // the number of writers that are awaiting a drain event in .pipe()s
  this.awaitDrain = 0;

  // if true, a maybeReadMore has been scheduled
  this.readingMore = false;

  this.decoder = null;
  this.encoding = null;
  if (options.encoding) {
    if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
    this.decoder = new StringDecoder(options.encoding);
    this.encoding = options.encoding;
  }
}

function Readable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  if (!(this instanceof Readable)) return new Readable(options);

  this._readableState = new ReadableState(options, this);

  // legacy
  this.readable = true;

  if (options) {
    if (typeof options.read === 'function') this._read = options.read;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;
  }

  Stream.call(this);
}

Object.defineProperty(Readable.prototype, 'destroyed', {
  get: function () {
    if (this._readableState === undefined) {
      return false;
    }
    return this._readableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._readableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._readableState.destroyed = value;
  }
});

Readable.prototype.destroy = destroyImpl.destroy;
Readable.prototype._undestroy = destroyImpl.undestroy;
Readable.prototype._destroy = function (err, cb) {
  this.push(null);
  cb(err);
};

// Manually shove something into the read() buffer.
// This returns true if the highWaterMark has not been hit yet,
// similar to how Writable.write() returns true if you should
// write() some more.
Readable.prototype.push = function (chunk, encoding) {
  var state = this._readableState;
  var skipChunkCheck;

  if (!state.objectMode) {
    if (typeof chunk === 'string') {
      encoding = encoding || state.defaultEncoding;
      if (encoding !== state.encoding) {
        chunk = Buffer.from(chunk, encoding);
        encoding = '';
      }
      skipChunkCheck = true;
    }
  } else {
    skipChunkCheck = true;
  }

  return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
};

// Unshift should *always* be something directly out of read()
Readable.prototype.unshift = function (chunk) {
  return readableAddChunk(this, chunk, null, true, false);
};

function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
  var state = stream._readableState;
  if (chunk === null) {
    state.reading = false;
    onEofChunk(stream, state);
  } else {
    var er;
    if (!skipChunkCheck) er = chunkInvalid(state, chunk);
    if (er) {
      stream.emit('error', er);
    } else if (state.objectMode || chunk && chunk.length > 0) {
      if (typeof chunk !== 'string' && !state.objectMode && Object.getPrototypeOf(chunk) !== Buffer.prototype) {
        chunk = _uint8ArrayToBuffer(chunk);
      }

      if (addToFront) {
        if (state.endEmitted) stream.emit('error', new Error('stream.unshift() after end event'));else addChunk(stream, state, chunk, true);
      } else if (state.ended) {
        stream.emit('error', new Error('stream.push() after EOF'));
      } else {
        state.reading = false;
        if (state.decoder && !encoding) {
          chunk = state.decoder.write(chunk);
          if (state.objectMode || chunk.length !== 0) addChunk(stream, state, chunk, false);else maybeReadMore(stream, state);
        } else {
          addChunk(stream, state, chunk, false);
        }
      }
    } else if (!addToFront) {
      state.reading = false;
    }
  }

  return needMoreData(state);
}

function addChunk(stream, state, chunk, addToFront) {
  if (state.flowing && state.length === 0 && !state.sync) {
    stream.emit('data', chunk);
    stream.read(0);
  } else {
    // update the buffer info.
    state.length += state.objectMode ? 1 : chunk.length;
    if (addToFront) state.buffer.unshift(chunk);else state.buffer.push(chunk);

    if (state.needReadable) emitReadable(stream);
  }
  maybeReadMore(stream, state);
}

function chunkInvalid(state, chunk) {
  var er;
  if (!_isUint8Array(chunk) && typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  return er;
}

// if it's past the high water mark, we can push in some more.
// Also, if we have no data yet, we can stand some
// more bytes.  This is to work around cases where hwm=0,
// such as the repl.  Also, if the push() triggered a
// readable event, and the user called read(largeNumber) such that
// needReadable was set, then we ought to push more, so that another
// 'readable' event will be triggered.
function needMoreData(state) {
  return !state.ended && (state.needReadable || state.length < state.highWaterMark || state.length === 0);
}

Readable.prototype.isPaused = function () {
  return this._readableState.flowing === false;
};

// backwards compatibility.
Readable.prototype.setEncoding = function (enc) {
  if (!StringDecoder) StringDecoder = require('string_decoder/').StringDecoder;
  this._readableState.decoder = new StringDecoder(enc);
  this._readableState.encoding = enc;
  return this;
};

// Don't raise the hwm > 8MB
var MAX_HWM = 0x800000;
function computeNewHighWaterMark(n) {
  if (n >= MAX_HWM) {
    n = MAX_HWM;
  } else {
    // Get the next highest power of 2 to prevent increasing hwm excessively in
    // tiny amounts
    n--;
    n |= n >>> 1;
    n |= n >>> 2;
    n |= n >>> 4;
    n |= n >>> 8;
    n |= n >>> 16;
    n++;
  }
  return n;
}

// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function howMuchToRead(n, state) {
  if (n <= 0 || state.length === 0 && state.ended) return 0;
  if (state.objectMode) return 1;
  if (n !== n) {
    // Only flow one buffer at a time
    if (state.flowing && state.length) return state.buffer.head.data.length;else return state.length;
  }
  // If we're asking for more than the current hwm, then raise the hwm.
  if (n > state.highWaterMark) state.highWaterMark = computeNewHighWaterMark(n);
  if (n <= state.length) return n;
  // Don't have enough
  if (!state.ended) {
    state.needReadable = true;
    return 0;
  }
  return state.length;
}

// you can override either this method, or the async _read(n) below.
Readable.prototype.read = function (n) {
  debug('read', n);
  n = parseInt(n, 10);
  var state = this._readableState;
  var nOrig = n;

  if (n !== 0) state.emittedReadable = false;

  // if we're doing read(0) to trigger a readable event, but we
  // already have a bunch of data in the buffer, then just trigger
  // the 'readable' event and move on.
  if (n === 0 && state.needReadable && (state.length >= state.highWaterMark || state.ended)) {
    debug('read: emitReadable', state.length, state.ended);
    if (state.length === 0 && state.ended) endReadable(this);else emitReadable(this);
    return null;
  }

  n = howMuchToRead(n, state);

  // if we've ended, and we're now clear, then finish it up.
  if (n === 0 && state.ended) {
    if (state.length === 0) endReadable(this);
    return null;
  }

  // All the actual chunk generation logic needs to be
  // *below* the call to _read.  The reason is that in certain
  // synthetic stream cases, such as passthrough streams, _read
  // may be a completely synchronous operation which may change
  // the state of the read buffer, providing enough data when
  // before there was *not* enough.
  //
  // So, the steps are:
  // 1. Figure out what the state of things will be after we do
  // a read from the buffer.
  //
  // 2. If that resulting state will trigger a _read, then call _read.
  // Note that this may be asynchronous, or synchronous.  Yes, it is
  // deeply ugly to write APIs this way, but that still doesn't mean
  // that the Readable class should behave improperly, as streams are
  // designed to be sync/async agnostic.
  // Take note if the _read call is sync or async (ie, if the read call
  // has returned yet), so that we know whether or not it's safe to emit
  // 'readable' etc.
  //
  // 3. Actually pull the requested chunks out of the buffer and return.

  // if we need a readable event, then we need to do some reading.
  var doRead = state.needReadable;
  debug('need readable', doRead);

  // if we currently have less than the highWaterMark, then also read some
  if (state.length === 0 || state.length - n < state.highWaterMark) {
    doRead = true;
    debug('length less than watermark', doRead);
  }

  // however, if we've ended, then there's no point, and if we're already
  // reading, then it's unnecessary.
  if (state.ended || state.reading) {
    doRead = false;
    debug('reading or ended', doRead);
  } else if (doRead) {
    debug('do read');
    state.reading = true;
    state.sync = true;
    // if the length is currently zero, then we *need* a readable event.
    if (state.length === 0) state.needReadable = true;
    // call internal read method
    this._read(state.highWaterMark);
    state.sync = false;
    // If _read pushed data synchronously, then `reading` will be false,
    // and we need to re-evaluate how much data we can return to the user.
    if (!state.reading) n = howMuchToRead(nOrig, state);
  }

  var ret;
  if (n > 0) ret = fromList(n, state);else ret = null;

  if (ret === null) {
    state.needReadable = true;
    n = 0;
  } else {
    state.length -= n;
  }

  if (state.length === 0) {
    // If we have nothing in the buffer, then we want to know
    // as soon as we *do* get something into the buffer.
    if (!state.ended) state.needReadable = true;

    // If we tried to read() past the EOF, then emit end on the next tick.
    if (nOrig !== n && state.ended) endReadable(this);
  }

  if (ret !== null) this.emit('data', ret);

  return ret;
};

function onEofChunk(stream, state) {
  if (state.ended) return;
  if (state.decoder) {
    var chunk = state.decoder.end();
    if (chunk && chunk.length) {
      state.buffer.push(chunk);
      state.length += state.objectMode ? 1 : chunk.length;
    }
  }
  state.ended = true;

  // emit 'readable' now to make sure it gets picked up.
  emitReadable(stream);
}

// Don't emit readable right away in sync mode, because this can trigger
// another read() call => stack overflow.  This way, it might trigger
// a nextTick recursion warning, but that's not so bad.
function emitReadable(stream) {
  var state = stream._readableState;
  state.needReadable = false;
  if (!state.emittedReadable) {
    debug('emitReadable', state.flowing);
    state.emittedReadable = true;
    if (state.sync) pna.nextTick(emitReadable_, stream);else emitReadable_(stream);
  }
}

function emitReadable_(stream) {
  debug('emit readable');
  stream.emit('readable');
  flow(stream);
}

// at this point, the user has presumably seen the 'readable' event,
// and called read() to consume some data.  that may have triggered
// in turn another _read(n) call, in which case reading = true if
// it's in progress.
// However, if we're not ended, or reading, and the length < hwm,
// then go ahead and try to read some more preemptively.
function maybeReadMore(stream, state) {
  if (!state.readingMore) {
    state.readingMore = true;
    pna.nextTick(maybeReadMore_, stream, state);
  }
}

function maybeReadMore_(stream, state) {
  var len = state.length;
  while (!state.reading && !state.flowing && !state.ended && state.length < state.highWaterMark) {
    debug('maybeReadMore read 0');
    stream.read(0);
    if (len === state.length)
      // didn't get any data, stop spinning.
      break;else len = state.length;
  }
  state.readingMore = false;
}

// abstract method.  to be overridden in specific implementation classes.
// call cb(er, data) where data is <= n in length.
// for virtual (non-string, non-buffer) streams, "length" is somewhat
// arbitrary, and perhaps not very meaningful.
Readable.prototype._read = function (n) {
  this.emit('error', new Error('_read() is not implemented'));
};

Readable.prototype.pipe = function (dest, pipeOpts) {
  var src = this;
  var state = this._readableState;

  switch (state.pipesCount) {
    case 0:
      state.pipes = dest;
      break;
    case 1:
      state.pipes = [state.pipes, dest];
      break;
    default:
      state.pipes.push(dest);
      break;
  }
  state.pipesCount += 1;
  debug('pipe count=%d opts=%j', state.pipesCount, pipeOpts);

  var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;

  var endFn = doEnd ? onend : unpipe;
  if (state.endEmitted) pna.nextTick(endFn);else src.once('end', endFn);

  dest.on('unpipe', onunpipe);
  function onunpipe(readable, unpipeInfo) {
    debug('onunpipe');
    if (readable === src) {
      if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
        unpipeInfo.hasUnpiped = true;
        cleanup();
      }
    }
  }

  function onend() {
    debug('onend');
    dest.end();
  }

  // when the dest drains, it reduces the awaitDrain counter
  // on the source.  This would be more elegant with a .once()
  // handler in flow(), but adding and removing repeatedly is
  // too slow.
  var ondrain = pipeOnDrain(src);
  dest.on('drain', ondrain);

  var cleanedUp = false;
  function cleanup() {
    debug('cleanup');
    // cleanup event handlers once the pipe is broken
    dest.removeListener('close', onclose);
    dest.removeListener('finish', onfinish);
    dest.removeListener('drain', ondrain);
    dest.removeListener('error', onerror);
    dest.removeListener('unpipe', onunpipe);
    src.removeListener('end', onend);
    src.removeListener('end', unpipe);
    src.removeListener('data', ondata);

    cleanedUp = true;

    // if the reader is waiting for a drain event from this
    // specific writer, then it would cause it to never start
    // flowing again.
    // So, if this is awaiting a drain, then we just call it now.
    // If we don't know, then assume that we are waiting for one.
    if (state.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
  }

  // If the user pushes more data while we're writing to dest then we'll end up
  // in ondata again. However, we only want to increase awaitDrain once because
  // dest will only emit one 'drain' event for the multiple writes.
  // => Introduce a guard on increasing awaitDrain.
  var increasedAwaitDrain = false;
  src.on('data', ondata);
  function ondata(chunk) {
    debug('ondata');
    increasedAwaitDrain = false;
    var ret = dest.write(chunk);
    if (false === ret && !increasedAwaitDrain) {
      // If the user unpiped during `dest.write()`, it is possible
      // to get stuck in a permanently paused state if that write
      // also returned false.
      // => Check whether `dest` is still a piping destination.
      if ((state.pipesCount === 1 && state.pipes === dest || state.pipesCount > 1 && indexOf(state.pipes, dest) !== -1) && !cleanedUp) {
        debug('false write response, pause', src._readableState.awaitDrain);
        src._readableState.awaitDrain++;
        increasedAwaitDrain = true;
      }
      src.pause();
    }
  }

  // if the dest has an error, then stop piping into it.
  // however, don't suppress the throwing behavior for this.
  function onerror(er) {
    debug('onerror', er);
    unpipe();
    dest.removeListener('error', onerror);
    if (EElistenerCount(dest, 'error') === 0) dest.emit('error', er);
  }

  // Make sure our error handler is attached before userland ones.
  prependListener(dest, 'error', onerror);

  // Both close and finish should trigger unpipe, but only once.
  function onclose() {
    dest.removeListener('finish', onfinish);
    unpipe();
  }
  dest.once('close', onclose);
  function onfinish() {
    debug('onfinish');
    dest.removeListener('close', onclose);
    unpipe();
  }
  dest.once('finish', onfinish);

  function unpipe() {
    debug('unpipe');
    src.unpipe(dest);
  }

  // tell the dest that it's being piped to
  dest.emit('pipe', src);

  // start the flow if it hasn't been started already.
  if (!state.flowing) {
    debug('pipe resume');
    src.resume();
  }

  return dest;
};

function pipeOnDrain(src) {
  return function () {
    var state = src._readableState;
    debug('pipeOnDrain', state.awaitDrain);
    if (state.awaitDrain) state.awaitDrain--;
    if (state.awaitDrain === 0 && EElistenerCount(src, 'data')) {
      state.flowing = true;
      flow(src);
    }
  };
}

Readable.prototype.unpipe = function (dest) {
  var state = this._readableState;
  var unpipeInfo = { hasUnpiped: false };

  // if we're not piping anywhere, then do nothing.
  if (state.pipesCount === 0) return this;

  // just one destination.  most common case.
  if (state.pipesCount === 1) {
    // passed in one, but it's not the right one.
    if (dest && dest !== state.pipes) return this;

    if (!dest) dest = state.pipes;

    // got a match.
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;
    if (dest) dest.emit('unpipe', this, unpipeInfo);
    return this;
  }

  // slow case. multiple pipe destinations.

  if (!dest) {
    // remove all.
    var dests = state.pipes;
    var len = state.pipesCount;
    state.pipes = null;
    state.pipesCount = 0;
    state.flowing = false;

    for (var i = 0; i < len; i++) {
      dests[i].emit('unpipe', this, unpipeInfo);
    }return this;
  }

  // try to find the right one.
  var index = indexOf(state.pipes, dest);
  if (index === -1) return this;

  state.pipes.splice(index, 1);
  state.pipesCount -= 1;
  if (state.pipesCount === 1) state.pipes = state.pipes[0];

  dest.emit('unpipe', this, unpipeInfo);

  return this;
};

// set up data events if they are asked for
// Ensure readable listeners eventually get something
Readable.prototype.on = function (ev, fn) {
  var res = Stream.prototype.on.call(this, ev, fn);

  if (ev === 'data') {
    // Start flowing on next tick if stream isn't explicitly paused
    if (this._readableState.flowing !== false) this.resume();
  } else if (ev === 'readable') {
    var state = this._readableState;
    if (!state.endEmitted && !state.readableListening) {
      state.readableListening = state.needReadable = true;
      state.emittedReadable = false;
      if (!state.reading) {
        pna.nextTick(nReadingNextTick, this);
      } else if (state.length) {
        emitReadable(this);
      }
    }
  }

  return res;
};
Readable.prototype.addListener = Readable.prototype.on;

function nReadingNextTick(self) {
  debug('readable nexttick read 0');
  self.read(0);
}

// pause() and resume() are remnants of the legacy readable stream API
// If the user uses them, then switch into old mode.
Readable.prototype.resume = function () {
  var state = this._readableState;
  if (!state.flowing) {
    debug('resume');
    state.flowing = true;
    resume(this, state);
  }
  return this;
};

function resume(stream, state) {
  if (!state.resumeScheduled) {
    state.resumeScheduled = true;
    pna.nextTick(resume_, stream, state);
  }
}

function resume_(stream, state) {
  if (!state.reading) {
    debug('resume read 0');
    stream.read(0);
  }

  state.resumeScheduled = false;
  state.awaitDrain = 0;
  stream.emit('resume');
  flow(stream);
  if (state.flowing && !state.reading) stream.read(0);
}

Readable.prototype.pause = function () {
  debug('call pause flowing=%j', this._readableState.flowing);
  if (false !== this._readableState.flowing) {
    debug('pause');
    this._readableState.flowing = false;
    this.emit('pause');
  }
  return this;
};

function flow(stream) {
  var state = stream._readableState;
  debug('flow', state.flowing);
  while (state.flowing && stream.read() !== null) {}
}

// wrap an old-style stream as the async data source.
// This is *not* part of the readable stream interface.
// It is an ugly unfortunate mess of history.
Readable.prototype.wrap = function (stream) {
  var _this = this;

  var state = this._readableState;
  var paused = false;

  stream.on('end', function () {
    debug('wrapped end');
    if (state.decoder && !state.ended) {
      var chunk = state.decoder.end();
      if (chunk && chunk.length) _this.push(chunk);
    }

    _this.push(null);
  });

  stream.on('data', function (chunk) {
    debug('wrapped data');
    if (state.decoder) chunk = state.decoder.write(chunk);

    // don't skip over falsy values in objectMode
    if (state.objectMode && (chunk === null || chunk === undefined)) return;else if (!state.objectMode && (!chunk || !chunk.length)) return;

    var ret = _this.push(chunk);
    if (!ret) {
      paused = true;
      stream.pause();
    }
  });

  // proxy all the other methods.
  // important when wrapping filters and duplexes.
  for (var i in stream) {
    if (this[i] === undefined && typeof stream[i] === 'function') {
      this[i] = function (method) {
        return function () {
          return stream[method].apply(stream, arguments);
        };
      }(i);
    }
  }

  // proxy certain important events.
  for (var n = 0; n < kProxyEvents.length; n++) {
    stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
  }

  // when we try to consume some more bytes, simply unpause the
  // underlying stream.
  this._read = function (n) {
    debug('wrapped _read', n);
    if (paused) {
      paused = false;
      stream.resume();
    }
  };

  return this;
};

Object.defineProperty(Readable.prototype, 'readableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._readableState.highWaterMark;
  }
});

// exposed for testing purposes only.
Readable._fromList = fromList;

// Pluck off n bytes from an array of buffers.
// Length is the combined lengths of all the buffers in the list.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromList(n, state) {
  // nothing buffered
  if (state.length === 0) return null;

  var ret;
  if (state.objectMode) ret = state.buffer.shift();else if (!n || n >= state.length) {
    // read it all, truncate the list
    if (state.decoder) ret = state.buffer.join('');else if (state.buffer.length === 1) ret = state.buffer.head.data;else ret = state.buffer.concat(state.length);
    state.buffer.clear();
  } else {
    // read part of list
    ret = fromListPartial(n, state.buffer, state.decoder);
  }

  return ret;
}

// Extracts only enough buffered data to satisfy the amount requested.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function fromListPartial(n, list, hasStrings) {
  var ret;
  if (n < list.head.data.length) {
    // slice is the same for buffers and strings
    ret = list.head.data.slice(0, n);
    list.head.data = list.head.data.slice(n);
  } else if (n === list.head.data.length) {
    // first chunk is a perfect match
    ret = list.shift();
  } else {
    // result spans more than one buffer
    ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
  }
  return ret;
}

// Copies a specified amount of characters from the list of buffered data
// chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBufferString(n, list) {
  var p = list.head;
  var c = 1;
  var ret = p.data;
  n -= ret.length;
  while (p = p.next) {
    var str = p.data;
    var nb = n > str.length ? str.length : n;
    if (nb === str.length) ret += str;else ret += str.slice(0, n);
    n -= nb;
    if (n === 0) {
      if (nb === str.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = str.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

// Copies a specified amount of bytes from the list of buffered data chunks.
// This function is designed to be inlinable, so please take care when making
// changes to the function body.
function copyFromBuffer(n, list) {
  var ret = Buffer.allocUnsafe(n);
  var p = list.head;
  var c = 1;
  p.data.copy(ret);
  n -= p.data.length;
  while (p = p.next) {
    var buf = p.data;
    var nb = n > buf.length ? buf.length : n;
    buf.copy(ret, ret.length - n, 0, nb);
    n -= nb;
    if (n === 0) {
      if (nb === buf.length) {
        ++c;
        if (p.next) list.head = p.next;else list.head = list.tail = null;
      } else {
        list.head = p;
        p.data = buf.slice(nb);
      }
      break;
    }
    ++c;
  }
  list.length -= c;
  return ret;
}

function endReadable(stream) {
  var state = stream._readableState;

  // If we get here before consuming all the bytes, then that is a
  // bug in node.  Should never happen.
  if (state.length > 0) throw new Error('"endReadable()" called on non-empty stream');

  if (!state.endEmitted) {
    state.ended = true;
    pna.nextTick(endReadableNT, state, stream);
  }
}

function endReadableNT(state, stream) {
  // Check that we didn't get one last unshift.
  if (!state.endEmitted && state.length === 0) {
    state.endEmitted = true;
    stream.readable = false;
    stream.emit('end');
  }
}

function indexOf(xs, x) {
  for (var i = 0, l = xs.length; i < l; i++) {
    if (xs[i] === x) return i;
  }
  return -1;
}
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./_stream_duplex":107,"./internal/streams/BufferList":112,"./internal/streams/destroy":113,"./internal/streams/stream":114,"_process":101,"core-util-is":14,"events":83,"inherits":88,"isarray":90,"process-nextick-args":100,"safe-buffer":117,"string_decoder/":119,"util":12}],110:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// a transform stream is a readable/writable stream where you do
// something with the data.  Sometimes it's called a "filter",
// but that's not a great name for it, since that implies a thing where
// some bits pass through, and others are simply ignored.  (That would
// be a valid example of a transform, of course.)
//
// While the output is causally related to the input, it's not a
// necessarily symmetric or synchronous transformation.  For example,
// a zlib stream might take multiple plain-text writes(), and then
// emit a single compressed chunk some time in the future.
//
// Here's how this works:
//
// The Transform stream has all the aspects of the readable and writable
// stream classes.  When you write(chunk), that calls _write(chunk,cb)
// internally, and returns false if there's a lot of pending writes
// buffered up.  When you call read(), that calls _read(n) until
// there's enough pending readable data buffered up.
//
// In a transform stream, the written data is placed in a buffer.  When
// _read(n) is called, it transforms the queued up data, calling the
// buffered _write cb's as it consumes chunks.  If consuming a single
// written chunk would result in multiple output chunks, then the first
// outputted bit calls the readcb, and subsequent chunks just go into
// the read buffer, and will cause it to emit 'readable' if necessary.
//
// This way, back-pressure is actually determined by the reading side,
// since _read has to be called to start processing a new chunk.  However,
// a pathological inflate type of transform can cause excessive buffering
// here.  For example, imagine a stream where every byte of input is
// interpreted as an integer from 0-255, and then results in that many
// bytes of output.  Writing the 4 bytes {ff,ff,ff,ff} would result in
// 1kb of data being output.  In this case, you could write a very small
// amount of input, and end up with a very large amount of output.  In
// such a pathological inflating mechanism, there'd be no way to tell
// the system to stop doing the transform.  A single 4MB write could
// cause the system to run out of memory.
//
// However, even in such a pathological case, only a single written chunk
// would be consumed, and then the rest would wait (un-transformed) until
// the results of the previous transformed chunk were consumed.

'use strict';

module.exports = Transform;

var Duplex = require('./_stream_duplex');

/*<replacement>*/
var util = Object.create(require('core-util-is'));
util.inherits = require('inherits');
/*</replacement>*/

util.inherits(Transform, Duplex);

function afterTransform(er, data) {
  var ts = this._transformState;
  ts.transforming = false;

  var cb = ts.writecb;

  if (!cb) {
    return this.emit('error', new Error('write callback called multiple times'));
  }

  ts.writechunk = null;
  ts.writecb = null;

  if (data != null) // single equals check for both `null` and `undefined`
    this.push(data);

  cb(er);

  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}

function Transform(options) {
  if (!(this instanceof Transform)) return new Transform(options);

  Duplex.call(this, options);

  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };

  // start out asking for a readable event once data is transformed.
  this._readableState.needReadable = true;

  // we have implemented the _read method, and done the other things
  // that Readable wants before the first _read call, so unset the
  // sync guard flag.
  this._readableState.sync = false;

  if (options) {
    if (typeof options.transform === 'function') this._transform = options.transform;

    if (typeof options.flush === 'function') this._flush = options.flush;
  }

  // When the writable side finishes, then flush out anything remaining.
  this.on('prefinish', prefinish);
}

function prefinish() {
  var _this = this;

  if (typeof this._flush === 'function') {
    this._flush(function (er, data) {
      done(_this, er, data);
    });
  } else {
    done(this, null, null);
  }
}

Transform.prototype.push = function (chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};

// This is the part where you do stuff!
// override this function in implementation classes.
// 'chunk' is an input chunk.
//
// Call `push(newChunk)` to pass along transformed output
// to the readable side.  You may call 'push' zero or more times.
//
// Call `cb(err)` when you are done with this chunk.  If you pass
// an error, then that'll put the hurt on the whole operation.  If you
// never call cb(), then you'll never get another chunk.
Transform.prototype._transform = function (chunk, encoding, cb) {
  throw new Error('_transform() is not implemented');
};

Transform.prototype._write = function (chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
  }
};

// Doesn't matter what the args are here.
// _transform does all the work.
// That we got here means that the readable side wants more data.
Transform.prototype._read = function (n) {
  var ts = this._transformState;

  if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    // mark that we need a transform, so that any data that comes in
    // will get processed, now that we've asked for it.
    ts.needTransform = true;
  }
};

Transform.prototype._destroy = function (err, cb) {
  var _this2 = this;

  Duplex.prototype._destroy.call(this, err, function (err2) {
    cb(err2);
    _this2.emit('close');
  });
};

function done(stream, er, data) {
  if (er) return stream.emit('error', er);

  if (data != null) // single equals check for both `null` and `undefined`
    stream.push(data);

  // if there's nothing in the write buffer, then that means
  // that nothing more will ever be provided
  if (stream._writableState.length) throw new Error('Calling transform done when ws.length != 0');

  if (stream._transformState.transforming) throw new Error('Calling transform done when still transforming');

  return stream.push(null);
}
},{"./_stream_duplex":107,"core-util-is":14,"inherits":88}],111:[function(require,module,exports){
(function (process,global,setImmediate){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// A bit simpler than readable streams.
// Implement an async ._write(chunk, encoding, cb), and it'll handle all
// the drain event emission and buffering.

'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

module.exports = Writable;

/* <replacement> */
function WriteReq(chunk, encoding, cb) {
  this.chunk = chunk;
  this.encoding = encoding;
  this.callback = cb;
  this.next = null;
}

// It seems a linked list but it is not
// there will be only 2 of these for each stream
function CorkedRequest(state) {
  var _this = this;

  this.next = null;
  this.entry = null;
  this.finish = function () {
    onCorkedFinish(_this, state);
  };
}
/* </replacement> */

/*<replacement>*/
var asyncWrite = !process.browser && ['v0.10', 'v0.9.'].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
/*</replacement>*/

/*<replacement>*/
var Duplex;
/*</replacement>*/

Writable.WritableState = WritableState;

/*<replacement>*/
var util = Object.create(require('core-util-is'));
util.inherits = require('inherits');
/*</replacement>*/

/*<replacement>*/
var internalUtil = {
  deprecate: require('util-deprecate')
};
/*</replacement>*/

/*<replacement>*/
var Stream = require('./internal/streams/stream');
/*</replacement>*/

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
var OurUint8Array = global.Uint8Array || function () {};
function _uint8ArrayToBuffer(chunk) {
  return Buffer.from(chunk);
}
function _isUint8Array(obj) {
  return Buffer.isBuffer(obj) || obj instanceof OurUint8Array;
}

/*</replacement>*/

var destroyImpl = require('./internal/streams/destroy');

util.inherits(Writable, Stream);

function nop() {}

function WritableState(options, stream) {
  Duplex = Duplex || require('./_stream_duplex');

  options = options || {};

  // Duplex streams are both readable and writable, but share
  // the same options object.
  // However, some cases require setting options to different
  // values for the readable and the writable sides of the duplex stream.
  // These options can be provided separately as readableXXX and writableXXX.
  var isDuplex = stream instanceof Duplex;

  // object stream flag to indicate whether or not this stream
  // contains buffers or objects.
  this.objectMode = !!options.objectMode;

  if (isDuplex) this.objectMode = this.objectMode || !!options.writableObjectMode;

  // the point at which write() starts returning false
  // Note: 0 is a valid value, means that we always return false if
  // the entire buffer is not flushed immediately on write()
  var hwm = options.highWaterMark;
  var writableHwm = options.writableHighWaterMark;
  var defaultHwm = this.objectMode ? 16 : 16 * 1024;

  if (hwm || hwm === 0) this.highWaterMark = hwm;else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;else this.highWaterMark = defaultHwm;

  // cast to ints.
  this.highWaterMark = Math.floor(this.highWaterMark);

  // if _final has been called
  this.finalCalled = false;

  // drain event flag.
  this.needDrain = false;
  // at the start of calling end()
  this.ending = false;
  // when end() has been called, and returned
  this.ended = false;
  // when 'finish' is emitted
  this.finished = false;

  // has it been destroyed
  this.destroyed = false;

  // should we decode strings into buffers before passing to _write?
  // this is here so that some node-core streams can optimize string
  // handling at a lower level.
  var noDecode = options.decodeStrings === false;
  this.decodeStrings = !noDecode;

  // Crypto is kind of old and crusty.  Historically, its default string
  // encoding is 'binary' so we have to make this configurable.
  // Everything else in the universe uses 'utf8', though.
  this.defaultEncoding = options.defaultEncoding || 'utf8';

  // not an actual buffer we keep track of, but a measurement
  // of how much we're waiting to get pushed to some underlying
  // socket or file.
  this.length = 0;

  // a flag to see when we're in the middle of a write.
  this.writing = false;

  // when true all writes will be buffered until .uncork() call
  this.corked = 0;

  // a flag to be able to tell if the onwrite cb is called immediately,
  // or on a later tick.  We set this to true at first, because any
  // actions that shouldn't happen until "later" should generally also
  // not happen before the first write call.
  this.sync = true;

  // a flag to know if we're processing previously buffered items, which
  // may call the _write() callback in the same tick, so that we don't
  // end up in an overlapped onwrite situation.
  this.bufferProcessing = false;

  // the callback that's passed to _write(chunk,cb)
  this.onwrite = function (er) {
    onwrite(stream, er);
  };

  // the callback that the user supplies to write(chunk,encoding,cb)
  this.writecb = null;

  // the amount that is being written when _write is called.
  this.writelen = 0;

  this.bufferedRequest = null;
  this.lastBufferedRequest = null;

  // number of pending user-supplied write callbacks
  // this must be 0 before 'finish' can be emitted
  this.pendingcb = 0;

  // emit prefinish if the only thing we're waiting for is _write cbs
  // This is relevant for synchronous Transform streams
  this.prefinished = false;

  // True if the error was already emitted and should not be thrown again
  this.errorEmitted = false;

  // count buffered requests
  this.bufferedRequestCount = 0;

  // allocate the first CorkedRequest, there is always
  // one allocated and free to use, and we maintain at most two
  this.corkedRequestsFree = new CorkedRequest(this);
}

WritableState.prototype.getBuffer = function getBuffer() {
  var current = this.bufferedRequest;
  var out = [];
  while (current) {
    out.push(current);
    current = current.next;
  }
  return out;
};

(function () {
  try {
    Object.defineProperty(WritableState.prototype, 'buffer', {
      get: internalUtil.deprecate(function () {
        return this.getBuffer();
      }, '_writableState.buffer is deprecated. Use _writableState.getBuffer ' + 'instead.', 'DEP0003')
    });
  } catch (_) {}
})();

// Test _writableState for inheritance to account for Duplex streams,
// whose prototype chain only points to Readable.
var realHasInstance;
if (typeof Symbol === 'function' && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === 'function') {
  realHasInstance = Function.prototype[Symbol.hasInstance];
  Object.defineProperty(Writable, Symbol.hasInstance, {
    value: function (object) {
      if (realHasInstance.call(this, object)) return true;
      if (this !== Writable) return false;

      return object && object._writableState instanceof WritableState;
    }
  });
} else {
  realHasInstance = function (object) {
    return object instanceof this;
  };
}

function Writable(options) {
  Duplex = Duplex || require('./_stream_duplex');

  // Writable ctor is applied to Duplexes, too.
  // `realHasInstance` is necessary because using plain `instanceof`
  // would return false, as no `_writableState` property is attached.

  // Trying to use the custom `instanceof` for Writable here will also break the
  // Node.js LazyTransform implementation, which has a non-trivial getter for
  // `_writableState` that would lead to infinite recursion.
  if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
    return new Writable(options);
  }

  this._writableState = new WritableState(options, this);

  // legacy.
  this.writable = true;

  if (options) {
    if (typeof options.write === 'function') this._write = options.write;

    if (typeof options.writev === 'function') this._writev = options.writev;

    if (typeof options.destroy === 'function') this._destroy = options.destroy;

    if (typeof options.final === 'function') this._final = options.final;
  }

  Stream.call(this);
}

// Otherwise people can pipe Writable streams, which is just wrong.
Writable.prototype.pipe = function () {
  this.emit('error', new Error('Cannot pipe, not readable'));
};

function writeAfterEnd(stream, cb) {
  var er = new Error('write after end');
  // TODO: defer error events consistently everywhere, not just the cb
  stream.emit('error', er);
  pna.nextTick(cb, er);
}

// Checks that a user-supplied chunk is valid, especially for the particular
// mode the stream is in. Currently this means that `null` is never accepted
// and undefined/non-string values are only allowed in object mode.
function validChunk(stream, state, chunk, cb) {
  var valid = true;
  var er = false;

  if (chunk === null) {
    er = new TypeError('May not write null values to stream');
  } else if (typeof chunk !== 'string' && chunk !== undefined && !state.objectMode) {
    er = new TypeError('Invalid non-string/buffer chunk');
  }
  if (er) {
    stream.emit('error', er);
    pna.nextTick(cb, er);
    valid = false;
  }
  return valid;
}

Writable.prototype.write = function (chunk, encoding, cb) {
  var state = this._writableState;
  var ret = false;
  var isBuf = !state.objectMode && _isUint8Array(chunk);

  if (isBuf && !Buffer.isBuffer(chunk)) {
    chunk = _uint8ArrayToBuffer(chunk);
  }

  if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (isBuf) encoding = 'buffer';else if (!encoding) encoding = state.defaultEncoding;

  if (typeof cb !== 'function') cb = nop;

  if (state.ended) writeAfterEnd(this, cb);else if (isBuf || validChunk(this, state, chunk, cb)) {
    state.pendingcb++;
    ret = writeOrBuffer(this, state, isBuf, chunk, encoding, cb);
  }

  return ret;
};

Writable.prototype.cork = function () {
  var state = this._writableState;

  state.corked++;
};

Writable.prototype.uncork = function () {
  var state = this._writableState;

  if (state.corked) {
    state.corked--;

    if (!state.writing && !state.corked && !state.finished && !state.bufferProcessing && state.bufferedRequest) clearBuffer(this, state);
  }
};

Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
  // node::ParseEncoding() requires lower case.
  if (typeof encoding === 'string') encoding = encoding.toLowerCase();
  if (!(['hex', 'utf8', 'utf-8', 'ascii', 'binary', 'base64', 'ucs2', 'ucs-2', 'utf16le', 'utf-16le', 'raw'].indexOf((encoding + '').toLowerCase()) > -1)) throw new TypeError('Unknown encoding: ' + encoding);
  this._writableState.defaultEncoding = encoding;
  return this;
};

function decodeChunk(state, chunk, encoding) {
  if (!state.objectMode && state.decodeStrings !== false && typeof chunk === 'string') {
    chunk = Buffer.from(chunk, encoding);
  }
  return chunk;
}

Object.defineProperty(Writable.prototype, 'writableHighWaterMark', {
  // making it explicit this property is not enumerable
  // because otherwise some prototype manipulation in
  // userland will fail
  enumerable: false,
  get: function () {
    return this._writableState.highWaterMark;
  }
});

// if we're already writing something, then just put this
// in the queue, and wait our turn.  Otherwise, call _write
// If we return false, then we need a drain event, so set that flag.
function writeOrBuffer(stream, state, isBuf, chunk, encoding, cb) {
  if (!isBuf) {
    var newChunk = decodeChunk(state, chunk, encoding);
    if (chunk !== newChunk) {
      isBuf = true;
      encoding = 'buffer';
      chunk = newChunk;
    }
  }
  var len = state.objectMode ? 1 : chunk.length;

  state.length += len;

  var ret = state.length < state.highWaterMark;
  // we must ensure that previous needDrain will not be reset to false.
  if (!ret) state.needDrain = true;

  if (state.writing || state.corked) {
    var last = state.lastBufferedRequest;
    state.lastBufferedRequest = {
      chunk: chunk,
      encoding: encoding,
      isBuf: isBuf,
      callback: cb,
      next: null
    };
    if (last) {
      last.next = state.lastBufferedRequest;
    } else {
      state.bufferedRequest = state.lastBufferedRequest;
    }
    state.bufferedRequestCount += 1;
  } else {
    doWrite(stream, state, false, len, chunk, encoding, cb);
  }

  return ret;
}

function doWrite(stream, state, writev, len, chunk, encoding, cb) {
  state.writelen = len;
  state.writecb = cb;
  state.writing = true;
  state.sync = true;
  if (writev) stream._writev(chunk, state.onwrite);else stream._write(chunk, encoding, state.onwrite);
  state.sync = false;
}

function onwriteError(stream, state, sync, er, cb) {
  --state.pendingcb;

  if (sync) {
    // defer the callback if we are being called synchronously
    // to avoid piling up things on the stack
    pna.nextTick(cb, er);
    // this can emit finish, and it will always happen
    // after error
    pna.nextTick(finishMaybe, stream, state);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
  } else {
    // the caller expect this to happen before if
    // it is async
    cb(er);
    stream._writableState.errorEmitted = true;
    stream.emit('error', er);
    // this can emit finish, but finish must
    // always follow error
    finishMaybe(stream, state);
  }
}

function onwriteStateUpdate(state) {
  state.writing = false;
  state.writecb = null;
  state.length -= state.writelen;
  state.writelen = 0;
}

function onwrite(stream, er) {
  var state = stream._writableState;
  var sync = state.sync;
  var cb = state.writecb;

  onwriteStateUpdate(state);

  if (er) onwriteError(stream, state, sync, er, cb);else {
    // Check if we're actually ready to finish, but don't emit yet
    var finished = needFinish(state);

    if (!finished && !state.corked && !state.bufferProcessing && state.bufferedRequest) {
      clearBuffer(stream, state);
    }

    if (sync) {
      /*<replacement>*/
      asyncWrite(afterWrite, stream, state, finished, cb);
      /*</replacement>*/
    } else {
      afterWrite(stream, state, finished, cb);
    }
  }
}

function afterWrite(stream, state, finished, cb) {
  if (!finished) onwriteDrain(stream, state);
  state.pendingcb--;
  cb();
  finishMaybe(stream, state);
}

// Must force callback to be called on nextTick, so that we don't
// emit 'drain' before the write() consumer gets the 'false' return
// value, and has a chance to attach a 'drain' listener.
function onwriteDrain(stream, state) {
  if (state.length === 0 && state.needDrain) {
    state.needDrain = false;
    stream.emit('drain');
  }
}

// if there's something in the buffer waiting, then process it
function clearBuffer(stream, state) {
  state.bufferProcessing = true;
  var entry = state.bufferedRequest;

  if (stream._writev && entry && entry.next) {
    // Fast case, write everything using _writev()
    var l = state.bufferedRequestCount;
    var buffer = new Array(l);
    var holder = state.corkedRequestsFree;
    holder.entry = entry;

    var count = 0;
    var allBuffers = true;
    while (entry) {
      buffer[count] = entry;
      if (!entry.isBuf) allBuffers = false;
      entry = entry.next;
      count += 1;
    }
    buffer.allBuffers = allBuffers;

    doWrite(stream, state, true, state.length, buffer, '', holder.finish);

    // doWrite is almost always async, defer these to save a bit of time
    // as the hot path ends with doWrite
    state.pendingcb++;
    state.lastBufferedRequest = null;
    if (holder.next) {
      state.corkedRequestsFree = holder.next;
      holder.next = null;
    } else {
      state.corkedRequestsFree = new CorkedRequest(state);
    }
    state.bufferedRequestCount = 0;
  } else {
    // Slow case, write chunks one-by-one
    while (entry) {
      var chunk = entry.chunk;
      var encoding = entry.encoding;
      var cb = entry.callback;
      var len = state.objectMode ? 1 : chunk.length;

      doWrite(stream, state, false, len, chunk, encoding, cb);
      entry = entry.next;
      state.bufferedRequestCount--;
      // if we didn't call the onwrite immediately, then
      // it means that we need to wait until it does.
      // also, that means that the chunk and cb are currently
      // being processed, so move the buffer counter past them.
      if (state.writing) {
        break;
      }
    }

    if (entry === null) state.lastBufferedRequest = null;
  }

  state.bufferedRequest = entry;
  state.bufferProcessing = false;
}

Writable.prototype._write = function (chunk, encoding, cb) {
  cb(new Error('_write() is not implemented'));
};

Writable.prototype._writev = null;

Writable.prototype.end = function (chunk, encoding, cb) {
  var state = this._writableState;

  if (typeof chunk === 'function') {
    cb = chunk;
    chunk = null;
    encoding = null;
  } else if (typeof encoding === 'function') {
    cb = encoding;
    encoding = null;
  }

  if (chunk !== null && chunk !== undefined) this.write(chunk, encoding);

  // .end() fully uncorks
  if (state.corked) {
    state.corked = 1;
    this.uncork();
  }

  // ignore unnecessary end() calls.
  if (!state.ending && !state.finished) endWritable(this, state, cb);
};

function needFinish(state) {
  return state.ending && state.length === 0 && state.bufferedRequest === null && !state.finished && !state.writing;
}
function callFinal(stream, state) {
  stream._final(function (err) {
    state.pendingcb--;
    if (err) {
      stream.emit('error', err);
    }
    state.prefinished = true;
    stream.emit('prefinish');
    finishMaybe(stream, state);
  });
}
function prefinish(stream, state) {
  if (!state.prefinished && !state.finalCalled) {
    if (typeof stream._final === 'function') {
      state.pendingcb++;
      state.finalCalled = true;
      pna.nextTick(callFinal, stream, state);
    } else {
      state.prefinished = true;
      stream.emit('prefinish');
    }
  }
}

function finishMaybe(stream, state) {
  var need = needFinish(state);
  if (need) {
    prefinish(stream, state);
    if (state.pendingcb === 0) {
      state.finished = true;
      stream.emit('finish');
    }
  }
  return need;
}

function endWritable(stream, state, cb) {
  state.ending = true;
  finishMaybe(stream, state);
  if (cb) {
    if (state.finished) pna.nextTick(cb);else stream.once('finish', cb);
  }
  state.ended = true;
  stream.writable = false;
}

function onCorkedFinish(corkReq, state, err) {
  var entry = corkReq.entry;
  corkReq.entry = null;
  while (entry) {
    var cb = entry.callback;
    state.pendingcb--;
    cb(err);
    entry = entry.next;
  }
  if (state.corkedRequestsFree) {
    state.corkedRequestsFree.next = corkReq;
  } else {
    state.corkedRequestsFree = corkReq;
  }
}

Object.defineProperty(Writable.prototype, 'destroyed', {
  get: function () {
    if (this._writableState === undefined) {
      return false;
    }
    return this._writableState.destroyed;
  },
  set: function (value) {
    // we ignore the value if the stream
    // has not been initialized yet
    if (!this._writableState) {
      return;
    }

    // backward compatibility, the user is explicitly
    // managing destroyed
    this._writableState.destroyed = value;
  }
});

Writable.prototype.destroy = destroyImpl.destroy;
Writable.prototype._undestroy = destroyImpl.undestroy;
Writable.prototype._destroy = function (err, cb) {
  this.end();
  cb(err);
};
}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {},require("timers").setImmediate)
},{"./_stream_duplex":107,"./internal/streams/destroy":113,"./internal/streams/stream":114,"_process":101,"core-util-is":14,"inherits":88,"process-nextick-args":100,"safe-buffer":117,"timers":120,"util-deprecate":134}],112:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Buffer = require('safe-buffer').Buffer;
var util = require('util');

function copyBuffer(src, target, offset) {
  src.copy(target, offset);
}

module.exports = function () {
  function BufferList() {
    _classCallCheck(this, BufferList);

    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  BufferList.prototype.push = function push(v) {
    var entry = { data: v, next: null };
    if (this.length > 0) this.tail.next = entry;else this.head = entry;
    this.tail = entry;
    ++this.length;
  };

  BufferList.prototype.unshift = function unshift(v) {
    var entry = { data: v, next: this.head };
    if (this.length === 0) this.tail = entry;
    this.head = entry;
    ++this.length;
  };

  BufferList.prototype.shift = function shift() {
    if (this.length === 0) return;
    var ret = this.head.data;
    if (this.length === 1) this.head = this.tail = null;else this.head = this.head.next;
    --this.length;
    return ret;
  };

  BufferList.prototype.clear = function clear() {
    this.head = this.tail = null;
    this.length = 0;
  };

  BufferList.prototype.join = function join(s) {
    if (this.length === 0) return '';
    var p = this.head;
    var ret = '' + p.data;
    while (p = p.next) {
      ret += s + p.data;
    }return ret;
  };

  BufferList.prototype.concat = function concat(n) {
    if (this.length === 0) return Buffer.alloc(0);
    if (this.length === 1) return this.head.data;
    var ret = Buffer.allocUnsafe(n >>> 0);
    var p = this.head;
    var i = 0;
    while (p) {
      copyBuffer(p.data, ret, i);
      i += p.data.length;
      p = p.next;
    }
    return ret;
  };

  return BufferList;
}();

if (util && util.inspect && util.inspect.custom) {
  module.exports.prototype[util.inspect.custom] = function () {
    var obj = util.inspect({ length: this.length });
    return this.constructor.name + ' ' + obj;
  };
}
},{"safe-buffer":117,"util":12}],113:[function(require,module,exports){
'use strict';

/*<replacement>*/

var pna = require('process-nextick-args');
/*</replacement>*/

// undocumented cb() API, needed for core, not for public API
function destroy(err, cb) {
  var _this = this;

  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;

  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err && (!this._writableState || !this._writableState.errorEmitted)) {
      pna.nextTick(emitErrorNT, this, err);
    }
    return this;
  }

  // we set destroyed to true before firing error callbacks in order
  // to make it re-entrance safe in case destroy() is called within callbacks

  if (this._readableState) {
    this._readableState.destroyed = true;
  }

  // if this is a duplex stream mark the writable part as destroyed as well
  if (this._writableState) {
    this._writableState.destroyed = true;
  }

  this._destroy(err || null, function (err) {
    if (!cb && err) {
      pna.nextTick(emitErrorNT, _this, err);
      if (_this._writableState) {
        _this._writableState.errorEmitted = true;
      }
    } else if (cb) {
      cb(err);
    }
  });

  return this;
}

function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }

  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}

function emitErrorNT(self, err) {
  self.emit('error', err);
}

module.exports = {
  destroy: destroy,
  undestroy: undestroy
};
},{"process-nextick-args":100}],114:[function(require,module,exports){
module.exports = require('events').EventEmitter;

},{"events":83}],115:[function(require,module,exports){
exports = module.exports = require('./lib/_stream_readable.js');
exports.Stream = exports;
exports.Readable = exports;
exports.Writable = require('./lib/_stream_writable.js');
exports.Duplex = require('./lib/_stream_duplex.js');
exports.Transform = require('./lib/_stream_transform.js');
exports.PassThrough = require('./lib/_stream_passthrough.js');

},{"./lib/_stream_duplex.js":107,"./lib/_stream_passthrough.js":108,"./lib/_stream_readable.js":109,"./lib/_stream_transform.js":110,"./lib/_stream_writable.js":111}],116:[function(require,module,exports){
'use strict'

function ReInterval (callback, interval, args) {
  var self = this;

  this._callback = callback;
  this._args = args;

  this._interval = setInterval(callback, interval, this._args);

  this.reschedule = function (interval) {
    // if no interval entered, use the interval passed in on creation
    if (!interval)
      interval = self._interval;

    if (self._interval)
      clearInterval(self._interval);
    self._interval = setInterval(self._callback, interval, self._args);
  };

  this.clear = function () {
    if (self._interval) {
      clearInterval(self._interval);
      self._interval = undefined;
    }
  };
  
  this.destroy = function () {
    if (self._interval) {
      clearInterval(self._interval);
    }
    self._callback = undefined;
    self._interval = undefined;
    self._args = undefined;
  };
}

function reInterval () {
  if (typeof arguments[0] !== 'function')
    throw new Error('callback needed');
  if (typeof arguments[1] !== 'number')
    throw new Error('interval needed');

  var args;

  if (arguments.length > 0) {
    args = new Array(arguments.length - 2);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 2];
    }
  }

  return new ReInterval(arguments[0], arguments[1], args);
}

module.exports = reInterval;

},{}],117:[function(require,module,exports){
/* eslint-disable node/no-deprecated-api */
var buffer = require('buffer')
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}

},{"buffer":13}],118:[function(require,module,exports){
module.exports = shift

function shift (stream) {
  var rs = stream._readableState
  if (!rs) return null
  return (rs.objectMode || typeof stream._duplexState === 'number') ? stream.read() : stream.read(getStateLength(rs))
}

function getStateLength (state) {
  if (state.buffer.length) {
    // Since node 6.3.0 state.buffer is a BufferList not an array
    if (state.buffer.head) {
      return state.buffer.head.data.length
    }

    return state.buffer[0].length
  }

  return state.length
}

},{}],119:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

/*<replacement>*/

var Buffer = require('safe-buffer').Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}
},{"safe-buffer":117}],120:[function(require,module,exports){
(function (setImmediate,clearImmediate){
var nextTick = require('process/browser.js').nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
}).call(this,require("timers").setImmediate,require("timers").clearImmediate)
},{"process/browser.js":101,"timers":120}],121:[function(require,module,exports){
"use strict";

var isPrototype = require("../prototype/is");

module.exports = function (value) {
	if (typeof value !== "function") return false;

	if (!hasOwnProperty.call(value, "length")) return false;

	try {
		if (typeof value.length !== "number") return false;
		if (typeof value.call !== "function") return false;
		if (typeof value.apply !== "function") return false;
	} catch (error) {
		return false;
	}

	return !isPrototype(value);
};

},{"../prototype/is":128}],122:[function(require,module,exports){
"use strict";

var isValue       = require("../value/is")
  , isObject      = require("../object/is")
  , stringCoerce  = require("../string/coerce")
  , toShortString = require("./to-short-string");

var resolveMessage = function (message, value) {
	return message.replace("%v", toShortString(value));
};

module.exports = function (value, defaultMessage, inputOptions) {
	if (!isObject(inputOptions)) throw new TypeError(resolveMessage(defaultMessage, value));
	if (!isValue(value)) {
		if ("default" in inputOptions) return inputOptions["default"];
		if (inputOptions.isOptional) return null;
	}
	var errorMessage = stringCoerce(inputOptions.errorMessage);
	if (!isValue(errorMessage)) errorMessage = defaultMessage;
	throw new TypeError(resolveMessage(errorMessage, value));
};

},{"../object/is":125,"../string/coerce":129,"../value/is":131,"./to-short-string":124}],123:[function(require,module,exports){
"use strict";

module.exports = function (value) {
	try {
		return value.toString();
	} catch (error) {
		try { return String(value); }
		catch (error2) { return null; }
	}
};

},{}],124:[function(require,module,exports){
"use strict";

var safeToString = require("./safe-to-string");

var reNewLine = /[\n\r\u2028\u2029]/g;

module.exports = function (value) {
	var string = safeToString(value);
	if (string === null) return "<Non-coercible to string value>";
	// Trim if too long
	if (string.length > 100) string = string.slice(0, 99) + "…";
	// Replace eventual new lines
	string = string.replace(reNewLine, function (char) {
		switch (char) {
			case "\n":
				return "\\n";
			case "\r":
				return "\\r";
			case "\u2028":
				return "\\u2028";
			case "\u2029":
				return "\\u2029";
			/* istanbul ignore next */
			default:
				throw new Error("Unexpected character");
		}
	});
	return string;
};

},{"./safe-to-string":123}],125:[function(require,module,exports){
"use strict";

var isValue = require("../value/is");

// prettier-ignore
var possibleTypes = { "object": true, "function": true, "undefined": true /* document.all */ };

module.exports = function (value) {
	if (!isValue(value)) return false;
	return hasOwnProperty.call(possibleTypes, typeof value);
};

},{"../value/is":131}],126:[function(require,module,exports){
"use strict";

var resolveException = require("../lib/resolve-exception")
  , is               = require("./is");

module.exports = function (value/*, options*/) {
	if (is(value)) return value;
	return resolveException(value, "%v is not a plain function", arguments[1]);
};

},{"../lib/resolve-exception":122,"./is":127}],127:[function(require,module,exports){
"use strict";

var isFunction = require("../function/is");

var classRe = /^\s*class[\s{/}]/, functionToString = Function.prototype.toString;

module.exports = function (value) {
	if (!isFunction(value)) return false;
	if (classRe.test(functionToString.call(value))) return false;
	return true;
};

},{"../function/is":121}],128:[function(require,module,exports){
"use strict";

var isObject = require("../object/is");

module.exports = function (value) {
	if (!isObject(value)) return false;
	try {
		if (!value.constructor) return false;
		return value.constructor.prototype === value;
	} catch (error) {
		return false;
	}
};

},{"../object/is":125}],129:[function(require,module,exports){
"use strict";

var isValue  = require("../value/is")
  , isObject = require("../object/is");

var objectToString = Object.prototype.toString;

module.exports = function (value) {
	if (!isValue(value)) return null;
	if (isObject(value)) {
		// Reject Object.prototype.toString coercion
		var valueToString = value.toString;
		if (typeof valueToString !== "function") return null;
		if (valueToString === objectToString) return null;
		// Note: It can be object coming from other realm, still as there's no ES3 and CSP compliant
		// way to resolve its realm's Object.prototype.toString it's left as not addressed edge case
	}
	try {
		return "" + value; // Ensure implicit coercion
	} catch (error) {
		return null;
	}
};

},{"../object/is":125,"../value/is":131}],130:[function(require,module,exports){
"use strict";

var resolveException = require("../lib/resolve-exception")
  , is               = require("./is");

module.exports = function (value/*, options*/) {
	if (is(value)) return value;
	return resolveException(value, "Cannot use %v", arguments[1]);
};

},{"../lib/resolve-exception":122,"./is":131}],131:[function(require,module,exports){
"use strict";

// ES3 safe
var _undefined = void 0;

module.exports = function (value) { return value !== _undefined && value !== null; };

},{}],132:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var punycode = require('punycode');
var util = require('./util');

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = require('querystring');

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};

},{"./util":133,"punycode":102,"querystring":105}],133:[function(require,module,exports){
'use strict';

module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};

},{}],134:[function(require,module,exports){
(function (global){

/**
 * Module exports.
 */

module.exports = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!global.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = global.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],135:[function(require,module,exports){
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}

},{}],136:[function(require,module,exports){
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],137:[function(require,module,exports){
(function (process,global){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = require('./support/isBuffer');

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = require('inherits');

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./support/isBuffer":136,"_process":101,"inherits":135}],138:[function(require,module,exports){
// Returns a wrapper function that returns a wrapped callback
// The wrapper function should do some stuff, and return a
// presumably different callback function.
// This makes sure that own properties are retained, so that
// decorations and such are not lost along the way.
module.exports = wrappy
function wrappy (fn, cb) {
  if (fn && cb) return wrappy(fn)(cb)

  if (typeof fn !== 'function')
    throw new TypeError('need wrapper function')

  Object.keys(fn).forEach(function (k) {
    wrapper[k] = fn[k]
  })

  return wrapper

  function wrapper() {
    var args = new Array(arguments.length)
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }
    var ret = fn.apply(this, args)
    var cb = args[args.length-1]
    if (typeof ret === 'function' && ret !== cb) {
      Object.keys(cb).forEach(function (k) {
        ret[k] = cb[k]
      })
    }
    return ret
  }
}

},{}],139:[function(require,module,exports){
'use strict';

module.exports = function () {
  throw new Error(
    'ws does not work in the browser. Browser clients must use the native ' +
      'WebSocket object'
  );
};

},{}],140:[function(require,module,exports){
module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}

},{}]},{},[9])(9)
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ })
/******/ ]);
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WebRtcPeerHelper = void 0;
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
// eslint-disable-next-line tree-shaking/no-side-effects-in-initialization
const UAParser = __webpack_require__(18);
const events_1 = __webpack_require__(3);
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const sdpTranslator = __webpack_require__(20);
const logger = console;
// Somehow, the UAParser constructor gets an empty window object.
// We need to pass the user agent string in order to get information
const ua = typeof window !== "undefined" && window.navigator
    ? window.navigator.userAgent
    : "";
const parser = new UAParser(ua);
// eslint-disable-next-line tree-shaking/no-side-effects-in-initialization
const browser = parser.getBrowser();
let usePlanB = false;
if (browser.name === "Chrome" || browser.name === "Chromium") {
    // eslint-disable-next-line tree-shaking/no-side-effects-in-initialization
    logger.debug(browser.name + ": using SDP PlanB");
    usePlanB = true;
}
/**
 * Wrapper object of an RTCPeerConnection. This object is aimed to simplify the
 * development of WebRTC-based applications.
 *
 * @constructor module:WebRtcPeer
 *
 * @param {String} mode Mode in which the PeerConnection will be configured.
 *  Valid values are: 'recvonly', 'sendonly', and 'sendrecv'
 * @param localVideo Video tag for the local stream
 * @param remoteVideo Video tag for the remote stream
 * @param {MediaStream} videoStream Stream to be used as primary source
 *  (typically video and audio, or only video if combined with audioStream) for
 *  localVideo and to be added as stream to the RTCPeerConnection
 * @param {MediaStream} audioStream Stream to be used as second source
 *  (typically for audio) for localVideo and to be added as stream to the
 *  RTCPeerConnection
 */
class WebRtcPeer extends events_1.EventEmitter {
    constructor(mode, options, callback) {
        super();
        this.candidatesQueueOut = [];
        this.candidategatheringdone = false;
        options = options || {};
        callback = (callback || this.noop).bind(this);
        this.mode = mode;
        this.options = options;
        this.callback = callback;
        this.id = options.id || btoa(new Date().toLocaleTimeString());
        this.init();
    }
    noop(error) {
        if (error)
            logger.error(error);
    }
    getCurrentFrame() {
        // [ToDo] Find solution when we have a remote stream but we didn't set
        // a remoteVideo tag
        if (!this.remoteVideo)
            return;
        if (this.remoteVideo.readyState < this.remoteVideo.HAVE_CURRENT_DATA)
            throw new Error("No video stream data available");
        const canvas = document.createElement("canvas");
        canvas.width = this.remoteVideo.videoWidth;
        canvas.height = this.remoteVideo.videoHeight;
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        canvas.getContext("2d").drawImage(this.remoteVideo, 0, 0);
        return canvas;
    }
    init() {
        this.localVideo = this.options.localVideo;
        this.remoteVideo = this.options.remoteVideo;
        this.videoStream = this.options.videoStream;
        this.audioStream = this.options.audioStream;
        this.mediaConstraints = this.options.mediaConstraints;
        this.peerConnection = this.options.peerConnection;
        const sendSource = this.options.sendSource || "webcam";
        const dataChannelConfig = this.options.dataChannelConfig || null;
        const useDataChannels = this.options.dataChannels || false;
        const configuration = this.options.configuration;
        const onicecandidate = this.options.onicecandidate;
        if (onicecandidate)
            this.on("icecandidate", onicecandidate);
        const oncandidategatheringdone = (event) => {
            //console.log("candidategatheringdone", event);
        };
        if (oncandidategatheringdone) {
            this.on("candidategatheringdone", oncandidategatheringdone);
        }
        this.simulcast = this.options.simulcast;
        this.multistream = this.options.multistream;
        this.interop = new sdpTranslator.Interop();
        this.candidatesQueueOut = [];
        this.candidategatheringdone = false;
        // Init PeerConnection
        if (!this.peerConnection) {
            this.peerConnection = new RTCPeerConnection(configuration);
            if (useDataChannels && !this.dataChannel) {
                let dcId = "WebRtcPeer-" + this.id;
                let dcOptions = undefined;
                if (dataChannelConfig) {
                    dcId = dataChannelConfig.id || dcId;
                    dcOptions = dataChannelConfig.options;
                }
                this.dataChannel = this.peerConnection.createDataChannel(dcId, dcOptions);
                if (dataChannelConfig) {
                    this.dataChannel.onopen = dataChannelConfig.onopen;
                    this.dataChannel.onclose = dataChannelConfig.onclose;
                    this.dataChannel.onmessage = dataChannelConfig.onmessage;
                    this.dataChannel.onbufferedamountlow =
                        dataChannelConfig.onbufferedamountlow;
                    this.dataChannel.onerror =
                        dataChannelConfig.onerror || this.noop.bind(this);
                }
            }
        }
        // Shims over the now deprecated getLocalStreams() and getRemoteStreams()
        // (usage of these methods should be dropped altogether)
        if (!this.peerConnection.getLocalStreams &&
            this.peerConnection.getSenders) {
            this.peerConnection.getLocalStreams = () => {
                const stream = new MediaStream();
                this.peerConnection.getSenders().forEach((sender) => {
                    stream.addTrack(sender.track);
                });
                return [stream];
            };
        }
        //if (!this.peerConnection.getRemoteStreams && this.peerConnection.getReceivers) {
        //this built in function is causing issue (remote video was not receiving)
        this.peerConnection.getRemoteStreams = () => {
            const stream = new MediaStream();
            this.peerConnection.getReceivers().forEach((sender) => {
                stream.addTrack(sender.track);
            });
            return [stream];
        };
        //}
        this.peerConnection.addEventListener("icecandidate", this.iceCandidateFunction.bind(this));
        this.peerConnection.onaddstream = this.options.onaddstream;
        this.peerConnection.ontrack = this.options.ontrack;
        this.peerConnection.onnegotiationneeded = this.options.onnegotiationneeded;
        this.peerConnection.addEventListener("iceconnectionstatechange", (event) => {
            //console.log("iceconnectionstatechange", event);
        });
        this.on("newListener", (event, listener) => {
            if (event === "icecandidate" || event === "candidategatheringdone") {
                while (this.candidatesQueueOut && this.candidatesQueueOut.length) {
                    const candidate = this.candidatesQueueOut.shift();
                    if (!candidate === (event === "candidategatheringdone")) {
                        listener(candidate);
                    }
                }
            }
        });
        this.addIceCandidateInternal = this.bufferizeCandidates(this.peerConnection);
        if (this.mode !== "recvonly" && !this.videoStream && !this.audioStream) {
            if (sendSource === "webcam") {
                this.getMedia(this.mediaConstraints);
            }
            else {
                return "Screen implementation not done in this class";
            }
        }
        else {
            setTimeout(() => this.start(), 0);
        }
        this.on("_dispose", () => {
            if (this.localVideo) {
                this.localVideo.pause();
                this.localVideo.srcObject = null;
                this.localVideo.load();
                this.localVideo.muted = false;
            }
            if (this.remoteVideo) {
                this.remoteVideo.pause();
                this.remoteVideo.srcObject = null;
                this.remoteVideo.load();
            }
            this.removeAllListeners();
        });
    }
    getMedia(constraints) {
        if (constraints === undefined) {
            constraints = {
                audio: true,
                video: {
                    width: 640,
                    framerate: 15,
                },
            };
        }
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
            this.videoStream = stream;
            this.start();
        })
            .catch(this.callback);
    }
    // If event.candidate == null, it means that candidate gathering has finished
    // and RTCPeerConnection.iceGatheringState == "complete".
    // Such candidate does not need to be sent to the remote peer.
    // https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/icecandidate_event#Indicating_that_ICE_gathering_is_complete
    iceCandidateFunction(event) {
        const candidate = event.candidate;
        if (events_1.EventEmitter.listenerCount(this, "icecandidate") ||
            events_1.EventEmitter.listenerCount(this, "candidategatheringdone")) {
            if (candidate) {
                let cand;
                if (this.multistream && usePlanB) {
                    cand = this.interop.candidateToUnifiedPlan(candidate);
                }
                else {
                    cand = candidate;
                }
                this.emit("icecandidate", cand);
                this.candidategatheringdone = false;
            }
            else if (!this.candidategatheringdone) {
                this.emit("candidategatheringdone");
                this.candidategatheringdone = true;
            }
        }
        else if (!this.candidategatheringdone) {
            this.candidatesQueueOut.push(candidate);
            if (!candidate)
                this.candidategatheringdone = true;
        }
    }
    /**
     * Callback function invoked when an ICE candidate is received. Developers are
     * expected to invoke this function in order to complete the SDP negotiation.
     *
     * @function module:WebRtcPeer.prototype.addIceCandidate
     *
     * @param ice_candidate - Literal object with the ICE candidate description
     * @param callback - Called when the ICE candidate has been added.
     */
    addIceCandidate(ice_candidate, callback) {
        let candidate;
        if (this.multistream && usePlanB) {
            candidate = this.interop.candidateToPlanB(ice_candidate);
        }
        else {
            candidate = new RTCIceCandidate(ice_candidate);
        }
        logger.debug("Remote ICE candidate received", ice_candidate);
        callback = (callback || this.noop).bind(this);
        this.addIceCandidateInternal(candidate, callback);
    }
    generateOffer(callback, options = {}) {
        callback = callback.bind(this);
        if (this.mode === "recvonly") {
            /* Add reception tracks on the RTCPeerConnection. Send tracks are
             * unconditionally added to "sendonly" and "sendrecv" modes, in the
             * constructor's "start()" method, but nothing is done for "recvonly".
             *
             * Here, we add new transceivers to receive audio and/or video, so the
             * SDP Offer that will be generated by the PC includes these medias
             * with the "a=recvonly" attribute.
             */
            const useAudio = this.mediaConstraints &&
                typeof this.mediaConstraints.audio === "boolean"
                ? this.mediaConstraints.audio
                : true;
            const useVideo = this.mediaConstraints &&
                typeof this.mediaConstraints.video === "boolean"
                ? this.mediaConstraints.video
                : true;
            if (useAudio) {
                this.peerConnection.addTransceiver("audio", {
                    direction: "recvonly",
                });
            }
            if (useVideo) {
                this.peerConnection.addTransceiver("video", {
                    direction: "recvonly",
                });
            }
        }
        else if (this.mode === "sendonly") {
            /* The constructor's "start()" method already added any available track,
             * which by default creates Transceiver with "sendrecv" direction.
             *
             * Here, we set all transceivers to only send audio and/or video, so the
             * SDP Offer that will be generated by the PC includes these medias
             * with the "a=sendonly" attribute.
             */
            this.peerConnection.getTransceivers().forEach((transceiver) => {
                transceiver.direction = "sendonly";
            });
        }
        this.peerConnection
            .createOffer(options)
            .then((offer) => {
            logger.debug("Created SDP offer");
            offer = this.mangleSdpToAddSimulcast(offer);
            return this.peerConnection.setLocalDescription(offer);
        })
            .then(() => {
            let localDescription = this.peerConnection.localDescription;
            logger.debug("Local description set\n", localDescription.sdp);
            if (this.multistream && usePlanB) {
                localDescription = this.interop.toUnifiedPlan(localDescription);
                logger.debug("offer::origPlanB->UnifiedPlan", this.dumpSDP(localDescription));
            }
            callback(null, localDescription.sdp, this.processAnswer.bind(this));
        })
            .catch(callback);
    }
    getLocalSessionDescriptor() {
        return this.peerConnection.localDescription;
    }
    getRemoteSessionDescriptor() {
        return this.peerConnection.remoteDescription;
    }
    setRemoteVideo() {
        if (this.remoteVideo) {
            this.remoteVideo.pause();
            const stream = this.peerConnection.getRemoteStreams()[0];
            this.remoteVideo.srcObject = stream;
            logger.debug("Remote stream:", stream);
            this.remoteVideo.load();
        }
    }
    showLocalVideo() {
        this.localVideo.srcObject = this.videoStream
            ? this.videoStream
            : this.audioStream;
        this.localVideo.muted = true;
    }
    send(data) {
        if (this.dataChannel && this.dataChannel.readyState === "open") {
            this.dataChannel.send(data);
        }
        else {
            logger.warn("Trying to send data over a non-existing or closed data channel");
        }
    }
    /**
     * Callback function invoked when a SDP answer is received. Developers are
     * expected to invoke this function in order to complete the SDP negotiation.
     *
     * @function module:WebRtcPeer.prototype.processAnswer
     *
     * @param sdpAnswer - Description of sdpAnswer
     * @param callback -
     *            Invoked after the SDP answer is processed, or there is an error.
     */
    processAnswer(sdpAnswer, callback) {
        callback = (callback || this.noop).bind(this);
        let answer = new RTCSessionDescription({
            type: "answer",
            sdp: sdpAnswer,
        });
        if (this.multistream && usePlanB) {
            const planBAnswer = this.interop.toPlanB(answer);
            logger.debug("asnwer::planB", this.dumpSDP(planBAnswer));
            answer = planBAnswer;
        }
        logger.debug("SDP answer received, setting remote description");
        if (this.peerConnection.signalingState === "closed") {
            return callback("PeerConnection is closed");
        }
        this.peerConnection.setRemoteDescription(answer).then(() => {
            this.setRemoteVideo();
            callback();
        }, callback);
    }
    /**
     * Callback function invoked when a SDP offer is received. Developers are
     * expected to invoke this function in order to complete the SDP negotiation.
     *
     * @function module:WebRtcPeer.prototype.processOffer
     *
     * @param sdpOffer - Description of sdpOffer
     * @param callback - Called when the remote description has been set
     *  successfully.
     */
    processOffer(sdpOffer, callback) {
        callback = callback.bind(this);
        let offer = new RTCSessionDescription({
            type: "offer",
            sdp: sdpOffer,
        });
        if (this.multistream && usePlanB) {
            const planBOffer = this.interop.toPlanB(offer);
            logger.debug("offer::planB", this.dumpSDP(planBOffer));
            offer = planBOffer;
        }
        logger.debug("SDP offer received, setting remote description");
        if (this.peerConnection.signalingState === "closed") {
            return callback("PeerConnection is closed");
        }
        this.peerConnection
            .setRemoteDescription(offer)
            .then(() => {
            return this.setRemoteVideo();
        })
            .then(() => {
            return this.peerConnection.createAnswer();
        })
            .then((answer) => {
            answer = this.mangleSdpToAddSimulcast(answer);
            logger.debug("Created SDP answer");
            return this.peerConnection.setLocalDescription(answer);
        })
            .then(() => {
            let localDescription = this.peerConnection.localDescription;
            if (this.multistream && usePlanB) {
                localDescription = this.interop.toUnifiedPlan(localDescription);
                logger.debug("answer::origPlanB->UnifiedPlan", this.dumpSDP(localDescription));
            }
            logger.debug("Local description set\n", localDescription.sdp);
            callback(null, localDescription.sdp);
        })
            .catch(callback);
    }
    mangleSdpToAddSimulcast(answer) {
        if (this.simulcast) {
            if (browser.name === "Chrome" || browser.name === "Chromium") {
                logger.debug("Adding multicast info");
                answer = new RTCSessionDescription({
                    type: answer.type,
                    sdp: this.removeFIDFromOffer(answer.sdp) +
                        this.getSimulcastInfo(this.videoStream),
                });
            }
            else {
                logger.warn("Simulcast is only available in Chrome browser.");
            }
        }
        return answer;
    }
    /**
     * This function creates the RTCPeerConnection object taking into account the
     * properties received in the constructor. It starts the SDP negotiation
     * process: generates the SDP offer and invokes the onsdpoffer callback. This
     * callback is expected to send the SDP offer, in order to obtain an SDP
     * answer from another peer.
     */
    start() {
        if (this.peerConnection.signalingState === "closed") {
            this.callback('The peer connection object is in "closed" state. This is most likely due to an invocation of the dispose method before accepting in the dialogue');
        }
        if ((this.audioStream || this.videoStream) && this.localVideo) {
            this.showLocalVideo();
        }
        if (this.videoStream) {
            this.videoStream.getTracks().forEach((track) => {
                this.peerConnection.addTrack(track, this.videoStream);
            });
        }
        if (this.audioStream) {
            this.audioStream.getTracks().forEach((track) => {
                this.peerConnection.addTrack(track, this.audioStream);
            });
        }
        this.callback();
    }
    trackStop(track) {
        track.stop && track.stop();
    }
    streamStop(stream) {
        stream.getTracks().forEach(this.trackStop.bind(this));
    }
    /**
     * Returns a string representation of a SessionDescription object.
     */
    dumpSDP(description) {
        if (typeof description === "undefined" || description === null) {
            return "";
        }
        return "type: " + description.type + "\r\n" + description.sdp;
    }
    bufferizeCandidates(pc, onerror = null) {
        const candidatesQueue = [];
        const signalingstatechangeFunction = () => {
            if (pc.signalingState === "stable") {
                while (candidatesQueue.length) {
                    const entry = candidatesQueue.shift();
                    pc.addIceCandidate(entry.candidate, entry.callback, entry.callback);
                }
            }
        };
        this.peerConnection.addEventListener("signalingstatechange", signalingstatechangeFunction);
        return (candidate, callback) => {
            callback = callback || onerror;
            switch (pc.signalingState) {
                case "closed":
                    callback(new Error("PeerConnection object is closed"));
                    break;
                case "stable":
                    if (pc.remoteDescription) {
                        pc.addIceCandidate(candidate, callback, callback);
                        break;
                    }
                // eslint-disable-next-line no-fallthrough
                default:
                    candidatesQueue.push({
                        candidate: candidate,
                        callback: callback,
                    });
            }
        };
    }
    /* Simulcast utilities */
    removeFIDFromOffer(sdp) {
        const n = sdp.indexOf("a=ssrc-group:FID");
        if (n > 0) {
            return sdp.slice(0, n);
        }
        else {
            return sdp;
        }
    }
    getSimulcastInfo(videoStream) {
        const videoTracks = videoStream.getVideoTracks();
        if (!videoTracks.length) {
            logger.warn("No video tracks available in the video stream");
            return "";
        }
        const lines = [
            "a=x-google-flag:conference",
            "a=ssrc-group:SIM 1 2 3",
            "a=ssrc:1 cname:localVideo",
            "a=ssrc:1 msid:" + videoStream.id + " " + videoTracks[0].id,
            "a=ssrc:1 mslabel:" + videoStream.id,
            "a=ssrc:1 label:" + videoTracks[0].id,
            "a=ssrc:2 cname:localVideo",
            "a=ssrc:2 msid:" + videoStream.id + " " + videoTracks[0].id,
            "a=ssrc:2 mslabel:" + videoStream.id,
            "a=ssrc:2 label:" + videoTracks[0].id,
            "a=ssrc:3 cname:localVideo",
            "a=ssrc:3 msid:" + videoStream.id + " " + videoTracks[0].id,
            "a=ssrc:3 mslabel:" + videoStream.id,
            "a=ssrc:3 label:" + videoTracks[0].id,
        ];
        lines.push("");
        return lines.join("\n");
    }
    getLocalStream(index) {
        if (this.peerConnection) {
            return this.peerConnection.getLocalStreams()[index || 0];
        }
    }
    getRemoteStream(index) {
        if (this.peerConnection) {
            return this.peerConnection.getRemoteStreams()[index || 0];
        }
    }
    /**
     * @description This method frees the resources used by WebRtcPeer.
     *
     * @function module:WebRtcPeer.prototype.dispose
     */
    dispose() {
        logger.debug("Disposing WebRtcPeer");
        const pc = this.peerConnection;
        const dc = this.dataChannel;
        try {
            if (dc) {
                if (dc.readyState === "closed")
                    return;
                dc.close();
            }
            if (pc) {
                if (pc.signalingState === "closed")
                    return;
                pc.getLocalStreams().forEach(this.streamStop.bind(this));
                // FIXME This is not yet implemented in firefox
                // if(videoStream) pc.removeStream(videoStream);
                // if(this.audioStream) pc.removeStream(this.audioStream);
                pc.close();
            }
        }
        catch (err) {
            logger.warn("Exception disposing webrtc peer " + err);
        }
        this.emit("_dispose");
    }
}
//
// Specialized child classes
//
class WebRtcPeerHelper {
    static WebRtcPeerRecvonly(options, callback) {
        return new WebRtcPeer("recvonly", options, callback);
    }
    static WebRtcPeerSendonly(options, callback) {
        return new WebRtcPeer("sendonly", options, callback);
    }
    static WebRtcPeerSendrecv(options, callback) {
        return new WebRtcPeer("sendrecv", options, callback);
    }
}
exports.WebRtcPeerHelper = WebRtcPeerHelper;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/////////////////////////////////////////////////////////////////////////////////
/* UAParser.js v1.0.35
   Copyright © 2012-2021 Faisal Salman <f@faisalman.com>
   MIT License *//*
   Detect Browser, Engine, OS, CPU, and Device type/model from User-Agent data.
   Supports browser & node.js environment. 
   Demo   : https://faisalman.github.io/ua-parser-js
   Source : https://github.com/faisalman/ua-parser-js */
/////////////////////////////////////////////////////////////////////////////////

(function (window, undefined) {

    'use strict';

    //////////////
    // Constants
    /////////////


    var LIBVERSION  = '1.0.35',
        EMPTY       = '',
        UNKNOWN     = '?',
        FUNC_TYPE   = 'function',
        UNDEF_TYPE  = 'undefined',
        OBJ_TYPE    = 'object',
        STR_TYPE    = 'string',
        MAJOR       = 'major',
        MODEL       = 'model',
        NAME        = 'name',
        TYPE        = 'type',
        VENDOR      = 'vendor',
        VERSION     = 'version',
        ARCHITECTURE= 'architecture',
        CONSOLE     = 'console',
        MOBILE      = 'mobile',
        TABLET      = 'tablet',
        SMARTTV     = 'smarttv',
        WEARABLE    = 'wearable',
        EMBEDDED    = 'embedded',
        UA_MAX_LENGTH = 350;

    var AMAZON  = 'Amazon',
        APPLE   = 'Apple',
        ASUS    = 'ASUS',
        BLACKBERRY = 'BlackBerry',
        BROWSER = 'Browser',
        CHROME  = 'Chrome',
        EDGE    = 'Edge',
        FIREFOX = 'Firefox',
        GOOGLE  = 'Google',
        HUAWEI  = 'Huawei',
        LG      = 'LG',
        MICROSOFT = 'Microsoft',
        MOTOROLA  = 'Motorola',
        OPERA   = 'Opera',
        SAMSUNG = 'Samsung',
        SHARP   = 'Sharp',
        SONY    = 'Sony',
        VIERA   = 'Viera',
        XIAOMI  = 'Xiaomi',
        ZEBRA   = 'Zebra',
        FACEBOOK    = 'Facebook',
        CHROMIUM_OS = 'Chromium OS',
        MAC_OS  = 'Mac OS';

    ///////////
    // Helper
    //////////

    var extend = function (regexes, extensions) {
            var mergedRegexes = {};
            for (var i in regexes) {
                if (extensions[i] && extensions[i].length % 2 === 0) {
                    mergedRegexes[i] = extensions[i].concat(regexes[i]);
                } else {
                    mergedRegexes[i] = regexes[i];
                }
            }
            return mergedRegexes;
        },
        enumerize = function (arr) {
            var enums = {};
            for (var i=0; i<arr.length; i++) {
                enums[arr[i].toUpperCase()] = arr[i];
            }
            return enums;
        },
        has = function (str1, str2) {
            return typeof str1 === STR_TYPE ? lowerize(str2).indexOf(lowerize(str1)) !== -1 : false;
        },
        lowerize = function (str) {
            return str.toLowerCase();
        },
        majorize = function (version) {
            return typeof(version) === STR_TYPE ? version.replace(/[^\d\.]/g, EMPTY).split('.')[0] : undefined;
        },
        trim = function (str, len) {
            if (typeof(str) === STR_TYPE) {
                str = str.replace(/^\s\s*/, EMPTY);
                return typeof(len) === UNDEF_TYPE ? str : str.substring(0, UA_MAX_LENGTH);
            }
    };

    ///////////////
    // Map helper
    //////////////

    var rgxMapper = function (ua, arrays) {

            var i = 0, j, k, p, q, matches, match;

            // loop through all regexes maps
            while (i < arrays.length && !matches) {

                var regex = arrays[i],       // even sequence (0,2,4,..)
                    props = arrays[i + 1];   // odd sequence (1,3,5,..)
                j = k = 0;

                // try matching uastring with regexes
                while (j < regex.length && !matches) {

                    if (!regex[j]) { break; }
                    matches = regex[j++].exec(ua);

                    if (!!matches) {
                        for (p = 0; p < props.length; p++) {
                            match = matches[++k];
                            q = props[p];
                            // check if given property is actually array
                            if (typeof q === OBJ_TYPE && q.length > 0) {
                                if (q.length === 2) {
                                    if (typeof q[1] == FUNC_TYPE) {
                                        // assign modified match
                                        this[q[0]] = q[1].call(this, match);
                                    } else {
                                        // assign given value, ignore regex match
                                        this[q[0]] = q[1];
                                    }
                                } else if (q.length === 3) {
                                    // check whether function or regex
                                    if (typeof q[1] === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                        // call function (usually string mapper)
                                        this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                    } else {
                                        // sanitize match using given regex
                                        this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                    }
                                } else if (q.length === 4) {
                                        this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                }
                            } else {
                                this[q] = match ? match : undefined;
                            }
                        }
                    }
                }
                i += 2;
            }
        },

        strMapper = function (str, map) {

            for (var i in map) {
                // check if current value is array
                if (typeof map[i] === OBJ_TYPE && map[i].length > 0) {
                    for (var j = 0; j < map[i].length; j++) {
                        if (has(map[i][j], str)) {
                            return (i === UNKNOWN) ? undefined : i;
                        }
                    }
                } else if (has(map[i], str)) {
                    return (i === UNKNOWN) ? undefined : i;
                }
            }
            return str;
    };

    ///////////////
    // String map
    //////////////

    // Safari < 3.0
    var oldSafariMap = {
            '1.0'   : '/8',
            '1.2'   : '/1',
            '1.3'   : '/3',
            '2.0'   : '/412',
            '2.0.2' : '/416',
            '2.0.3' : '/417',
            '2.0.4' : '/419',
            '?'     : '/'
        },
        windowsVersionMap = {
            'ME'        : '4.90',
            'NT 3.11'   : 'NT3.51',
            'NT 4.0'    : 'NT4.0',
            '2000'      : 'NT 5.0',
            'XP'        : ['NT 5.1', 'NT 5.2'],
            'Vista'     : 'NT 6.0',
            '7'         : 'NT 6.1',
            '8'         : 'NT 6.2',
            '8.1'       : 'NT 6.3',
            '10'        : ['NT 6.4', 'NT 10.0'],
            'RT'        : 'ARM'
    };

    //////////////
    // Regex map
    /////////////

    var regexes = {

        browser : [[

            /\b(?:crmo|crios)\/([\w\.]+)/i                                      // Chrome for Android/iOS
            ], [VERSION, [NAME, 'Chrome']], [
            /edg(?:e|ios|a)?\/([\w\.]+)/i                                       // Microsoft Edge
            ], [VERSION, [NAME, 'Edge']], [

            // Presto based
            /(opera mini)\/([-\w\.]+)/i,                                        // Opera Mini
            /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,                 // Opera Mobi/Tablet
            /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i                           // Opera
            ], [NAME, VERSION], [
            /opios[\/ ]+([\w\.]+)/i                                             // Opera mini on iphone >= 8.0
            ], [VERSION, [NAME, OPERA+' Mini']], [
            /\bopr\/([\w\.]+)/i                                                 // Opera Webkit
            ], [VERSION, [NAME, OPERA]], [

            // Mixed
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,      // Lunascape/Maxthon/Netfront/Jasmine/Blazer
            // Trident based
            /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,               // Avant/IEMobile/SlimBrowser
            /(ba?idubrowser)[\/ ]?([\w\.]+)/i,                                  // Baidu Browser
            /(?:ms|\()(ie) ([\w\.]+)/i,                                         // Internet Explorer

            // Webkit/KHTML based                                               // Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser/QupZilla/Falkon
            /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                                                                                // Rekonq/Puffin/Brave/Whale/QQBrowserLite/QQ, aka ShouQ
            /(heytap|ovi)browser\/([\d\.]+)/i,                                  // Heytap/Ovi
            /(weibo)__([\d\.]+)/i                                               // Weibo
            ], [NAME, VERSION], [
            /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i                 // UCBrowser
            ], [VERSION, [NAME, 'UC'+BROWSER]], [
            /microm.+\bqbcore\/([\w\.]+)/i,                                     // WeChat Desktop for Windows Built-in Browser
            /\bqbcore\/([\w\.]+).+microm/i
            ], [VERSION, [NAME, 'WeChat(Win) Desktop']], [
            /micromessenger\/([\w\.]+)/i                                        // WeChat
            ], [VERSION, [NAME, 'WeChat']], [
            /konqueror\/([\w\.]+)/i                                             // Konqueror
            ], [VERSION, [NAME, 'Konqueror']], [
            /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i                       // IE11
            ], [VERSION, [NAME, 'IE']], [
            /ya(?:search)?browser\/([\w\.]+)/i                                  // Yandex
            ], [VERSION, [NAME, 'Yandex']], [
            /(avast|avg)\/([\w\.]+)/i                                           // Avast/AVG Secure Browser
            ], [[NAME, /(.+)/, '$1 Secure '+BROWSER], VERSION], [
            /\bfocus\/([\w\.]+)/i                                               // Firefox Focus
            ], [VERSION, [NAME, FIREFOX+' Focus']], [
            /\bopt\/([\w\.]+)/i                                                 // Opera Touch
            ], [VERSION, [NAME, OPERA+' Touch']], [
            /coc_coc\w+\/([\w\.]+)/i                                            // Coc Coc Browser
            ], [VERSION, [NAME, 'Coc Coc']], [
            /dolfin\/([\w\.]+)/i                                                // Dolphin
            ], [VERSION, [NAME, 'Dolphin']], [
            /coast\/([\w\.]+)/i                                                 // Opera Coast
            ], [VERSION, [NAME, OPERA+' Coast']], [
            /miuibrowser\/([\w\.]+)/i                                           // MIUI Browser
            ], [VERSION, [NAME, 'MIUI '+BROWSER]], [
            /fxios\/([-\w\.]+)/i                                                // Firefox for iOS
            ], [VERSION, [NAME, FIREFOX]], [
            /\bqihu|(qi?ho?o?|360)browser/i                                     // 360
            ], [[NAME, '360 '+BROWSER]], [
            /(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i
            ], [[NAME, /(.+)/, '$1 '+BROWSER], VERSION], [                      // Oculus/Samsung/Sailfish/Huawei Browser
            /(comodo_dragon)\/([\w\.]+)/i                                       // Comodo Dragon
            ], [[NAME, /_/g, ' '], VERSION], [
            /(electron)\/([\w\.]+) safari/i,                                    // Electron-based App
            /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,                   // Tesla
            /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i            // QQBrowser/Baidu App/2345 Browser
            ], [NAME, VERSION], [
            /(metasr)[\/ ]?([\w\.]+)/i,                                         // SouGouBrowser
            /(lbbrowser)/i,                                                     // LieBao Browser
            /\[(linkedin)app\]/i                                                // LinkedIn App for iOS & Android
            ], [NAME], [

            // WebView
            /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i       // Facebook App for iOS & Android
            ], [[NAME, FACEBOOK], VERSION], [
            /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,                             // Kakao App
            /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,                                  // Naver InApp
            /safari (line)\/([\w\.]+)/i,                                        // Line App for iOS
            /\b(line)\/([\w\.]+)\/iab/i,                                        // Line App for Android
            /(chromium|instagram)[\/ ]([-\w\.]+)/i                              // Chromium/Instagram
            ], [NAME, VERSION], [
            /\bgsa\/([\w\.]+) .*safari\//i                                      // Google Search Appliance on iOS
            ], [VERSION, [NAME, 'GSA']], [
            /musical_ly(?:.+app_?version\/|_)([\w\.]+)/i                        // TikTok
            ], [VERSION, [NAME, 'TikTok']], [

            /headlesschrome(?:\/([\w\.]+)| )/i                                  // Chrome Headless
            ], [VERSION, [NAME, CHROME+' Headless']], [

            / wv\).+(chrome)\/([\w\.]+)/i                                       // Chrome WebView
            ], [[NAME, CHROME+' WebView'], VERSION], [

            /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i           // Android Browser
            ], [VERSION, [NAME, 'Android '+BROWSER]], [

            /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i       // Chrome/OmniWeb/Arora/Tizen/Nokia
            ], [NAME, VERSION], [

            /version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i                      // Mobile Safari
            ], [VERSION, [NAME, 'Mobile Safari']], [
            /version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i                // Safari & Safari Mobile
            ], [VERSION, NAME], [
            /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i                      // Safari < 3.0
            ], [NAME, [VERSION, strMapper, oldSafariMap]], [

            /(webkit|khtml)\/([\w\.]+)/i
            ], [NAME, VERSION], [

            // Gecko based
            /(navigator|netscape\d?)\/([-\w\.]+)/i                              // Netscape
            ], [[NAME, 'Netscape'], VERSION], [
            /mobile vr; rv:([\w\.]+)\).+firefox/i                               // Firefox Reality
            ], [VERSION, [NAME, FIREFOX+' Reality']], [
            /ekiohf.+(flow)\/([\w\.]+)/i,                                       // Flow
            /(swiftfox)/i,                                                      // Swiftfox
            /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                                                                                // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror/Klar
            /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                                                                                // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
            /(firefox)\/([\w\.]+)/i,                                            // Other Firefox-based
            /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,                         // Mozilla

            // Other
            /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                                                                                // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir/Obigo/Mosaic/Go/ICE/UP.Browser
            /(links) \(([\w\.]+)/i,                                             // Links
            /panasonic;(viera)/i                                                // Panasonic Viera
            ], [NAME, VERSION], [
            
            /(cobalt)\/([\w\.]+)/i                                              // Cobalt
            ], [NAME, [VERSION, /master.|lts./, ""]]
        ],

        cpu : [[

            /(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i                     // AMD64 (x64)
            ], [[ARCHITECTURE, 'amd64']], [

            /(ia32(?=;))/i                                                      // IA32 (quicktime)
            ], [[ARCHITECTURE, lowerize]], [

            /((?:i[346]|x)86)[;\)]/i                                            // IA32 (x86)
            ], [[ARCHITECTURE, 'ia32']], [

            /\b(aarch64|arm(v?8e?l?|_?64))\b/i                                 // ARM64
            ], [[ARCHITECTURE, 'arm64']], [

            /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i                                   // ARMHF
            ], [[ARCHITECTURE, 'armhf']], [

            // PocketPC mistakenly identified as PowerPC
            /windows (ce|mobile); ppc;/i
            ], [[ARCHITECTURE, 'arm']], [

            /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i                            // PowerPC
            ], [[ARCHITECTURE, /ower/, EMPTY, lowerize]], [

            /(sun4\w)[;\)]/i                                                    // SPARC
            ], [[ARCHITECTURE, 'sparc']], [

            /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
                                                                                // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
            ], [[ARCHITECTURE, lowerize]]
        ],

        device : [[

            //////////////////////////
            // MOBILES & TABLETS
            /////////////////////////

            // Samsung
            /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, TABLET]], [
            /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
            /samsung[- ]([-\w]+)/i,
            /sec-(sgh\w+)/i
            ], [MODEL, [VENDOR, SAMSUNG], [TYPE, MOBILE]], [

            // Apple
            /(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i                          // iPod/iPhone
            ], [MODEL, [VENDOR, APPLE], [TYPE, MOBILE]], [
            /\((ipad);[-\w\),; ]+apple/i,                                       // iPad
            /applecoremedia\/[\w\.]+ \((ipad)/i,
            /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
            ], [MODEL, [VENDOR, APPLE], [TYPE, TABLET]], [
            /(macintosh);/i
            ], [MODEL, [VENDOR, APPLE]], [

            // Sharp
            /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
            ], [MODEL, [VENDOR, SHARP], [TYPE, MOBILE]], [

            // Huawei
            /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, TABLET]], [
            /(?:huawei|honor)([-\w ]+)[;\)]/i,
            /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i
            ], [MODEL, [VENDOR, HUAWEI], [TYPE, MOBILE]], [

            // Xiaomi
            /\b(poco[\w ]+)(?: bui|\))/i,                                       // Xiaomi POCO
            /\b; (\w+) build\/hm\1/i,                                           // Xiaomi Hongmi 'numeric' models
            /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,                             // Xiaomi Hongmi
            /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,                   // Xiaomi Redmi
            /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i // Xiaomi Mi
            ], [[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, MOBILE]], [
            /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i                        // Mi Pad tablets
            ],[[MODEL, /_/g, ' '], [VENDOR, XIAOMI], [TYPE, TABLET]], [

            // OPPO
            /; (\w+) bui.+ oppo/i,
            /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
            ], [MODEL, [VENDOR, 'OPPO'], [TYPE, MOBILE]], [

            // Vivo
            /vivo (\w+)(?: bui|\))/i,
            /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
            ], [MODEL, [VENDOR, 'Vivo'], [TYPE, MOBILE]], [

            // Realme
            /\b(rmx[12]\d{3})(?: bui|;|\))/i
            ], [MODEL, [VENDOR, 'Realme'], [TYPE, MOBILE]], [

            // Motorola
            /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
            /\bmot(?:orola)?[- ](\w*)/i,
            /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, MOBILE]], [
            /\b(mz60\d|xoom[2 ]{0,2}) build\//i
            ], [MODEL, [VENDOR, MOTOROLA], [TYPE, TABLET]], [

            // LG
            /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
            ], [MODEL, [VENDOR, LG], [TYPE, TABLET]], [
            /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
            /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
            /\blg-?([\d\w]+) bui/i
            ], [MODEL, [VENDOR, LG], [TYPE, MOBILE]], [

            // Lenovo
            /(ideatab[-\w ]+)/i,
            /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
            ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [

            // Nokia
            /(?:maemo|nokia).*(n900|lumia \d+)/i,
            /nokia[-_ ]?([-\w\.]*)/i
            ], [[MODEL, /_/g, ' '], [VENDOR, 'Nokia'], [TYPE, MOBILE]], [

            // Google
            /(pixel c)\b/i                                                      // Google Pixel C
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, TABLET]], [
            /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i                         // Google Pixel
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, MOBILE]], [

            // Sony
            /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
            ], [MODEL, [VENDOR, SONY], [TYPE, MOBILE]], [
            /sony tablet [ps]/i,
            /\b(?:sony)?sgp\w+(?: bui|\))/i
            ], [[MODEL, 'Xperia Tablet'], [VENDOR, SONY], [TYPE, TABLET]], [

            // OnePlus
            / (kb2005|in20[12]5|be20[12][59])\b/i,
            /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
            ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [

            // Amazon
            /(alexa)webm/i,
            /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,                             // Kindle Fire without Silk / Echo Show
            /(kf[a-z]+)( bui|\)).+silk\//i                                      // Kindle Fire HD
            ], [MODEL, [VENDOR, AMAZON], [TYPE, TABLET]], [
            /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i                     // Fire Phone
            ], [[MODEL, /(.+)/g, 'Fire Phone $1'], [VENDOR, AMAZON], [TYPE, MOBILE]], [

            // BlackBerry
            /(playbook);[-\w\),; ]+(rim)/i                                      // BlackBerry PlayBook
            ], [MODEL, VENDOR, [TYPE, TABLET]], [
            /\b((?:bb[a-f]|st[hv])100-\d)/i,
            /\(bb10; (\w+)/i                                                    // BlackBerry 10
            ], [MODEL, [VENDOR, BLACKBERRY], [TYPE, MOBILE]], [

            // Asus
            /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, TABLET]], [
            / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
            ], [MODEL, [VENDOR, ASUS], [TYPE, MOBILE]], [

            // HTC
            /(nexus 9)/i                                                        // HTC Nexus 9
            ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [
            /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,                         // HTC

            // ZTE
            /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
            /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i         // Alcatel/GeeksPhone/Nexian/Panasonic/Sony
            ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [

            // Acer
            /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
            ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [

            // Meizu
            /droid.+; (m[1-5] note) bui/i,
            /\bmz-([-\w]{2,})/i
            ], [MODEL, [VENDOR, 'Meizu'], [TYPE, MOBILE]], [

            // MIXED
            /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                                                                                // BlackBerry/BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
            /(hp) ([\w ]+\w)/i,                                                 // HP iPAQ
            /(asus)-?(\w+)/i,                                                   // Asus
            /(microsoft); (lumia[\w ]+)/i,                                      // Microsoft Lumia
            /(lenovo)[-_ ]?([-\w]+)/i,                                          // Lenovo
            /(jolla)/i,                                                         // Jolla
            /(oppo) ?([\w ]+) bui/i                                             // OPPO
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [

            /(kobo)\s(ereader|touch)/i,                                         // Kobo
            /(archos) (gamepad2?)/i,                                            // Archos
            /(hp).+(touchpad(?!.+tablet)|tablet)/i,                             // HP TouchPad
            /(kindle)\/([\w\.]+)/i,                                             // Kindle
            /(nook)[\w ]+build\/(\w+)/i,                                        // Nook
            /(dell) (strea[kpr\d ]*[\dko])/i,                                   // Dell Streak
            /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,                                  // Le Pan Tablets
            /(trinity)[- ]*(t\d{3}) bui/i,                                      // Trinity Tablets
            /(gigaset)[- ]+(q\w{1,9}) bui/i,                                    // Gigaset Tablets
            /(vodafone) ([\w ]+)(?:\)| bui)/i                                   // Vodafone
            ], [VENDOR, MODEL, [TYPE, TABLET]], [

            /(surface duo)/i                                                    // Surface Duo
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, TABLET]], [
            /droid [\d\.]+; (fp\du?)(?: b|\))/i                                 // Fairphone
            ], [MODEL, [VENDOR, 'Fairphone'], [TYPE, MOBILE]], [
            /(u304aa)/i                                                         // AT&T
            ], [MODEL, [VENDOR, 'AT&T'], [TYPE, MOBILE]], [
            /\bsie-(\w*)/i                                                      // Siemens
            ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [
            /\b(rct\w+) b/i                                                     // RCA Tablets
            ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [
            /\b(venue[\d ]{2,7}) b/i                                            // Dell Venue Tablets
            ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [
            /\b(q(?:mv|ta)\w+) b/i                                              // Verizon Tablet
            ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [
            /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i                       // Barnes & Noble Tablet
            ], [MODEL, [VENDOR, 'Barnes & Noble'], [TYPE, TABLET]], [
            /\b(tm\d{3}\w+) b/i
            ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [
            /\b(k88) b/i                                                        // ZTE K Series Tablet
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, TABLET]], [
            /\b(nx\d{3}j) b/i                                                   // ZTE Nubia
            ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
            /\b(gen\d{3}) b.+49h/i                                              // Swiss GEN Mobile
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [
            /\b(zur\d{3}) b/i                                                   // Swiss ZUR Tablet
            ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [
            /\b((zeki)?tb.*\b) b/i                                              // Zeki Tablets
            ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [
            /\b([yr]\d{2}) b/i,
            /\b(dragon[- ]+touch |dt)(\w{5}) b/i                                // Dragon Touch Tablet
            ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [
            /\b(ns-?\w{0,9}) b/i                                                // Insignia Tablets
            ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [
            /\b((nxa|next)-?\w{0,9}) b/i                                        // NextBook Tablets
            ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [
            /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i                  // Voice Xtreme Phones
            ], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [
            /\b(lvtel\-)?(v1[12]) b/i                                           // LvTel Phones
            ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [
            /\b(ph-1) /i                                                        // Essential PH-1
            ], [MODEL, [VENDOR, 'Essential'], [TYPE, MOBILE]], [
            /\b(v(100md|700na|7011|917g).*\b) b/i                               // Envizen Tablets
            ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [
            /\b(trio[-\w\. ]+) b/i                                              // MachSpeed Tablets
            ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [
            /\btu_(1491) b/i                                                    // Rotor Tablets
            ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [
            /(shield[\w ]+) b/i                                                 // Nvidia Shield Tablets
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, TABLET]], [
            /(sprint) (\w+)/i                                                   // Sprint Phones
            ], [VENDOR, MODEL, [TYPE, MOBILE]], [
            /(kin\.[onetw]{3})/i                                                // Microsoft Kin
            ], [[MODEL, /\./g, ' '], [VENDOR, MICROSOFT], [TYPE, MOBILE]], [
            /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i             // Zebra
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, TABLET]], [
            /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, MOBILE]], [

            ///////////////////
            // SMARTTVS
            ///////////////////

            /smart-tv.+(samsung)/i                                              // Samsung
            ], [VENDOR, [TYPE, SMARTTV]], [
            /hbbtv.+maple;(\d+)/i
            ], [[MODEL, /^/, 'SmartTV'], [VENDOR, SAMSUNG], [TYPE, SMARTTV]], [
            /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i        // LG SmartTV
            ], [[VENDOR, LG], [TYPE, SMARTTV]], [
            /(apple) ?tv/i                                                      // Apple TV
            ], [VENDOR, [MODEL, APPLE+' TV'], [TYPE, SMARTTV]], [
            /crkey/i                                                            // Google Chromecast
            ], [[MODEL, CHROME+'cast'], [VENDOR, GOOGLE], [TYPE, SMARTTV]], [
            /droid.+aft(\w)( bui|\))/i                                          // Fire TV
            ], [MODEL, [VENDOR, AMAZON], [TYPE, SMARTTV]], [
            /\(dtv[\);].+(aquos)/i,
            /(aquos-tv[\w ]+)\)/i                                               // Sharp
            ], [MODEL, [VENDOR, SHARP], [TYPE, SMARTTV]],[
            /(bravia[\w ]+)( bui|\))/i                                              // Sony
            ], [MODEL, [VENDOR, SONY], [TYPE, SMARTTV]], [
            /(mitv-\w{5}) bui/i                                                 // Xiaomi
            ], [MODEL, [VENDOR, XIAOMI], [TYPE, SMARTTV]], [
            /Hbbtv.*(technisat) (.*);/i                                         // TechniSAT
            ], [VENDOR, MODEL, [TYPE, SMARTTV]], [
            /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,                          // Roku
            /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i         // HbbTV devices
            ], [[VENDOR, trim], [MODEL, trim], [TYPE, SMARTTV]], [
            /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i                   // SmartTV from Unidentified Vendors
            ], [[TYPE, SMARTTV]], [

            ///////////////////
            // CONSOLES
            ///////////////////

            /(ouya)/i,                                                          // Ouya
            /(nintendo) ([wids3utch]+)/i                                        // Nintendo
            ], [VENDOR, MODEL, [TYPE, CONSOLE]], [
            /droid.+; (shield) bui/i                                            // Nvidia
            ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [
            /(playstation [345portablevi]+)/i                                   // Playstation
            ], [MODEL, [VENDOR, SONY], [TYPE, CONSOLE]], [
            /\b(xbox(?: one)?(?!; xbox))[\); ]/i                                // Microsoft Xbox
            ], [MODEL, [VENDOR, MICROSOFT], [TYPE, CONSOLE]], [

            ///////////////////
            // WEARABLES
            ///////////////////

            /((pebble))app/i                                                    // Pebble
            ], [VENDOR, MODEL, [TYPE, WEARABLE]], [
            /(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i                              // Apple Watch
            ], [MODEL, [VENDOR, APPLE], [TYPE, WEARABLE]], [
            /droid.+; (glass) \d/i                                              // Google Glass
            ], [MODEL, [VENDOR, GOOGLE], [TYPE, WEARABLE]], [
            /droid.+; (wt63?0{2,3})\)/i
            ], [MODEL, [VENDOR, ZEBRA], [TYPE, WEARABLE]], [
            /(quest( 2| pro)?)/i                                                // Oculus Quest
            ], [MODEL, [VENDOR, FACEBOOK], [TYPE, WEARABLE]], [

            ///////////////////
            // EMBEDDED
            ///////////////////

            /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i                              // Tesla
            ], [VENDOR, [TYPE, EMBEDDED]], [
            /(aeobc)\b/i                                                        // Echo Dot
            ], [MODEL, [VENDOR, AMAZON], [TYPE, EMBEDDED]], [

            ////////////////////
            // MIXED (GENERIC)
            ///////////////////

            /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i           // Android Phones from Unidentified Vendors
            ], [MODEL, [TYPE, MOBILE]], [
            /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i       // Android Tablets from Unidentified Vendors
            ], [MODEL, [TYPE, TABLET]], [
            /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i                      // Unidentifiable Tablet
            ], [[TYPE, TABLET]], [
            /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i    // Unidentifiable Mobile
            ], [[TYPE, MOBILE]], [
            /(android[-\w\. ]{0,9});.+buil/i                                    // Generic Android Device
            ], [MODEL, [VENDOR, 'Generic']]
        ],

        engine : [[

            /windows.+ edge\/([\w\.]+)/i                                       // EdgeHTML
            ], [VERSION, [NAME, EDGE+'HTML']], [

            /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i                         // Blink
            ], [VERSION, [NAME, 'Blink']], [

            /(presto)\/([\w\.]+)/i,                                             // Presto
            /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, // WebKit/Trident/NetFront/NetSurf/Amaya/Lynx/w3m/Goanna
            /ekioh(flow)\/([\w\.]+)/i,                                          // Flow
            /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,                           // KHTML/Tasman/Links
            /(icab)[\/ ]([23]\.[\d\.]+)/i,                                      // iCab
            /\b(libweb)/i
            ], [NAME, VERSION], [

            /rv\:([\w\.]{1,9})\b.+(gecko)/i                                     // Gecko
            ], [VERSION, NAME]
        ],

        os : [[

            // Windows
            /microsoft (windows) (vista|xp)/i                                   // Windows (iTunes)
            ], [NAME, VERSION], [
            /(windows) nt 6\.2; (arm)/i,                                        // Windows RT
            /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,            // Windows Phone
            /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
            ], [NAME, [VERSION, strMapper, windowsVersionMap]], [
            /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
            ], [[NAME, 'Windows'], [VERSION, strMapper, windowsVersionMap]], [

            // iOS/macOS
            /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,              // iOS
            /ios;fbsv\/([\d\.]+)/i,
            /cfnetwork\/.+darwin/i
            ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [
            /(mac os x) ?([\w\. ]*)/i,
            /(macintosh|mac_powerpc\b)(?!.+haiku)/i                             // Mac OS
            ], [[NAME, MAC_OS], [VERSION, /_/g, '.']], [

            // Mobile OSes
            /droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i                    // Android-x86/HarmonyOS
            ], [VERSION, NAME], [                                               // Android/WebOS/QNX/Bada/RIM/Maemo/MeeGo/Sailfish OS
            /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
            /(blackberry)\w*\/([\w\.]*)/i,                                      // Blackberry
            /(tizen|kaios)[\/ ]([\w\.]+)/i,                                     // Tizen/KaiOS
            /\((series40);/i                                                    // Series 40
            ], [NAME, VERSION], [
            /\(bb(10);/i                                                        // BlackBerry 10
            ], [VERSION, [NAME, BLACKBERRY]], [
            /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i         // Symbian
            ], [VERSION, [NAME, 'Symbian']], [
            /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i // Firefox OS
            ], [VERSION, [NAME, FIREFOX+' OS']], [
            /web0s;.+rt(tv)/i,
            /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i                              // WebOS
            ], [VERSION, [NAME, 'webOS']], [
            /watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i                              // watchOS
            ], [VERSION, [NAME, 'watchOS']], [

            // Google Chromecast
            /crkey\/([\d\.]+)/i                                                 // Google Chromecast
            ], [VERSION, [NAME, CHROME+'cast']], [
            /(cros) [\w]+(?:\)| ([\w\.]+)\b)/i                                  // Chromium OS
            ], [[NAME, CHROMIUM_OS], VERSION],[

            // Smart TVs
            /panasonic;(viera)/i,                                               // Panasonic Viera
            /(netrange)mmh/i,                                                   // Netrange
            /(nettv)\/(\d+\.[\w\.]+)/i,                                         // NetTV

            // Console
            /(nintendo|playstation) ([wids345portablevuch]+)/i,                 // Nintendo/Playstation
            /(xbox); +xbox ([^\);]+)/i,                                         // Microsoft Xbox (360, One, X, S, Series X, Series S)

            // Other
            /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,                            // Joli/Palm
            /(mint)[\/\(\) ]?(\w*)/i,                                           // Mint
            /(mageia|vectorlinux)[; ]/i,                                        // Mageia/VectorLinux
            /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                                                                                // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
            /(hurd|linux) ?([\w\.]*)/i,                                         // Hurd/Linux
            /(gnu) ?([\w\.]*)/i,                                                // GNU
            /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
            /(haiku) (\w+)/i                                                    // Haiku
            ], [NAME, VERSION], [
            /(sunos) ?([\w\.\d]*)/i                                             // Solaris
            ], [[NAME, 'Solaris'], VERSION], [
            /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,                              // Solaris
            /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,                                  // AIX
            /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
            /(unix) ?([\w\.]*)/i                                                // UNIX
            ], [NAME, VERSION]
        ]
    };

    /////////////////
    // Constructor
    ////////////////

    var UAParser = function (ua, extensions) {

        if (typeof ua === OBJ_TYPE) {
            extensions = ua;
            ua = undefined;
        }

        if (!(this instanceof UAParser)) {
            return new UAParser(ua, extensions).getResult();
        }

        var _navigator = (typeof window !== UNDEF_TYPE && window.navigator) ? window.navigator : undefined;
        var _ua = ua || ((_navigator && _navigator.userAgent) ? _navigator.userAgent : EMPTY);
        var _uach = (_navigator && _navigator.userAgentData) ? _navigator.userAgentData : undefined;
        var _rgxmap = extensions ? extend(regexes, extensions) : regexes;
        var _isSelfNav = _navigator && _navigator.userAgent == _ua;

        this.getBrowser = function () {
            var _browser = {};
            _browser[NAME] = undefined;
            _browser[VERSION] = undefined;
            rgxMapper.call(_browser, _ua, _rgxmap.browser);
            _browser[MAJOR] = majorize(_browser[VERSION]);
            // Brave-specific detection
            if (_isSelfNav && _navigator && _navigator.brave && typeof _navigator.brave.isBrave == FUNC_TYPE) {
                _browser[NAME] = 'Brave';
            }
            return _browser;
        };
        this.getCPU = function () {
            var _cpu = {};
            _cpu[ARCHITECTURE] = undefined;
            rgxMapper.call(_cpu, _ua, _rgxmap.cpu);
            return _cpu;
        };
        this.getDevice = function () {
            var _device = {};
            _device[VENDOR] = undefined;
            _device[MODEL] = undefined;
            _device[TYPE] = undefined;
            rgxMapper.call(_device, _ua, _rgxmap.device);
            if (_isSelfNav && !_device[TYPE] && _uach && _uach.mobile) {
                _device[TYPE] = MOBILE;
            }
            // iPadOS-specific detection: identified as Mac, but has some iOS-only properties
            if (_isSelfNav && _device[MODEL] == 'Macintosh' && _navigator && typeof _navigator.standalone !== UNDEF_TYPE && _navigator.maxTouchPoints && _navigator.maxTouchPoints > 2) {
                _device[MODEL] = 'iPad';
                _device[TYPE] = TABLET;
            }
            return _device;
        };
        this.getEngine = function () {
            var _engine = {};
            _engine[NAME] = undefined;
            _engine[VERSION] = undefined;
            rgxMapper.call(_engine, _ua, _rgxmap.engine);
            return _engine;
        };
        this.getOS = function () {
            var _os = {};
            _os[NAME] = undefined;
            _os[VERSION] = undefined;
            rgxMapper.call(_os, _ua, _rgxmap.os);
            if (_isSelfNav && !_os[NAME] && _uach && _uach.platform != 'Unknown') {
                _os[NAME] = _uach.platform  
                                    .replace(/chrome os/i, CHROMIUM_OS)
                                    .replace(/macos/i, MAC_OS);           // backward compatibility
            }
            return _os;
        };
        this.getResult = function () {
            return {
                ua      : this.getUA(),
                browser : this.getBrowser(),
                engine  : this.getEngine(),
                os      : this.getOS(),
                device  : this.getDevice(),
                cpu     : this.getCPU()
            };
        };
        this.getUA = function () {
            return _ua;
        };
        this.setUA = function (ua) {
            _ua = (typeof ua === STR_TYPE && ua.length > UA_MAX_LENGTH) ? trim(ua, UA_MAX_LENGTH) : ua;
            return this;
        };
        this.setUA(_ua);
        return this;
    };

    UAParser.VERSION = LIBVERSION;
    UAParser.BROWSER =  enumerize([NAME, VERSION, MAJOR]);
    UAParser.CPU = enumerize([ARCHITECTURE]);
    UAParser.DEVICE = enumerize([MODEL, VENDOR, TYPE, CONSOLE, MOBILE, SMARTTV, TABLET, WEARABLE, EMBEDDED]);
    UAParser.ENGINE = UAParser.OS = enumerize([NAME, VERSION]);

    ///////////
    // Export
    //////////

    // check js environment
    if (typeof(exports) !== UNDEF_TYPE) {
        // nodejs env
        if (typeof module !== UNDEF_TYPE && module.exports) {
            exports = module.exports = UAParser;
        }
        exports.UAParser = UAParser;
    } else {
        // requirejs env (optional)
        if ("function" === FUNC_TYPE && __webpack_require__(19)) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
                return UAParser;
            }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else if (typeof window !== UNDEF_TYPE) {
            // browser env
            window.UAParser = UAParser;
        }
    }

    // jQuery/Zepto specific (optional)
    // Note:
    //   In AMD env the global scope should be kept clean, but jQuery is an exception.
    //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
    //   and we should catch that.
    var $ = typeof window !== UNDEF_TYPE && (window.jQuery || window.Zepto);
    if ($ && !$.ua) {
        var parser = new UAParser();
        $.ua = parser.getResult();
        $.ua.get = function () {
            return parser.getUA();
        };
        $.ua.set = function (ua) {
            parser.setUA(ua);
            var result = parser.getResult();
            for (var prop in result) {
                $.ua[prop] = result[prop];
            }
        };
    }

})(typeof window === 'object' ? window : this);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

/* Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

exports.Interop = __webpack_require__(21);


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* global RTCSessionDescription */
/* global RTCIceCandidate */
/* jshint -W097 */


var transform = __webpack_require__(22);
var arrayEquals = __webpack_require__(27);

function Interop() {

    /**
     * This map holds the most recent Unified Plan offer/answer SDP that was
     * converted to Plan B, with the SDP type ('offer' or 'answer') as keys and
     * the SDP string as values.
     *
     * @type {{}}
     */
    this.cache = {
        mlB2UMap : {},
        mlU2BMap : {}
    };
}

module.exports = Interop;

/**
 * Changes the candidate args to match with the related Unified Plan
 */
Interop.prototype.candidateToUnifiedPlan = function(candidate) {
    var cand = new RTCIceCandidate(candidate);

    cand.sdpMLineIndex = this.cache.mlB2UMap[cand.sdpMLineIndex];
    /* TODO: change sdpMid to (audio|video)-SSRC */

    return cand;
};

/**
 * Changes the candidate args to match with the related Plan B
 */
Interop.prototype.candidateToPlanB = function(candidate) {
    var cand = new RTCIceCandidate(candidate);

    if (cand.sdpMid.indexOf('audio') === 0) {
      cand.sdpMid = 'audio';
    } else if (cand.sdpMid.indexOf('video') === 0) {
      cand.sdpMid = 'video';
    } else {
      throw new Error('candidate with ' + cand.sdpMid + ' not allowed');
    }

    cand.sdpMLineIndex = this.cache.mlU2BMap[cand.sdpMLineIndex];

    return cand;
};

/**
 * Returns the index of the first m-line with the given media type and with a
 * direction which allows sending, in the last Unified Plan description with
 * type "answer" converted to Plan B. Returns {null} if there is no saved
 * answer, or if none of its m-lines with the given type allow sending.
 * @param type the media type ("audio" or "video").
 * @returns {*}
 */
Interop.prototype.getFirstSendingIndexFromAnswer = function(type) {
    if (!this.cache.answer) {
        return null;
    }

    var session = transform.parse(this.cache.answer);
    if (session && session.media && Array.isArray(session.media)){
        for (var i = 0; i < session.media.length; i++) {
            if (session.media[i].type == type &&
                (!session.media[i].direction /* default to sendrecv */ ||
                    session.media[i].direction === 'sendrecv' ||
                    session.media[i].direction === 'sendonly')){
                return i;
            }
        }
    }

    return null;
};

/**
 * This method transforms a Unified Plan SDP to an equivalent Plan B SDP. A
 * PeerConnection wrapper transforms the SDP to Plan B before passing it to the
 * application.
 *
 * @param desc
 * @returns {*}
 */
Interop.prototype.toPlanB = function(desc) {
    var self = this;
    //#region Preliminary input validation.

    if (typeof desc !== 'object' || desc === null ||
        typeof desc.sdp !== 'string') {
        console.warn('An empty description was passed as an argument.');
        return desc;
    }

    // Objectify the SDP for easier manipulation.
    var session = transform.parse(desc.sdp);

    // If the SDP contains no media, there's nothing to transform.
    if (typeof session.media === 'undefined' ||
        !Array.isArray(session.media) || session.media.length === 0) {
        console.warn('The description has no media.');
        return desc;
    }

    // Try some heuristics to "make sure" this is a Unified Plan SDP. Plan B
    // SDP has a video, an audio and a data "channel" at most.
    if (session.media.length <= 3 && session.media.every(function(m) {
            return ['video', 'audio', 'data'].indexOf(m.mid) !== -1;
        })) {
        console.warn('This description does not look like Unified Plan.');
        return desc;
    }

    //#endregion

    // HACK https://bugzilla.mozilla.org/show_bug.cgi?id=1113443
    var sdp = desc.sdp;
    var rewrite = false;
    for (var i = 0; i < session.media.length; i++) {
        var uLine = session.media[i];
        uLine.rtp.forEach(function(rtp) {
            if (rtp.codec === 'NULL')
            {
                rewrite = true;
                var offer = transform.parse(self.cache.offer);
                rtp.codec = offer.media[i].rtp[0].codec;
            }
        });
    }
    if (rewrite) {
        sdp = transform.write(session);
    }

    // Unified Plan SDP is our "precious". Cache it for later use in the Plan B
    // -> Unified Plan transformation.
    this.cache[desc.type] = sdp;

    //#region Convert from Unified Plan to Plan B.

    // We rebuild the session.media array.
    var media = session.media;
    session.media = [];

    // Associative array that maps channel types to channel objects for fast
    // access to channel objects by their type, e.g. type2bl['audio']->channel
    // obj.
    var type2bl = {};

    // Used to build the group:BUNDLE value after the channels construction
    // loop.
    var types = [];

    media.forEach(function(uLine) {
        // rtcp-mux is required in the Plan B SDP.
        if ((typeof uLine.rtcpMux !== 'string' ||
            uLine.rtcpMux !== 'rtcp-mux') &&
            uLine.direction !== 'inactive') {
            throw new Error('Cannot convert to Plan B because m-lines ' +
                'without the rtcp-mux attribute were found.');
        }

        // If we don't have a channel for this uLine.type OR the selected is
        // inactive, then select this uLine as the channel basis.
        if (typeof type2bl[uLine.type] === 'undefined' ||
            type2bl[uLine.type].direction === 'inactive') {
            type2bl[uLine.type] = uLine;
        }

        if (uLine.protocol != type2bl[uLine.type].protocol) {
          throw new Error('Cannot convert to Plan B because m-lines ' +
              'have different protocols and this library does not have ' +
              'support for that');
        }

        if (uLine.payloads != type2bl[uLine.type].payloads) {
          throw new Error('Cannot convert to Plan B because m-lines ' +
              'have different payloads and this library does not have ' +
              'support for that');
        }

    });

    // Implode the Unified Plan m-lines/tracks into Plan B channels.
    media.forEach(function(uLine) {
        if (uLine.type === 'application') {
            session.media.push(uLine);
            types.push(uLine.mid);
            return;
        }

        // Add sources to the channel and handle a=msid.
        if (typeof uLine.sources === 'object') {
            Object.keys(uLine.sources).forEach(function(ssrc) {
                if (typeof type2bl[uLine.type].sources !== 'object')
                    type2bl[uLine.type].sources = {};

                // Assign the sources to the channel.
                type2bl[uLine.type].sources[ssrc] =
                    uLine.sources[ssrc];

                if (typeof uLine.msid !== 'undefined') {
                    // In Plan B the msid is an SSRC attribute. Also, we don't
                    // care about the obsolete label and mslabel attributes.
                    //
                    // Note that it is not guaranteed that the uLine will
                    // have an msid. recvonly channels in particular don't have
                    // one.
                    type2bl[uLine.type].sources[ssrc].msid =
                        uLine.msid;
                }
                // NOTE ssrcs in ssrc groups will share msids, as
                // draft-uberti-rtcweb-plan-00 mandates.
            });
        }

        // Add ssrc groups to the channel.
        if (typeof uLine.ssrcGroups !== 'undefined' &&
                Array.isArray(uLine.ssrcGroups)) {

            // Create the ssrcGroups array, if it's not defined.
            if (typeof type2bl[uLine.type].ssrcGroups === 'undefined' ||
                    !Array.isArray(type2bl[uLine.type].ssrcGroups)) {
                type2bl[uLine.type].ssrcGroups = [];
            }

            type2bl[uLine.type].ssrcGroups =
                type2bl[uLine.type].ssrcGroups.concat(
                    uLine.ssrcGroups);
        }

        if (type2bl[uLine.type] === uLine) {
            // Plan B mids are in ['audio', 'video', 'data']
            uLine.mid = uLine.type;

            // Plan B doesn't support/need the bundle-only attribute.
            delete uLine.bundleOnly;

            // In Plan B the msid is an SSRC attribute.
            delete uLine.msid;

	    if (uLine.type == media[0].type) {
	      types.unshift(uLine.type);
	      // Add the channel to the new media array.
	      session.media.unshift(uLine);
	    } else {
	      types.push(uLine.type);
	      // Add the channel to the new media array.
	      session.media.push(uLine);
	    }
        }
    });

    if (typeof session.groups !== 'undefined') {
      // We regenerate the BUNDLE group with the new mids.
      session.groups.some(function(group) {
	  if (group.type === 'BUNDLE') {
	      group.mids = types.join(' ');
	      return true;
	  }
      });
    }

    // msid semantic
    session.msidSemantic = {
        semantic: 'WMS',
        token: '*'
    };

    var resStr = transform.write(session);

    return new RTCSessionDescription({
        type: desc.type,
        sdp: resStr
    });

    //#endregion
};

/* follow rules defined in RFC4145 */
function addSetupAttr(uLine) {
    if (typeof uLine.setup === 'undefined') {
        return;
    }

    if (uLine.setup === "active") {
            uLine.setup = "passive";
    } else if (uLine.setup === "passive") {
        uLine.setup = "active";
    }
}

/**
 * This method transforms a Plan B SDP to an equivalent Unified Plan SDP. A
 * PeerConnection wrapper transforms the SDP to Unified Plan before passing it
 * to FF.
 *
 * @param desc
 * @returns {*}
 */
Interop.prototype.toUnifiedPlan = function(desc) {
    var self = this;
    //#region Preliminary input validation.

    if (typeof desc !== 'object' || desc === null ||
        typeof desc.sdp !== 'string') {
        console.warn('An empty description was passed as an argument.');
        return desc;
    }

    var session = transform.parse(desc.sdp);

    // If the SDP contains no media, there's nothing to transform.
    if (typeof session.media === 'undefined' ||
        !Array.isArray(session.media) || session.media.length === 0) {
        console.warn('The description has no media.');
        return desc;
    }

    // Try some heuristics to "make sure" this is a Plan B SDP. Plan B SDP has
    // a video, an audio and a data "channel" at most.
    if (session.media.length > 3 || !session.media.every(function(m) {
            return ['video', 'audio', 'data'].indexOf(m.mid) !== -1;
        })) {
        console.warn('This description does not look like Plan B.');
        return desc;
    }

    // Make sure this Plan B SDP can be converted to a Unified Plan SDP.
    var mids = [];
    session.media.forEach(function(m) {
        mids.push(m.mid);
    });

    var hasBundle = false;
    if (typeof session.groups !== 'undefined' &&
        Array.isArray(session.groups)) {
        hasBundle = session.groups.every(function(g) {
            return g.type !== 'BUNDLE' ||
                arrayEquals.apply(g.mids.sort(), [mids.sort()]);
        });
    }

    if (!hasBundle) {
        var mustBeBundle = false;

        session.media.forEach(function(m) {
            if (m.direction !== 'inactive') {
                mustBeBundle = true;
            }
        });

        if (mustBeBundle) {
            throw new Error("Cannot convert to Unified Plan because m-lines that" +
              " are not bundled were found.");
        }
    }

    //#endregion


    //#region Convert from Plan B to Unified Plan.

    // Unfortunately, a Plan B offer/answer doesn't have enough information to
    // rebuild an equivalent Unified Plan offer/answer.
    //
    // For example, if this is a local answer (in Unified Plan style) that we
    // convert to Plan B prior to handing it over to the application (the
    // PeerConnection wrapper called us, for instance, after a successful
    // createAnswer), we want to remember the m-line at which we've seen the
    // (local) SSRC. That's because when the application wants to do call the
    // SLD method, forcing us to do the inverse transformation (from Plan B to
    // Unified Plan), we need to know to which m-line to assign the (local)
    // SSRC. We also need to know all the other m-lines that the original
    // answer had and include them in the transformed answer as well.
    //
    // Another example is if this is a remote offer that we convert to Plan B
    // prior to giving it to the application, we want to remember the mid at
    // which we've seen the (remote) SSRC.
    //
    // In the iteration that follows, we use the cached Unified Plan (if it
    // exists) to assign mids to ssrcs.

    var type;
    if (desc.type === 'answer') {
        type = 'offer';
    } else if (desc.type === 'offer') {
        type = 'answer';
    } else {
        throw new Error("Type '" + desc.type + "' not supported.");
    }

    var cached;
    if (typeof this.cache[type] !== 'undefined') {
        cached = transform.parse(this.cache[type]);
    }

    var recvonlySsrcs = {
        audio: {},
        video: {}
    };

    // A helper map that sends mids to m-line objects. We use it later to
    // rebuild the Unified Plan style session.media array.
    var mid2ul = {};
    var bIdx = 0;
    var uIdx = 0;

    var sources2ul = {};

    var candidates;
    var iceUfrag;
    var icePwd;
    var fingerprint;
    var payloads = {};
    var rtcpFb = {};
    var rtp = {};

    session.media.forEach(function(bLine) {
        if ((typeof bLine.rtcpMux !== 'string' ||
            bLine.rtcpMux !== 'rtcp-mux') &&
            bLine.direction !== 'inactive') {
            throw new Error("Cannot convert to Unified Plan because m-lines " +
                "without the rtcp-mux attribute were found.");
        }

        if (bLine.type === 'application') {
            mid2ul[bLine.mid] = bLine;
            return;
        }

        // With rtcp-mux and bundle all the channels should have the same ICE
        // stuff.
        var sources = bLine.sources;
        var ssrcGroups = bLine.ssrcGroups;
        var port = bLine.port;

        /* Chrome adds different candidates even using bundle, so we concat the candidates list */
        if (typeof bLine.candidates != 'undefined') {
            if (typeof candidates != 'undefined') {
                candidates = candidates.concat(bLine.candidates);
            } else {
                candidates = bLine.candidates;
            }
        }

        if ((typeof iceUfrag != 'undefined') && (typeof bLine.iceUfrag != 'undefined') && (iceUfrag != bLine.iceUfrag)) {
            throw new Error("Only BUNDLE supported, iceUfrag must be the same for all m-lines.\n" +
                            "\tLast iceUfrag: " + iceUfrag + "\n" +
                            "\tNew iceUfrag: " + bLine.iceUfrag
            );
        }

        if (typeof bLine.iceUfrag != 'undefined') {
                iceUfrag = bLine.iceUfrag;
        }

        if ((typeof icePwd != 'undefined') && (typeof bLine.icePwd != 'undefined') && (icePwd != bLine.icePwd)) {
            throw new Error("Only BUNDLE supported, icePwd must be the same for all m-lines.\n" +
                            "\tLast icePwd: " + icePwd + "\n" +
                            "\tNew icePwd: " + bLine.icePwd
            );
        }

        if (typeof bLine.icePwd != 'undefined') {
                icePwd = bLine.icePwd;
        }

        if ((typeof fingerprint != 'undefined') && (typeof bLine.fingerprint != 'undefined') &&
            (fingerprint.type != bLine.fingerprint.type || fingerprint.hash != bLine.fingerprint.hash)) {
            throw new Error("Only BUNDLE supported, fingerprint must be the same for all m-lines.\n" +
                            "\tLast fingerprint: " + JSON.stringify(fingerprint) + "\n" +
                            "\tNew fingerprint: " + JSON.stringify(bLine.fingerprint)
            );
        }

        if (typeof bLine.fingerprint != 'undefined') {
                fingerprint = bLine.fingerprint;
        }

        payloads[bLine.type] = bLine.payloads;
        rtcpFb[bLine.type] = bLine.rtcpFb;
        rtp[bLine.type] = bLine.rtp;

        // inverted ssrc group map
        var ssrc2group = {};
        if (typeof ssrcGroups !== 'undefined' && Array.isArray(ssrcGroups)) {
            ssrcGroups.forEach(function (ssrcGroup) {
                // XXX This might brake if an SSRC is in more than one group
                // for some reason.
                if (typeof ssrcGroup.ssrcs !== 'undefined' &&
                    Array.isArray(ssrcGroup.ssrcs)) {
                    ssrcGroup.ssrcs.forEach(function (ssrc) {
                        if (typeof ssrc2group[ssrc] === 'undefined') {
                            ssrc2group[ssrc] = [];
                        }

                        ssrc2group[ssrc].push(ssrcGroup);
                    });
                }
            });
        }

        // ssrc to m-line index.
        var ssrc2ml = {};

        if (typeof sources === 'object') {

            // We'll use the "bLine" object as a prototype for each new "mLine"
            // that we create, but first we need to clean it up a bit.
            delete bLine.sources;
            delete bLine.ssrcGroups;
            delete bLine.candidates;
            delete bLine.iceUfrag;
            delete bLine.icePwd;
            delete bLine.fingerprint;
            delete bLine.port;
            delete bLine.mid;

            // Explode the Plan B channel sources with one m-line per source.
            Object.keys(sources).forEach(function(ssrc) {

                // The (unified) m-line for this SSRC. We either create it from
                // scratch or, if it's a grouped SSRC, we re-use a related
                // mline. In other words, if the source is grouped with another
                // source, put the two together in the same m-line.
                var uLine;

                // We assume here that we are the answerer in the O/A, so any
                // offers which we translate come from the remote side, while
                // answers are local. So the check below is to make that we
                // handle receive-only SSRCs in a special way only if they come
                // from the remote side.
                if (desc.type==='offer') {
                    // We want to detect SSRCs which are used by a remote peer
                    // in an m-line with direction=recvonly (i.e. they are
                    // being used for RTCP only).
                    // This information would have gotten lost if the remote
                    // peer used Unified Plan and their local description was
                    // translated to Plan B. So we use the lack of an MSID
                    // attribute to deduce a "receive only" SSRC.
                    if (!sources[ssrc].msid) {
                        recvonlySsrcs[bLine.type][ssrc] = sources[ssrc];
                        // Receive-only SSRCs must not create new m-lines. We
                        // will assign them to an existing m-line later.
                        return;
                    }
                }

                if (typeof ssrc2group[ssrc] !== 'undefined' &&
                    Array.isArray(ssrc2group[ssrc])) {
                    ssrc2group[ssrc].some(function (ssrcGroup) {
                        // ssrcGroup.ssrcs *is* an Array, no need to check
                        // again here.
                        return ssrcGroup.ssrcs.some(function (related) {
                            if (typeof ssrc2ml[related] === 'object') {
                                uLine = ssrc2ml[related];
                                return true;
                            }
                        });
                    });
                }

                if (typeof uLine === 'object') {
                    // the m-line already exists. Just add the source.
                    uLine.sources[ssrc] = sources[ssrc];
                    delete sources[ssrc].msid;
                } else {
                    // Use the "bLine" as a prototype for the "uLine".
                    uLine = Object.create(bLine);
                    ssrc2ml[ssrc] = uLine;

                    if (typeof sources[ssrc].msid !== 'undefined') {
                        // Assign the msid of the source to the m-line. Note
                        // that it is not guaranteed that the source will have
                        // msid. In particular "recvonly" sources don't have an
                        // msid. Note that "recvonly" is a term only defined
                        // for m-lines.
                        uLine.msid = sources[ssrc].msid;
                        delete sources[ssrc].msid;
                    }

                    // We assign one SSRC per media line.
                    uLine.sources = {};
                    uLine.sources[ssrc] = sources[ssrc];
                    uLine.ssrcGroups = ssrc2group[ssrc];

                    // Use the cached Unified Plan SDP (if it exists) to assign
                    // SSRCs to mids.
                    if (typeof cached !== 'undefined' &&
                        typeof cached.media !== 'undefined' &&
                        Array.isArray(cached.media)) {

                        cached.media.forEach(function (m) {
                            if (typeof m.sources === 'object') {
                                Object.keys(m.sources).forEach(function (s) {
                                    if (s === ssrc) {
                                        uLine.mid = m.mid;
                                    }
                                });
                            }
                        });
                    }

                    if (typeof uLine.mid === 'undefined') {

                        // If this is an SSRC that we see for the first time
                        // assign it a new mid. This is typically the case when
                        // this method is called to transform a remote
                        // description for the first time or when there is a
                        // new SSRC in the remote description because a new
                        // peer has joined the conference. Local SSRCs should
                        // have already been added to the map in the toPlanB
                        // method.
                        //
                        // Because FF generates answers in Unified Plan style,
                        // we MUST already have a cached answer with all the
                        // local SSRCs mapped to some m-line/mid.

                        uLine.mid = [bLine.type, '-', ssrc].join('');
                    }

                    // Include the candidates in the 1st media line.
                    uLine.candidates = candidates;
                    uLine.iceUfrag = iceUfrag;
                    uLine.icePwd = icePwd;
                    uLine.fingerprint = fingerprint;
                    uLine.port = port;

                    mid2ul[uLine.mid] = uLine;
                    sources2ul[uIdx] = uLine.sources;

                    self.cache.mlU2BMap[uIdx] = bIdx;
                    if (typeof self.cache.mlB2UMap[bIdx] === 'undefined') {
                      self.cache.mlB2UMap[bIdx] = uIdx;
                    }
                    uIdx++;
                }
            });
        } else {
          var uLine = bLine;

          uLine.candidates = candidates;
          uLine.iceUfrag = iceUfrag;
          uLine.icePwd = icePwd;
          uLine.fingerprint = fingerprint;
          uLine.port = port;

          mid2ul[uLine.mid] = uLine;

          self.cache.mlU2BMap[uIdx] = bIdx;
          if (typeof self.cache.mlB2UMap[bIdx] === 'undefined') {
            self.cache.mlB2UMap[bIdx] = uIdx;
          }
        }

        bIdx++;
    });

    // Rebuild the media array in the right order and add the missing mLines
    // (missing from the Plan B SDP).
    session.media = [];
    mids = []; // reuse

    if (desc.type === 'answer') {

        // The media lines in the answer must match the media lines in the
        // offer. The order is important too. Here we assume that Firefox is
        // the answerer, so we merely have to use the reconstructed (unified)
        // answer to update the cached (unified) answer accordingly.
        //
        // In the general case, one would have to use the cached (unified)
        // offer to find the m-lines that are missing from the reconstructed
        // answer, potentially grabbing them from the cached (unified) answer.
        // One has to be careful with this approach because inactive m-lines do
        // not always have an mid, making it tricky (impossible?) to find where
        // exactly and which m-lines are missing from the reconstructed answer.

        for (var i = 0; i < cached.media.length; i++) {
            var uLine = cached.media[i];

            delete uLine.msid;
            delete uLine.sources;
            delete uLine.ssrcGroups;

            if (typeof sources2ul[i] === 'undefined') {
              if (!uLine.direction
                  || uLine.direction === 'sendrecv')
                  uLine.direction = 'recvonly';
              else if (uLine.direction === 'sendonly')
                  uLine.direction = 'inactive';
            } else {
              if (!uLine.direction
                  || uLine.direction === 'sendrecv')
                  uLine.direction = 'sendrecv';
              else if (uLine.direction === 'recvonly')
                  uLine.direction = 'sendonly';
            }

            uLine.sources = sources2ul[i];
            uLine.candidates = candidates;
            uLine.iceUfrag = iceUfrag;
            uLine.icePwd = icePwd;
            uLine.fingerprint = fingerprint;

            uLine.rtp = rtp[uLine.type];
            uLine.payloads = payloads[uLine.type];
            uLine.rtcpFb = rtcpFb[uLine.type];

            session.media.push(uLine);

            if (typeof uLine.mid === 'string') {
                // inactive lines don't/may not have an mid.
                mids.push(uLine.mid);
            }
        }
    } else {

        // SDP offer/answer (and the JSEP spec) forbids removing an m-section
        // under any circumstances. If we are no longer interested in sending a
        // track, we just remove the msid and ssrc attributes and set it to
        // either a=recvonly (as the reofferer, we must use recvonly if the
        // other side was previously sending on the m-section, but we can also
        // leave the possibility open if it wasn't previously in use), or
        // a=inactive.

        if (typeof cached !== 'undefined' &&
            typeof cached.media !== 'undefined' &&
            Array.isArray(cached.media)) {
            cached.media.forEach(function(uLine) {
                mids.push(uLine.mid);
                if (typeof mid2ul[uLine.mid] !== 'undefined') {
                    session.media.push(mid2ul[uLine.mid]);
                } else {
                    delete uLine.msid;
                    delete uLine.sources;
                    delete uLine.ssrcGroups;

                    if (!uLine.direction
                        || uLine.direction === 'sendrecv') {
                        uLine.direction = 'sendonly';
                    }
                    if (!uLine.direction
                        || uLine.direction === 'recvonly') {
                        uLine.direction = 'inactive';
                    }

                    addSetupAttr (uLine);
                    session.media.push(uLine);
                }
            });
        }

        // Add all the remaining (new) m-lines of the transformed SDP.
        Object.keys(mid2ul).forEach(function(mid) {
            if (mids.indexOf(mid) === -1) {
                mids.push(mid);
                if (mid2ul[mid].direction === 'recvonly') {
                    // This is a remote recvonly channel. Add its SSRC to the
                    // appropriate sendrecv or sendonly channel.
                    // TODO(gp) what if we don't have sendrecv/sendonly
                    // channel?

                    var done = false;

                    session.media.some(function (uLine) {
                        if ((uLine.direction === 'sendrecv' ||
                            uLine.direction === 'sendonly') &&
                            uLine.type === mid2ul[mid].type) {
                            // mid2ul[mid] shouldn't have any ssrc-groups
                            Object.keys(mid2ul[mid].sources).forEach(
                                function (ssrc) {
                                uLine.sources[ssrc] =
                                    mid2ul[mid].sources[ssrc];
                            });

                            done = true;
                            return true;
                        }
                    });

                    if (!done) {
                        session.media.push(mid2ul[mid]);
                    }
                } else {
                    session.media.push(mid2ul[mid]);
                }
            }
        });
    }

    // After we have constructed the Plan Unified m-lines we can figure out
    // where (in which m-line) to place the 'recvonly SSRCs'.
    // Note: we assume here that we are the answerer in the O/A, so any offers
    // which we translate come from the remote side, while answers are local
    // (and so our last local description is cached as an 'answer').
    ["audio", "video"].forEach(function (type) {
        if (!session || !session.media || !Array.isArray(session.media))
            return;

        var idx = null;
        if (Object.keys(recvonlySsrcs[type]).length > 0) {
            idx = self.getFirstSendingIndexFromAnswer(type);
            if (idx === null){
                // If this is the first offer we receive, we don't have a
                // cached answer. Assume that we will be sending media using
                // the first m-line for each media type.

                for (var i = 0; i < session.media.length; i++) {
                    if (session.media[i].type === type) {
                        idx = i;
                        break;
                    }
                }
            }
        }

        if (idx && session.media.length > idx) {
            var mLine = session.media[idx];
            Object.keys(recvonlySsrcs[type]).forEach(function(ssrc) {
                if (mLine.sources && mLine.sources[ssrc]) {
                    console.warn("Replacing an existing SSRC.");
                }
                if (!mLine.sources) {
                    mLine.sources = {};
                }

                mLine.sources[ssrc] = recvonlySsrcs[type][ssrc];
            });
        }
    });

    if (typeof session.groups !== 'undefined') {
      // We regenerate the BUNDLE group (since we regenerated the mids)
      session.groups.some(function(group) {
	  if (group.type === 'BUNDLE') {
	      group.mids = mids.join(' ');
	      return true;
	  }
      });
    }

    // msid semantic
    session.msidSemantic = {
        semantic: 'WMS',
        token: '*'
    };

    var resStr = transform.write(session);

    // Cache the transformed SDP (Unified Plan) for later re-use in this
    // function.
    this.cache[desc.type] = resStr;

    return new RTCSessionDescription({
        type: desc.type,
        sdp: resStr
    });

    //#endregion
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/* Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var transform = __webpack_require__(23);

exports.write = function(session, opts) {

  if (typeof session !== 'undefined' &&
      typeof session.media !== 'undefined' &&
      Array.isArray(session.media)) {

    session.media.forEach(function (mLine) {
      // expand sources to ssrcs
      if (typeof mLine.sources !== 'undefined' &&
        Object.keys(mLine.sources).length !== 0) {
          mLine.ssrcs = [];
          Object.keys(mLine.sources).forEach(function (ssrc) {
            var source = mLine.sources[ssrc];
            Object.keys(source).forEach(function (attribute) {
              mLine.ssrcs.push({
                id: ssrc,
                attribute: attribute,
                value: source[attribute]
              });
            });
          });
          delete mLine.sources;
        }

      // join ssrcs in ssrc groups
      if (typeof mLine.ssrcGroups !== 'undefined' &&
        Array.isArray(mLine.ssrcGroups)) {
          mLine.ssrcGroups.forEach(function (ssrcGroup) {
            if (typeof ssrcGroup.ssrcs !== 'undefined' &&
                Array.isArray(ssrcGroup.ssrcs)) {
              ssrcGroup.ssrcs = ssrcGroup.ssrcs.join(' ');
            }
          });
        }
    });
  }

  // join group mids
  if (typeof session !== 'undefined' &&
      typeof session.groups !== 'undefined' && Array.isArray(session.groups)) {

    session.groups.forEach(function (g) {
      if (typeof g.mids !== 'undefined' && Array.isArray(g.mids)) {
        g.mids = g.mids.join(' ');
      }
    });
  }

  return transform.write(session, opts);
};

exports.parse = function(sdp) {
  var session = transform.parse(sdp);

  if (typeof session !== 'undefined' && typeof session.media !== 'undefined' &&
      Array.isArray(session.media)) {

    session.media.forEach(function (mLine) {
      // group sources attributes by ssrc
      if (typeof mLine.ssrcs !== 'undefined' && Array.isArray(mLine.ssrcs)) {
        mLine.sources = {};
        mLine.ssrcs.forEach(function (ssrc) {
          if (!mLine.sources[ssrc.id])
          mLine.sources[ssrc.id] = {};
        mLine.sources[ssrc.id][ssrc.attribute] = ssrc.value;
        });

        delete mLine.ssrcs;
      }

      // split ssrcs in ssrc groups
      if (typeof mLine.ssrcGroups !== 'undefined' &&
        Array.isArray(mLine.ssrcGroups)) {
          mLine.ssrcGroups.forEach(function (ssrcGroup) {
            if (typeof ssrcGroup.ssrcs === 'string') {
              ssrcGroup.ssrcs = ssrcGroup.ssrcs.split(' ');
            }
          });
        }
    });
  }
  // split group mids
  if (typeof session !== 'undefined' &&
      typeof session.groups !== 'undefined' && Array.isArray(session.groups)) {

    session.groups.forEach(function (g) {
      if (typeof g.mids === 'string') {
        g.mids = g.mids.split(' ');
      }
    });
  }

  return session;
};



/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var parser = __webpack_require__(24);
var writer = __webpack_require__(26);

exports.write = writer;
exports.parse = parser.parse;
exports.parseFmtpConfig = parser.parseFmtpConfig;
exports.parsePayloads = parser.parsePayloads;
exports.parseRemoteCandidates = parser.parseRemoteCandidates;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var toIntIfInt = function (v) {
  return String(Number(v)) === v ? Number(v) : v;
};

var attachProperties = function (match, location, names, rawName) {
  if (rawName && !names) {
    location[rawName] = toIntIfInt(match[1]);
  }
  else {
    for (var i = 0; i < names.length; i += 1) {
      if (match[i+1] != null) {
        location[names[i]] = toIntIfInt(match[i+1]);
      }
    }
  }
};

var parseReg = function (obj, location, content) {
  var needsBlank = obj.name && obj.names;
  if (obj.push && !location[obj.push]) {
    location[obj.push] = [];
  }
  else if (needsBlank && !location[obj.name]) {
    location[obj.name] = {};
  }
  var keyLocation = obj.push ?
    {} :  // blank object that will be pushed
    needsBlank ? location[obj.name] : location; // otherwise, named location or root

  attachProperties(content.match(obj.reg), keyLocation, obj.names, obj.name);

  if (obj.push) {
    location[obj.push].push(keyLocation);
  }
};

var grammar = __webpack_require__(25);
var validLine = RegExp.prototype.test.bind(/^([a-z])=(.*)/);

exports.parse = function (sdp) {
  var session = {}
    , media = []
    , location = session; // points at where properties go under (one of the above)

  // parse lines we understand
  sdp.split(/(\r\n|\r|\n)/).filter(validLine).forEach(function (l) {
    var type = l[0];
    var content = l.slice(2);
    if (type === 'm') {
      media.push({rtp: [], fmtp: []});
      location = media[media.length-1]; // point at latest media line
    }

    for (var j = 0; j < (grammar[type] || []).length; j += 1) {
      var obj = grammar[type][j];
      if (obj.reg.test(content)) {
        return parseReg(obj, location, content);
      }
    }
  });

  session.media = media; // link it up
  return session;
};

var fmtpReducer = function (acc, expr) {
  var s = expr.split('=');
  if (s.length === 2) {
    acc[s[0]] = toIntIfInt(s[1]);
  }
  return acc;
};

exports.parseFmtpConfig = function (str) {
  return str.split(/\;\s?/).reduce(fmtpReducer, {});
};

exports.parsePayloads = function (str) {
  return str.split(' ').map(Number);
};

exports.parseRemoteCandidates = function (str) {
  var candidates = [];
  var parts = str.split(' ').map(toIntIfInt);
  for (var i = 0; i < parts.length; i += 3) {
    candidates.push({
      component: parts[i],
      ip: parts[i + 1],
      port: parts[i + 2]
    });
  }
  return candidates;
};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

var grammar = module.exports = {
  v: [{
      name: 'version',
      reg: /^(\d*)$/
  }],
  o: [{ //o=- 20518 0 IN IP4 203.0.113.1
    // NB: sessionId will be a String in most cases because it is huge
    name: 'origin',
    reg: /^(\S*) (\d*) (\d*) (\S*) IP(\d) (\S*)/,
    names: ['username', 'sessionId', 'sessionVersion', 'netType', 'ipVer', 'address'],
    format: "%s %s %d %s IP%d %s"
  }],
  // default parsing of these only (though some of these feel outdated)
  s: [{ name: 'name' }],
  i: [{ name: 'description' }],
  u: [{ name: 'uri' }],
  e: [{ name: 'email' }],
  p: [{ name: 'phone' }],
  z: [{ name: 'timezones' }], // TODO: this one can actually be parsed properly..
  r: [{ name: 'repeats' }],   // TODO: this one can also be parsed properly
  //k: [{}], // outdated thing ignored
  t: [{ //t=0 0
    name: 'timing',
    reg: /^(\d*) (\d*)/,
    names: ['start', 'stop'],
    format: "%d %d"
  }],
  c: [{ //c=IN IP4 10.47.197.26
      name: 'connection',
      reg: /^IN IP(\d) (\S*)/,
      names: ['version', 'ip'],
      format: "IN IP%d %s"
  }],
  b: [{ //b=AS:4000
      push: 'bandwidth',
      reg: /^(TIAS|AS|CT|RR|RS):(\d*)/,
      names: ['type', 'limit'],
      format: "%s:%s"
  }],
  m: [{ //m=video 51744 RTP/AVP 126 97 98 34 31
      // NB: special - pushes to session
      // TODO: rtp/fmtp should be filtered by the payloads found here?
      reg: /^(\w*) (\d*) ([\w\/]*)(?: (.*))?/,
      names: ['type', 'port', 'protocol', 'payloads'],
      format: "%s %d %s %s"
  }],
  a: [
    { //a=rtpmap:110 opus/48000/2
      push: 'rtp',
      reg: /^rtpmap:(\d*) ([\w\-]*)(?:\s*\/(\d*)(?:\s*\/(\S*))?)?/,
      names: ['payload', 'codec', 'rate', 'encoding'],
      format: function (o) {
        return (o.encoding) ?
          "rtpmap:%d %s/%s/%s":
          o.rate ?
          "rtpmap:%d %s/%s":
          "rtpmap:%d %s";
      }
    },
    {
      //a=fmtp:108 profile-level-id=24;object=23;bitrate=64000
      //a=fmtp:111 minptime=10; useinbandfec=1
      push: 'fmtp',
      reg: /^fmtp:(\d*) ([\S| ]*)/,
      names: ['payload', 'config'],
      format: "fmtp:%d %s"
    },
    { //a=control:streamid=0
        name: 'control',
        reg: /^control:(.*)/,
        format: "control:%s"
    },
    { //a=rtcp:65179 IN IP4 193.84.77.194
      name: 'rtcp',
      reg: /^rtcp:(\d*)(?: (\S*) IP(\d) (\S*))?/,
      names: ['port', 'netType', 'ipVer', 'address'],
      format: function (o) {
        return (o.address != null) ?
          "rtcp:%d %s IP%d %s":
          "rtcp:%d";
      }
    },
    { //a=rtcp-fb:98 trr-int 100
      push: 'rtcpFbTrrInt',
      reg: /^rtcp-fb:(\*|\d*) trr-int (\d*)/,
      names: ['payload', 'value'],
      format: "rtcp-fb:%d trr-int %d"
    },
    { //a=rtcp-fb:98 nack rpsi
      push: 'rtcpFb',
      reg: /^rtcp-fb:(\*|\d*) ([\w-_]*)(?: ([\w-_]*))?/,
      names: ['payload', 'type', 'subtype'],
      format: function (o) {
        return (o.subtype != null) ?
          "rtcp-fb:%s %s %s":
          "rtcp-fb:%s %s";
      }
    },
    { //a=extmap:2 urn:ietf:params:rtp-hdrext:toffset
      //a=extmap:1/recvonly URI-gps-string
      push: 'ext',
      reg: /^extmap:([\w_\/]*) (\S*)(?: (\S*))?/,
      names: ['value', 'uri', 'config'], // value may include "/direction" suffix
      format: function (o) {
        return (o.config != null) ?
          "extmap:%s %s %s":
          "extmap:%s %s";
      }
    },
    {
      //a=crypto:1 AES_CM_128_HMAC_SHA1_80 inline:PS1uQCVeeCFCanVmcjkpPywjNWhcYD0mXXtxaVBR|2^20|1:32
      push: 'crypto',
      reg: /^crypto:(\d*) ([\w_]*) (\S*)(?: (\S*))?/,
      names: ['id', 'suite', 'config', 'sessionConfig'],
      format: function (o) {
        return (o.sessionConfig != null) ?
          "crypto:%d %s %s %s":
          "crypto:%d %s %s";
      }
    },
    { //a=setup:actpass
      name: 'setup',
      reg: /^setup:(\w*)/,
      format: "setup:%s"
    },
    { //a=mid:1
      name: 'mid',
      reg: /^mid:([^\s]*)/,
      format: "mid:%s"
    },
    { //a=msid:0c8b064d-d807-43b4-b434-f92a889d8587 98178685-d409-46e0-8e16-7ef0db0db64a
      name: 'msid',
      reg: /^msid:(.*)/,
      format: "msid:%s"
    },
    { //a=ptime:20
      name: 'ptime',
      reg: /^ptime:(\d*)/,
      format: "ptime:%d"
    },
    { //a=maxptime:60
      name: 'maxptime',
      reg: /^maxptime:(\d*)/,
      format: "maxptime:%d"
    },
    { //a=sendrecv
      name: 'direction',
      reg: /^(sendrecv|recvonly|sendonly|inactive)/
    },
    { //a=ice-lite
      name: 'icelite',
      reg: /^(ice-lite)/
    },
    { //a=ice-ufrag:F7gI
      name: 'iceUfrag',
      reg: /^ice-ufrag:(\S*)/,
      format: "ice-ufrag:%s"
    },
    { //a=ice-pwd:x9cml/YzichV2+XlhiMu8g
      name: 'icePwd',
      reg: /^ice-pwd:(\S*)/,
      format: "ice-pwd:%s"
    },
    { //a=fingerprint:SHA-1 00:11:22:33:44:55:66:77:88:99:AA:BB:CC:DD:EE:FF:00:11:22:33
      name: 'fingerprint',
      reg: /^fingerprint:(\S*) (\S*)/,
      names: ['type', 'hash'],
      format: "fingerprint:%s %s"
    },
    {
      //a=candidate:0 1 UDP 2113667327 203.0.113.1 54400 typ host
      //a=candidate:1162875081 1 udp 2113937151 192.168.34.75 60017 typ host generation 0
      //a=candidate:3289912957 2 udp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 generation 0
      //a=candidate:229815620 1 tcp 1518280447 192.168.150.19 60017 typ host tcptype active generation 0
      //a=candidate:3289912957 2 tcp 1845501695 193.84.77.194 60017 typ srflx raddr 192.168.34.75 rport 60017 tcptype passive generation 0
      push:'candidates',
      reg: /^candidate:(\S*) (\d*) (\S*) (\d*) (\S*) (\d*) typ (\S*)(?: raddr (\S*) rport (\d*))?(?: tcptype (\S*))?(?: generation (\d*))?/,
      names: ['foundation', 'component', 'transport', 'priority', 'ip', 'port', 'type', 'raddr', 'rport', 'tcptype', 'generation'],
      format: function (o) {
        var str = "candidate:%s %d %s %d %s %d typ %s";

        str += (o.raddr != null) ? " raddr %s rport %d" : "%v%v";

        // NB: candidate has three optional chunks, so %void middles one if it's missing
        str += (o.tcptype != null) ? " tcptype %s" : "%v";

        if (o.generation != null) {
          str += " generation %d";
        }
        return str;
      }
    },
    { //a=end-of-candidates (keep after the candidates line for readability)
      name: 'endOfCandidates',
      reg: /^(end-of-candidates)/
    },
    { //a=remote-candidates:1 203.0.113.1 54400 2 203.0.113.1 54401 ...
      name: 'remoteCandidates',
      reg: /^remote-candidates:(.*)/,
      format: "remote-candidates:%s"
    },
    { //a=ice-options:google-ice
      name: 'iceOptions',
      reg: /^ice-options:(\S*)/,
      format: "ice-options:%s"
    },
    { //a=ssrc:2566107569 cname:t9YU8M1UxTF8Y1A1
      push: "ssrcs",
      reg: /^ssrc:(\d*) ([\w_]*):(.*)/,
      names: ['id', 'attribute', 'value'],
      format: "ssrc:%d %s:%s"
    },
    { //a=ssrc-group:FEC 1 2
      push: "ssrcGroups",
      reg: /^ssrc-group:(\w*) (.*)/,
      names: ['semantics', 'ssrcs'],
      format: "ssrc-group:%s %s"
    },
    { //a=msid-semantic: WMS Jvlam5X3SX1OP6pn20zWogvaKJz5Hjf9OnlV
      name: "msidSemantic",
      reg: /^msid-semantic:\s?(\w*) (\S*)/,
      names: ['semantic', 'token'],
      format: "msid-semantic: %s %s" // space after ":" is not accidental
    },
    { //a=group:BUNDLE audio video
      push: 'groups',
      reg: /^group:(\w*) (.*)/,
      names: ['type', 'mids'],
      format: "group:%s %s"
    },
    { //a=rtcp-mux
      name: 'rtcpMux',
      reg: /^(rtcp-mux)/
    },
    { //a=rtcp-rsize
      name: 'rtcpRsize',
      reg: /^(rtcp-rsize)/
    },
    { // any a= that we don't understand is kepts verbatim on media.invalid
      push: 'invalid',
      names: ["value"]
    }
  ]
};

// set sensible defaults to avoid polluting the grammar with boring details
Object.keys(grammar).forEach(function (key) {
  var objs = grammar[key];
  objs.forEach(function (obj) {
    if (!obj.reg) {
      obj.reg = /(.*)/;
    }
    if (!obj.format) {
      obj.format = "%s";
    }
  });
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var grammar = __webpack_require__(25);

// customized util.format - discards excess arguments and can void middle ones
var formatRegExp = /%[sdv%]/g;
var format = function (formatStr) {
  var i = 1;
  var args = arguments;
  var len = args.length;
  return formatStr.replace(formatRegExp, function (x) {
    if (i >= len) {
      return x; // missing argument
    }
    var arg = args[i];
    i += 1;
    switch (x) {
      case '%%':
        return '%';
      case '%s':
        return String(arg);
      case '%d':
        return Number(arg);
      case '%v':
        return '';
    }
  });
  // NB: we discard excess arguments - they are typically undefined from makeLine
};

var makeLine = function (type, obj, location) {
  var str = obj.format instanceof Function ?
    (obj.format(obj.push ? location : location[obj.name])) :
    obj.format;

  var args = [type + '=' + str];
  if (obj.names) {
    for (var i = 0; i < obj.names.length; i += 1) {
      var n = obj.names[i];
      if (obj.name) {
        args.push(location[obj.name][n]);
      }
      else { // for mLine and push attributes
        args.push(location[obj.names[i]]);
      }
    }
  }
  else {
    args.push(location[obj.name]);
  }
  return format.apply(null, args);
};

// RFC specified order
// TODO: extend this with all the rest
var defaultOuterOrder = [
  'v', 'o', 's', 'i',
  'u', 'e', 'p', 'c',
  'b', 't', 'r', 'z', 'a'
];
var defaultInnerOrder = ['i', 'c', 'b', 'a'];


module.exports = function (session, opts) {
  opts = opts || {};
  // ensure certain properties exist
  if (session.version == null) {
    session.version = 0; // "v=0" must be there (only defined version atm)
  }
  if (session.name == null) {
    session.name = " "; // "s= " must be there if no meaningful name set
  }
  session.media.forEach(function (mLine) {
    if (mLine.payloads == null) {
      mLine.payloads = "";
    }
  });

  var outerOrder = opts.outerOrder || defaultOuterOrder;
  var innerOrder = opts.innerOrder || defaultInnerOrder;
  var sdp = [];

  // loop through outerOrder for matching properties on session
  outerOrder.forEach(function (type) {
    grammar[type].forEach(function (obj) {
      if (obj.name in session && session[obj.name] != null) {
        sdp.push(makeLine(type, obj, session));
      }
      else if (obj.push in session && session[obj.push] != null) {
        session[obj.push].forEach(function (el) {
          sdp.push(makeLine(type, obj, el));
        });
      }
    });
  });

  // then for each media line, follow the innerOrder
  session.media.forEach(function (mLine) {
    sdp.push(makeLine('m', grammar.m[0], mLine));

    innerOrder.forEach(function (type) {
      grammar[type].forEach(function (obj) {
        if (obj.name in mLine && mLine[obj.name] != null) {
          sdp.push(makeLine(type, obj, mLine));
        }
        else if (obj.push in mLine && mLine[obj.push] != null) {
          mLine[obj.push].forEach(function (el) {
            sdp.push(makeLine(type, obj, el));
          });
        }
      });
    });
  });

  return sdp.join('\r\n') + '\r\n';
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/* Copyright @ 2015 Atlassian Pty Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = function arrayEquals(array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length)
        return false;

    for (var i = 0, l = this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!arrayEquals.apply(this[i], [array[i]]))
                return false;
        } else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal:
            // {x:20} != {x:20}
            return false;
        }
    }
    return true;
};



/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const WebRtcPeerHelper_1 = __webpack_require__(17);
const EventHandler_1 = __webpack_require__(4);
class PeerM2M {
    constructor(instance) {
        this.isPeerCall = true;
        this.participantsArray = [];
        this.mediaType = "";
        this.callSession = "";
        this.instance = instance;
    }
    GroupCall(params) {
        return new Promise(async (resolve, reject) => {
            params.callType = "many_to_many";
            params.isInitiator = 1;
            params.isPeer = 1;
            if (params.uUID) {
                params.sessionUuid = params.uUID;
            }
            let options = {};
            try {
                options = await this.instance.createOptions(params, 1);
                params = options.params;
                this.callSession = params.uUID;
                delete options.params;
                if (options && !options.status) {
                    throw options.message;
                }
            }
            catch (e) {
                this.instance.onErrorHandler();
                return reject({ status: false, error: e });
            }
            if (options.localVideo) {
                this.instance.localVideos[params.uUID] = options.localVideo;
            }
            if (options.receivers && options.receivers.length !== 0) {
                console.log("@@@ new call current participant 0");
                this.instance.sessionInfo[params.uUID]["participants"] = {};
                options.receivers.forEach((part) => {
                    console.log("single participant to call-->", part);
                    this.manyToManyCallSingleParticipant(part, options, params)
                        .then((result) => {
                        console.log(result);
                        console.log("@@@ call current participant", result);
                        this.instance.sessionInfo[params.uUID]["participants"][result.participant] = {
                            isInitiator: true,
                            call_state: "STARTING",
                            isPeer: 1,
                            callType: "many_to_many",
                            peerConnection: result.webRtcPeer,
                        };
                        if (options.receivers.length == Object.keys(this.instance.sessionInfo[params.uUID]["participants"]).length) {
                            resolve(params.uUID);
                        }
                    })
                        .catch((e) => {
                        console.error(e);
                    });
                });
            }
            else {
                reject({ status: false, message: "All Users are offline!" });
            }
        });
    }
    manyToManyCallSingleParticipant(participant, callOptions, callParams) {
        return new Promise((resolve, reject) => {
            const params = Object.assign({}, callParams);
            let options = Object.assign({}, callOptions);
            params.participants = options.receivers;
            params.to = [participant];
            options.onicecandidate = (candidate) => this.instance.onIceCandidate(candidate, params.uUID, participant);
            options = this.instance.AddOnTrackHandler(options, params.uUID, participant);
            const webRtcPeer = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerSendrecv(options, (error) => {
                if (error) {
                    this.instance.onErrorHandler();
                    console.error(error);
                    reject(error);
                }
                webRtcPeer.generateOffer((error, offerSdp) => {
                    if (error) {
                        console.error(error);
                        reject(error);
                        return;
                    }
                    this.instance.onOfferCall(error, offerSdp, this.instance.sessionInfo[params.uUID].mediaType, params.uUID, params);
                    resolve({ participant, webRtcPeer });
                });
            });
        });
    }
    AddCandidate(message) {
        const participant = this.instance.getPeerById(message.sessionUuid, message.from);
        console.log("Add Ice Candidate::::", message, participant);
        if (participant) {
            participant.addIceCandidate(message.candidate, (error) => {
                if (error) {
                    EventHandler_1.default.OnAddCandidate(error, this.instance);
                    return console.error("Error adding candidate: " + error);
                }
            });
        }
        else {
            console.error("Participant not found for Add Ice Candidate::::", message, participant);
        }
    }
    CallResponse(message) {
        var _a, _b;
        const participant = this.instance.getPeerById(message.sessionUuid, (_a = message.from) !== null && _a !== void 0 ? _a : message.referenceId);
        console.info("CallResponse", participant, message);
        if (message.response == "accepted" || (message.sdpType == "sdp_answer" && message.sdp)) {
            participant.processAnswer((_b = message.sdpAnswer) !== null && _b !== void 0 ? _b : message.sdp, (error) => {
                if (error) {
                    EventHandler_1.default.SessionSDP(error, this.instance);
                    return console.error(error);
                }
            });
        }
    }
    JoinGroupCall(params, uUID) {
        console.log("@@@ new join call current participant 0");
        this.instance.sessionInfo[uUID]["participants"] = {};
        params.isPeer = 1;
        params.callType = "many_to_many";
        params.sdp = params.sdpOffer;
        params.sessionUuid = params.uUID = uUID;
        params.audio = 1;
        params.video = this.instance.sessionInfo[uUID].mediaType == "video" ? 1 : 0;
        params.isReInvite = 0;
        return this.instance.AcceptCall(params);
    }
    OnExistingParticipants(response) {
        const refIDs = response.referenceIds;
        //let participantList: any=refIDs;
        refIDs.forEach((ref) => {
            var _a, _b, _c;
            if (ref != undefined) {
                let uUID = response.sessionUuid;
                if (!((_c = (_b = (_a = this.instance.sessionInfo) === null || _a === void 0 ? void 0 : _a[uUID]) === null || _b === void 0 ? void 0 : _b["participants"]) === null || _c === void 0 ? void 0 : _c[ref])) {
                    this.instance.Call({
                        callType: "many_to_many",
                        isPeer: 1,
                        isInitiator: 1,
                        to: ref,
                        localVideo: this.instance.localVideos[uUID],
                        video: this.instance.videoStatus[uUID],
                        audio: this.instance.audioStatus[uUID],
                        sessionUuid: uUID,
                        uUID: uUID,
                        requestType: "to_receive_stream",
                    });
                    //console.warn("Create Peer connection for", ref);
                }
                else {
                    console.log("Call already connected with this peer", ref, this.instance.sessionInfo);
                }
            }
        });
    }
    OnNewParticipant(response) {
        //In Peer to Peer call this will be handled by REMOTE_STREAM Event
    }
    OnSessionCancel(response) {
        let refID = response.referenceId;
        this.instance.emit("groupCall", { type: "PARTICIPANT_LEFT", message: "Participant left.", participant: refID });
        const participant = this.instance.getPeerById(response.sessionUuid, refID);
        this.participantsArray.splice(this.participantsArray.indexOf(refID), 1);
        if (participant) {
            participant.dispose();
        }
        delete this.instance.sessionInfo[response.sessionUuid]["participants"][refID];
    }
    SetParticipantVideo(refId, partiVideo) {
        console.log("No need to handle this event as it is a peer 2 peer call and we will handle on existing participant");
    }
    SetParticipantStatus(messageData) {
        EventHandler_1.default.SetParticipantStatus(messageData, this.instance);
    }
    LeaveGroupCall() {
        let response = {
            "type": "request",
            "requestType": "session_cancel",
            "requestId": new Date().getTime().toString(),
            "sessionUuid": this.callSession,
            "mcToken": this.instance.McToken
        };
        this.instance.SendPacket(response);
        this.instance.DisposeWebrtc(false);
    }
}
exports.default = PeerM2M;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
/* prettier-ignore */
/* eslint-disable */
// @ts-ignore
const events_1 = __webpack_require__(3);
const EventHandler_1 = __webpack_require__(4);
const CommonHelper_1 = __webpack_require__(5);
const WebRtcPeerHelper_1 = __webpack_require__(17);
class Confrence extends events_1.EventEmitter {
    constructor(_Credentials) {
        super();
        this.participants = {};
        this.videoArray = [];
        this.callType = "video";
        this.projectId = _Credentials.projectId;
        this.projectSecret = _Credentials.secret;
        //this.parentInstance=_Credentials.instance;
        this.currentUser = _Credentials.currentUser;
        this.currentRoom = _Credentials.room;
        this.localVideo = _Credentials.localVideo;
        this.container = _Credentials.container;
        this.callType = _Credentials.callType;
        this.Authentication(_Credentials);
    }
    set McToken(token) {
        this.mcToken = token;
    }
    get McToken() {
        return this.mcToken;
    }
    Authentication(credentials) {
        this.Connect(credentials.media_server);
    }
    Connect(mediaServer) {
        var webSocketConnetion = new WebSocket(mediaServer);
        webSocketConnetion.onmessage = (message) => {
            var messageData = JSON.parse(message.data);
            console.log('Received message: ' + message.data);
            switch (messageData.id) {
                case 'existingParticipants':
                    console.log("===yes you====", messageData);
                    this.OnExistingParticipant(messageData);
                    // EventHandler.OnRegister(messageData,this);
                    break;
                case 'newParticipantArrived':
                    this.onNewParticipant(messageData);
                    break;
                case 'participantLeft':
                    this.OnParticipantLeft(messageData);
                    break;
                case 'receiveVideoAnswer':
                    this.ReceiveVideoResponse(messageData);
                    break;
                case 'ice_candidate':
                    this.participants[messageData.name].addIceCandidate(messageData.candidate, function (error) {
                        if (error) {
                            console.error("Error adding candidate: " + error);
                            return;
                        }
                    });
                    break;
                case 'ping':
                    this.SendPacket({ requestType: 'pong', "mcToken": this.McToken });
                    break;
                default:
                    console.error('Unrecognized message', messageData);
            }
        };
        webSocketConnetion.onclose = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnClose socket==", res);
        };
        webSocketConnetion.onopen = (res) => {
            this.Register();
            EventHandler_1.default.OnConnection(res, this);
            console.log("OnOpen socket==", res);
        };
        //   webSocketConnetion.onmessage=(res:any)=>{
        // 	console.log("OnMessage socket==",res);
        //   };
        webSocketConnetion.onerror = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnError socket==", res);
        };
        this.ws = webSocketConnetion;
    }
    OnExistingParticipant(data) {
        let vidContraints = {
            mandatory: {
                //maxWidth : 320,
                maxFrameRate: 15,
                minFrameRate: 15
            }
        };
        if (this.callType != "video")
            vidContraints = false;
        var constraints = {
            audio: true,
            video: vidContraints
        };
        (0, CommonHelper_1.SetPlaysInline)(this.localVideo);
        var options = {
            localVideo: this.localVideo,
            mediaConstraints: constraints,
            onicecandidate: (candidate) => {
                var message = {
                    id: 'ice_candidate',
                    candidate: candidate,
                    name: this.currentUser
                };
                this.SendPacket(message);
            }
        };
        let rtcpeer = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerSendonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            rtcpeer.generateOffer((error, offerSdp, wp) => {
                if (error)
                    return console.error("sdp offer error");
                var msg = { id: "receiveVideoFrom",
                    sender: this.currentUser,
                    sdpOffer: offerSdp
                };
                this.SendPacket(msg);
            });
        });
        this.participants[this.currentUser] = rtcpeer;
        data.data.forEach((participant) => {
            this.emit("groupCall", { type: "NEW_PARTICIPANT", message: "Participant List", participant: participant });
        });
    }
    /**
     * SetParticipantStream
     */
    SetParticipantVideo(video, participant) {
        (0, CommonHelper_1.SetPlaysInline)(video);
        var options = {
            remoteVideo: video,
            onicecandidate: (candidate) => {
                var message = {
                    id: 'ice_candidate',
                    candidate: candidate,
                    name: participant
                };
                this.SendPacket(message);
            }
        };
        let rtcp = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            rtcp.generateOffer((error, offerSdp) => {
                if (error)
                    return console.error("sdp offer error");
                console.log('Invoking SDP offer callback function');
                var message = {
                    id: "receiveVideoFrom",
                    sender: participant,
                    sdpOffer: offerSdp
                };
                this.SendPacket(message);
            });
        });
        this.participants[participant] = rtcp;
    }
    onNewParticipant(request) {
        this.emit("groupCall", { type: "NEW_PARTICIPANT", message: "Participant has joined", participant: request.name });
    }
    OnParticipantLeft(request) {
        this.emit("groupCall", { type: "PARTICIPANT_LEFT", message: "Participant has left", participant: request.name });
        var participant = this.participants[request.name];
        if (participant && participant != undefined) {
            participant.dispose();
            delete this.participants[request.name];
        }
    }
    ReceiveVideoResponse(result) {
        let participant = this.participants[result.name];
        console.log("===ongroupcall==recievresp==", result, "participant", this.participants);
        if (participant && participant != undefined)
            participant.processAnswer(result.sdpAnswer, function (error) {
                if (error)
                    return console.error(error);
            });
    }
    OnIceCandidate(res) {
        let participant = this.participants[res.name];
        if (participant != undefined)
            participant.addIceCandidate(res.candidate, function (error) {
                if (error) {
                    console.error("Error adding candidate: " + error);
                    return;
                }
            });
    }
    /**
     * Leave the room
     */
    LeaveRoom() {
        this.SendPacket({
            id: 'leaveRoom'
        });
        for (var key in this.participants) {
            let participant = this.participants[key];
            if (participant && participant != undefined)
                participant.dispose();
        }
        this.ws.close();
    }
    /**
     * Close
     */
    Close() {
    }
    Register() {
        var message = {
            id: 'joinRoom',
            name: this.currentUser,
            room: this.currentRoom,
        };
        this.SendPacket(message);
    }
    SendPacket(message) {
        var jsonMessage = JSON.stringify(message);
        console.log('Sending message: ' + jsonMessage);
        if (this.ws != undefined)
            this.ws.send(jsonMessage);
        else
            EventHandler_1.default.OnAuthInitialError('', this);
    }
    /**
     * SetMicMute
     */
    SetMicMute() {
        let video = this.localVideo;
        if (video && video.srcObject && video.srcObject.getAudioTracks()[0])
            video.srcObject.getAudioTracks()[0].enabled = false;
        var message = {
            id: 'media_status',
            status: { type: "mic", status: 0, username: this.currentUser }
        };
        this.SendPacket(message);
    }
    /**
     * SetMicMute
     */
    SetMicUnmute() {
        let video = this.localVideo;
        if (video && video.srcObject && video.srcObject.getAudioTracks()[0])
            video.srcObject.getAudioTracks()[0].enabled = true;
        var message = {
            id: 'media_status',
            status: { type: "mic", status: 1, username: this.currentUser }
        };
        this.SendPacket(message);
    }
    /**
     * SetMicMute
     */
    SetCameraOn() {
        let video = this.localVideo;
        if (video && video.srcObject && video.srcObject.getAudioTracks()[0])
            video.srcObject.getVideoTracks()[0].enabled = true;
        var message = {
            id: 'media_status',
            status: { type: "camera", status: 1, username: this.currentUser }
        };
        this.SendPacket(message);
    }
    /**
     * SetMicMute
     */
    SetCameraOff() {
        let video = this.localVideo;
        if (video && video.srcObject && video.srcObject.getAudioTracks()[0])
            video.srcObject.getVideoTracks()[0].enabled = false;
        var message = {
            id: 'media_status',
            status: { type: "camera", status: 0, username: this.currentUser }
        };
        this.SendPacket(message);
    }
    GetContainer() {
        let container = document.createElement("section");
        for (var p in this.participants) {
            let video = this.participants[p].getVideoElement();
            let smallContainer = this.participants[p].createVideo(video.srcObject);
            container.appendChild(smallContainer);
        }
        return container;
        //return this.container;
    }
}
exports.default = Confrence;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
/* prettier-ignore */
/* eslint-disable */
// @ts-ignore
const events_1 = __webpack_require__(3);
const EventHandler_1 = __webpack_require__(4);
const Auth_1 = __webpack_require__(6);
// register model for registering
const RegisterModel_1 = __webpack_require__(8);
// register event handler
const RegisterEventHandler_1 = __webpack_require__(10);
//call model for initiating a call
const CallRequestModel_1 = __webpack_require__(11);
const ScreenShareServerSide_1 = __webpack_require__(31);
// Helper
const CommonHelper_1 = __webpack_require__(5);
const WebRtcPeerHelper_1 = __webpack_require__(17);
class Broadcast extends events_1.EventEmitter {
    constructor(_Credentials) {
        super();
        this.UUIDSessions = {};
        this.UUIDSessionTypes = {};
        this.UUIDSessionMediaTypes = {};
        this.videoStatus = 1;
        this.audioStatus = 1;
        this.broadCastSession = {};
        this.authToken = null;
        this.RefID = null;
        this.pingSessionStopped = [];
        this.messageCredentials = null;
        this.pingWorker = null;
        this.MclientInstance = null;
        this.projectId = _Credentials.projectId;
        this.projectSecret = _Credentials.secret;
        if (_Credentials.host) {
            this.Connect(_Credentials.host);
        }
        else {
            this.Authentication(_Credentials);
        }
        if (_Credentials.screenShareVideo) {
            this.videoElement = _Credentials.screenShareVideo;
        }
        //uncomment for sviewer.com
        //this.Connect("wss://ssig.vdotok.dev:8443/call");
    }
    set McToken(token) {
        this.mcToken = token;
    }
    get McToken() {
        return this.mcToken;
    }
    Authentication(credentials) {
        console.log("====DER===", credentials, this.projectId, this.projectSecret, this.clientToken);
        //this.Connect('wss://cpaas-url-based-demo.vdotok.com:8443/call')
        // this.Connect('wss://kurento3.togee.io:8443/call');
        Auth_1.default.Authorization(credentials.projectId, credentials.secret).then((response) => {
            console.log("===Authorization-outer===", response);
            if (response && response.status == 200) {
                let host = `${response.media_server_map.protocol}://${response.media_server_map.host}:${response.media_server_map.port}/${response.media_server_map.end_point}`;
                this.Connect(host);
                console.log("===Authorization===", response);
            }
            else
                EventHandler_1.default.OnAuthError(response.message, this);
        });
    }
    NewScreenImage(data) {
        console.log('New Screen Image', data, this.videoElement);
        if (!this.ScreenshareInstance) {
            this.ScreenshareInstance = new ScreenShareServerSide_1.default(this, this.videoElement);
        }
        console.log('screen Instance-->', this.ScreenshareInstance);
        this.ScreenshareInstance.NewImageReceived(data);
    }
    ScrollScreenImage(data) {
        console.log('New Screen Image', data, this.videoElement);
        if (!this.ScreenshareInstance) {
            this.ScreenshareInstance = new ScreenShareServerSide_1.default(this, this.videoElement);
        }
        this.ScreenshareInstance.ScrollImage(data);
    }
    Connect(mediaServer) {
        var webSocketConnetion = new WebSocket(mediaServer);
        webSocketConnetion.onmessage = (message) => {
            var messageData = JSON.parse(message.data);
            console.log('Received message: ', messageData);
            switch (messageData.requestType) {
                case 'register':
                case 'register_url':
                    RegisterEventHandler_1.default.SetRegisterResponse(messageData, this);
                    this.registerPingWorker();
                    break;
                case 'call_response':
                    console.log(' CallResponse: ', messageData);
                    this.CallResponse(messageData);
                    EventHandler_1.default.OnCallResponse(messageData, this);
                    break;
                case 'incoming_call':
                    this.callSession = messageData.sessionUuid;
                    this.currentFromUser = messageData.from;
                    this.UUIDSessions[messageData.from] = messageData.sessionUuid;
                    this.UUIDSessionTypes[messageData.sessionUuid] = messageData.callType;
                    this.UUIDSessionMediaTypes[messageData.from] = messageData.mediaType;
                    this.mediaType = messageData.mediaType;
                    console.log('incoming_call case: ', message);
                    EventHandler_1.default.OnIncomingCall(messageData, this);
                    // this.incoming_call(messageData);
                    break;
                case 'start_communication':
                    this.SessionStart(messageData);
                    break;
                case 'stopCommunication':
                    console.info('Communication ended by remote peer');
                    EventHandler_1.default.SessionEnd(messageData, this);
                    this.DisposeWebrtc(true);
                    break;
                case 'ice_candidate':
                    this.AddCandidate(messageData);
                    break;
                case 'session_invite':
                    EventHandler_1.default.SessionInvite(messageData, this);
                    break;
                case 'session_cancel':
                case 'session_break':
                    EventHandler_1.default.SessionCancel(messageData, this);
                    //this.DisposeWebrtc(true);
                    break;
                case 'state_information':
                    console.log("===onParticipantOffer== exiting left", messageData, new Date().toLocaleTimeString());
                    EventHandler_1.default.SetCallerStatus(messageData, this);
                    break;
                case 'ping':
                    this.SendPacket({ requestType: 'pong', "mcToken": this.McToken });
                    break;
                case 'custom_rpc':
                case 'hv_info':
                    console.log("===custom_rpc", messageData, new Date().toLocaleTimeString());
                    if (messageData.data) {
                        if (messageData.data.type === 'N_S_I') {
                            this.NewScreenImage(messageData.data);
                        }
                        else if (messageData.data.type === 'S_S_I') {
                            this.ScrollScreenImage(messageData.data);
                        }
                        this.OnCustomRPC(messageData);
                    }
                    break;
                case 'host_info':
                    console.log('host info==>', messageData);
                    this.emit("call", { type: "HOST_INFO", message: "host availability", available: messageData.data.active, uuid: messageData.sessionUuid, data: messageData });
                    break;
                case 'session_pong':
                case 'session_ping':
                    if (messageData.responseCode == 200) {
                        console.log('sdk session pong', messageData);
                    }
                    else if (messageData.responseCode == 400) {
                        console.log("SDK session ended in pong", messageData);
                        this.pingSessionStopped[messageData.sessionUuid] = true;
                        this.emit("call", { type: "SESSION_SUSPENSION", message: "Show has suspended by VDOTOK", uuid: messageData.sessionUuid });
                    }
                    else if (messageData.responseCode == 407) {
                        console.log("SDK invalid authentication or invalid mcToken in pong", messageData);
                        EventHandler_1.default.OnAuthError(messageData.message, this);
                    }
                    break;
                default:
                // console.error('Unrecognized message', messageData);
            }
        };
        webSocketConnetion.onclose = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnClose socket==", res);
            this.emit("call", { type: "SOCKET_DROPPED", message: "socket is dropped", uuid: res.sessionUuid });
        };
        webSocketConnetion.onopen = (res) => {
            EventHandler_1.default.OnConnection(res, this);
            console.log("OnOpen socket==", res);
        };
        //   webSocketConnetion.onmessage=(res:any)=>{
        // 	console.log("OnMessage socket==",res);
        //   };
        webSocketConnetion.onerror = (res) => {
            EventHandler_1.default.OnDisconnection(res, this);
            console.log("OnError socket==", res);
            this.emit("call", { type: "SOCKET_DROPPED", message: "socket is dropped", uuid: res.sessionUuid });
        };
        this.ws = webSocketConnetion;
    }
    OnCustomRPC(data) {
        console.log('create connection and fire stream! with id = ' + data.data.sessionUuid);
        EventHandler_1.default.OnCustomRPC(data, this);
    }
    AddCandidate(message) {
        this.broadCastSession[message.sessionUuid].addIceCandidate(message.candidate, (error) => {
            if (error) {
                EventHandler_1.default.OnAddCandidate(error, this);
                return console.error('Error adding candidate: ' + error);
            }
        });
    }
    CallResponse(response) {
        console.info('CallResponse', this.webRtcPeer, response);
        if (response.response == 'accepted') {
            this.broadCastSession[response.sessionUuid].processAnswer(response.sdpAnswer, (error) => {
                if (error) {
                    EventHandler_1.default.SessionSDP(error, this);
                    return console.error(error);
                }
            });
        }
    }
    rejoinAssociatedSession(message) {
        // associatedSessionUuid: "1658491242473-xy"
        console.log('i have rejoin request-->', message);
        this.emit("call", { type: "CUSTOM_SCREEN_SHARE_REQUEST", message: "Mobile screenshare request received.", data: {
                uuid: message.associatedSessionUuid,
                type: "CUSTOM_SCREEN_SHARE_REQUEST"
            }, uuid: message.associatedSessionUuid });
    }
    SessionStart(message) {
        console.log('start_communication in broadcast sdk-->', message.sessionUuid);
        let customScreenshareFlag = message.sessionUuid.includes('-xy');
        if (customScreenshareFlag) {
            this.messageCredentials = message;
            this.InitializeMessagingSdk(message);
        }
        else {
            EventHandler_1.default.SessionStart(message, this);
            this.broadCastSession[message.sessionUuid].processAnswer(message.sdpAnswer, (error) => {
                if (error) {
                    EventHandler_1.default.SessionSDP(error, this);
                    return console.error(error);
                }
            });
            if (message.hasOwnProperty('associatedSessionUuid') && message.associatedSessionUuid.includes('-xy')) {
                this.rejoinAssociatedSession(message);
            }
        }
    }
    subscribeChannel(channel) {
        this.MclientInstance.Subscribe(channel);
    }
    InitializeMessagingSdk(data) {
        console.log('message credentials in screenshare class-->', this.messageCredentials);
        let messagesCredentials = {
            projectId: this.messageCredentials.customScreenShare.projectId,
            secret: "5ff420e1fd72bca845c889bdfe01d19d",
            host: this.messageCredentials.customScreenShare.completeAddress,
        };
        //@ts-ignore
        this.MclientInstance = new MVDOTOK.Client(messagesCredentials);
        console.log("** Mclient in sdk after initializing==>", this.MclientInstance);
        this.RefID = this.currentUser;
        console.log("** before registering Mclient in sdk==>", this.authToken, this.RefID);
        this.MclientInstance.Register(this.RefID, this.authToken);
        this.MclientInstance.on("connect", (res) => {
            console.log("**res on connect sdk in vdotok sdk viewer side-->", res);
            this.subscribeChannel({
                key: this.messageCredentials.customScreenShare.topicKey,
                channel: this.messageCredentials.customScreenShare.topicName,
                //   last: 100,
            });
            // msgScrollTimeout = setTimeout(() => {
            //   scrollToLastMessage();
            // }, 1500);
            // // this.getGroups();
        });
        this.MclientInstance.on("subscribed", (response) => {
            console.log("** res on subscribing channel in sdk-->", response);
        });
        this.MclientInstance.on("message", (response) => {
            console.log("**res on message sdk viewer side", response);
            // 		content:
            // h: 454
            // type: "S_S_I"
            // w: 850
            // x: 0
            // y: 132
            // [[Prototype]]: Object
            // date: 1658414184073
            // from: "0f9a263efb6c6ddbc3c63cf60d7301cc"
            // id: "1658414184073"
            // key: "AACO5B_L67HeJxw7InqZz1jrXOl2KyJQ"
            // to: "VdoTokCustomScreen1658414175517-xy/"
            // type: "S_S_I_E"
            if (response.type === 'S_S_I_E') {
                EventHandler_1.default.sendScrollRpcToApp(response.content, this);
            }
        });
        EventHandler_1.default.CustomScreenshareSessionStart(data, this);
    }
    RejectCall(message) {
        let from = this.currentFromUser;
        // var response = {
        // 	id : 'incomingCallResponse',
        // 	from : from,
        // 	call_response : 'reject',
        // 	message : 'user declined'
        // };
        let response = {
            "type": "response",
            "from": from,
            "requestId": new Date().getTime().toString(),
            "sessionUuid": this.UUIDSessions[from],
            "responseCode": 496,
            "responseMessage": "rejected"
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false);
    }
    onOfferIncomingCall(error, offerSdp, from) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error("Error generating the offer");
        }
        // var response = {
        // 	id : 'incomingCallResponse',
        // 	from : from,
        // 	call_response : 'accept',
        // 	sdpOffer : offerSdp
        // };
        let response = {
            "type": "request",
            "requestType": "session_invite",
            "sdpOffer": offerSdp,
            "requestId": new Date().getTime().toString(),
            "sessionUuid": this.UUIDSessions[from],
            "responseCode": 200,
            "responseMessage": "accepted"
        };
        console.log("===OnOffering Answer", response);
        this.SendPacket(response);
    }
    onOfferCustomScreensharePublicUrlCall(sessionID) {
        console.log('this is onOfferCustomScreensharePublicUrlCall function', sessionID);
        // let example={
        // 	"type":"request",
        // "requestType":"public_url",
        // "sdpOffer":"",
        // "requestId":"1656942881066",
        // "sessionUuid":"YXK40TCSKJLV2K6VPF4J69NEIMTJTESR",
        // "responseCode":200,
        // "responseMessage":"accepted"
        // }
        let response = {
            "type": "request",
            "requestType": "public_url",
            "sdpOffer": "",
            "requestId": new Date().getTime().toString(),
            "sessionUuid": sessionID,
            "responseCode": 200,
            "responseMessage": "accepted"
        };
        console.log("===OnOffering custom screenshare Answer", response);
        this.SendPacket(response);
        // if(this.broadCastSession && this.broadCastSession[sessionID] && this.broadCastSession[sessionID].peerConnection)
        // {
        // 	this.broadCastSession[sessionID].peerConnection.addEventListener("iceconnectionstatechange", this.onIceError.bind(this, sessionID), false);
        // }
    }
    onOfferPublicUrlCall(error, offerSdp, sessionID) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error("Error generating the offer");
        }
        // var response = {
        // 	id : 'incomingCallResponse',
        // 	from : from,
        // 	call_response : 'accept',
        // 	sdpOffer : offerSdp
        // };
        let response = {
            "type": "request",
            "requestType": "public_url",
            "sdpOffer": offerSdp,
            "requestId": new Date().getTime().toString(),
            "sessionUuid": sessionID,
            "responseCode": 200,
            "responseMessage": "accepted"
        };
        console.log("===OnOffering Answer", response);
        this.SendPacket(response);
        if (this.broadCastSession && this.broadCastSession[sessionID] && this.broadCastSession[sessionID].peerConnection) {
            this.broadCastSession[sessionID].peerConnection.addEventListener("iceconnectionstatechange", this.onIceError.bind(this, sessionID), false);
        }
    }
    onIceError(uUID, ev) {
        let pc = this.broadCastSession[uUID];
        let states = ['closed', 'failed', 'disconnected'];
        if (pc && pc.peerConnection && pc.peerConnection.iceConnectionState && states.includes(pc.peerConnection.iceConnectionState)) { //it will come for all ice
            console.log("SDK iceconnectionstatechange", pc.peerConnection.iceConnectionState, ev);
            this.emit("call", { type: "ICE_FAILED", message: "An ice candidate failed try refresh", uuid: uUID });
        }
    }
    /*************
     * Register user to SDK
     */
    Register(referenceId, authorizationToken) {
        this.currentUser = referenceId;
        this.authToken = authorizationToken;
        let regMessage = new RegisterModel_1.default();
        regMessage.requestId = new Date().getTime().toString();
        regMessage.tenantId = this.projectId;
        regMessage.projectId = this.projectId;
        regMessage.referenceId = referenceId;
        regMessage.authorizationToken = authorizationToken;
        regMessage.SendRegisterRequest(this.ws);
    }
    RegisterPublicURL() {
        let referenceId = (0, CommonHelper_1.UuidGenerator)();
        this.currentUser = referenceId;
        let regMessage = new RegisterModel_1.default();
        regMessage.requestId = new Date().getTime().toString();
        regMessage.tenantId = this.projectId;
        regMessage.referenceId = referenceId;
        regMessage.requestType = "register_url";
        regMessage.SendRegisterRequest(this.ws);
    }
    onOfferOneToManyCall(error, offerSdp) {
        if (error) {
            EventHandler_1.default.OnOfferIncomingCall(error, this);
            return console.error('Error generating the call offer ', error);
        }
        let uUID = new Date().getTime().toString();
        this.UUIDSessions[this.currentUser] = uUID;
        this.UUIDSessionTypes[uUID] = "one_to_many";
        let callRequest = new CallRequestModel_1.default();
        callRequest.from = this.currentUser;
        callRequest.to = this.to;
        callRequest.requestId = uUID;
        callRequest.sessionUuid = uUID;
        callRequest.mcToken = this.McToken;
        callRequest.sdpOffer = offerSdp;
        callRequest.callType = "one_to_many";
        callRequest.SendCallRequest(this.ws);
    }
    AcceptBroadcast(remoteVideo) {
        let from = this.currentFromUser;
        this.mediaType = "video";
        (0, CommonHelper_1.SetPlaysInline)(remoteVideo);
        var options = {
            remoteVideo: remoteVideo,
            onicecandidate: (candidate) => {
                this.onIceCandidate(candidate, from);
            },
            onerror: this.onError
        };
        this.webRtcPeer = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerRecvonly(options, (error) => {
            if (error) {
                return console.error(error);
            }
            this.webRtcPeer.generateOffer((error, offerSdp) => {
                this.onOfferIncomingCall(error, offerSdp, from);
            });
        });
    }
    AcceptPublicBroadcast(remoteVideo, sessionID) {
        let customScreenshareFlag = sessionID.includes('-xy');
        if (customScreenshareFlag) {
            this.onOfferCustomScreensharePublicUrlCall(sessionID);
        }
        else {
            this.mediaType = "video";
            var constraints = {
                audio: false,
                video: false
            };
            (0, CommonHelper_1.SetPlaysInline)(remoteVideo);
            var options = {
                //mediaConstraints: constraints,
                remoteVideo: remoteVideo,
                onicecandidate: (candidate) => {
                    this.onPublicIceCandidate(candidate, this.currentUser, sessionID);
                },
                onerror: this.onError
            };
            let webRtcPeer = WebRtcPeerHelper_1.WebRtcPeerHelper.WebRtcPeerRecvonly(options, (error) => {
                if (error) {
                    return console.error(error);
                }
                webRtcPeer.generateOffer((error, offerSdp) => {
                    this.onOfferPublicUrlCall(error, offerSdp, sessionID);
                });
            });
            this.broadCastSession[sessionID] = webRtcPeer;
        }
    }
    /*********************************************************
     *
     * End Call One To Many Type
     *
     *
     *********************************************************/
    DisposeWebrtc(status) {
        if (this.webRtcPeer) {
            this.webRtcPeer.dispose();
            this.webRtcPeer = null;
            if (status) {
                var messageStop = {
                    "type": "request",
                    "requestType": "session_cancel",
                    "requestId": new Date().getTime().toString(),
                    "sessionUuid": this.UUIDSessions[this.currentFromUser],
                    "mcToken": "f3101a4f686d4dd7993ded88d9e386e5"
                };
                this.SendPacket(messageStop);
            }
            let session = this.UUIDSessions[this.currentFromUser];
            delete this.UUIDSessionTypes[session];
            delete this.UUIDSessions[this.currentFromUser];
        }
    }
    onError(error) {
        EventHandler_1.default.OnRTCPeer(error, this);
    }
    onPublicIceCandidate(candidate, referenceId, sessionID) {
        console.log("Local candidate" + JSON.stringify(candidate));
        var message = {
            id: 'ice_candidate',
            requestType: 'ice_candidate',
            type: "request",
            candidate: candidate,
            referenceId: referenceId,
            sessionUuid: sessionID
        };
        this.SendPacket(message);
    }
    onIceCandidate(candidate, referenceId) {
        console.log("Local candidate" + JSON.stringify(candidate));
        var message = {
            id: 'ice_candidate',
            requestType: 'ice_candidate',
            type: "request",
            candidate: candidate,
            referenceId: referenceId,
            sessionUuid: this.UUIDSessions[referenceId]
        };
        this.SendPacket(message);
    }
    SendPacket(message) {
        var jsonMessage = JSON.stringify(message);
        console.log('Sending message: ' + jsonMessage);
        if (this.ws != undefined)
            this.ws.send(jsonMessage);
        else
            EventHandler_1.default.OnAuthInitialError('', this);
    }
    /**
     * EndCall
     */
    EndCall() {
        let from = this.currentFromUser;
        let messageStop = {
            "type": "request",
            "requestType": "session_cancel",
            "requestId": new Date().getTime().toString(),
            "sessionUuid": this.UUIDSessions[from],
            "mcToken": this.McToken
        };
        this.SendPacket(messageStop);
        this.DisposeWebrtc(false);
    }
    CancelCall() {
        let from = this.currentFromUser;
        let response = {
            "type": "request",
            "requestType": "session_cancel",
            "requestId": new Date().getTime().toString(),
            "sessionUuid": this.UUIDSessions[from],
            "mcToken": this.McToken
        };
        this.SendPacket(response);
        this.DisposeWebrtc(false);
    }
    EndBroadCasting() {
        let from = this.currentFromUser;
        let sessions = Object.assign({}, this.broadCastSession);
        for (var ses in sessions) {
            let rtc = sessions[ses];
            let messageStop = {
                "type": "request",
                "requestType": "session_cancel",
                "requestId": new Date().getTime().toString(),
                "sessionUuid": ses,
                "mcToken": this.McToken
            };
            this.SendPacket(messageStop);
            if (rtc) {
            }
            rtc.dispose();
            delete this.broadCastSession[ses];
        }
    }
    /////////////////////
    ////Mic and Camera Events
    SetMicMute() {
        if (this.localVideo && this.localVideo != undefined) {
            let video = (this.mediaType == "video" && this.videoStatus == 1) ? 1 : 0;
            this.audioStatus = 0;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestId": new Date().getTime().toString(),
                "sessionUuid": this.UUIDSessions[this.currentFromUser],
                "mcToken": this.McToken,
                "referenceId": this.currentUser,
                "audioInformation": this.audioStatus,
                "videoInformation": video
            };
            this.SendPacket(state);
            if (this.localVideo.srcObject != null)
                this.localVideo.srcObject.getAudioTracks()[0].enabled = false;
            if (this.localVideo.localName == "audio") {
                this.localVideo.audioTracks[0].enabled = false;
            }
        }
    }
    /**
     * SetMicMute
     */
    SetMicUnmute() {
        if (this.localVideo && this.localVideo != undefined) {
            let video = (this.mediaType == "video" && this.videoStatus == 1) ? 1 : 0;
            this.audioStatus = 1;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestId": new Date().getTime().toString(),
                "sessionUuid": this.UUIDSessions[this.currentFromUser],
                "mcToken": this.McToken,
                "referenceId": this.currentUser,
                "audioInformation": this.audioStatus,
                "videoInformation": video
            };
            this.SendPacket(state);
            if (this.localVideo.srcObject != null)
                this.localVideo.srcObject.getAudioTracks()[0].enabled = true;
            if (this.localVideo.localName == "audio")
                this.localVideo.audioTracks[0].enabled = true;
        }
    }
    /**
     * SetCameraOn
     */
    SetCameraOn() {
        if (this.localVideo && this.localVideo != undefined) {
            this.videoStatus = 1;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestId": new Date().getTime().toString(),
                "sessionUuid": this.UUIDSessions[this.currentFromUser],
                "mcToken": this.McToken,
                "referenceId": this.currentUser,
                "audioInformation": this.audioStatus,
                "videoInformation": 1
            };
            this.SendPacket(state);
            this.localVideo.srcObject.getVideoTracks()[0].enabled = true;
        }
    }
    /**
     * SetCameraOff
     */
    SetCameraOff() {
        if (this.localVideo && this.localVideo != undefined) {
            this.videoStatus = 0;
            let state = {
                "requestType": "state_information",
                "type": "request",
                "requestId": new Date().getTime().toString(),
                "sessionUuid": this.UUIDSessions[this.currentFromUser],
                "mcToken": this.McToken,
                "referenceId": this.currentUser,
                "audioInformation": this.audioStatus,
                "videoInformation": 0
            };
            this.SendPacket(state);
            this.localVideo.srcObject.getVideoTracks()[0].enabled = false;
        }
    }
    sendStateRPC(data, uUID, store = 0, requestType = 'vh_info') {
        let request = {};
        request.requestType = requestType;
        //hv_info --> Host to All viewers Communication
        request.type = 'request';
        request.requestId = new Date().getTime().toString();
        if (uUID === -1) {
            delete request.sessionUuid;
        }
        else {
            request.sessionUuid = uUID ? uUID : this.UUIDSessions[this.currentUser];
        }
        request.mcToken = this.McToken;
        request.referenceId = this.currentUser;
        request.data = data;
        request.store = store; //This information should be save or not for new viewers
        this.ws.send(JSON.stringify(request));
    }
    registerPingWorker() {
        if (this.pingWorker) {
            return; //already created ping worker
        }
        window.URL = window.URL || window.webkitURL;
        const response = `let pingInterval;
                            onmessage = (res) => {
                                let data = res.data;
                                console.log('Message received from main script');
                                const method = data.method;
                                if (method === 'format') {
                                    postMessage({
                                        data: {
                                            'res': 'I am a customized result string.',
                                        }
                                    });
                                }
                                else if (method === 'startPingInterval')
                                {
                                    if(!data.interval)
                                    {
                                        data.interval =  5000;
                                    }
                                    clearPingInterval();
                                    startPingInterval(data.interval);
                                }
                                else if(method === 'clearPingInterval')
                                {
                                    clearPingInterval();
                                }
                                console.log('Posting message back to main script');
                            }
                            
                            function startPingInterval(interval)
                            {
                                pingInterval = setInterval(()=>{
                                    postMessage({
                                            'sendPing': true
                                    });
                                },interval)
                            }
                            function  clearPingInterval()
                            {
                                if(pingInterval)
                                {
                                    clearInterval(pingInterval);
                                }
                            }
                            `;
        const blob = new Blob([response], { type: 'application/javascript' });
        this.pingWorker = new Worker(URL.createObjectURL(blob));
        if (this.pingWorker) {
            // event processing
            this.pingWorker.onmessage = (e) => {
                if (e && e.data && e.data.sendPing) {
                    this.sendPing();
                }
                else {
                    //console.log(`Response: ${JSON.stringify(e)}`);
                }
            };
            //Start pinging server
            this.pingWorker.postMessage({ method: 'startPingInterval', interval: 5000 });
        }
    }
    sendPing() {
        try {
            let pingCount = 0;
            /*for (var uUID in this.broadCastSession) {
                if(this.pingSessionStopped[uUID])
                {
                    console.log("SDK not sending Ping session already stopped from server with 400 pong for: ", uUID);
                }
                else
                {
                    pingCount++;
                    this.sendStateRPC({}, uUID, 0, 'session_ping')
                    console.log("SDK Ping sent for: ", uUID);
                }
            }*/
            if (!pingCount || true) {
                this.sendStateRPC({}, -1, 0, 'ping');
                console.log("SDK Ping sent!");
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = Broadcast;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const DrawImageGL = __webpack_require__(32);
// const DrawImageGL=require('./DrawImageGL.js');
class ScreenShareServerSide {
    constructor(instance = null, videoElement) {
        this.socketInstance = null;
        this.isSafari = false;
        this.isIos = false;
        this.videoElement = null;
        this.currentImage = null;
        this.DrawGlInstance = null;
        this.socketInstance = instance;
        this.videoElement = videoElement;
        this.isSafari = this.getBrowser().includes('Safari');
        this.isIos = this.isIOSDevice();
    }
    getBrowser() {
        const userAgent = navigator.userAgent;
        let browser = "unkown";
        // Detect browser name
        browser = (/ucbrowser/i).test(userAgent) ? 'UCBrowser' : browser;
        browser = (/edg/i).test(userAgent) ? 'Edge' : browser;
        browser = (/googlebot/i).test(userAgent) ? 'GoogleBot' : browser;
        browser = (/chromium/i).test(userAgent) ? 'Chromium' : browser;
        browser = (/firefox|fxios/i).test(userAgent) && !(/seamonkey/i).test(userAgent) ? 'Firefox' : browser;
        browser = (/; msie|trident/i).test(userAgent) && !(/ucbrowser/i).test(userAgent) ? 'IE' : browser;
        browser = (/chrome|crios/i).test(userAgent) && !(/opr|opera|chromium|edg|ucbrowser|googlebot/i).test(userAgent) ? 'Chrome' : browser;
        ;
        browser = (/safari/i).test(userAgent) && !(/chromium|edg|ucbrowser|chrome|crios|opr|opera|fxios|firefox/i).test(userAgent) ? 'Safari' : browser;
        browser = (/opr|opera/i).test(userAgent) ? 'Opera' : browser;
        return browser;
    }
    getTogeeScreenCanvas(data) {
        let toGeeCanvas = document.getElementById("toGee_screen_share_canvas");
        if (!toGeeCanvas) {
            toGeeCanvas = document.createElement("canvas");
            document.body.appendChild(toGeeCanvas);
            toGeeCanvas.id = "toGee_screen_share_canvas";
            toGeeCanvas.setAttribute("data-html2canvas-ignore", "");
            toGeeCanvas.width = data.w;
            toGeeCanvas.height = data.h;
            toGeeCanvas.style.opacity = 0;
            toGeeCanvas.style.position = "absolute";
            toGeeCanvas.style.zIndex = -1;
            toGeeCanvas.style.top = "-1000em";
            toGeeCanvas.style.left = "-1000em";
            //   let canv:any=document.getElementById('toGee_screen_share_canvas')
            let stream = toGeeCanvas.captureStream(25);
            this.socketInstance.emit("call", { type: "SCREENSHARE_STREAM_RECEIVED", message: "Received Screenshare stream", stream: stream });
            //   this.videoElement.srcObject = stream;
        }
        return toGeeCanvas;
    }
    WebglScreenShareLogic(data) {
        const canvas = this.getTogeeScreenCanvas(data);
        if (!this.DrawGlInstance) {
            this.DrawGlInstance = new DrawImageGL(canvas, null);
        }
        console.log('DrawInstance.current', this.DrawGlInstance);
        var base_image = new Image();
        base_image.crossOrigin = "anonymous";
        base_image.src = `${data.image.path}`;
        base_image.onload = () => this.handleWebglImageLoad(base_image, data, canvas);
    }
    CanvasScreenShareLogic(data) {
        console.log('canvasScreenShareLogic func', data);
        const canvas = this.getTogeeScreenCanvas(data);
        const context = canvas.getContext('2d');
        let base_image = new Image();
        base_image.onload = () => this.handleLoad(context, data, canvas, base_image);
        base_image.crossOrigin = "anonymous";
        base_image.src = `${data.image.path}`;
    }
    handleWebglImageLoad(base_image, data, canvas) {
        this.DrawGlInstance.clear([]);
        this.DrawGlInstance.drawImage(base_image, data.x, data.y, data.w, data.h, 0, 0, canvas.width, canvas.height);
        console.log('drawGL', this.DrawGlInstance);
        this.currentImage = base_image;
    }
    handleLoad(context, data, canvas, base_image) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(base_image, data.x, data.y, data.w, data.h, // source rectangle
        0, 0, canvas.width, canvas.height);
        this.currentImage = base_image;
    }
    isIOSDevice() {
        return navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPhone/i);
    }
    WebglScrollLogic(data) {
        if (!this.currentImage) {
            return;
        }
        const canvas = this.getTogeeScreenCanvas(data);
        if (!this.DrawGlInstance) {
            return;
        }
        console.log('DrawInstance.current', this.DrawGlInstance);
        this.DrawGlInstance.clear([]);
        this.DrawGlInstance.drawImage(this.currentImage, data.x, data.y, data.w, data.h, 0, 0, canvas.width, canvas.height);
        console.log('drawGL', this.DrawGlInstance);
    }
    CanvasScrollLogic(data) {
        console.log('this is scrolling normal');
        if (!this.currentImage) {
            return;
        }
        const canvas = this.getTogeeScreenCanvas(data);
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(this.currentImage, data.x, data.y, data.w, data.h, // source rectangle
        0, 0, canvas.width, canvas.height);
    }
    NewImageReceived(data) {
        console.log('data in screenshare class', data, this.isSafari, this.isIos);
        if (this.isSafari || this.isIos) {
            this.WebglScreenShareLogic(data);
        }
        else {
            this.CanvasScreenShareLogic(data);
        }
    }
    ScrollImage(data) {
        if (this.isSafari || this.isIos) {
            this.WebglScrollLogic(data);
        }
        else {
            this.CanvasScrollLogic(data);
        }
    }
}
exports.default = ScreenShareServerSide;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * @type Class
 */
(function (exports) {

    const vertexShader = `
    attribute vec4 a_position;

    uniform mat4 u_matrix;
    uniform mat4 u_textureMatrix;

    varying vec2 v_texcoord;

    void main() {
     gl_Position = u_matrix * a_position;
     v_texcoord = (u_textureMatrix * a_position).xy;
    }
    `;

    const fragmentShader = `
    precision highp float;

    varying vec2 v_texcoord;

    uniform sampler2D u_texture;
    uniform float u_alpha;

    void main() {
     vec4 color = texture2D(u_texture, v_texcoord);
     color.a *= u_alpha;
     gl_FragColor = color;
    }
    `;

    const BLEND_SRC_ALPHA = 0x0302;
    const BLEND_ONE_MINUS_SRC_ALPHA = 0x0303;

    const Mat4Type = Float32Array;

    var tempMat0 = new Mat4Type(16)
    var tempMat1 = new Mat4Type(16)

    var DrawImageGL = function (canvas, options) {
        this.texCache = {}
        if (canvas) {
            this.init(canvas, options);
        }
    };

    var proto = {
        constructor: DrawImageGL,

        canvas: null,
        gl: null,

        vertexShader: null,
        fragmentShader: null,
        program: null,

        positionLocation: null,
        positionBuffer: null,

        matrixLocation: null,
        textureMatrixLocation: null,
        textureLocation: null,
        alphaLocation: null,

        texCache: null,

        destroy: function () {
            this.texCache = null;
            this.canvas = null;
            this.gl = null;

            this.vertexShader = null;
            this.fragmentShader = null;
            this.program = null;

            this.positionLocation = null;
            this.positionBuffer = null;

            this.matrixLocation = null;
            this.textureMatrixLocation = null;
            this.textureLocation = null;
            this.alphaLocation = null;
        },

        init: function (canvas, options) {
            let gl;

            options = Object.assign({
                alpha: false,
                stencil: true,
                depth: true,
                antialias: false,
                preserveDrawingBuffer: false,

                vertexShader: vertexShader,
                fragmentShader: fragmentShader,
            }, options);

            this.vertexShader = options.vertexShader;
            this.fragmentShader = options.fragmentShader;
            delete options.vertexShader;
            delete options.fragmentShader;

            try {
                gl = canvas.getContext('webgl', options) ||
                    canvas.getContext('experimental-webgl', options) ||
                    canvas.getContext('webkit-3d', options) ||
                    canvas.getContext('moz-webgl', options);
            } catch (err) {
                console.error(err);
                throw err;
            }

            this.canvas = canvas;
            this.gl = gl;

            this.initContext(gl);
        },

        initContext(gl, vertexShader, fragmentShader) {
            vertexShader = vertexShader || this.vertexShader;
            fragmentShader = fragmentShader || this.fragmentShader;
            // setup GLSL program
            this.program = createProgramFromSources(gl, vertexShader, fragmentShader)
            const program = this.program;

            // look up where the vertex data needs to go.
            this.positionLocation = gl.getAttribLocation(program, "a_position");

            // lookup uniforms
            this.matrixLocation = gl.getUniformLocation(program, "u_matrix");
            this.textureMatrixLocation = gl.getUniformLocation(program, "u_textureMatrix");
            this.textureLocation = gl.getUniformLocation(program, "u_texture");
            this.alphaLocation = gl.getUniformLocation(program, "u_alpha");

            // Create a buffer.
            this.positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);

            // Put a unit quad in the buffer
            this.positions = new Float32Array([
                0, 0,
                0, 1,
                1, 0,
                1, 0,
                0, 1,
                1, 1,
            ]);

            gl.bufferData(gl.ARRAY_BUFFER, this.positions, gl.STATIC_DRAW);

            gl.enable(gl.BLEND);
            gl.blendFunc(BLEND_SRC_ALPHA, BLEND_ONE_MINUS_SRC_ALPHA);
            gl.blendEquation(gl.FUNC_ADD);

            gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        },

        resizeCanvas: function (width, height) {
            const canvas = this.canvas;
            if (canvas.width !== width || canvas.height !== height) {
                canvas.width = width;
                canvas.height = height;
                return true;
            }
            return false;
        },

        createTexture: function (img) {
            const key = img.id || img.src;

            let tex = this.texCache[key];
            if (tex) {
                return tex;
            }

            const gl = this.gl;

            tex = gl.createTexture();

            gl.bindTexture(gl.TEXTURE_2D, tex);

            // let's assume all images are not a power of 2
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);

            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);

            this.texCache[key] = tex;

            return tex;
        },

        clear: function (color) {
            let flags = 0;
            if (color !== undefined) {
                flags |= this.gl.COLOR_BUFFER_BIT;
                this.gl.clearColor(color[0], color[1], color[2], color[3]);
            }
            this.gl.clear(flags);
        },

        drawImage: function (img, srcX, srcY, srcWidth, srcHeight, dstX, dstY, dstWidth, dstHeight) {

            const tex = this.createTexture(img);
            const program = this.program;

            const alpha = img.alpha === 0 || img.alpha ? img.alpha : 1;

            const args = arguments;
            const argCount = args.length;

            const texWidth = img.width;
            const texHeight = img.height;

            if (argCount === 3) {
                dstX = srcX;
                dstY = srcY;
                srcX = 0;
                srcY = 0;
                srcWidth = texWidth;
                srcHeight = texHeight;
                dstWidth = srcWidth;
                dstHeight = srcHeight;
            } else if (argCount === 5) {
                dstX = srcX;
                dstY = srcY;
                dstWidth = srcWidth;
                dstHeight = srcHeight;
                srcX = 0;
                srcY = 0;
                srcWidth = texWidth;
                srcHeight = texHeight;
            } else if (argCount === 7) {
                dstWidth = srcWidth;
                dstHeight = srcHeight;
            }


            const canvas = this.canvas;
            const gl = this.gl;

            gl.bindTexture(gl.TEXTURE_2D, tex);

            // Tell WebGL to use our shader program pair
            gl.useProgram(program);

            // Setup the attributes to pull data from our buffers
            gl.bindBuffer(gl.ARRAY_BUFFER, this.positionBuffer);
            gl.enableVertexAttribArray(this.positionLocation);
            gl.vertexAttribPointer(this.positionLocation, 2, gl.FLOAT, false, 0, 0);

            // this matrix will convert from pixels to clip space
            let matrix = Mat4Orthographic(0, canvas.width, canvas.height, 0, -1, 1, tempMat0);

            // this matrix will translate our quad to dstX, dstY
            Mat4Translate(matrix, dstX, dstY, 0, matrix);

            // this matrix will scale our 1 unit quad
            // from 1 unit to texWidth, texHeight units
            Mat4Scale(matrix, dstWidth, dstHeight, 1, matrix);

            // Set the matrix.
            gl.uniformMatrix4fv(this.matrixLocation, false, matrix);

            // Because texture coordinates go from 0 to 1
            // and because our texture coordinates are already a unit quad
            // we can select an area of the texture by scaling the unit quad
            // down
            let texMatrix = Mat4Translation(srcX / texWidth, srcY / texHeight, 0, tempMat1);
            if (srcWidth !== texWidth || srcHeight !== texHeight) {
                Mat4Scale(texMatrix, srcWidth / texWidth, srcHeight / texHeight, 1, texMatrix);
            }

            // Set the texture matrix.
            gl.uniformMatrix4fv(this.textureMatrixLocation, false, texMatrix);

            // Tell the shader to get the texture from texture unit 0
            gl.uniform1i(this.textureLocation, 0);
            gl.uniform1f(this.alphaLocation, alpha);

            // draw the quad (2 triangles, 6 vertices)
            gl.drawArrays(gl.TRIANGLES, 0, 6);
        }

    };

    for (let p in proto) {
        DrawImageGL.prototype[p] = proto[p];
    }

    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////

    function Mat4Translate(m, tx, ty, tz, dst) {
        // This is the optimized version of
        // return multiply(m, translation(tx, ty, tz), dst);
        dst = dst || new Mat4Type(16);

        var m00 = m[0];
        var m01 = m[1];
        var m02 = m[2];
        var m03 = m[3];
        var m10 = m[1 * 4 + 0];
        var m11 = m[1 * 4 + 1];
        var m12 = m[1 * 4 + 2];
        var m13 = m[1 * 4 + 3];
        var m20 = m[2 * 4 + 0];
        var m21 = m[2 * 4 + 1];
        var m22 = m[2 * 4 + 2];
        var m23 = m[2 * 4 + 3];
        var m30 = m[3 * 4 + 0];
        var m31 = m[3 * 4 + 1];
        var m32 = m[3 * 4 + 2];
        var m33 = m[3 * 4 + 3];

        if (m !== dst) {
            dst[0] = m00;
            dst[1] = m01;
            dst[2] = m02;
            dst[3] = m03;
            dst[4] = m10;
            dst[5] = m11;
            dst[6] = m12;
            dst[7] = m13;
            dst[8] = m20;
            dst[9] = m21;
            dst[10] = m22;
            dst[11] = m23;
        }

        dst[12] = m00 * tx + m10 * ty + m20 * tz + m30;
        dst[13] = m01 * tx + m11 * ty + m21 * tz + m31;
        dst[14] = m02 * tx + m12 * ty + m22 * tz + m32;
        dst[15] = m03 * tx + m13 * ty + m23 * tz + m33;

        return dst;
    }

    function Mat4Scale(m, sx, sy, sz, dst) {
        // This is the optimized version of
        // return multiply(m, scaling(sx, sy, sz), dst);
        dst = dst || new Mat4Type(16);

        dst[0] = sx * m[0 * 4 + 0];
        dst[1] = sx * m[0 * 4 + 1];
        dst[2] = sx * m[0 * 4 + 2];
        dst[3] = sx * m[0 * 4 + 3];
        dst[4] = sy * m[1 * 4 + 0];
        dst[5] = sy * m[1 * 4 + 1];
        dst[6] = sy * m[1 * 4 + 2];
        dst[7] = sy * m[1 * 4 + 3];
        dst[8] = sz * m[2 * 4 + 0];
        dst[9] = sz * m[2 * 4 + 1];
        dst[10] = sz * m[2 * 4 + 2];
        dst[11] = sz * m[2 * 4 + 3];

        if (m !== dst) {
            dst[12] = m[12];
            dst[13] = m[13];
            dst[14] = m[14];
            dst[15] = m[15];
        }

        return dst;
    }

    function Mat4Translation(tx, ty, tz, dst) {
        dst = dst || new Mat4Type(16);

        dst[0] = 1;
        dst[1] = 0;
        dst[2] = 0;
        dst[3] = 0;
        dst[4] = 0;
        dst[5] = 1;
        dst[6] = 0;
        dst[7] = 0;
        dst[8] = 0;
        dst[9] = 0;
        dst[10] = 1;
        dst[11] = 0;
        dst[12] = tx;
        dst[13] = ty;
        dst[14] = tz;
        dst[15] = 1;

        return dst;
    }

    function Mat4Orthographic(left, right, bottom, top, near, far, dst) {
        dst = dst || new Mat4Type(16);

        dst[0] = 2 / (right - left);
        dst[1] = 0;
        dst[2] = 0;
        dst[3] = 0;
        dst[4] = 0;
        dst[5] = 2 / (top - bottom);
        dst[6] = 0;
        dst[7] = 0;
        dst[8] = 0;
        dst[9] = 0;
        dst[10] = 2 / (near - far);
        dst[11] = 0;
        dst[12] = (left + right) / (left - right);
        dst[13] = (bottom + top) / (bottom - top);
        dst[14] = (near + far) / (near - far);
        dst[15] = 1;

        return dst;
    }

    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////

    function createProgramFromSources(gl, vertexShader, fragmentShader, opt_attribs, opt_locations) {
        const vs = loadShader(gl, vertexShader, gl.VERTEX_SHADER)
        const fs = loadShader(gl, fragmentShader, gl.FRAGMENT_SHADER)
        return createProgram(gl, vs, fs, opt_attribs, opt_locations);
    }

    function loadShader(gl, shaderSource, shaderType) {
        // Create the shader object
        const shader = gl.createShader(shaderType);
        // Load the shader source
        gl.shaderSource(shader, shaderSource);

        // Compile the shader
        gl.compileShader(shader);

        // Check the compile status
        const compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
        if (!compiled) {
            // Something went wrong during compilation; get the error
            const lastError = gl.getShaderInfoLog(shader);
            console.error('*** Error compiling shader \'' + shader + '\':' + lastError + `\n` + shaderSource.split('\n').map((l, i) => `${i + 1}: ${l}`).join('\n'));
            gl.deleteShader(shader);
            return null;
        }

        return shader;
    }

    function createProgram(gl, vertexShader, fragmentShader, opt_attribs, opt_locations) {
        const program = gl.createProgram();
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        if (opt_attribs) {
            opt_attribs.forEach(function (attrib, ndx) {
                gl.bindAttribLocation(
                    program,
                    opt_locations ? opt_locations[ndx] : ndx,
                    attrib);
            });
        }
        gl.linkProgram(program);

        // Check the link status
        const linked = gl.getProgramParameter(program, gl.LINK_STATUS);
        if (!linked) {
            // something went wrong with the link
            const lastError = gl.getProgramInfoLog(program);
            console.error('Error in program linking:' + lastError);

            gl.deleteProgram(program);
            return null;
        }
        return program;
    }

    if (exports) {
        exports.DrawImageGL = DrawImageGL;
    }

    if (true) {
        module.exports = DrawImageGL;
    }

})(typeof window !== 'undefined' ? window : typeof process === 'object' && "function" === 'function' && typeof global === 'object' ? global : this);

/***/ })
/******/ ]);