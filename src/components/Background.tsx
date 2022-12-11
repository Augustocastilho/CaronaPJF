import { ImageBackground } from 'react-native'
import React from 'react'

import background from '../../assets/background.png';

interface Props {
    children: React.ReactNode;
}

export function Background({children}: Props) {
    return (
        <ImageBackground
            source={background}
            style={{flex: 1}}
            defaultSource={background}
        >
            {children}
        </ImageBackground>
    )
}