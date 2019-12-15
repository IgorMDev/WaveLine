cc.Class({
    extends: cc.Component,
    properties: {
        
    },
    onLoad () {
        this.walls = this.node.children;
        //this.node.active = false;
    },
    start () {
        this.cycle = 0;
    },
    /*update (dt) {

    },*/
    setNextBarrier(){
        if(this.cycle === this.walls.length) this.cycle = 0;
        let wall = this.walls[this.cycle];
        wall.getComponent('barrier').run();
        this.cycle++;
    },
    
});
