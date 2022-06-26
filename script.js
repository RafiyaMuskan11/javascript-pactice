//  1.primitive sata types
//    a. string
   var name = "muskan"
   console.log(typeof name, name);

//    b. number
    var num = 15;
    console.log(typeof num, num);


//    c. boolean
     var present = true;
     console.log(typeof present, present);


//     d. null 
       var object = null;
       console.log(typeof object, object);

//     e. undefined
        var method = undefined;
        console.log(typeof method, method);

//     f. symbol
    //    var texture = symbol();
    //    console.log(typeof texture);

//    g. corceian
    var string = " RafiyaMuskan";
    var a = 11;
    var sum = string+a;
    console.log(typeof sum,sum);
   

// string concatination
//  string1 = Rafiya 
//  string2 = Muskan
//  console.log(typeof 
  

// OPERATORS:
  //  arithmetic operators(-,+,*,/,%,++,--) 
  var a = 10;
  var b = 2;
  sum = a+b;
  difference = a-b;
  multiplication = a*b;
  division = a/b;
  reminder = a%b;
  
  console.log("arithmetic operators operations"); 
  console.log("value of a=",a);
  console.log("value of b=",b);
  console.log("sum=",sum);
  console.log("difference=",difference);
  console.log("multiplication=",multiplication);
  console.log("division=",division);
  console.log("reminder=",reminder);

     // preincrement
   var a=5;
   preincrement = ++a;
   console.log("preincrement=",preincrement);
   // postincrement
   var b =2;
   console.log(--b);
   //    postincrement
    var i=10;
    postincrement = a++;
    console.log("postincrement=",postincrement);
    // postdecrement
    var j=5;
    postdeceement = j--;
    console.log("postdeceement=",postdeceement);




  

  //  comparison operators-1. relational operators(<,>,<=,>=)
        var a = 10;
        var b = 5;
        
        console.log("relational operator section:");
        console.log(a>b);
        console.log(a<b);
        console.log(a<=b);
        console.log(a>=b);
//   2.equality operator.
    //a. loose equality
    var str1="1";
    var str2="run"
    var num1=1;
    console.log("equality operator section:");
    //  for true condition
    console.log(str1==num1);
    // for false condition
    console.log(str2==num1);

    // b. strictly equality
    var str1="run";
    var str2="run";
    var num=1;
     //  for true condition
     console.log(str1===str2);
      // for false condition
    console.log(str2===num1);

// ternary op(or) conditional operator(syntax-condition ? "" : "";)
  var age=20;
 age>18 ? console.log("eligible for voting") : console.log("not eligible");

// logical operation (&& , || , !)
   // and(&&)  
   var a=10;
   var b=20;
   console.log("and(&&)operator:");
   console.log(a<b&&b>a);
   console.log(a>b&&b>a);

   console.log("or(||)operator:");
   console.log(a<b||b>a);
   console.log(a>b||a<b);

   console.log("not(!)operator:");
   console.log(!(a<b||b>a));

//    conditional statement:
   //   if-else
   var marks=40;
   if(marks<35)
   console.log("FAIL");
   else
   console.log("PASS");
  

  //  switch condition
    // var like =" coffee";
    // switch(like)
    // {
    //     case juice:  console.log("friut juice lover"); break;
    //     case tea:  console.log("tea lover"); break;
    //     case coffee:  console.log("coffee lover"); break;
    //     default:  console.log("no perticular likes");
    // }




                        










    