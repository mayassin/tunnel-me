import * as types from '../actions/action-types';

export function getChat(UID) {
  return {
    type: types.GET_CHAT,
    UID
    // could possibly add more props
  };
},

export function SEND_MSG(MSG) {
  return {
    type: types.SEND_MSG
    // could possibly add more props
  };
}
