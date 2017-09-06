let ConfigData = {
  server : ''
};

let setRemoteServer = function(str){
  ConfigData.server = str;
};

let getRemoteServer = function(){
  return ConfigData.server;
};

export {
  setRemoteServer,
  getRemoteServer
}