
class snake {

  constructor(x, y, len) {
    this.x = x;
    this.y = y;
    this.len = len;
    this.history=[];
   
  }
  
  eatfood(foodObject){
    this.history.unshift([foodObject.x,foodObject.y]);
    this.len++;

    
  }

  show() {
    fill(148, 198,35);
    for(var i=0; i<this.history.length ;i++){
      
    rect(this.history[i][0], this.history[i][1], size, size);
     
    }
     if(this.history.length>=this.len)
      this.history.pop();

  }
  move(arr) {
    this.history.unshift([this.x,this.y]);
    this.x = this.x + arr[0] * size;
    this.y = this.y + arr[1] * size;
    
    //wrap
  if(this.x==width)
  {
   this.x=0;
  }
    else if(this.x<0)
    {
      this.x=width;
    }
    if(this.y==height)
  {
   this.y=0;
  }
    else if(this.y<0)
    {
      this.y=height;
    }
  }
  
  collision()
  { 
    
   for(var i=1; i<this.history.length;i++){
    
     if(equalsarr([this.x, this.y], this.history[i])){
       
       
       return true;
     }
   }
    
    return false;
  }

  die(){
     background(0);
     fill(255,255,255);
     stroke(0);
    
    for(var i=0; i<this.history.length ;i++){
      
    rect(this.history[i][0], this.history[i][1], size, size);
    
    
     
    }
  }
  
  
  
}
