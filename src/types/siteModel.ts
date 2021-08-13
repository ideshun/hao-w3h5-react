export type SiteModel = {
  name: string,
  url: string,
  target: '_blank' | '_self' | '_parent' | '_top',
  desc?: string
}

export type SiteListModel = {
  cate: string,
  sites: SiteModel[]
}
