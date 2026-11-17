class Lava
{
	constructor(x, y, w, canvas_height)
	{
		this.active = true;
		this.type = "trap";
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = canvas_height - this.y;
		this.rt_side = this.x + this.width;

		this.image1 = "./img/lava1.png";
		this.image2 = "./img/lava2.png";
		this.image3 = "./img/lava3.png";
		this.img = this.image1;
	}

	// --------------------------------------------------------
	chg_img()
	{
		var choose = Math.floor(Math.random() * 3);
		switch(choose)
		{
			case 0:
				this.img = this.image1;
				break;
			case 1:
				this.img = this.image2;
				break;
			case 2:
				this.img = this.image3;
				break;
		}
	}
	
	// ---------------------------------------------------------------
	draw(Canvas)
	{
		var can1 = Canvas.getContext("2d");

		// can1.fillStyle = "green";
		// can1.fillRect(this.x, this.y, this.width, this.height);

		this.chg_img();
		var img = new Image();
		img.src = this.img;
		can1.drawImage(img, this.x, this.y, this.width, this.height);
	}

	// -------------------------------------------------------------------
	control(play)
	{
		// console.log("mario bot " + play.bot);
		if (play.x >= this.x && play.rt_side <= this.rt_side)
		{
			if (play.bot > this.y)
			{
				// console.log("mario bot " + play.bot);
				// console.log("lave: " + this.y);
				play.is_dead();
			}
		}
	}
}

export {Lava};