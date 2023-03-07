

/*
* No codigo abaixo, o fluxo continua sendo executado enquanto o setTimeout não computa o intervalo
O resultado é que 'world' é impresso antes de hello
*/
async function withoutPromise()
{
    setTimeout(() =>{
        console.log('hello')
    }, 5000)

    console.log('world!')
}

withoutPromise()

/*
* No codigo abaixo, a aplicação esperará o trecho de setTimeOut ser executado e só entao o fluxo do programa continuará
*/
async function withPromise()
{
    await new Promise( resolve => {
        setTimeout(() => {
            console.log('hello again,')
            resolve()
        }, 5000)
    })

    console.log('world!')
}

withPromise()