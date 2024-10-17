export type ProductItemType = {
	id: string;
	img: string;
	title: string;
	price: number;
	rate: number;
};

export type ProductItemProps = {
	item: ProductItemType;
};

export type ProductListProps = {
	products: ProductItemType[];
};

export interface Order extends ProductItemType {
	quantity: number;
}
