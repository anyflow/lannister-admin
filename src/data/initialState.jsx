import { basicProfile, advancedProfile } from '../data/ConnectionProfile';

const initialState = {
  Hello: {
    name: 'World'
  },
  WebsocketClient: {
    connectionStatus: 'disconnected',
    connectionProfile: {
      basicProfile,
      advancedProfile
    }
  }
};

export default initialState;