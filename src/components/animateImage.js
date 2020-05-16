import React from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';

const AnimatedImage = ({ animatedJson, height }, props) => (
    <Lottie
        {...props}
        options={{
            loop: true,
            autoplay: true,
            animationData: animatedJson,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        }}
        height={height}
    />
);

AnimatedImage.propTypes = {
    animatedJson: PropTypes.shape({}).isRequired,
    height: PropTypes.number.isRequired,
};

export default AnimatedImage;
