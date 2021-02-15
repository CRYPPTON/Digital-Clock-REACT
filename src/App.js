import React from "react";
import ReactDOM from "react-dom"
import Stopwatch from "./stopwatch"

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time : {
                hours : '',
                minutes : '',
                seconds : ''
            },
            date_ : {
                year : '',
                month : '',
                date__ : ''
            },
            ampm : '',
            btn : "none"
        }
        this.showStopwatch = this.showStopwatch.bind(this);
        //setInterval(() => {this.setTime()}, 1000)
    }
    
  

    setTime(){  
        var date = new Date();
        var year_ = date.getUTCFullYear()
        var month = date.getMonth()+1
        var day_w = date.getDate()
        var hour = date.getHours() 
        var sec = date.getSeconds();
        var minute = date.getMinutes();
        var am_pm = 'AM'
        var day = date.getDay()-1
        
        if(day_w<10){
            day_w = '0'+day_w
        }
        if(month<10){
            month = '0'+month
        }

        if(hour>12){
            am_pm = 'PM'
        }
        hour = hour%12;  
        if(hour===0){
            hour = 12;
        } 

        if(sec<10){
            sec = '0'+sec;
        }
        if(minute<10){
            minute = '0'+minute;
        }
        if(hour<10){
            hour = '0'+hour;
        }

        this.setState({
            time : {
                hours : hour,
                minutes : minute,
                seconds : sec
            },
            date_: {
                year : year_+'.',
                month : month+'.',
                date__ : day_w+'.'

            },
            ampm : am_pm,
        })
       document.getElementsByClassName('day')[day].style.color = '#ff0000';
    }

    showStopwatch(){
       
        var stw_div = document.getElementById("stw");
      
        if (stw_div.style.display === "block") {
            stw_div.style.display = "none";
        } else {
            stw_div.style.display = "block";
        }
    }

    render(){
        return (
            <div className="Contain">
               <div className="DigitalClock">
                   <div className="Header">
                   <div className="date_">
                       <p className="date-d">{this.state.date_.date__}</p>
                       <p className="date-m">{this.state.date_.month}</p>
                       <p className="date-y">{this.state.date_.year}</p>
                   </div>
                   <div>
                       <p className="AM-PM">{this.state.ampm}</p>
                       </div>
                   </div>
                   <div className="Clock">
                       <p className="time-h">{this.state.time.hours}</p><span className="dots">:</span>
                       <p className="time-m">{this.state.time.minutes}</p><span className="dots">:</span>
                       <p className="time-s">{this.state.time.seconds}</p>
                   </div>
                   <div className="Footer">
                       <div className="Footer_day">
                       <p className="day">MON</p>
                       <p className="day">TUE</p>
                       <p className="day">WEN</p>
                       <p className="day">THU</p>
                       <p className="day">FRI</p>
                       <p className="day">SAT</p>
                       <p className="day">SUN</p>
                       </div>
                   </div>
               </div>
                <button className="btn_s" onClick={this.showStopwatch}><i className="arrow down"></i></button>
               <div className="stopwatch" id="stw">
               <Stopwatch />    
               </div>
            </div>
            
        )
    }
}


export default App