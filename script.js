async function connect() {
    const btn =document.getElementById('connect__btn')
    try{
        const connected = await window.ethereum
        .request({ method: "eth_requestAccounts" })
        if (connected) {
            btn.innerHTML = `${connected[0].substring(0, 8)}...${connected[0].substring(35, 42)}` ;
        }
        console.log(connected[0])
    } catch(err) {
        console.log(err)
    }
}
