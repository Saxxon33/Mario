class Game
{
	constructor(play1, grav, canvas)
	{
		this.type = "game";
		this.objs = [];
		this.play1 = play1;
		this.grav = grav;

		// Canvas
		this.Canvas = document.getElementById(canvas);
		this.can1 = this.Canvas.getContext("2d");

		// level and scenes
		this.level = 1;
		this.scene = 1;
	}

	// ----------------------------------------------------------
	draw_can ()
	{
		for (let x in this.objs)
		{
			if (this.objs[x].active)
				this.objs[x].draw(this.Canvas);
		}
	}

	// -----------------------------------------------------------------
	game_over()
	{
		// Mario is killed
		//hearts.heart_num = 0;

		this.can1.font = "100px Arial";
		this.can1.fillStyle = "red";
		this.can1.textAlign = "center";

		var text_x = this.Canvas.width / 2;
		var text_y = this.Canvas.height / 2;
		this.can1.fillText("Game Over", text_x, text_y);
	}

	game_won()
	{
		this.can1.font = "100px Arial";
		this.can1.fillStyle = "green";
		this.can1.textAlign = "center";

		var text_x = this.Canvas.width / 2;
		var text_y = this.Canvas.height / 2;
		this.can1.fillText("Level 1 Completed", text_x, text_y);
	}

	// -------------------------------------------------------
	bg_color (color)
	{
		this.Canvas.style.backgroundColor = color;
	}	

	// --------------------------------------------------------
	game_control ()
	{
		for (let x in this.objs)
		{
			if (this.objs[x].type == "enemy" )
				{this.objs[x].control(this.objs, this.grav, this.play1, this.Canvas);}
			else if (this.objs[x].type == "player")
				{this.objs[x].control(this.objs, this.grav, this.Canvas);}
			else if (this.objs[x].type == "change")
			{
				this.objs[x].control(this.play1);
				if (this.objs[x].chg == true)
				{
					this.new_scene(this.objs[x].next);
					// console.log("Scene2");
				}
			}
			else if (this.objs[x].type == "trap")
			{
				this.objs[x].control(this.play1);
			} else {}

		}
	}

	// ------------------------------------------------------------------------
	start_player(x, y)
	{
		this.play1.chg_image("normal");
		this.play1.x = x;
		this.play1.y = y;
	}

	// ---------------------------------------------------------------
	new_scene (scene)
	{
		this.bg_color(scene.color);
		this.start_player(scene.x, scene.y);
		scene.objs.push(this.play1);
		this.objs = scene.objs;
	}

	update_objs(new_obj)
	{
		this.objs = new_obj;
	}


} // end class

export {Game};