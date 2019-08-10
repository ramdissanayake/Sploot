
export default class User{
    constructor(props){
        
    }


    auth(e){
        e.preventDefault();
       
        const payload = {
            email:e.target[0].value,
            pw:e.target[1].value
        }
        fetch('/api/user/auth',{
            'method':'POST',
            'body':JSON.stringify(payload)
        })
        .then(res=>{return res})
        .then(res=>{
            if(res.status==200){
                window.location.reload();
            }
            else{
                alert("Something Went Wrong")
            }
           
        });

    }

    test(){
        alert('hit')
    }

    logout(e){
        e.preventDefault();
        fetch('/api/user/logout')
        .then(res=>{return res})
        .then(res=>{
            console.log(11)
            window.location.reload();
            this.test();
        });
    }
}