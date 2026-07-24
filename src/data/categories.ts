export const categories = [
	{
		name: 'Celulares',
		slug: 'celulares',
		description: 'Smartphones, acessórios, comparativos e orientações para escolher seu próximo celular.',
		icon: 'phone',
	},
	{
		name: 'Computadores',
		slug: 'computadores',
		description: 'Notebooks, desktops e componentes para trabalho, estudo, criação e entretenimento.',
		icon: 'computer',
	},
	{
		name: 'Áudio e vídeo',
		slug: 'audio-e-video',
		description: 'Fones, caixas de som, televisores e equipamentos para ouvir e assistir melhor.',
		icon: 'audio',
	},
	{
		name: 'Periféricos',
		slug: 'perifericos',
		description: 'Teclados, mouses, monitores e acessórios que completam seu espaço de tecnologia.',
		icon: 'mouse',
	},
	{
		name: 'Smart Home',
		slug: 'smart-home',
		description: 'Dispositivos conectados, automação e soluções práticas para uma casa mais inteligente.',
		icon: 'home',
	},
] as const;

export type Category = (typeof categories)[number];
export type CategoryName = Category['name'];
export type CategorySlug = Category['slug'];

export const categoryNames = categories.map(({ name }) => name) as [CategoryName, ...CategoryName[]];

export const getCategoryByName = (name: string) => categories.find((category) => category.name === name);

//O header passou a consumir essa fonte única.
// Alterações futuras devem ser feitas somente em categories.ts.
