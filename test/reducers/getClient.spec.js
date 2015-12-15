import expect from 'expect';
import deepFreeze from 'deep-freeze';
import clients from '../../reducers/clients';

describe('reducers ', () => {
  describe('getClients', () => {
    it('should handle initial state', () => {
      const stateBefore = [];
      const action = {
        type: 'GET_CLIENTS'
      };
      const stateAfter = [
        {
          client: "Sacred Heart",
          clientKey: "",
          howToDeliver: "ECNAUTH"
        }
      ];

      deepFreeze(stateBefore);
      deepFreeze(action);

      expect(clients(stateBefore, action))
      .Equal(stateAfter);
    });
  });
});
