var day = "Mon"; 
var message = ""; 
 
switch(day){ 
case "Mon": message = "Ngày đầu tuần"; 
case "Wed": message = "Ngày giữa tuần"; 
case "Sat": 
case "Sun": message = "Ngày nghỉ"; 
}
document.write(day);