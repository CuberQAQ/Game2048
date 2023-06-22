import { ARC_STYLE_EDGE, BUTTON_STYLE_START, IMG_STYLE_TITLE } from "./index.style";

const logger = DeviceRuntimeCore.HmLogger.getLogger('game2048');

Page({
    build() {
        logger.debug('page build invoked')
        // hmUI.createWidget(hmUI.widget.ARC, {
        //     ...ARC_STYLE_EDGE,
        // })
        hmUI.createWidget(hmUI.widget.IMG, {
            ...IMG_STYLE_TITLE,
        })
        hmUI.createWidget(hmUI.widget.BUTTON, {
            ...BUTTON_STYLE_START,
            click_func: function(button) {
                hmApp.gotoPage({file: 'page/gtr3/gaming/index.page'});
            }

        })
        // hmUI.createWidget(hmUI.widget.BUTTON, {
        //     ...BUTTON_STYLE_SETTING,
        //     click_func: function(button) {
        //         hmApp.gotoPage({file: 'page/gtr4/setting/index.page'});
        //     }
        // })
      },
      onInit() {
        logger.debug('page onInit invoked')
      },
    
      onDestroy() {
        logger.debug('page onDestroy invoked')
      },
})