import { db } from '$lib/server/database/index'
import { users, inscripciones } from '$lib/server/database/schema'

export const load = async () => {
  const user = await db.select().from(users)
  const insc = await db.select().from(inscripciones)
  console.log(user)
  console.log(insc)
  return { user, insc }
}
