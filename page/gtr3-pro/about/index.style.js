export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo()
import { gettext } from "i18n"
// import { pack } from "./index.page"

export const ARC_STYLE_EDGE = {
    x: px(0),
    y: px(0),
    w: px(480),
    h: px(480),
    line_width: px(2),
    color: 0xffffff,
}
export const TEXT_STYLE_TITLE = {
    x: px(0),
    y: px(30),
    w: px(480),
    h: px(70),
    text: gettext('aboutTitle'),
    text_size: px(40),
    color: 0xffffff,
    align_h: hmUI.align.CENTER_H,
}
export const GROUP_VERSION = {
    GROUP_STYLE : {
        x: px(0),
        y: px(150),
        w: px(480),
        h: px(120),
    },
    TEXT_TITLE_STYLE: {
        x: px(60),
        y: px(0),
        w: px(300),
        h: px(60),
        text: gettext('aboutVersionTitle'),
        text_size: px(40),
        align_v: hmUI.align.CENTER_V,
        color: 0xffffff,
    },
    TEXT_INFO_STYLE: {
        x: px(60),
        y: px(42),
        w: px(300),
        h: px(60),
        text: "1.0.3",// pack.app.version.name,
        text_size: px(30),
        align_v: hmUI.align.CENTER_V,
        color: 0x666666,
    },
}
export const GROUP_DEVELOPER = {
    GROUP_STYLE : {
        x: px(0),
        y: px(270),
        w: px(480),
        h: px(120),
    },
    TEXT_TITLE_STYLE: {
        x: px(60),
        y: px(0),
        w: px(300),
        h: px(60),
        text: gettext('aboutDeveloperTitle'),
        text_size: px(40),
        align_v: hmUI.align.CENTER_V,
        color: 0xffffff,
    },
    TEXT_INFO_STYLE: {
        x: px(60),
        y: px(42),
        w: px(300),
        h: px(60),
        text: gettext('aboutDeveloperInfo'),
        text_size: px(30),
        align_v: hmUI.align.CENTER_V,
        color: 0x666666,
    },
}