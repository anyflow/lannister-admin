const initialState = {
  Hello: {
    name: 'World'
  },

  WebsocketClient: {
    connectionStatus: 'disconnected',
    connectionProfile: {
      basicProfile: {
        mqttBrokerAddress: 'ws://anyflow.iptime.org:2883/mqtt',
        clientId: 'randomClientID',
        cleanSession: true,
        willQos: 0,
        willRetain: true,
        willTopic: 'will_topic_value',
        willMessage: 'will_message_value'
      },
      advancedProfile: {
        userName: 'anyflow',
        password: 'somePassword',
        mqttVersion: '3.1.1',
        connectionTimeout: 300,
        keepAliveInterval: 60
      }
    }
  }
};

export default initialState;