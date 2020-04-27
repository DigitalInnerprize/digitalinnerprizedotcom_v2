import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Container } from './styled/containers'
import { UL, LI } from './styled/list'
import { H3, P, NavClickLink } from './styled/type'

const propTypes = {
  page: PropTypes.string,
}

const Wrapper = styled.footer`
  padding-top: 100px;
  background: #3434FF;
  color: #F8F8Fb;
  border-top: 2px solid #1f364d;
`;

const Content = styled.div`
  padding-bottom: 50px;
  display: flex;
  justify-content: space-evenly;
`;

const Footer = () => {
  return (
    <Wrapper>
        <Container marginLeft='auto'>
          <Content>
            <div className="contact-info">
              <H3 uppercase>contact</H3>
              <P>digitalinnerprize@gmail.com</P>
              <div className="copyright">
                <P>
                  2019&copy; Digital Innerprize Llc
                </P>
              </div>
            </div>
            <div className="socials">
              <H3 uppercase>
                follow us
              </H3>
              <UL
                column
                className="social-links">
                <LI>
                  <NavClickLink textTransform='Capitalize' href="#">
                    facebook
                  </NavClickLink>
                </LI>
                <LI>
                  <NavClickLink textTransform='Capitalize' href="#">
                    instagram
                  </NavClickLink>
                </LI>
              </UL>
            </div>
          </Content>
        </Container>
    </Wrapper>
  )
}

Footer.propTypes = propTypes

export default Footer
