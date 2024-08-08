import React from 'react';
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'
import * as reactSpring from '@react-spring/three'
import * as drei from '@react-three/drei'
import * as fiber from '@react-three/fiber'

export default function Gradient() {
    return (
    <ShaderGradientCanvas
    importedFiber={{ ...fiber, ...drei, ...reactSpring }}
    style={{position: 'absolute',
        top: 0,
    }}
    >
    <ShaderGradient
        control='query'
        urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.1&cAzimuthAngle=180&cDistance=4.5&cPolarAngle=115&cameraZoom=1&color1=%23099&color2=%23003750&color3=%2300e6dc&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=off&lightType=3d&pixelDensity=1&positionX=-0.5&positionY=0.1&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&toggleAxis=false&type=waterPlane&uAmplitude=0&uDensity=1.1&uFrequency=5.5&uSpeed=0.2&uStrength=2.4&uTime=0.2&wireframe=false&zoomOut=false'
    />
    </ShaderGradientCanvas>
    )
}