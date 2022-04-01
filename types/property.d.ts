export interface PropertyPreviewProps {
    title: string
    address: string
    beds: number
    shares: number
    isSlide?: boolean
    price: number
    tooltip?: string
    type:string
}



export interface Property {
    title: string
    address: string
    beds: number
    shares: number
    price: number
    slug?: string
    image: string
    alt: string
    placeholder: string
    type: string
}

export interface PropertyPreviewPropsNew {
    property: Property
    tooltip?: string
    isSlide?: boolean
}