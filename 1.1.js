var arr=[11,28,313,153,1634];

console.log("Pallindromes: "); 
pallin(arr);

console.log("Armstrong: "); 
armstrong(arr);

console.log("Perfect numbers: "); 
perfect(arr);


function pallin(arr){
   
  for(var i=0;i<arr.length;i++)
  {  num=arr[i];
     let str=num.toString();
   
     let spli_t=str.split("");
     let rev=spli_t.reverse();
     let join=rev.join("");
    

    if(join==str)
    {   
      
     console.log(join)
    }
  }

}

function armstrong(arr)
{
     for(var i=0;i<arr.length;i++)
  {  
    var sum=0;
    num=arr[i];
     var str=num.toString();
     var siz=str.length;
     var temp=parseInt(str)
    
    while(temp>0)
    {
        var remain=temp%10;
        sum+=remain**siz;
        temp=parseInt(temp/10);
    }
    if(sum==arr[i])
    console.log(arr[i]);

}
}

function perfect(arr){
    for(var i=0;i<arr.length;i++)
    {
    var sum=0;
    num=arr[i];
    for(var j=1;j<=(num/2);j++)
    {
        if(num%j==0)
        {
            sum+=j;
        }
        if(sum===num && sum!=0)
        {
        console.log(arr[i]);
        }
    }
    }
}