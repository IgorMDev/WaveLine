var g = require('common');
cc.Class({
    extends: cc.Component,

    onLoad () {
        this.tail = this.node.getChildByName('tail').getComponent(cc.MotionStreak);
    },
    onCollisionEnter(other, self){
        g.arena.getComponent('arena').endRound(this.node.getPosition());
    },
    restart(){
        this.node.x = 0;
        this.tail.reset();
    }
});