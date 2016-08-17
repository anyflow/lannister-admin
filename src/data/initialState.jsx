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
    subscriptions: [
      {
        topicFilter: 'home/fountain',
        count: 4,
        color: ''
      },
      {
        topicFilter: '$',
        count: 10,
        color: ''
      },
    ],
    messages: [
      {
        topicFilter: 'home/fountain',
        message: 'This is a sample message',
        date: '2016-08-17T14:11:29.337Z'
      }
    ],
  }
};

export default initialState;