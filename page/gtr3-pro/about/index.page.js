import { ARC_STYLE_EDGE, GROUP_DEVELOPER, GROUP_VERSION, TEXT_STYLE_TITLE } from "./index.style";
// export const pack = hmApp.packageInfo()
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

        // group version
        const groupVersion = hmUI.createWidget(hmUI.widget.GROUP, {
            ...GROUP_VERSION.GROUP_STYLE,
        })
        groupVersion.createWidget(hmUI.widget.TEXT, {
            ...GROUP_VERSION.TEXT_TITLE_STYLE,
        })
        groupVersion.createWidget(hmUI.widget.TEXT, {
            ...GROUP_VERSION.TEXT_INFO_STYLE,
        })

        // group developer
        const groupDeveloper = hmUI.createWidget(hmUI.widget.GROUP, {
            ...GROUP_DEVELOPER.GROUP_STYLE,
        })
        groupDeveloper.createWidget(hmUI.widget.TEXT, {
            ...GROUP_DEVELOPER.TEXT_TITLE_STYLE,
        })
        groupDeveloper.createWidget(hmUI.widget.TEXT, {
            ...GROUP_DEVELOPER.TEXT_INFO_STYLE,
        })

        
      },
      onInit() {
        logger.debug('page onInit invoked')
      },
    
      onDestroy() {
        logger.debug('page onDestroy invoked')
      },
})