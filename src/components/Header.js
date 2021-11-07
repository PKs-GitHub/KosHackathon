import React from 'react'

const Header = () => {
  return (
    <header className= "header">
    <h1>슬기로운 주식생활</h1>
    {/* <h2>MBTI</h2> */}
    <select name= "MBTI">
      <option>MBTI 설정</option>
      <option>ISTP</option>
      <option>INTP</option>
      <option>ESTP</option>
    </select>
  </header>
  )
}

export default Header
