const logger = DeviceRuntimeCore.HmLogger.getLogger('game2048 point.js');
import { gettext } from "i18n";
export class Point {
    constructor(xIndex, yIndex, value) {
        console.log("Point constructor done");
        if (xIndex == undefined) {
            logger.debug("point: wrong index");
            xIndex = 0;
        }
        if (yIndex == undefined) {
            logger.debug("point: wrong index");
            yIndex = 0;
        }
        if (value == undefined) {
            value = 0;
        }
        this.xIndex = xIndex;
        this.yIndex = yIndex;
        this.value = value;
        this.ui = null;
        this.text = null;
        this.lastValue = null
        this.rectData = {
            color: 0xffffff
        }
        this.textData = {
            text: '',
            color: 0x888888,
            size: 48
        }
    }
} // A point stands for a position in the 4*4 spuare

export class Game {
    constructor(tableX, tableY, distanceW, distanceH,
        cardW, cardH, scoreX, scoreY) {
        this.moveEvent = {
            UP: 1,
            DOWN: 2,
            LEFT: 3,
            RIGHT: 4,
        }
        if (tableX == undefined) {
            tableX = 69;
        }
        if (tableY == undefined) {
            tableY = 69;
        }
        if (distanceW == undefined) {
            distanceW = 8;
        }
        if (distanceH == undefined) {
            distanceH = 8;
        }
        if (cardW == undefined) {
            cardW = 75;
        }
        if (cardH == undefined) {
            cardH = 75;
        }
        if (scoreX == undefined) {
            scoreX = 0;
        }
        if (scoreY == undefined) {
            scoreY = 0;
        }
        this.tableX = px(tableX);
        this.tableY = px(tableY);
        this.distanceW = px(distanceW);
        this.distanceH = px(distanceH);
        this.cardW = px(cardW);
        this.cardH = px(cardH);
        this.scoreX = px(scoreX);
        this.scoreY = px(scoreY);
        this.points = new Array(); // width
        this.table = null;
        this.headBar = null;
        var i = 0, j = 0;
        for (i = 0; i < 4; i++) {
            this.points[i] = new Array();
            for (j = 0; j < 4; j++) {
                this.points[i][j] = new Point(i, j, 0);
            }
        }
    }
    init(value) {
        if (value == undefined) {
            value = 0;
        }
        for (i = 0; i < 4; ++i) {
            for (j = 0; j < 4; ++j) {
                this.points[i][j] = new Point(i, j, value);
            }
        }
    }
    getColor(value) {
        switch (value) {
            case 0:
                return 0xcac0b4;
            case 1:
                return 0xeee4db;
            case 2:
                return 0xede0c8;
            case 3:
                return 0xf2b179;
            case 4:
                return 0xf59163;
            case 5:
                return 0xf67c5f;
            case 6:
                return 0xf65f3b;
            case 7:
                return 0xedcf72;
            case 8:
                return 0xeecb60;
            case 9:
                return 0xedc64e;
            case 10:
                return 0xedc543;
            case 11:
                return 0xeec12d;
            case 12:
                return 0xae86ac;
            case 13:
                return 0xb36dac;
            case 14:
                return 0xaa60a9;
            case 15:
                return 0xa461a7;
            case 16:
                return 0xa750aa;
            default:
                logger.debug("Get Color Error");
                return 0xFF0004;
        }
    }
    getText(value) {
        switch (value) {
            case 0:
                return { text: "", size: px(48), color: 0x756E66 };
            case 1:
                return { text: "2", size: px(48), color: 0x756E66 };
            case 2:
                return { text: "4", size: px(48), color: 0x756E66 };
            case 3:
                return { text: "8", size: px(48), color: 0xffffff };
            case 4:
                return { text: "16", size: px(42), color: 0xffffff };
            case 5:
                return { text: "32", size: px(42), color: 0xffffff };
            case 6:
                return { text: "64", size: px(42), color: 0xffffff };
            case 7:
                return { text: "128", size: px(38), color: 0xffffff };
            case 8:
                return { text: "256", size: px(38), color: 0xffffff };
            case 9:
                return { text: "512", size: px(37), color: 0xffffff };
            case 10:
                return { text: "1024", size: px(30), color: 0xffffff };
            case 11:
                return { text: "2048", size: px(30), color: 0xffffff };
            case 12:
                return { text: "4096", size: px(30), color: 0xffffff };
            case 13:
                return { text: "8192", size: px(30), color: 0xffffff };
            case 14:
                return { text: "16384", size: px(25), color: 0xffffff };
            case 15:
                return { text: "32768", size: px(25), color: 0xffffff };
            case 16:
                return { text: "65536", size: px(25), color: 0xffffff };
            default:
                logger.debug("Get Image Source Error");
                return { text: "?", size: px(48), color: 0xffffff };
        }
    }
    draw(xIndex, yIndex) {
        var i = 0;
        var j = 0;
        if (xIndex == undefined && yIndex == undefined) {
            // draw all
            for (i = 0; i < 4; i++) {
                for (j = 0; j < 4; j++) {
                    // // delete
                    // if(this.points[i][j].ui != null) {
                    //     hmUI.deleteWidget(this.points[i][j].ui);
                    //     this.points[i][j].ui = null;
                    // }
                    // // create
                    // this.points[i][j].ui 
                    // = hmUI.createWidget(hmUI.widget.IMG, {
                    //     x: this.tableX 
                    //         + this.distanceW * (i + 1)
                    //         + this.cardW * i,
                    //     y: this.tableY
                    //         + this.distanceH * (j + 1)
                    //         + this.cardH * j,
                    //     src: this.getColor(this.points[i][j].value),
                    // })
                    //if(this.points[i][j].value != this.points[i][j].lastValue)
                    let rectData = {color: this.getColor(this.points[i][j].value)}
                    this.points[i][j].rectData = rectData
                    if (this.points[i][j].ui == null) {
                        this.points[i][j].ui
                            = hmUI.createWidget(hmUI.widget.FILL_RECT, {
                                x: this.tableX
                                    + this.distanceW * (i + 1)
                                    + this.cardW * i,
                                y: this.tableY
                                    + this.distanceH * (j + 1)
                                    + this.cardH * j,
                                w: this.cardW,
                                h: this.cardH,
                                color: rectData.color,
                                radius: px(4),
                            })
                    }
                    else {
                        this.points[i][j].ui.setProperty(hmUI.prop.COLOR, rectData.color)
                    }

                    

                    let textData = this.getText(this.points[i][j].value)
                    this.points[i][j].textData = textData
                    if (this.points[i][j].text == null) {
                        this.points[i][j].text = hmUI.createWidget(hmUI.widget.TEXT, {
                            x: this.tableX
                                + this.distanceW * (i + 1)
                                + this.cardW * i,
                            y: this.tableY
                                + this.distanceH * (j + 1)
                                + this.cardH * j,
                            w: this.cardW,
                            h: this.cardH - px(3),
                            align_h: hmUI.align.CENTER_H,
                            align_v: hmUI.align.CENTER_V,
                            color: textData.color, // this.getColor(this.points[i][j].value),
                            text: textData.text,
                            text_size: textData.size,

                        })
                    }
                    else {
                        this.points[i][j].text.setProperty(hmUI.prop.MORE, {
                            text: textData.text,
                            text_size: textData.size,
                            color: textData.color
                        })
                    }



                } // for j
            } // for i
        } else {
            if (xIndex == undefined || yIndex == undefined) {
                logger.debug("drawing index error");
                return;
            }
            // delete
            if (this.points[xIndex][yIndex].ui != null) {
                hmUI.deleteWidget(this.points[xIndex][yIndex].ui);
                this.points[xIndex][yIndex].ui = null;
            }
            // create
            points[xIndex][yIndex].ui =
                hmUI.createWidget(hmUI.widget.IMG, {
                    x: this.tableX
                        + this.distanceW * (xIndex + 1)
                        + this.crawW * xIndex,
                    y: this.tableY
                        + this.distanceH * (yIndex + 1)
                        + this.cardH * yIndex,
                    src: this.getColor(this.points[xIndex][yIndex].value),
                })
        }
    }
    // @return 1:yes 0:no
    haveBlank() {
        var i = 0, j = 0;
        var result = new Array();
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 4; j++) {
                if (this.points[i][j].value == 0) {
                    result.push({ x: i, y: j });
                }
            }
        }
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    ifLose() {
        if (this.haveBlank() == null) {
            let i = 0, j = 0;
            for (i = 0; i < 3; i++) {
                for (j = 0; j < 4; j++) {
                    if (this.points[i][j].value == this.points[i + 1][j].value) {
                        return false;
                    }
                }
            }
            for (i = 0; i < 3; i++) {
                for (j = 0; j < 4; j++) {
                    if (this.points[j][i].value == this.points[j][i + 1].value) {
                        return false;
                    }
                }
            }
            return true;
        }
        else {
            return false
        }
    }
    randomSummon() {
        var data = this.haveBlank();

        if (data != null) {
            var length = data.length;
            var result = data[Math.floor(Math.random() * length)];
            //this.points[result.x][result.y].lastValue = this.points[result.x][result.y].value
            this.points[result.x][result.y].value = 1;
            this.draw();
        }
        // this.points[2][2].value = 3;
        // this.draw();
    }
    resetScore() {
        this.score = 0;
    }
    setScore(score) {
        if (score == undefined) {
            logger.debug("setScore error");
        }
        else {
            this.score.value = score;
            // hmUI.deleteWidget(this.score.ui);
            // this.score.ui = hmUI.createWidget(hmUI.widget.TEXT, {
            //     text: gettext("scoreTitle") + score,
            //     color: 0xcccccc,
            //     x: px(this.scoreX),
            //     y: px(this.scoreY),
            //     w: 190,
            //     h: 30,
            //     text_size: px(25),
            // });
            this.score.ui.setProperty(hmUI.prop.TEXT, gettext("scoreTitle") + score)
        }
        console.log("score set");
    }
    move(event) {
        var i = 0, j = 0, temp = [];
        var result = 0;// 1:ok 0:no
        result = 0;
        switch (event) {
            case this.moveEvent.UP:
                for (i = 0; i < 4; i++) {
                    temp = [];
                    for (j = 0; j < 4; j++) {
                        if (this.points[i][j].value > 0) {
                            if (j > 0) {
                                if (this.points[i][j - 1].value == 0) { result = 1; }
                            }
                            temp.push(this.points[i][j].value);
                            // this.points[i][j].value = 0;
                        }
                    }
                    for (j = 0; j < (temp.length - 1); j++) {
                        if (temp[j] == temp[j + 1]) {
                            result = 1;
                            this.setScore(this.score.value + (2 ** temp[j]))
                            temp[j]++;
                            temp.splice(j + 1, 1);
                            //j = 0;
                        }
                    }

                    while (temp.length < 4) {
                        temp.push(0);
                    }
                    for (j = 0; j < 4; j++) {
                        this.points[i][j].value = temp[j];
                    }
                }
                this.draw();
                break;
            case this.moveEvent.DOWN:
                for (i = 0; i < 4; i++) {
                    temp = new Array();
                    for (j = 3; j >= 0; j--) {
                        if (this.points[i][j].value > 0) {
                            if (j < 3) {
                                if (this.points[i][j + 1].value == 0) { result = 1; }
                            }
                            temp.push(this.points[i][j].value);
                            // this.points[i][j].value = 0;
                        }
                    }
                    for (j = 0; j < (temp.length - 1); j++) {
                        if (temp[j] == temp[j + 1]) {
                            result = 1;
                            this.setScore(this.score.value + (2 ** temp[j]))
                            temp[j]++;
                            temp.splice(j + 1, 1);
                            //j = 0;
                        }
                    }

                    while (temp.length < 4) {
                        temp.push(0);
                    }
                    for (j = 3; j >= 0; j--) {
                        this.points[i][j].value = temp[3 - j];
                    }
                }
                this.draw();
                break;
            case this.moveEvent.LEFT:
                for (i = 0; i < 4; i++) {
                    temp = [];
                    for (j = 0; j < 4; j++) {
                        if (this.points[j][i].value > 0) {
                            if (j > 0) {
                                if (this.points[j - 1][i].value == 0) { result = 1; }
                            }
                            temp.push(this.points[j][i].value);
                            // this.points[j][i].value = 0;
                        }
                    }
                    for (j = 0; j < (temp.length - 1); j++) {
                        if (temp[j] == temp[j + 1]) {
                            result = 1;
                            this.setScore(this.score.value + (2 ** temp[j]))
                            temp[j]++;
                            temp.splice(j + 1, 1);
                            //j = 0;
                        }
                    }

                    while (temp.length < 4) {
                        temp.push(0);
                    }
                    for (j = 0; j < 4; j++) {
                        this.points[j][i].value = temp[j];
                    }
                }
                this.draw();
                break;
            case this.moveEvent.RIGHT:
                for (i = 0; i < 4; i++) {
                    temp = [];
                    for (j = 3; j >= 0; j--) {
                        if (this.points[j][i].value > 0) {
                            if (j < 3) {
                                if (this.points[j + 1][i].value == 0) { result = 1; }
                            }
                            temp.push(this.points[j][i].value);
                            // this.points[j][i].value = 0;
                        }
                    }
                    for (j = 0; j < (temp.length - 1); j++) {
                        if (temp[j] == temp[j + 1]) {
                            result = 1;
                            this.setScore(this.score.value + (2 ** temp[j]))
                            temp[j]++;
                            temp.splice(j + 1, 1);
                            //j = 0;
                        }
                    }

                    while (temp.length < 4) {
                        temp.push(0);
                    }
                    for (j = 3; j >= 0; j--) {
                        this.points[j][i].value = temp[3 - j];
                    }
                }
                this.draw();
                break;
            default:
                logger.debug("moveEvent error");
                break;
        }
        if (result == 1) {
            this.randomSummon();

            if (this.ifLose()) {
                this.headBar.ui.setProperty(hmUI.prop.VISIBLE, true);
                hmApp.unregistGestureEvent()
                // const vibrate = hmSensor.createSensor(hmSensor.id.VIBRATE)
                // vibrate.motorenable = 1
                // vibrate.crowneffecton = 1
                // vibrate.scene = 3
                // vibrate.start()
                // vibrate.stop()
            }
        }
        console.log("Move Done");
    }
    delete() {
        // delete Points
        var i = 0, j = 0;
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 4; j++) {
                if (this.points[i][j].ui != null) {
                    hmUI.deleteWidget(this.points[i][j].ui);
                }
            }
        }
        // delete Score
        if (this.score.ui != null) {
            hmUI.deleteWidget(this.score.ui);
            this.score.ui = null;
        }
        //delete Table
        if (this.table.ui != null) {
            hmUI.deleteWidget(this.table.ui);
            this.table.ui = null
        }
        //delete Headbar
        if (this.headBar.ui != null) {
            hmUI.deleteWidget(this.headBar.ui);
            this.headBar.ui = null;
        }
    }
}

// export const game = new Game(69, 69, 8, 8, 75, 75, 144, 410);