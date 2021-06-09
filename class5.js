let user = new Object();
//object literal
user.name="Anshuman ";
user.email="anshuman.ready1@gmail.com";
user.hello=function()
{
    console.log(this.name);
}
 console.log(user);
 user.hello();
 let anotheruser ={
    name:"Satya",email:"sbr@gmail.com",sayHello(){
        console.log("Hello"+this.name);
    },
    changename(mn){
        this.name=mn;
    }
 };
anotheruser.changename("Anshuman");
console.log(anotheruser.name);
