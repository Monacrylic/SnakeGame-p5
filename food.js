class food{
  constructor(){
this.x=0;
this.y=0;
 
  }
  
  spawnfood(sn){
    var bool=true; 
    
    this.x=int(random(width/size))*size;
    this.y=int(random(height/size))*size;
    for (var x=0;x<sn.history.length;x++){
        if(sn.history[x][0]==this.x ||sn.history[x][1]==this.y){
            bool=false;
    this.x=int(random(width/size))*size;
    this.y=int(random(height/size))*size;
            break;
        } 
    }

    
  }
  
  showfood(){
    fill(299,88,18);
    rect(this.x, this.y, size, size);
  }
  
  foodeaten(){
    this.x=-3*size;
    this.y=-3*size;
    
  }
  
}