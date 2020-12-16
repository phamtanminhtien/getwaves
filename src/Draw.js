import { FILL } from "./constant";

export default class Draw {
  constructor(point, fill) {
    this.fill = fill;
    this.point = point;
    this.height = 320;
    this.width = 1440;
  }
  getXOf(i) {
    const onePice = this.width / (this.point.length - 1);
    return i * onePice;
  }
  getYOf(i) {
    return this.height * (this.point[i] / 10);
  }
  getLocation(i) {
    return this.getXOf(i) + "," + this.getYOf(i);
  }
  _M(i) {
    return "M" + this.getLocation(i);
  }
  _L(i) {
    return "L" + this.getLocation(i);
  }

  getLine() {
    if (this.point.length < 2) return "";
    let stringBuilderForLine = "";
    this.point.forEach((v, i) => {
      if (i === 0) {
        stringBuilderForLine += this._M(i);
      } else {
        stringBuilderForLine += this._L(i);
      }
    });
    if (this.fill === FILL.BOTTOM) {
      stringBuilderForLine += "L" + this.width + "," + this.height;
      stringBuilderForLine += "L0," + this.height + "Z";
    } else {
      stringBuilderForLine += "L" + this.width + ",0";
      stringBuilderForLine += "L0,0Z";
    }

    return stringBuilderForLine;
  }

  getStep() {
    if (this.point.length < 2) return "";

    let stringBuilderForStep = "";
    if (this.point.length === 2) {
      stringBuilderForStep += this._M(0);
      stringBuilderForStep += "L" + this.getXOf(1) + "," + this.getYOf(0);
      stringBuilderForStep += "L" + this.getXOf(1) + "," + this.getYOf(1);
      stringBuilderForStep += "L" + this.width + "," + this.getYOf(1);
    } else {
      this.point.forEach((v, i) => {
        if (i === 0) {
          stringBuilderForStep += this._M(i);
        } else if (i < this.point.length - 1) {
          stringBuilderForStep +=
            "L" + this.getXOf(i) + "," + this.getYOf(i - 1);
          stringBuilderForStep += "L" + this.getXOf(i) + "," + this.getYOf(i);
        }
      });
      if (this.point[this.point.length - 2] === 10) {
        stringBuilderForStep +=
          "L" +
          (this.point.length - 2) * (this.width / (this.point.length - 1)) +
          "," +
          this.height * (9 / 10);
        stringBuilderForStep += "L" + this.width + "," + this.height * (9 / 10);
      } else {
        stringBuilderForStep +=
          "L" + this.width + "," + this.getYOf(this.point.length - 2);
      }
    }

    if (this.fill === FILL.BOTTOM) {
      stringBuilderForStep += "L" + this.width + "," + this.height;
      stringBuilderForStep += "L0," + this.height + "Z";
    } else {
      stringBuilderForStep += "L" + this.width + ",0";
      stringBuilderForStep += "L0,0Z";
    }

    return stringBuilderForStep;
  }

  getCurve() {
    if (this.point.length < 2) return "";
    // let onePice = this.width / (this.point.length - 1);
    let stringBuilderForCur = this._M(0);
    stringBuilderForCur +=
      "L" +
      (this.getXOf(0) + (this.getXOf(1) - this.getXOf(0)) / 2) +
      "," +
      (this.getYOf(0) + (this.getYOf(1) - this.getYOf(0)) / 2);

    for (let i = 1; i < this.point.length - 1; i++) {
      stringBuilderForCur +=
        "C" +
        this.getXOf(i) +
        " " +
        this.getYOf(i) +
        "," +
        this.getXOf(i) +
        " " +
        this.getYOf(i) +
        "," +
        (this.getXOf(i) + (this.getXOf(i + 1) - this.getXOf(i)) / 2) +
        " " +
        (this.getYOf(i) + (this.getYOf(i + 1) - this.getYOf(i)) / 2);
    }

    stringBuilderForCur +=
      "L" + this.width + "," + this.getYOf(this.point.length - 1);

    if (this.fill === FILL.BOTTOM) {
      stringBuilderForCur += "L" + this.width + "," + this.height;
      stringBuilderForCur += "L0," + this.height + "Z";
    } else {
      stringBuilderForCur += "L" + this.width + ",0";
      stringBuilderForCur += "L0,0Z";
    }

    return stringBuilderForCur;
  }
}
