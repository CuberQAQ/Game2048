export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo()
import { gettext } from "i18n"

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
    text: gettext('settingTitle'),
    text_size: px(40),
    color: 0xffffff,
    align_h: hmUI.align.CENTER_H,
}

export const GROUP_ABOUT = {
    GROUP_STYLE: {
        x: px(0),
        y: px(150),
        w: px(480),
        h: px(100)
    },
    TEXT_STYLE: {
        x: px(60),
        y: px(0),
        w: px(300),
        h: px(100),
        text: gettext('settingAboutText'),
        text_size: px(40),
        align_v: hmUI.align.CENTER_V,
        color: 0xffffff,
    },
    IMG_STYLE: {
        x: px(400),
        y: px(0),
        w: px(30),
        h: px(100),
        pos_x: px(1),
        pos_y: px(27),
        src: "image/enter.png",
    }
}