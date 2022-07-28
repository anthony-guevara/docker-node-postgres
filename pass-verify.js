const bcrypt = require('bcrypt');

async function veryfyPassword() {
  const myHash = '$2b$10$z3pNaQCN7YRAnTgJPf0mUOKArwUmO0o8UngrDUcplNyoSHfs2WzcW';
  const myPassword = 'admin.123';
  const isMatch = await bcrypt.compare(myPassword, myHash);
  console.log(isMatch);
}

veryfyPassword();