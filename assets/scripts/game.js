var g = require('common');
cc.Class({
    extends: cc.Component,

    properties: {
        arena: cc.Node,
        ui: cc.Node
    },
    onLoad () {
        //this.ui.active = false;
    },
    start () {
        

    },
    update (dt) {
        this.ui.y = this.arena.y;
        cc.Camera.findCamera(this.node).node.y = this.arena.y;
        //this.barriers.y = this.player.y;
    }
    
});