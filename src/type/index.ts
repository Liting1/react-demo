
type Component = {
    type: string,
    name: string,
    itemId: string,
    content: Array<any>
}

type ProductGoodsData = {

}



interface ViewType<M = any, C = any, S = any> {
    (props: { model: M; control: C; server: S }): JSX.Element | null;
}

export type {
    Component,
    ProductGoodsData,
    ViewType
}
