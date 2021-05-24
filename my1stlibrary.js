function bounceOff(bou1,bou2)
{
  
  if (bou1.x - bou2.x < bou2.width/2 + bou1.width/2 && bou2.x - bou1.x < bou2.width/2 + bou1.width/2) {

    bou1.velocityX = bou1.velocityX * (-1);
    bou2.velocityX = bou2.velocityX * (-1);
  }
  if (bou1.y - bou2.y < bou2.height/2 + bou1.height/2
    && bou2.y - bou1.y < bou2.height/2 + bou1.height/2){
    bou1.velocityY = bou1.velocityY * (-1);
    bou2.velocityY = bou2.velocityY * (-1);
  }
}