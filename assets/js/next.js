function sendmail(){
    var params={
        name:document.getElementById("names").value,
        email:document.getElementById("textips").value,
        message:document.getElementById("textmsg").value,
    };
    const serviceid="service_cgplnug";
    const templateid="template_zkd0wa9";
    emailjs.send(serviceid,templateid,params)
    .then(
        (res)=>{
            document.getElementById("names").value="";
            document.getElementById("textips").value="";
            document.getElementById("textmsg").value="";
            console.log(res);
            alert("Msg senmd ok !");
        })
    .catch((err)=>console.log(err));
}
