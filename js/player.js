class Player{
    constructor(){
        this.name=null
        this.index=null
        this.positionX=0
        this.positionY=0
        this.life = 300
    }
    addPlayer() {
        var playerIndex = "players/player" + this.index;
    
        if (this.index === 1) {
          this.positionX = width / 2 - 200;
          this.positionY = height-360
        } else {
          this.positionX = width / 2 + 200;

          this.positionY = height - 360
        }
    
        database.ref(playerIndex).set({
          name: this.name,
          positionX: this.positionX,
          positionY: this.positionY,
          life: this.life
          
        });
    }

    getCount() {
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", data => {
          playerCount = data.val();
        });
    }

    updateCount(count) {
        database.ref("/").update({
          playerCount: count
        });
    }

    getDistance() { //pega no banco de dados! 
      var playerDistanceRef = database.ref("players/player" + this.index);
      playerDistanceRef.on("value", data => {
        var data = data.val();
        this.positionX = data.positionX;
        this.positionY = data.positionY;
      });
    }

    update() { 
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).update({
        positionX: this.positionX,
        positionY: this.positionY,
        life: this.life
      });
    }
    
    static getPlayersInfo() {
      var playerInfoRef = database.ref("players");
      playerInfoRef.on("value", data => {
        allPlayers = data.val();
      });
     
    }
     
}