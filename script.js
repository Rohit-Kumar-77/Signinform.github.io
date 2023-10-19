let user = [
  {
    UserName: "Rohit",
    Email: "rohit@gmail.com",
    Password: "12345",
  },
];

function signup() {
  let obj = {
    UserName: document.getElementById("inp-txt").value,
    Email: document.getElementById("inp-eml").value,
    Password: document.getElementById("inp-pass").value,
  };

  user.push(obj);

  for (let i = 0; i < user.length; i++) {
    console.log(`${user[i].UserName} ${user[i].Email} ${user[i].Password}`);
  }

  alert("Your Record is Added");
}

function login() {
  let obj = {
    UserName: document.getElementById("inp-txt2").value,
    Password: document.getElementById("inp-pass2").value,
  };

  console.log(
    `Input UserName: ${obj.UserName}, Input Password: ${obj.Password}`
  );

  for (let i = 0; i < user.length; i++) {
    if (user[i].UserName == obj.UserName && user[i].Password == obj.Password) {
      alert("Login Successful");
    }
  }
}
