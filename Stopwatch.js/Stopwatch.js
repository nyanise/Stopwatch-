class Component
{
    notify() {
        this.callback();
    }

    register(callback) {
        this.callback = callback;
    }

    render() {}
}

class Renderer
{
    constructor(component, destination) {
        this.render = component.render.bind(component);
        this.destination = destination;

        component.register(() => {
            return this.listen();
        });

        this.listen();
    }

    listen () {
        this.destination.innerHTML = '';
        this.destination.appendChild(this.render());
    }
}


class Stopwatch extends Component
{
    constructor() {
        super();
        this.time=0;
        this.running=0;
    }
    
    start(){
       
        if (this.running==0){
            this.running=1;
            
           this. increment();
        };
    }
    pause(){
       this.running=0;
    };
    reset(){
        this.running=0;
       this.time="0";
       this.hours="0";
       this.secs="00";
       this.mins="00";
       this.tenth="0";
      
    };
    increment(){
        if(this.running==1){
            setTimeout(() =>{
                this.time++;
                this.mins= Math.floor(this.time/10/60);
                this.secs= Math.floor(this.time/10%60);
                this.hours= Math.floor(this.time/10/60/60);
                this.tenth= this.time % 10;
                if(this.mins<10){
                   this. mins="0"+this.mins;
                }
                else{
                   this.mins=mins;
                }
                if(this.secs<10){
                    this.secs="0"+this.secs;
                }
                this.increment();
            },100);
        };
    }
    render() {
        return $('<div>')
            .append($('<h1>')
            .html(`${this.hours} : ${this.mins} : ${this.secs} : ${this.tenth}0`)
            ).append([
                $('<button>').html('Start').on('click', () => {
                    this.start();
                    this.notify();
                }),
                $('<button>').html('Pause').on('click', () => {
                  this.pause();
                    this.notify();
                }),
                $('<button>').html('Reset').on('click', () => {
                   this.reset();
                    this.notify();
                })
            ])[0];
    }

   }
