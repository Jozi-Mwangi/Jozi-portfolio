// app/pages/_app.js
import layout from "../layout"
import PropProvider from "../components/context-provider.js"
import { useEffect } from "react"

function MyApp({ Component, pageProps }) {
  
    useEffect(()=>{
        document.querySelectorAll("a[href = '#']")
            .forEach((anchor)=>{
                anchor.addEventListener("click", function(e){
                    e.preventDefault();

                    document.querySelector(this.getAttribute("href"))
                        .scrollIntoView({behaviour:"smooth"})
                })
            })
    },[])

    return (
    // <PropProvider>
    
      <Component {...pageProps} />
    // </PropProvider>
  )
}

export default MyApp
