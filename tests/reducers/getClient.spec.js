import expect from 'expect';
import deepFreeze from 'deep-freeze';

const testGetClients = () => {
  const stateBefore: [];
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
  deepFreeze(stateAfter);
};



describe('reducers', () => {
  describe('getClients', () => {

  });
});
