var g = require('common');
cc.Class({
    extends: cc.Component,
    
    properties: {
        barriers: cc.Node,
        actor: cc.Node,
        pointsLabel: cc.Node,
        end: cc.Node
    },
    onLoad () {
        this.node.on(cc.Node.EventType.MOUSE_DOWN, e => {
            if(!this.da){
                g.walls.forEach(el => {el.active = true;});
                
            }
            this.changeDirection();
            
        });
        cc.director.getCollisionManager().enabled = true;
        g.arena = this.node;
        g.barriers = this.barriers;
        g.actor = this.actor;
        this.pLabel = this.pointsLabel.getComponent(cc.Label);
        this.pLabel.enabled = false;
        g.walls = this.barriers.children;
        //this.end.active = false;
        g.walls[0].prev = g.walls[g.walls.length - 1];
        for(let i = 1; i < g.walls.length; i++){
            g.walls[i].prev = g.walls[i - 1];
        }
    },
    start () {
        this.dir = cc.v2(0, 1);
        this.da = 0;
        this.actorTouchPoint = this.node.width/2 - this.actor.width/2;
        this.end.setScale(0);
    },
    update (dt) {
        g.dv = this.dir.mul(g.speed*dt);
        this.actor.x += g.dv.x * 4;
        this.node.y += g.dv.y;
        if(this.da){
            if(Math.abs(this.actor.x) >= this.actorTouchPoint) {
                this.da = 0;
                this.endRound(this.actor.getPosition());
            }
        }
    },
    lateUpdate(dt){
        this.dir.rotateSelf(this.da);
        this.pLabel.string = g.points;
    },
    changeDirection(){
        this.da = this.da===0 ? g.angleSpeed : -this.da;
    },
    run(){
        this.pLabel.enabled = true;
        this.pLabel.string = 'tap to start';
    },
    endRound(c){
        let diagonal = Math.hypot(this.node.width, this.node.height);
        let act = cc.sequence(cc.scaleTo(1, 2), cc.callFunc(this.restart, this));
        this.dir = cc.v2(0,0);
        this.end.setPosition(c);
        this.end.width = this.end.height = diagonal;
        this.end.runAction(act);
        //this.restart();
    },
    restart(){
        this.node.y = 0;
        g.points = 0;
        this.da = 0;
        this.dir = cc.v2(0,1);
        g.walls.forEach(el => {el.active = false;});
        this.pLabel.enabled = false;
        this.actor.getComponent('actor').restart();
        g.ui.active = true;
        this.end.setScale(0);
    },
});