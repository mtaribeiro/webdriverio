/**
 * !!! PLEASE DO NOT EDIT THIS FILE !!!
 *
 * This source file, even though checked in, is auto-generated based on the
 * current development within the WebDriver Bidi spec. Any changes to this
 * file need to come from the specification. You can generate this file by calling
 *
 * ```
 * $ npm run generate:bidi
 * ```
 *
 * from the project root. You can find the scripts that generates this file in
 * ./scripts/bidi/**
 */

export type Message = CommandResponse | ErrorResponse | Event;

export interface CommandResponse extends Extensible {
  id: JsUint;
  result: ResultData;
}

export interface ErrorResponse extends Extensible {
  id: JsUint | null;
  error: ErrorCode;
  message: string;
  stacktrace?: string;
}

export type ResultData = BrowsingContextResult | EmptyResult | NetworkResult | ScriptResult | SessionResult;
export interface EmptyResult extends Extensible {}

export type EventData = BrowsingContextEvent | LogEvent | NetworkEvent | ScriptEvent;
export type Extensible = Record<string, any>;
export type JsInt = number;
export type JsUint = number;
export type ErrorCode = 'invalid argument' | 'invalid session id' | 'no such alert' | 'no such frame' | 'no such handle' | 'no such node' | 'no such script' | 'session not created' | 'unable to close browser' | 'unknown command' | 'unknown error' | 'unsupported operation';
export interface SessionResult extends SessionStatusResult {}

export interface SessionCapabilitiesRequest {
  alwaysMatch?: SessionCapabilityRequest;
  firstMatch?: SessionCapabilityRequest[];
}

export interface SessionCapabilityRequest extends Extensible {
  acceptInsecureCerts?: boolean;
  browserName?: string;
  browserVersion?: string;
  platformName?: string;
  proxy?: {
    proxyType?: 'pac' | 'direct' | 'autodetect' | 'system' | 'manual';
    proxyAutoconfigUrl?: string;
    ftpProxy?: string;
    httpProxy?: string;
    noProxy?: string[];
    sslProxy?: string;
    socksProxy?: string;
    socksVersion?: number;
  };
}

export interface SessionStatusResult {
  ready: boolean;
  message: string;
}

export interface SessionNewResult {
  sessionId: string;
  capabilities: {
    acceptInsecureCerts: boolean;
    browserName: string;
    browserVersion: string;
    platformName: string;
    proxy: {
      proxyType?: 'pac' | 'direct' | 'autodetect' | 'system' | 'manual';
      proxyAutoconfigUrl?: string;
      ftpProxy?: string;
      httpProxy?: string;
      noProxy?: string[];
      sslProxy?: string;
      socksProxy?: string;
      socksVersion?: number;
    };
    setWindowRect: boolean;
  };
}

export type BrowsingContextResult = BrowsingContextCaptureScreenshotResult | BrowsingContextCreateResult | BrowsingContextGetTreeResult | BrowsingContextNavigateResult | BrowsingContextPrintResult;
export type BrowsingContextEvent = BrowsingContextContextCreated | BrowsingContextContextDestroyed | BrowsingContextNavigationStarted | BrowsingContextFragmentNavigated | BrowsingContextDomContentLoaded | BrowsingContextLoad | BrowsingContextDownloadWillBegin | BrowsingContextNavigationAborted | BrowsingContextNavigationFailed | BrowsingContextUserPromptClosed | BrowsingContextUserPromptOpened;
export type BrowsingContextBrowsingContext = string;
export type BrowsingContextInfoList = (BrowsingContextInfo)[];

export interface BrowsingContextInfo {
  context: BrowsingContextBrowsingContext;
  url: string;
  children: BrowsingContextInfoList | null;
  parent?: BrowsingContextBrowsingContext | null;
}

export type BrowsingContextNavigation = string;

export interface BrowsingContextNavigationInfo {
  context: BrowsingContextBrowsingContext;
  navigation: BrowsingContextNavigation | null;
  timestamp: JsUint;
  url: string;
}

export interface BrowsingContextCaptureScreenshotResult {
  data: string;
}

export interface BrowsingContextCreateResult {
  context: BrowsingContextBrowsingContext;
}

export interface BrowsingContextGetTreeResult {
  contexts: BrowsingContextInfo;
}

export interface BrowsingContextNavigateResult {
  navigation: BrowsingContextNavigation | null;
  url: string;
}

export interface BrowsingContextPrintResult {
  data: string;
}

export interface BrowsingContextContextCreated {
  method: 'browsingContext.contextCreated';
  params: BrowsingContextInfo;
}

export interface BrowsingContextContextDestroyed {
  method: 'browsingContext.contextDestroyed';
  params: BrowsingContextInfo;
}

export interface BrowsingContextNavigationStarted {
  method: 'browsingContext.navigationStarted';
  params: BrowsingContextNavigationInfo;
}

export interface BrowsingContextFragmentNavigated {
  method: 'browsingContext.fragmentNavigated';
  params: BrowsingContextNavigationInfo;
}

export interface BrowsingContextDomContentLoaded {
  method: 'browsingContext.domContentLoaded';
  params: BrowsingContextNavigationInfo;
}

export interface BrowsingContextLoad {
  method: 'browsingContext.load';
  params: BrowsingContextNavigationInfo;
}

export interface BrowsingContextDownloadWillBegin {
  method: 'browsingContext.downloadWillBegin';
  params: BrowsingContextNavigationInfo;
}

export interface BrowsingContextNavigationAborted {
  method: 'browsingContext.navigationAborted';
  params: BrowsingContextNavigationInfo;
}

export interface BrowsingContextNavigationFailed {
  method: 'browsingContext.navigationFailed';
  params: BrowsingContextNavigationInfo;
}

export interface BrowsingContextUserPromptClosed {
  method: 'browsingContext.userPromptClosed';
  params: BrowsingContextUserPromptClosedParameters;
}

export interface BrowsingContextUserPromptClosedParameters {
  context: BrowsingContextBrowsingContext;
  accepted: boolean;
  userText?: string;
}

export interface BrowsingContextUserPromptOpened {
  method: 'browsingContext.userPromptOpened';
  params: BrowsingContextUserPromptOpenedParameters;
}

export interface BrowsingContextUserPromptOpenedParameters {
  context: BrowsingContextBrowsingContext;
  type: 'alert' | 'confirm' | 'prompt' | 'beforeunload';
  message: string;
}

export interface NetworkResult {}
export type NetworkEvent = NetworkBeforeRequestSent | NetworkFetchError | NetworkResponseStarted | NetworkResponseCompleted;

export interface NetworkBaseParameters {
  context: BrowsingContextBrowsingContext | null;
  navigation: BrowsingContextNavigation | null;
  redirectCount: JsUint;
  request: NetworkRequestData;
  timestamp: JsUint;
}

export interface NetworkCookie {
  name: string;
  value?: string;
  binaryValue?: number[];
  domain: string;
  path: string;
  expires?: JsUint;
  size: JsUint;
  httpOnly: boolean;
  secure: boolean;
  sameSite: 'strict' | 'lax' | 'none';
}

export interface NetworkFetchTimingInfo {
  timeOrigin: number;
  requestTime: number;
  redirectStart: number;
  redirectEnd: number;
  fetchStart: number;
  dnsStart: number;
  dnsEnd: number;
  connectStart: number;
  connectEnd: number;
  tlsStart: number;
  requestStart: number;
  responseStart: number;
  responseEnd: number;
}

export interface NetworkHeader {
  name: string;
  value?: string;
  binaryValue?: number[];
}

export interface NetworkInitiator {
  type: 'parser' | 'script' | 'preflight' | 'other';
  columnNumber?: JsUint;
  lineNumber?: JsUint;
  stackTrace?: ScriptStackTrace;
  request?: NetworkRequest;
}

export type NetworkRequest = string;

export interface NetworkRequestData {
  request: NetworkRequest;
  url: string;
  method: string;
  headers: NetworkHeader[];
  cookies: NetworkCookie[];
  headersSize: JsUint;
  bodySize: JsUint | null;
  timings: NetworkFetchTimingInfo;
}

export interface NetworkResponseContent {
  size: JsUint;
}

export interface NetworkResponseData {
  url: string;
  protocol: string;
  status: JsUint;
  statusText: string;
  fromCache: boolean;
  headers: NetworkHeader[];
  mimeType: string;
  bytesReceived: JsUint;
  headersSize: JsUint | null;
  bodySize: JsUint | null;
  content: NetworkResponseContent;
}

export interface NetworkBeforeRequestSent {
  method: 'network.beforeRequestSent';
  params: NetworkBeforeRequestSentParameters;
}

export interface NetworkBeforeRequestSentParameters extends NetworkBaseParameters {
  initiator: NetworkInitiator;
}

export interface NetworkFetchError {
  method: 'network.fetchError';
  params: NetworkFetchErrorParameters;
}

export interface NetworkFetchErrorParameters extends NetworkBaseParameters {
  errorText: string;
}

export interface NetworkResponseCompleted {
  method: 'network.responseCompleted';
  params: NetworkResponseCompletedParameters;
}

export interface NetworkResponseCompletedParameters extends NetworkBaseParameters {
  response: NetworkResponseData;
}

export interface NetworkResponseStarted {
  method: 'network.responseStarted';
  params: NetworkResponseStartedParameters;
}

export interface NetworkResponseStartedParameters extends NetworkBaseParameters {
  response: NetworkResponseData;
}

export type ScriptResult = ScriptAddPreloadScriptResult | ScriptEvaluateResult | ScriptGetRealmsResult;
export type ScriptEvent = ScriptRealmCreated | ScriptRealmDestroyed;
export type ScriptChannel = string;
export type ScriptEvaluateResult = ScriptEvaluateResultSuccess | ScriptEvaluateResultException;

export interface ScriptEvaluateResultSuccess {
  type: 'success';
  result: ScriptRemoteValue;
  realm: ScriptRealm;
}

export interface ScriptEvaluateResultException {
  type: 'exception';
  exceptionDetails: ScriptExceptionDetails;
  realm: ScriptRealm;
}

export interface ScriptExceptionDetails {
  columnNumber: JsUint;
  exception: ScriptRemoteValue;
  lineNumber: JsUint;
  stackTrace: ScriptStackTrace;
  text: string;
}

export type ScriptHandle = string;
export type ScriptLocalValue = ScriptPrimitiveProtocolValue | ScriptArrayLocalValue | ScriptDateLocalValue | ScriptMapLocalValue | ScriptObjectLocalValue | ScriptRegExpLocalValue | ScriptSetLocalValue;
export type ScriptListLocalValue = (ScriptLocalValue)[];

export interface ScriptArrayLocalValue {
  type: 'array';
  value: ScriptListLocalValue;
}

export interface ScriptDateLocalValue {
  type: 'date';
  value: string;
}

export type ScriptMappingLocalValue = (ScriptLocalValue | ScriptLocalValue)[];

export interface ScriptMapLocalValue {
  type: 'map';
  value: ScriptMappingLocalValue;
}

export interface ScriptObjectLocalValue {
  type: 'object';
  value: ScriptMappingLocalValue;
}

export interface ScriptRegExpValue {
  pattern: string;
  flags?: string;
}

export interface ScriptRegExpLocalValue {
  type: 'regexp';
  value: ScriptRegExpValue;
}

export interface ScriptSetLocalValue {
  type: 'set';
  value: ScriptListLocalValue;
}

export type ScriptPreloadScript = string;
export type ScriptRealm = string;
export type ScriptPrimitiveProtocolValue = ScriptUndefinedValue | ScriptNullValue | ScriptStringValue | ScriptNumberValue | ScriptBooleanValue | ScriptBigIntValue;

export interface ScriptUndefinedValue {
  type: 'undefined';
}

export interface ScriptNullValue {
  type: null;
}

export interface ScriptStringValue {
  type: 'string';
  value: string;
}

export type ScriptSpecialNumber = 'NaN' | '-0' | 'Infinity' | '-Infinity';

export interface ScriptNumberValue {
  type: 'number';
  value: Number | ScriptSpecialNumber;
}

export interface ScriptBooleanValue {
  type: 'boolean';
  value: boolean;
}

export interface ScriptBigIntValue {
  type: 'bigint';
  value: string;
}

export type ScriptRealmInfo = ScriptWindowRealmInfo | ScriptDedicatedWorkerRealmInfo | ScriptSharedWorkerRealmInfo | ScriptServiceWorkerRealmInfo | ScriptWorkerRealmInfo | ScriptPaintWorkletRealmInfo | ScriptAudioWorkletRealmInfo | ScriptWorkletRealmInfo;

export interface ScriptBaseRealmInfo {
  realm: ScriptRealm;
  origin: string;
}

export interface ScriptWindowRealmInfo extends ScriptBaseRealmInfo {
  type: 'window';
  context: BrowsingContextBrowsingContext;
  sandbox?: string;
}

export interface ScriptDedicatedWorkerRealmInfo extends ScriptBaseRealmInfo {
  type: 'dedicated-worker';
}

export interface ScriptSharedWorkerRealmInfo extends ScriptBaseRealmInfo {
  type: 'shared-worker';
}

export interface ScriptServiceWorkerRealmInfo extends ScriptBaseRealmInfo {
  type: 'service-worker';
}

export interface ScriptWorkerRealmInfo extends ScriptBaseRealmInfo {
  type: 'worker';
}

export interface ScriptPaintWorkletRealmInfo extends ScriptBaseRealmInfo {
  type: 'paint-worklet';
}

export interface ScriptAudioWorkletRealmInfo extends ScriptBaseRealmInfo {
  type: 'audio-worklet';
}

export interface ScriptWorkletRealmInfo extends ScriptBaseRealmInfo {
  type: 'worklet';
}

export type ScriptRealmType = 'window' | 'dedicated-worker' | 'shared-worker' | 'service-worker' | 'worker' | 'paint-worklet' | 'audio-worklet' | 'worklet';
export type ScriptRemoteValue = ScriptPrimitiveProtocolValue | ScriptSymbolRemoteValue | ScriptArrayRemoteValue | ScriptObjectRemoteValue | ScriptFunctionRemoteValue | ScriptRegExpRemoteValue | ScriptDateRemoteValue | ScriptMapRemoteValue | ScriptSetRemoteValue | ScriptWeakMapRemoteValue | ScriptWeakSetRemoteValue | ScriptIteratorRemoteValue | ScriptGeneratorRemoteValue | ScriptErrorRemoteValue | ScriptProxyRemoteValue | ScriptPromiseRemoteValue | ScriptTypedArrayRemoteValue | ScriptArrayBufferRemoteValue | ScriptNodeListRemoteValue | ScriptHtmlCollectionRemoteValue | ScriptNodeRemoteValue | ScriptWindowProxyRemoteValue;
export type ScriptInternalId = JsUint;
export type ScriptListRemoteValue = (ScriptRemoteValue)[];
export type ScriptMappingRemoteValue = (ScriptRemoteValue | ScriptRemoteValue)[];

export interface ScriptSymbolRemoteValue {
  type: 'symbol';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptArrayRemoteValue {
  type: 'array';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
  value?: ScriptListRemoteValue;
}

export interface ScriptObjectRemoteValue {
  type: 'object';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
  value?: ScriptMappingRemoteValue;
}

export interface ScriptFunctionRemoteValue {
  type: 'function';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptRegExpRemoteValue extends ScriptRegExpLocalValue {
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptDateRemoteValue extends ScriptDateLocalValue {
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptMapRemoteValue {
  type: 'map';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
  value?: ScriptMappingRemoteValue;
}

export interface ScriptSetRemoteValue {
  type: 'set';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
  value?: ScriptListRemoteValue;
}

export interface ScriptWeakMapRemoteValue {
  type: 'weakmap';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptWeakSetRemoteValue {
  type: 'weakset';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptIteratorRemoteValue {
  type: 'iterator';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptGeneratorRemoteValue {
  type: 'generator';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptErrorRemoteValue {
  type: 'error';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptProxyRemoteValue {
  type: 'proxy';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptPromiseRemoteValue {
  type: 'promise';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptTypedArrayRemoteValue {
  type: 'typedarray';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptArrayBufferRemoteValue {
  type: 'arraybuffer';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export interface ScriptNodeListRemoteValue {
  type: 'nodelist';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
  value?: ScriptListRemoteValue;
}

export interface ScriptHtmlCollectionRemoteValue {
  type: 'htmlcollection';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
  value?: ScriptListRemoteValue;
}

export interface ScriptNodeRemoteValue {
  type: 'node';
  sharedId?: ScriptSharedId;
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
  value?: ScriptNodeProperties;
}

export interface ScriptNodeProperties {
  nodeType: JsUint;
  childNodeCount: JsUint;
  attributes?: Record<string, string>;
  children?: ScriptNodeRemoteValue[];
  localName?: string;
  mode?: 'open' | 'closed';
  namespaceUri?: string;
  nodeValue?: string;
  shadowRoot?: ScriptNodeRemoteValue | null;
}

export interface ScriptWindowProxyRemoteValue {
  type: 'window';
  handle?: ScriptHandle;
  internalId?: ScriptInternalId;
}

export type ScriptResultOwnership = 'root' | 'none';
export type ScriptSharedId = string;

export interface ScriptStackFrame {
  columnNumber: JsUint;
  functionName: string;
  lineNumber: JsUint;
  url: string;
}

export interface ScriptStackTrace {
  callFrames: ScriptStackFrame[];
}

export interface ScriptSource {
  realm: ScriptRealm;
  context?: BrowsingContextBrowsingContext;
}

export interface ScriptAddPreloadScriptResult {
  script: ScriptPreloadScript;
}

export interface ScriptGetRealmsResult {
  realms: ScriptRealmInfo[];
}

export interface ScriptMessage {
  method: 'script.message';
  params: ScriptMessageParameters;
}

export interface ScriptMessageParameters {
  channel: ScriptChannel;
  data: ScriptRemoteValue;
  source: ScriptSource;
}

export interface ScriptRealmCreated {
  method: 'script.realmCreated';
  params: ScriptRealmInfo;
}

export interface ScriptRealmDestroyed {
  method: 'script.realmDestoyed';
  params: ScriptRealmDestroyedParameters;
}

export interface ScriptRealmDestroyedParameters {
  realm: ScriptRealm;
}

export interface LogEvent extends LogEntryAdded {}
export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
export type LogEntry = LogGenericLogEntry | LogConsoleLogEntry | LogJavascriptLogEntry;

export interface LogBaseLogEntry {
  level: LogLevel;
  source: ScriptSource;
  text: string | null;
  timestamp: JsUint;
  stackTrace?: ScriptStackTrace;
}

export interface LogGenericLogEntry extends LogBaseLogEntry {
  type: string;
}

export interface LogConsoleLogEntry extends LogBaseLogEntry {
  type: 'console';
  method: string;
  args: ScriptRemoteValue[];
}

export interface LogJavascriptLogEntry extends LogBaseLogEntry {
  type: 'javascript';
}

export interface LogEntryAdded {
  method: 'log.entryAdded';
  params: LogEntry;
}