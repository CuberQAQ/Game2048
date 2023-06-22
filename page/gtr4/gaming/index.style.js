import { gettext } from "i18n"

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = hmSetting.getDeviceInfo()

export const TEXT_STYLE = {
  text: gettext('appName'),
  x: px(42),
  y: px(200),
  w: DEVICE_WIDTH - px(42) * 2,
  h: px(100),
  color: 0xffffff,
  text_size: px(36),
  align_h: hmUI.align.CENTER_H,
  text_style: hmUI.text_style.WRAP,
}

export const TEXT_HEADBAR_STYLE = {
  text: gettext("gameOver"),
  x: px(160),
  y: px(20),
  w: px(160),
  h: px(50),
  color: 0xffffff,
  text_size: px(30),
  align_h: hmUI.align.CENTER_H,
}

export const ARC_STYLE_EDGE = {
    x: px(0),
    y: px(0),
    w: px(480),
    h: px(480),
    line_width: px(3),
    color: 0xffffff,
}

export const RECT_STYLE_TABLE = {
  radius: px(8),
  x: px(69),
  y: px(69),
  w: px(340),
  h: px(340),
  color: 0xB7ACA0
}

export const IMG_CARD_TEMPLATE = {
  
}