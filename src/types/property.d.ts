import { ImageProperties } from "types"

export interface PropertyPreviewProps {
  title: string
  address: string
  beds: number
  shares: number
  isSlide?: boolean
  price: number
  tooltip?: string
  type: string
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
  sidebarItem?: boolean
}

type Floorplan = ImageProperties

interface GalleryProperties {
  alt: string
  url: string
}

interface Location {
  latitude: number
  longitude: number
}

export interface Features {
  bathrooms: number
  bedrooms: number
  parkingSpaces: number
  wheelchairAccessible: boolean
  openPlanLayout: boolean
}

export interface DatoProperty {
  amenities: string[]
  amenitiesRadius: number
  bathrooms: number
  bedrooms: number
  description: string
  developments: string[] | null
  floorPlan: Floorplan
  gallery: GalleryProperties[]
  houseStyle: string
  initialShare: number
  shareDeposit: number
  mortgageRate: number
  mortgageTerm: number
  leaseManagementFee: number
  serviceCharge: number
  id: string
  listingStatus: string
  location: Location
  minimumIncome: number
  monthlyCost: number
  name: string
  omv: number
  openPlanLayout: boolean
  otherFeatures: string[]
  parkingSpaces: number
  propertyType: string
  rentalPrice: number
  shareValue: number
  slug: string
  wheelchairAccessible: boolean
  _publishedAt: string
}

export interface CalculationValues {
  purchase_price: number // user has control of this value in CMS
  initial_share_percentage: number // user has control of this value in CMS. Need to convert it to decimal
  share_deposit: number // user has control of this value in CMS but there will also be a slider which changes this on client
  mortgage_rate: number // user has control of this value in CMS (default 3.99 (&)) must convert to decimal
  mortgage_term: number // user has control of this value in CMS (default 25)
  lease_management_fee: number // user has control of this value in CMS
  service_charge: number // user has control of this value in CMS
}
