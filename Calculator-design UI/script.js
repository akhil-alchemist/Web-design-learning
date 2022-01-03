function clicked(val) {
    console.log(val)
    document.getElementById('output').value+=val
    
}
function del() {
    document.getElementById('output').value=''
}
function sumof() {
    
    var text=document.getElementById('output').value
    var result=eval(text)
    document.getElementById('output').value=result
    
    console.log(result)
}