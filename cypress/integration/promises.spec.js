const getSomething = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(13);
        }, 1000)
    })
    
}

const system = () => {
    console.log('Início do teste')
    getSomething().then(some => {
        console.log(`Somethng is ${some}`)
    })
    console.log('Fim do teste')
}
system()