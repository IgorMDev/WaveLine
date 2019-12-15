class Basic{
    speed=400;
    angleDelta = Math.PI/180;
    wallsInterval = 300;
    rotations = [[0,0],[30,30],[-30,-30]];
}
class Meteor extends Basic{

}
module.exports = {
    Basic,
    Meteor
}