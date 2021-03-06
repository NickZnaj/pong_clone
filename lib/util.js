var Util = {
  inherits: function(ChildClass, BaseClass) {
    function Surrogate() { this.constructor = ChildClass;}
    Surrogate.prototype = BaseClass.prototype;
    ChildClass.prototype = new Surrogate();
  },

  dist: function(pos1, pos2) {

    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
  },

  slope: function(y1, y2, x1, x2) {
    var slope = (y1 - y2) / (x1 - x2);

    return slope;
  },

  extrapolatePoint: function(slope, x1, x2, y2) {
    var collisionY =
    slope*(x1 - x2) + y2;

    return collisionY;
  },

///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

  findTheta: function(xVel, yVel){
    if (xVel === 0){
      if (yVel > 0) xVel = ((0 - Math.PI) / 2);
      else xVel = (Math.PI / 2);
    }

    return Math.atan(-yVel / xVel);
  },

  findMagnitude: function(xVel, yVel){
    return Math.sqrt(xVel * xVel + yVel * yVel);
  }


};

module.exports = Util;
