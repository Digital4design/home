interface Screen {
    slidesPerView: number
    spaceBetween: number
  }
  interface Screens {
    mobile?: Screen
    tablet?: Screen
    desktop?: Screen
  }
  
  interface Options {
    screens?: Screens
  }

  export interface Props {
    children: ReactNode
    options?: Options
  }