const initialState = {
  WebsocketTester: {
    connectionStatus: 'disconnected',
    connectionProfile: {
      mqttVersion: '3.1.1',
      mqttBrokerAddress: 'ws://localhost:9001/mqtt',
      cleanSession: true,
      clientId: 'sample_clientid',
      userName: 'sample_username',
      password: 'sample_password',
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
  },

  Messages: {
    messageSent: {
      xAxisUnit: 'second',
      yAxisUnit: 'count',
      data: [

      ]
    },
  },
};
export default initialState;