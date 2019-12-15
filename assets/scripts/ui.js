var g = require('common');
cc.Class({
    extends: cc.Component,
    
    properties: {
        startBtn: cc.Node,
    },
    onLoad () {
        this.startBtn.on(cc.Node.EventType.MOUSE_DOWN, e => {
            
           g.arena.getComponent('arena').run();
           this.node.active = false;
        });
        this.node.on(cc.Node.EventType.MOUSE_DOWN, e => {
            e.stopPropagation();
        });
        g.ui = this.node;
    },
    start () {
        
    },
    
});