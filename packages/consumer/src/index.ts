import { Client } from 'tsoa-starter-client';

const client = new Client({ BASE: 'http://localhost:3000' });

client.users.getUser({ userId: 1 }).then(user => {
  console.log('User1:', user);
});
