// creating the calendar part
        //DAY PART
        const date= new Date();
        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        const datePosition = document.getElementsByClassName('currentDay')[0];
        
        let currentDay = weekday[date.getDay()];

                //NUMERIC DAY AND MONTH PART
        const numericDate= date.getDate();
        const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const currentMonth= months[date.getMonth()];
        
                //YEAR PART
        const currentYear= date.getFullYear();
        
        datePosition.innerHTML= currentDay + ' ' + numericDate +' ' + currentMonth + ' ' + currentYear;
