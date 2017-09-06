import * as DomHelper from "./helper/dom.js";
import * as ConfigHelper from "./helper/config.js";

(function($){

  $.fn['flipThePage'] = function(){
    let opts = arguments.length ? arguments[0] : {};
    opts['server'] = opts['server'] || '';

    ConfigHelper.setRemoteServer(opts['server']);
    DomHelper.Initialise(this);

    return this;
  };

})(window['jQuery']);