const initialState = {
  value: null,
  getemailId: {
    email: "",
    platform: "",
    androidVersion: "",
    deviceName: "",
    devicesType: "",
    getdevicesId: "",
    DevicesToken: "",
    ChoseLang: "",
    realId: "",
    aliasId: ""
  }
};


const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, value: action.payload };


    case 'SET_DATA2':
      return { ...state, value: action.payload };

    case 'getemailId':
      return { ...state, getemailId: action.payload };


    default:
      return state;
  }
};


export default dataReducer;
