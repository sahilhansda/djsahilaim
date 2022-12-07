import { importAll } from './importAll'

export interface TemplateListObjectType {
  Auction1: string[]
  Auction2: string[]
  Auction3: string[]
  Auction4: string[]
  Auction5: string[]
  Auction6: string[]
  Auction7: string[]
}

export const getImagesList: TemplateListObjectType = {
  Auction1: importAll(
    require.context('../assets/gallery/Auction1/', false, /\.(png|jpe?g|svg)$/)
  ) as string[],
  Auction2: importAll(
    require.context('../assets/gallery/Auction2/', false, /\.(png|jpe?g|svg)$/)
  ) as string[],
  Auction3: importAll(
    require.context('../assets/gallery/Auction3/', false, /\.(png|jpe?g|svg)$/)
  ) as string[],
  Auction4: importAll(
    require.context('../assets/gallery/Auction4/', false, /\.(png|jpe?g|svg)$/)
  ) as string[],
  Auction5: importAll(
    require.context('../assets/gallery/Auction5/', false, /\.(png|jpe?g|svg)$/)
  ) as string[],
  Auction6: importAll(
    require.context('../assets/gallery/Auction6/', false, /\.(png|jpe?g|svg)$/)
  ) as string[],
  Auction7: importAll(
    require.context('../assets/gallery/Auction7/', false, /\.(png|jpe?g|svg)$/)
  ) as string[],
}
