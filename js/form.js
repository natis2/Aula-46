class Form{
    constructor(){
this.input=createInput('')
this.button=createButton('Jogar')
this.frase=createElement("h2")
}
display(){
this.position()
this.style()
this.Start()
}
position(){
    this.input.position(width/2-100,height/2)
    this.button.position(width/2-85,height/2+100)
    this.frase.position(width/2,height/2)
}
style(){
this.input.class("customInput")
this.button.class('customButton')
this.frase.class("greeting")

}
hide(){
   this.frase.hide()
    this.button.hide()
    this.input.hide()
}

Start(){
    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        var n=`Olá ${this.input.value()}, espere o outro jogador entrar.`
        this.frase.html(n)

     playerCount+=1
      player.name = this.input.value();
      player.index = playerCount;
      player.addPlayer();
      player.getDistance();
      player.updateCount(playerCount);
    }
    )
}
}