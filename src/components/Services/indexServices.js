import React from 'react'
import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
        <ServicesH1> O que temos aqui </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={Icon1}/>
              <ServicesH2> Começar Horta </ServicesH2>
              <ServicesP> Aqui ensinamos como você pode começar. </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon2}/>
              <ServicesH2> Dicas Horta </ServicesH2>
              <ServicesP> Temos dicas para você manter a sua horta </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={Icon3}/>
              <ServicesH2> Mini Guia </ServicesH2>
              <ServicesP> Temos um mini guia do que se pode plantar. </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services