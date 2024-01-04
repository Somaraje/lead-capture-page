function submitform(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    if(name.trim()===''||email.trim()===''){
        alert('please fill out the fields');
        return;
    }
    alert('form submitted\nname:'+name+'\nemail:'+email);
}