Công thức vòng lặp với :
1: For
    for(let ... ; ... ;...){
        thêm câu lệnh
    }
    VD: 
    for(let i = 1; i <= 10; i++){
        let product = 5 * i;
        document.write("5 x " + i + " = " + product);
         }
2: While 
    while (...) {
        thêm câu lệnh
    }
    VD:
    let text = 'Hello';
        while (text !== 'q'&& text !== '') {
            document.write(text + '</br>');
            text = prompt('Enter a text to print. Enter "q" or empty to quit.');
}
3: Do-while 
    do{
        câu lệnh
    } while (các biểu thức)
    VD:
    let sum = 0;
    let number;
        do {
            number = parseInt(prompt('Enter a number'));
            sum += number;
        } while (number != 0);
            document.write("The sum is: " + sum);