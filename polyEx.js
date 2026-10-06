// class test{
//     m1(){
//         console.log("i am method from test class");
        
//     }
// }
// class Abc extends Test{
//     m1(){
//         console.log("m1_HERO");
        
//     }
// }
// ##################//method overriding#######################
// let t=new Test();
// console.log("With Parent");
// // t.m1();

// // let a=new Abc();
// // console.log("With Child");

// // a.m1()
// ########################################################################
// class mobile{
//     camera(){
//         console.log("mobile-5mpx");
        
//     }
// }
// class smartmobile extends mobile{
//     camera(){
//         console.log("smartmobile-54mpx");
        
//     }
// }
// class latestsmartmobile extends smartmobile{
//     camera(){
//         console.log("latestsmartmobile-200mpx");
        
//     }
// }

// let mob =new mobile();
// mob.camera();

// let smart = new smartmobile();
// smart.camera();

// let latest=new latestsmartmobile()
// latest.camera()
// ############################################################
class Animal{
    sound(){
        console.log("Animal Sound");
        
    }
}
class Dog extends Animal{
    sound(){
        console.log("bow bow");
        
    }
}
class cat extends Animal{
    sound(){
        console.log("meow meow");
        
    }
}
let animal=new Animal();
animal.sound();
let dog = new Dog();
dog.sound();
let cat = new cat();
cat.sound();
