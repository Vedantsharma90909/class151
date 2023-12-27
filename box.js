AFRAME.registerComponent("move-box", {
    schema:{
        move_x:{type:"number",default:1},
        move_y:{type:"number",default:1}

    },
    tick:function(){
        this.data.move_x = this.data.move_x+0.01;
        this.data.move_y = this.data.move_y-0.01;
        pos=this.el.getAttribute("position");
        console.log(pos);
        pos.x=this.data.move_x;
        pos.y=this.data.move_y;
        console.log(pos.x);
        this.el.setAttribute("position",{x:pos.x,y:pos.y})
    }
}
)

AFRAME.registerComponent("rotate-box", {
    schema:{
        rotate_x:{type:"number",default:1}
    },
    tick:function(){
        this.data.rotate_x = this.data.rotate_x-5;
        rot=this.el.getAttribute("rotation")
        rot.x=this.data.rotate_x 
        this.el.setAttribute("rotation",{x:rot.x})
    }
})