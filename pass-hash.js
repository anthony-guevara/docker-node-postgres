const bcrypt = require('bcrypt');

async function hashPassword() {
  const myPassword = 'asd.45678';
  const hash = await bcrypt.hash(myPassword, 10);
  console.log(hash);
}

hashPassword();
    