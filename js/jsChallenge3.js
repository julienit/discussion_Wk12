/*Both boxes must have radio buttons selected to move on to the next question*/
document.getElementById("#ch3form").addEventListener("submit", function(e){
    let date =
    document.querySelectorAll('input[name="gradDate"]:checked').length;
    let standing =
    document.querySelectorAll('input[name="standing"]:checked').length;
})
