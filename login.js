const validateUser = (username, password) => {
  return username && password;
}

console.log(`User ${validateUser('hehe', 'password') ? 'is valid':'is not valid'}`);

console.log('new login heheh')