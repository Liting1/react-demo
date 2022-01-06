
export interface Content {
    image: string
    customType: number
    mini: boolean
    miniValue: number
    miniId: string
    params: string
    link: string
    hots: Array<any>
    type: string
    id: string
    prepayCardProductId: string
    prepayCardHotelId: string
    showType: string
    productType: string
}

export interface ImageUserConfig {
    style: string
    pagination: boolean
    content: Array<Content | object>
    // slider: string,
    blank: string
    padding: boolean
    multipleItem: number
    largePicture: boolean
    showDetail: boolean
}
