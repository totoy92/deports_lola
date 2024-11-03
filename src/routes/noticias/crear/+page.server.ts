import { crearArticulo } from '$lib/server/escrituras/insertQueries';

export const actions = {
	grabar: async ({ request }: { request: Request }) => {
		const data = Object.fromEntries(await request.formData());
		await crearArticulo(String(data.texto));
	}
};
