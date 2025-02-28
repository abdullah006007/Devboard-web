// connecting with blog page
document.getElementById('discover-something').addEventListener('click', function(){
    window.location.href="blog.html"

    
})


// date and time

const currentDate = new Date()

const time = currentDate.getTime()



const monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
let month = currentDate.getMonth();
let currentMonth = monthName[month]

const getDate = currentDate.getDate()

const dayName = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat']
let day = currentDate.getDay();
let currentDay = dayName[day]

let year = currentDate.getFullYear()


let liveDate = document.getElementById('date-and-time').innerHTML = `

<p>${currentDay}, <br>
<span class="font-bold ">
 ${currentMonth} ${getDate} ${year} </span> </p>

`


// complete Button Task


const buttons = document.querySelectorAll('button.rounded-lg');

let task = (document.getElementById('task-number'))
let taskNumber = parseInt(task.innerText)

let complete = document.getElementById('completed-task')
let taskCompleted = parseInt(complete.innerText)





for(let button of buttons){
    
    count= 0;
    sum= 0;
    add = 0;

    button.addEventListener('click', function(){   
        // alert('Board updated Successfully')
        count = count+1
        sum = taskNumber-count;
        add= taskCompleted+count
        if(sum>=0){
            document.getElementById('task-number').innerText =sum;

        }
        document.getElementById('completed-task').innerText=add;

        button.classList.remove('bg-[#3752FD]')
        button.classList.add('bg-slate-300', 'text-slate-400')
        button.setAttribute('disabled',true);


        let taskTitles = document.querySelectorAll('h2.font-medium.text-xl.mb-4');
        for(let taskTitle of taskTitles){

        
        }

         

        


    
            
    })

    
    

}




    





                                

