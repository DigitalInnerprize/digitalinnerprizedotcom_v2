import React from 'react'
import Lottie from 'react-lottie'
import PropTypes from 'prop-types'

const AnimatedImage = ({ animatedJson, height, width }) => (
  <Lottie
    options={{
      loop: true,
      autoplay: true,
      animationData: animatedJson,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    }}
    height={height}
    width={width}
  />
)

AnimatedImage.propTypes = {
  animatedJson: PropTypes.shape({}).isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
}

export default AnimatedImage
