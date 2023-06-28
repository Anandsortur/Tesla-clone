import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Explore Inventory"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"

      />

      <Section
        title="Model Y"
        description="Starting at $40,240
        After Federal Tax Credit"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"

      />
      <Section
        title="Model 3"
        description="Online Order for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"

      />
      
      
      <Section
        title="Model X"
        description="Explore Inventory"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"

      />
      <Section
        title="New Interior"
        description="Better Than Ever"
        backgroundImg="new-interior.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"

      />
      <Section
        title="Solar Panels"
        description="Schedule a Virtual Consultation"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"

      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"

      />
      
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
        

      />
    </Container>
  )
}

export default Home

const Container = styled.div`
height: 100vh;

`