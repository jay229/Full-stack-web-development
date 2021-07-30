class Employee{
    constructor(name,exp,div)
    {
        this.name=name;
        this.exp=exp;
        this.div=div;
    }
    slogan(){
        return `I am ${this.name} and this company is best.`
    }
    JoiningYear(){
        return 2021-this.exp;
    }
    static add(a,b){
        console.log(a+b);
    }
}
 

// jay=new Employee("jay",5,"Dev");
// console.log(jay);
// console.log(jay.slogan());
// Employee.add(5,65);
class Programmer extends Employee{
    constructor(name,exp,div,language)
    {
        super(name,exp,div);
        this.language=language;
    }

}
jay=new Programmer("jay",5,"Dev",'C++');
console.log(jay);