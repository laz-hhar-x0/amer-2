
// const incrct = document.getElementById("incrct");
// const clk = document.getElementById("clk");





// clk.onclick = lazhhar45()





async function loginUser (email, password) {
    const response = await fetch('/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await response.json();
  
    if (data.success) {
      // Redirect to home page and pass the userName
      localStorage.setItem('userName', data.userName); // Store userName in localStorage
      window.location.href = data.redirectUrl; // Redirect to home
    } else {
      alert(data.message); // Display error message
    }
  }