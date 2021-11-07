import React from 'react'
import { MiniChart } from 'react-ts-tradingview-widgets'
import Iframe from 'react-iframe'
const Contents = () => {
  return (
    <section>

      <div className="contents">
        <h2>코스피</h2>
        <h2>코스닥</h2>
        <MiniChart MiniChart colorTheme="light" symbol="KRX:KOSPI" width="100%" height = "300"></MiniChart>
        <MiniChart MiniChart colorTheme="light" symbol="KRX:KOSDAQ" width="100%" height = "300"></MiniChart>
          
        

        
      </div>
    </section>
  )
}

export default Contents
