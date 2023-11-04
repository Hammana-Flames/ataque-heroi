class Heroi {
    
    nome;
    idade;
    classe;
    
    constructor(nome, idade, classe) {
        this.nome = nome;
        this.idade = idade;
        this.classe = classe;
    }
    
    atacar() {
        
        let ataque = ""
        
        if (this.classe == "mago") {
            
            ataque = "magia"
            
        } else if (this.classe == "guerreiro") {
            
            ataque = "espada"
            
        } else if (this.classe == "monge") {
            
            ataque = "artes marcias"
            
        } else if (this.classe == "ninja") {
            
            ataque = "shuriken"
            
        }
        
        console.log(`O ${this.classe} atacou usando ${ataque}`)
        
    }
    
}

const heroi = new Heroi("Hammana", 22, "guerreiro");
heroi.atacar()
