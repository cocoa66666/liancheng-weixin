if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../pages/swiperDot/swiperDot?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/shToast/shToast?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/swiperDot/swiperDot2?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/power/power?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/index/index?hash=26791aa1119db91f0d5a26863fae8d0cb10b12ab');
require('../../pages/version/version?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/recharge/recharge?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/arrears/arrears?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/charging/charging?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/powerDetail/powerDetail?hash=0d198faca3f459b5bd4b3720f2eef3ebe1e5035c');
require('../../pages/selectDetail/selectDetail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/aboutUs/aboutUs?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/mine/mine?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/login/login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/forget/forget?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/notLogin/notLogin?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/navi/navi?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/myWalletDetail/myWalletDetail?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/myWallet/myWallet?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}