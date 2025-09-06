import type { Handle } from '@sveltejs/kit';

import db from '$lib/database/prisma';



export const handle: Handle = async ({ event, resolve }) => {
  const token = event.cookies.get('session');
  if (token) {
   let user = await db.user.findUnique({
      where: { userAuthToken: token }
    });

    if(user)
    {
        event.locals.user = {
            name: user.username,
            role: user.role,
            }

        console.log("found ", user.username)
    }
  }
  return resolve(event);
};
