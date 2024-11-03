import { db } from "$lib/server/database"
import { articulos } from "$lib/server/database/schema"
import { eq } from "drizzle-orm";



export async function crearArticulo(article:string) {
  await db.insert(articulos).values(
    {
      noticia: article,
      idTema: 1,
      idUsuario: 1,
      fecha: new Date()
    }
  );
}
