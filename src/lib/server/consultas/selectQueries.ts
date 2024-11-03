import { db } from "$lib/server/database"
import { temas as themes, articulos } from "$lib/server/database/schema"
import { desc, eq } from "drizzle-orm";

export async function temas() {
  const secciones = await db.select().from(themes);
  return secciones ;
}

export async function articulosPorTema(temaId: number) {
  const escritos = await db.select().from(articulos)
                  .where(eq(articulos.idTema, temaId));
  return escritos;
}

export async function articulosPorEscritor(escritorId: number) {
  const escritos = await db.select({id:articulos.id, titulo: articulos.titular}).from(articulos)
                  .where(eq(articulos.idUsuario, escritorId))
                  .orderBy( desc( articulos.fecha));
  return escritos;
}

export async function articulosNoticiaEscritor(noticiaId: number) {
  const escrito = await db.select({id:articulos.id, noticia: articulos.noticia}).from(articulos)
                  .where(eq(articulos.id, noticiaId))
  return escrito;
}
