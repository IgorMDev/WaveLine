var g = require('common');
cc.Class({
    extends: cc.Component,
    onLoad () {
        this.lwall = this.node.getChildByName('lwall');
        this.rwall = this.node.getChildByName('rwall');
        this.node.active = false;
    },
    start() {
        
    },
    update(dt) {
        this.node.y -= g.dv.y;
    },
    lateUpdate(){
        if(this.node.y < -640){
            this.setBar(this.node.prev.y);
        }
        if(!this.checkedByPlayer && this.node.y <= g.actor.y){
            g.points++;
            this.checkedByPlayer = true;
        }
    },
    onEnable(){
        if(this.node.getSiblingIndex() === 0) {
            this.setBar(800);
        }else{
            this.setBar(this.node.prev.y);
        }
        this.checkedByPlayer = false;
        
    },
    setBar(y){
        //if(!this.node.active) this.node.active = true;
        this.checkedByPlayer = false;
        this.setWallRandomStyle();
        this.node.y = y + g.wallInterval;
    },
    setWallRandomStyle(){
        this.setWallRotation(...g.rotations[this.randomInt(0, g.rotations.length)])
        this.node.x = g.xoffset[this.randomInt(0, g.xoffset.length)]
    },
    setWallRotation(l,r){
        this.lwall.angle = l;
        this.rwall.angle = r;
    },
    randomInt(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    },
});
