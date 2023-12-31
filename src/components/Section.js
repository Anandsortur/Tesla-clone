import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      </Fade>
      <Button>
      <Fade bottom>
      <ButtonGroup>
        <LeftButton>
            {leftBtnText}
        </LeftButton>

        {rightBtnText && 
          <RightButton>
            {rightBtnText}
          </RightButton>
        } 
        
      </ButtonGroup>
      </Fade>
      <DownArrow src="/images/down-arrow.svg" />
      </Button>
      
     
    </Wrap>
  )
}

export default Section
// {rightBtnText && 
//   <RightButton>
//     {rightBtnText}
//   </RightButton>
// } shows this only if right button exists
const Wrap = styled.div`
width: 100vw;
height : 100vh;
background-size : cover;
background-position : center;
background-repeat : no-repeat;
background-image : ${props => `url("/images/${props.bgImage}")`};
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`
const ItemText = styled.div`
padding-top:15vh;
text-align:center;

`

const ButtonGroup = styled.div`
display:flex;

margin-bottom:30px;
@media (max-width :768px){
  flex-direction:column;
  
}

`
const LeftButton = styled.div`
background-color:rgba(23, 26, 32, 0.8);
height:40px;
width:256px;
color:white;
display: flex;
justify-content:center;
align-items:center;
border-radius:100px;
border:none;
opacity:0.95;
text-transform: uppercase;
font-size:14px;
cursor:pointer;
margin:8px;

`

const RightButton = styled(LeftButton)`
background : white;
opacity : 0.75;
color : black;
`
const DownArrow = styled.img`
height:40px;
overflow-x: hidden;
animation:animateDown infinite 1.5s;

`
const Button = styled.div`

`
