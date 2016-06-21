import * as types from '../actions/action-types';

export function GET_CHAT(CONTACT) {
  return {
    type: types.GET_CHAT,
    CONTACT
    // could possibly add more props
  };
},

export function SEND_MSG(MID,text) {
  return {
    type: types.SEND_MSG,
    text,
    MID
  };
},
export function DELETE_MSG(MID) {
  return {
    type: types.DELETE_MSG,
    MID
  };
},

export function VIEW_PROFILE(CONTACT) {
  return {
    type: types.VIEW_PROFILE,
    CONTACT.profile
  };
},

export function VIEW_PIC(CONTACT) {
  return {
    type: types.VIEW_PIC,
    CONTACT.profile.profile_picture
  };
 },
    export function CHANGE_STATUS(CONTACT,text) {
  return {
    type: types.CHANGE_STATUS,
    text,
    CONTACT.profile.STATUS
  };
 },
    export function ADD_USER(CONTACT) {
  return {
    type: types.ADD_USER,
    CONTACT
  };
    export function DELETE_USER(CONTACT) {
  return {
    type: types.DELETE_USER,
    CONTACT
  };
 }

