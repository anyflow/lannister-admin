let basicProfile = [
  {
    key: "mqttBrokerAddress",
    text: "MQTT Broker Address",
    value: "mqtt://localhost:2883"
  },
  {
    key: "clientId",
    text: "Client ID",
    value: "randomClientID"
  },
  {
    key: "cleanSession",
    text: "Clean Session",
    value: true
  },
  {
    key: "willQos",
    text: "Will QoS",
    value: 0
  },
  {
    key: "willRetain",
    text: "Will Retain",
    value: true
  },
  {
    key: "willTopic",
    text: "Will Topic",
    value: "will_topic_value"
  },
  {
    key: "willMessage",
    text: "Will Message",
    value: "will_message_value"
  },
];

let advancedProfile = [
  {
    key: "userName",
    text: "User Name",
    value: "anyflow"
  },
  {
    key: "password",
    text: "Password",
    value: "somePassword"
  },
  {
    key: "mqttVersion",
    text: "MQTT version",
    value: "3.1.1"
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

export { basicProfile, advancedProfile };