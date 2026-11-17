class Scene
{
	constructor (x, y, color, objs)
	{
		this.x = x;	// player start x
		this.y = y; // player start y
		this.color = color; // background color for scene
		this.objs = objs; // object array
		this.type = "scene";
	}
	
}

export {Scene};