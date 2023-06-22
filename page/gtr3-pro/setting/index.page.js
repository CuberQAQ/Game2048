import { ARC_STYLE_EDGE, GROUP_ABOUT, TEXT_STYLE_TITLE } from "./index.style";

const logger = DeviceRuntimeCore.HmLogger.getLogger('game2048');

Page({
    build() {
        logger.debug('page build invoked')
        // hmUI.createWidget(hmUI.widget.ARC, {
        //     ...ARC_STYLE_EDGE,
        // })
        hmUI.createWidget(hmUI.widget.TEXT, {
            ...TEXT_STYLE_TITLE,
        })

        // group: about
        const groupAbout = hmUI.createWidget(hmUI.widget.GROUP, {
            ...GROUP_ABOUT.GROUP_STYLE,
        });
        groupAbout.createWidget(hmUI.widget.TEXT, {
            ...GROUP_ABOUT.TEXT_STYLE,
        })
        groupAbout.createWidget(hmUI.widget.IMG, {
            ...GROUP_ABOUT.IMG_STYLE,
        })
        groupAbout.addEventListener(hmUI.event.CLICK_UP, function (info) {
            console.log(info.x);
            hmApp.gotoPage({file: 'page/gtr3-pro/about/index.page'});
        })
      },
      onInit() {
        logger.debug('page onInit invoked')
      },
    
      onDestroy() {
        logger.debug('page onDestroy invoked')
      },
})