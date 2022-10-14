class A{
    constructor(n1,n2){
        console.log('Class A')

    }
}

class B extends A{
    constructor(n1,n2,n3){
        super()
        console.log('Class B')

    }
}

class C extends B{
    constructor(){
        super()
        console.log('Class C')
    }
}

const c= new C()