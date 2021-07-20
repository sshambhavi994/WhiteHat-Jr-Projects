var box;

function setup() 
{
    createCanvas(400,400);

    box = createSprite(200,200,30,30);

}


function draw() 
{
    background(30);

    if (keyIsDown(DOWN_ARROW))
    {
        background("antiquewhite");
    }

    if (keyIsDown(UP_ARROW))
    {
        background("thistle");
    }

    if (keyIsDown(LEFT_ARROW))
    {
        background("turquoise");
    }

    if (keyIsDown(RIGHT_ARROW))
    {
        background("deeppink");
    }


    drawSprites();

}




