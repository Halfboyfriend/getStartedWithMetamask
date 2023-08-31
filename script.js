let connected;
async function connect() {
  const btn = document.getElementById("connect__btn");
  try {
    connected = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    if (connected) {
      btn.innerHTML = `${connected[0].substring(
        0,
        8
      )}...${connected[0].substring(35, 42)}`;
    }
    console.log(connected[0]);
  } catch (err) {
    console.log(err);
  }

  return connected;
}
async function checkBalance() {
  try {
    if (connected) {
      let balance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [connected[0], "latest"],
      });

      if (balance) {
        alert(`${(parseInt(balance) / Math.pow(10, 18)).toFixed(5)} eth`);
      }
    } else {
      alert("Not connected");
    }
  } catch (err) {
    console.log(err);
  }
}
