export interface PortfolioDataProps {
    id: number,
    link: string,
    title: string,
    description: string,
    technologies:string[]
  }
  
export  interface ChildrenProps {
    children: React.ReactNode
  }
  

export type NavItem = {
  title: string,
  href: string
}

export interface NavItemsProps extends Array<NavItem> {}

export type NavContextProps = {
  nav: boolean,
  handleNav: ()=>void
}