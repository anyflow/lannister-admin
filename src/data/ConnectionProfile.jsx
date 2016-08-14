import * as Immutable from 'immutable';
import initialState from './initialState';

let basicProfileTemplate = [
  {
    key: "mqttBrokerAddress",
    text: "MQTT Broker Address",
    value: ""
  },
  {
    key: "clientId",
    text: "Client ID",
    value: ""
  },
  {
    key: "cleanSession",
    text: "Clean Session",
    value: false
  },
  {
    key: "willQos",
    text: "Will QoS",
    value: 0
  },
  {
    key: "willRetain",
    text: "Will Retain",
    value: false
  },
  {
    key: "willTopic",
    text: "Will Topic",
    value: ""
  },
  {
    key: "willMessage",
    text: "Will Message",
    value: ""
  },
];

let advancedProfileTemplate = [
  {
    key: "userName",
    text: "User Name",
    value: ""
  },
  {
    key: "password",
    text: "Password",
    value: ""
  },
  {
    key: "mqttVersion",
    text: "MQTT version",
    value: ""
  },
  {
    key: "connectionTimeout",
    text: "Connection Timeout",
    value: 300
  },
  {
    key: "keepAliveInterval",
    text: "Keep Alive Interval",
    value: 60
  },
];

export { basicProfileTemplate, advancedProfileTemplate };