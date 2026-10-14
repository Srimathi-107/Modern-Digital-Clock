let time=document.getElementById("time")
let date=document.getElementById("date")
let day=document.getElementById("day")
let themebtn=document.getElementById("themebtn")
let switchhoursformat=document.getElementById("switchhoursformat")
let is24hourformat=false


themebtn.addEventListener("click",()=>{
    themebtn.classList.toggle("ri-sun-line")
    themebtn.classList.toggle("ri-moon-line")
    document.body.classList.toggle("dark")
})
function showtime(){
        let tdydate=new Date()

        let gettime=tdydate.toLocaleTimeString("en-US",{
            hour12:!is24hourformat
        })
        time.textContent=gettime

        let getmonth=tdydate.toLocaleDateString("en-US",{
            month:"long"
        })
        let getdate=tdydate.getDate()
        let getyear=tdydate.getFullYear()
        date.textContent=getmonth+" "+getdate +" , "+getyear

        let getday=tdydate.toLocaleDateString("en-US",{
            weekday:"long"
        })
        day.textContent=getday
}


switchhoursformat.addEventListener("click",()=>{
    is24hourformat=!is24hourformat
})

setInterval(showtime,1000)