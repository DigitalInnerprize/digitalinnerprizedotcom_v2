import React, { useState } from 'react';
import styled from 'styled-components';
import { H2 } from './type';

const CardContainer = styled.article`
    backface-visibility: hidden;
    box-shadow: rgba(0, 0, 0, 0.25) 6px 8px 20px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    height: 280px;
    width: 100%;
    position: relative;
    transform-style: preserve-3d;
    transform: rotate3d(0, 0, 0, 0deg) scale(1);
    border-radius: 15px;
    margin: 0px auto;
    overflow: hidden;
    padding: 1em;
    transition: all 0.3s ease 0s;
    background: rgb(14, 14, 14);
`;

const Img = styled.img`
    position: absolute;
    top: 0px;
    left: 0px;
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition: transform 2s ease 0s;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: rgba(0, 0, 0, 0.7);
`;

const Description = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-pack: end;
    justify-content: flex-end;
    height: 100%;
    position: relative;
    z-index: 1;
`;

const Link = styled.a`
    color: rgba(255, 255, 255, 0.8);
`;

type Props = {
    url?: string;
    name?: string;
    imagePath?: string;
    mobile?: boolean;
    appLink?: string;
};

export const Card: React.FC<Props> = (props: Props) => {
    const [hover, changeHover] = useState(false);
    return (
        <CardContainer onMouseEnter={() => changeHover(!hover)} onMouseLeave={() => changeHover(!hover)}>
            <Img src={`../../${props.imagePath}`} alt={`project-${props.name}`} />
            {hover && (
                <>
                    <Overlay />
                    <Description>
                        <H2>{props.name}</H2>
                        <Link href={props.url} target="_blank" className="project-link" rel="noopener noreferrer">
                            Visit Site
                        </Link>
                        {props.mobile && (
                            <Link
                                href={props.appLink}
                                target="_blank"
                                className="project-link"
                                rel="noopener noreferrer"
                            >
                                Download Mobile App
                            </Link>
                        )}
                    </Description>
                </>
            )}
        </CardContainer>
    );
};
