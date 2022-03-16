var s='A$2s%qWE@';
let str=s.split(""); 
for(var i=0;i<s.length;i++)

{  
     
    if(str[i]<="9" && str[i]>="0")
{
str[i]=s.charCodeAt(i);
}


    
    else if(str[i]>='a' && str[i]<='z')
    {
   
      
       str[i]=str[i].toUpperCase();

    }
     else if(str[i]>='A' && str[i]<='Z')
    {    
        str[i]=str[i].toLowerCase();
    }

    else{
    var add='$';
       var result=add.concat(str[i]);
       str[i]=result;
       
    }
}
    let join=str.join("");
    
   let time=new Date().getTime();
   join=join+"_"+String(time);


console.log(join);


