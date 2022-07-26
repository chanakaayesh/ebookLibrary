

export interface rootResponse {
    kind: string
    totalItems: number
    items: ItemResponse[]
  }
  
  export interface ItemResponse {
    kind: string
    id: string
    etag: string
    selfLink: string
    volumeInfo: VolumeInfo
    saleInfo: SaleInfo
    accessInfo: AccessInfo
    searchInfo?: SearchInfo
  }
  
  export interface VolumeInfo {
    title: string
    publishedDate: string
    industryIdentifiers: IndustryIdentifier[]
    readingModes: ReadingModes
    printType: string
    categories?: string[]
    maturityRating: string
    allowAnonLogging: boolean
    contentVersion: string
    panelizationSummary: PanelizationSummary
    imageLinks: ImageLinks
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
    subtitle?: string
    authors?: string[]
    averageRating?: number
    ratingsCount?: number
    publisher?: string
    pageCount?: number
    description?: string
  }
  
  export interface IndustryIdentifier {
    type: string
    identifier: string
  }
  
  export interface ReadingModes {
    text: boolean
    image: boolean
  }
  
  export interface PanelizationSummary {
    containsEpubBubbles: boolean
    containsImageBubbles: boolean
  }
  
  export interface ImageLinks {
    smallThumbnail: string
    thumbnail: string
  }
  
  export interface SaleInfo {


    country: string
    saleability: string
    isEbook: boolean
    listPrice?: ListPrice
    retailPrice?: RetailPrice
    buyLink?: string
    offers?: Offer[]
  }

  export interface Offer {
    finskyOfferType: number
    listPrice: ListPrice2
    retailPrice: RetailPrice2
  }
  


  export interface ListPrice2 {
    amountInMicros: number
    currencyCode: string
  }
  
  export interface RetailPrice2 {
    amountInMicros: number
    currencyCode: string
  }

  export interface ListPrice {
    amount: number
    currencyCode: string
  }
  
  export interface RetailPrice {
    amount: number
    currencyCode: string
  }
  
  export interface AccessInfo {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: Epub
    pdf: Pdf
    webReaderLink: string
    accessViewStatus: string
    quoteSharingAllowed: boolean
  }
  
  export interface Epub {
    isAvailable: boolean
  }
  
  export interface Pdf {
    isAvailable: boolean
  }
  
  export interface SearchInfo {
    textSnippet: string
  }
   