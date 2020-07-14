// global (name)
    // local (name)
        // local 
    // local 

let name = 'luke' 

if (true) { 
    let name = 'bob' 

    if (true) {  
        name = 'jen'
        console.log(name) 
    }
}

if (true) { 
    console.log(name); 

}