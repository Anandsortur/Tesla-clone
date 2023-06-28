import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
  return (
    <Container>
      <a>
        <img height="23" width="125" src='/images/logo.svg' alt='' />
      </a>
      <CenterMenu>
        <a href='#'>Model S</a>
        <a href='#'>Model Y</a>
        <a href='#'>Model 3</a>
        <a href='#'>Model X</a>
        
      </CenterMenu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Account</a>
        <CustomMenu/>
      </RightMenu>
      {/* <BurgerNav>
        <li><a href=''>Existing Inventory</a></li>
        <li><a href=''>Used Inventory</a></li>
        <li><a href=''>Trade-In</a></li>
        <li><a href=''>Demo Drive</a></li>
        <li><a href=''>Insurance</a></li>
        <li><a href=''>Fleet</a></li>
        <li><a href=''>Cybertruck</a></li>
        <li><a href=''>Roadster</a></li>
        <li><a href=''>Semi</a></li>
        <li><a href=''>Charging</a></li>
      </BurgerNav> */}
    </Container>
  )
}

export default Header

const Container=styled.div`
min-height : 60px;
index-z:1;
justify-content:space-between;
position : fixed;
display:flex;
align-items:center;
padding: 0 30px;
top:0;
left:0;
right:0;


`
const CenterMenu=styled.div`
  display :flex;
  flex:3;
  justify-content:center;
  align-items:center;
  margin-left:10px;
  a{
    font-weight:600;
    text-transform :uppercase;
    padding:0 10px;
    
  }

  @media(max-width:768px){
    display:none;
  }
`
const RightMenu=styled.div`
display :flex;
align-items:center;
a{
  font-weight:600;
  text-transform :uppercase;
  // padding:0 10px;
  margin-right:10px;
  
}
`
const CustomMenu=styled(MenuIcon)`
cursor:pointer;

`
const BurgerNav =styled.div`
  position:fixed;
  top:0;
  bottom:0;
  right:0;
  background:white;
  index-z:16;
`