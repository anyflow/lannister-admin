let mqttPacket = {
  connect: {
    cmd: 'connect',
    protocolId: 'MQTT', // or 'MQIsdp' in MQTT 3.1.1
    protocolVersion: 4, // or 3 in MQTT 3.1
    clean: true, // or false
    clientId: 'my-device',
    keepalive: 0, // seconds0 is the defaultcan be any positive number
    username: 'matteo',
    password: new Buffer('collina'), // passwords are buffers
    will: {
      topic: 'mydevice/status',
      payload: new Buffer('dead') // payloads are buffers
    }
  },

  connack: {
    cmd: 'connack',
    returnCode: 0, // or whatever else you see fit
    sessionPresent: false // or true.
  },

  subscribe: {
    cmd: 'subscribe',
    messageId: 42,
    subscriptions: [{
      topic: 'test',
      qos: 0
    }]
  },

  suback: {
    cmd: 'suback',
    messageId: 42,
    granted: [0, 1, 2, 128]
  },

  unsubscribe: {
    cmd: 'unsubscribe',
    messageId: 42,
    unsubscriptions: [
      'test',
      'a/topic'
    ]
  },

  unsuback: {
    cmd: 'unsuback',
    messageId: 42
  },

  publish: {
    cmd: 'publish',
    messageId: 42,
    qos: 2,
    dup: false,
    topic: 'test',
    payload: new Buffer('test'),
    retain: false
  },

  puback: {
    cmd: 'puback',
    messageId: 42
  },

  pubrec: {
    cmd: 'pubrec',
    messageId: 42
  },

  pubrel: {
    cmd: 'pubrel',
    messageId: 42
  },

  pubcomp: {
    cmd: 'pubcomp',
    messageId: 42
  },

  pingreq: {
    cmd: 'pingreq'
  },

  pingresp: {
    cmd: 'pingresp'
  },

  disconnect: {
    cmd: 'disconnect'
  }
};

export {mqttPacket};