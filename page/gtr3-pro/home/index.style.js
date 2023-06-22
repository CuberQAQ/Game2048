export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo()
import { gettext } from "i18n"
export const IMG_STYLE_TITLE = {
    x: (DEVICE_WIDTH - 280) / 2,
    y: px(60),
    src: "image/title.png",
}

export const ARC_STYLE_EDGE = {
    x: px(0),
    y: px(0),
    w: px(480),
    h: px(480),
    line_width: px(3),
    color: 0xffffff,
}

export const BUTTON_STYLE_START = {
    text: gettext('homeButtonStart'),
    w: px(240),
    h: px(100),
    x: (DEVICE_WIDTH - px(240)) / 2 - 1,
    y: px(220),
    radius: px(50),
    text_size: px(36),
    normal_color: 0x222222,
    press_color:0x333333,
}

// export const BUTTON_STYLE_SETTING = {
//     text: gettext('homeButtonSetting'),
//     w: 220,
//     h: 60,
//     x: (DEVICE_WIDTH - 220) / 2 - 1,
//     y: 315,
//     radius: 30,
//     normal_color: 0x222222,
//     press_color:0x333333,
// }