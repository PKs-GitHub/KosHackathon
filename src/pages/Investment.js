import React from 'react'
import Iframe from 'react-iframe';

const investment = () => {
  return (
    <div>
        <Iframe id = "iframeID"
        url="https://m.stock.naver.com/index.html#/domestic/stock/005930/ask"
        width="100%"
        height="1000px"/>
    </div>
  )
}

export default investment
