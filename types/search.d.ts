import { Property } from "types/property"

export interface SearchFilters {
    location: string
    radius: number
    type: string
    price: string | number
    rooms: string | number
}

export interface ViewProps {
    toggleView: () => void
}

export interface SearchResultProps {
    properties: PropertyPreviewPropsNew[]
}