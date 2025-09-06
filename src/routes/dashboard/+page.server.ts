import { fail, redirect } from '@sveltejs/kit'
import type { Action, Actions, PageServerLoad } from './$types'
import bcrypt from 'bcrypt'


import db from '$lib/database/prisma'


export const load: PageServerLoad = async ({locals}) => {
    let user = locals.user;
    if(!user)
    {
        throw redirect(302, "/login")
    }

  // const users = await db.user.findMany(
  //   {where: {role: {name: 'ADMIN'}}, include: {role: true}
  // })
  const users = await db.user.findMany()
  // console.log(users)

  return {users};
}



const admin: Action = async({request}) => {
  const data = await request.formData()
  const username = data.get('username')
  const password = data.get('password')
  const roleForm = data.get('role')

  if (
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    !username ||
    !password
  ) {
    return fail(400, { invalid: true })
  }

  const user = await db.user.findUnique({
    where: { username },
  })

  if (user) {
    return fail(400, { user: true })

  }

  if(roleForm != 'ADMIN' && roleForm != 'USER')
  {
    return fail(400, { error: true })
  }
  
  await db.user.create({
    data: {
      username,
      passwordHash: await bcrypt.hash(password, 10),
      userAuthToken: crypto.randomUUID(),
      role: roleForm
    },
  })
  redirect(303, '/admin')
}


const updatePassword: Action = async({request, locals}) => {
    const data = await request.formData()
    const oldPassword = data.get('oldPassword')
    const newPassword = data.get('newPassword')
    const reNewPassword = data.get('reNewPassword')

    if (
        typeof oldPassword !== 'string' ||
        typeof newPassword !== 'string' ||
        typeof reNewPassword !== 'string' ||
        !oldPassword ||
        !newPassword || !reNewPassword
      ) {
        return fail(400, { invalid: true })
      }

    let username = locals.user.name;
    const user = await db.user.findUnique({ where: { username } })

    if (!user) {
        return fail(400, { credentials: true })
    }

    if (newPassword != reNewPassword)
    {
        return fail(400, { missmatch: true })
    }

    const userPassword = await bcrypt.compare(oldPassword, user.passwordHash)

    if (!userPassword) {
      return fail(400, { credentials: true })
    }

    let newPasswordHash = await bcrypt.hash(newPassword, 10);

    let result = await db.user.update({
        where: {id: user.id},
        data: {passwordHash: newPasswordHash}
    })

    // console.log(result);

    if(result)
    {
        return {success: true};
    }
    else
    {
        return fail(400, { credentials: true })
    }

    console.log("Update success")


    // db.user.update({data{passwo: }})
    
}

export const actions: Actions = { admin, updatePassword }
