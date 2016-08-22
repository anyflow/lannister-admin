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
    subscriptions: {
      // 'home/fountain': {
      //   count: 4,
      //   qos: 0,
      //   color: ''
      // },
    },
    messages: [
      // 'home/fountain': {
      //   message: 'This is a sample message',
      //   date: new Date()
      // }
    ],
  }
};

export default initialState;