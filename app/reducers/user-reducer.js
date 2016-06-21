import * as types from '../actions/actions-types';
import _ from 'lodash';


const intialState={
	
	UID:-1,
	profile:{
	name:"",
	profile_picture:"",
	status:""
    },
    users:[],
	chats:[]
};


const userReducer = function(state = initialState, action) {

  switch(action.type) {
    

    case types.GET_CHAT:
       return Object.assign({}, state, { UID: action.UID, profile:action.profile,user:action.users[],chats:action.chats });

        case types.SEND_MSG:{

      return Object.assign({}, state, { userProfile: action.userProfile });
        	
        }


    case types.DELETE_USER:{

      const newUsers = _.filter(state.users, user => user.UID != action.userUID);
      return Object.assign({}, state, { users: newUsers });
  },

    case types.USER_PROFILE_SUCCESS:
      return Object.assign({}, state, { userProfile: action.userProfile });

  }

  return state;

}

export default userReducer;

