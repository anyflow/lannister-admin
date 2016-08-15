const initialState = {
  Hello: {
    name: 'World'
  },

  WebsocketClient: {
    connectionStatus: 'disconnected',
    connectionProfile: {
      mqttVersion: '3.1.1',
      mqttBrokerAddress: 'ws://anyflow.iptime.org:2883/mqtt',
      cleanSession: true,
      clientId: 'randomClientID',
      userName: 'anyflow',
      password: 'somePassword',
      willQos: 2,
      willRetain: true,
      willTopic: 'will_topic_value',
      willMessage: 'will_message_value',
      connectionTimeout: 300,
      keepAliveInterval: 60
    },
  }
};

export default initialState;