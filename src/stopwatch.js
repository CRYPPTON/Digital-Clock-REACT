import React from 'react'


class Stopwatch extends React.Component{
    constructor(props){
        super(props);
       
        this.state = {
                time : {
                minutes : '00',
                seconds : '00',
                hoas : '00'
                  },
                currentTime_ : false,
                end_time_ : false,
                st_time : '',
                start : false,
               
        }

       this.currentTime = this.currentTime.bind(this);
       this.end_time_ = this.end_time_.bind(this);
       this.stwc_t = this.stwc_t.bind(this);
       
       console.log("start u konstruktoru "+this.state.start)
 
    }

    currentTime(){
        var now = Date.now();
        this.setState({
            currentTime_ : now,
            start : true
        })
        console.log("U STARTU "+this.state.start)
    }

    end_time_(){
        var end = Date.now();
        this.setState({
            end_time_ : end,
            start : false,
            end : false,
            currentTime_ : false,
            end_time_ : false,
        })

        console.log("U Endu "+this.state.start)
    }

    stwc_t(start,end){ 
        var time =(end - start);
        var sec = Math.floor(Math.abs(time)/1000%60);
        var min = Math.floor(Math.abs(time)/1000/60%60);
        var hs = time%100
        if(sec<10){
            sec = '0'+sec;
        }
        if(min<10){
            min = '0'+min;
        }
        if(hs<10){
            hs = '0'+hs;
        }
        if(!this.state.start) {
            return 0;


        };

        this.setState({
            time : {
                minutes : min,
                seconds : sec,
                hoas : hs
                  },
                currentTime_ : true,
                end_time_ : false,
                st_time : time/1000
        })
        console.log(this.state.start)
         
        if(this.state.start==true){
            var i;
            i = setInterval(() => {this.stwc_t(start,Date.now()) }, 1000);
            
        }else{

            clearInterval(i)
            //alert("interval kill")
           // return;
        }
        
    }



    render(){
        return (
        <div className="spwt">  
            <div className="btn">
                <button className="b" onClick={this.currentTime} type="button">start</button>
                <button className="b" onClick={() => this.stwc_t(this.state.currentTime_,this.state.end_time_)} type="button">Diff</button>
                <button className="b" onClick={this.end_time_}  type="button">end</button>
            </div >
            <div className="disp_spwt">
                       <p className="st_box">{this.state.time.minutes }<i className="ini">minutes</i> </p>
                       <p className="st_box">{this.state.time.seconds }<i className="ini">seconds</i> </p>
                       <p className="st_box">{this.state.time.hoas }<i className="ini">milisec</i> </p>
           </div>
        </div>
        )
    }
}

export default Stopwatch 

/*
Problem sa stopericom....
*/