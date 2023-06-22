import { ARC_STYLE_EDGE, RECT_STYLE_TABLE, TEXT_HEADBAR_STYLE, TEXT_STYLE } from '../gaming/index.style'
import { Game } from '../../../functions/point'
import { gettext } from 'i18n';
var game = null
const logger = DeviceRuntimeCore.HmLogger.getLogger('game2048')
Page({
  build() {
    console.log("happy");
    logger.debug('page build invoked')
    // hmUI.createWidget(hmUI.widget.ARC, {
    //   ...ARC_STYLE_EDGE,
    // })
    game = new Game(69, 119, 8, 8, 75, 75, 144, 460)
    game.score = {
      value: 0,
      ui: hmUI.createWidget(hmUI.widget.TEXT, {
          text: gettext("scoreTitle") + 0,
          color: 0xcccccc,
          x: game.scoreX,
          y: game.scoreY,
          w: px(190),
          h: px(30),
          text_size: px(25),
      }),
    };
    game.table = {
      ui: hmUI.createWidget(hmUI.widget.FILL_RECT, {
          ...RECT_STYLE_TABLE,
          })
    }
    game.headBar = {
      ui: hmUI.createWidget(hmUI.widget.TEXT, {
        ...TEXT_HEADBAR_STYLE,
      })
    }
    game.headBar.ui.setProperty(hmUI.prop.VISIBLE, false);
    
    game.draw();
    game.randomSummon();
    game.randomSummon();
    // game.points[0][0].value = 1;
    // game.points[0][1].value = 2;
    // game.points[0][2].value = 3;
    // game.points[0][3].value = 4;
    // game.points[1][0].value = 0;
    // game.points[1][1].value = 6;
    // game.points[1][2].value = 7;
    // game.points[1][3].value = 8;
    // game.points[2][0].value = 9;
    // game.points[2][1].value = 10;
    // game.points[2][2].value = 11;
    // game.points[2][3].value = 12;
    // game.points[3][0].value = 13;
    // game.points[3][1].value = 14;
    // game.points[3][2].value = 15;
    // game.points[3][3].value = 17;
    game.draw();
    //注册手势监听 一个 JsApp 重复注册会导致上一个注册的回调失效
    hmApp.registGestureEvent(function (event) {
      let msg = 'none'
      switch (event) {
        case hmApp.gesture.UP:
          msg = 'up'
          game.move(game.moveEvent.UP);
          break
        case hmApp.gesture.DOWN:
          msg = 'down'
          game.move(game.moveEvent.DOWN);
          break
        case hmApp.gesture.LEFT:
          msg = 'left'
          game.move(game.moveEvent.LEFT);
          break
        case hmApp.gesture.RIGHT:
          msg = 'right'
          game.move(game.moveEvent.RIGHT);
          break
        default:
          break
      }
      console.log(`receive gesture event ${msg}`)
    
      //跳过默认手势（如：默认右滑返回）
      return true;
    })
  },
  onInit() {
    logger.debug('page onInit invoked')
  },

  onDestroy() {
    logger.debug('page onDestroy invoked')
    hmApp.unregistGestureEvent()
    game.delete();
  },
})