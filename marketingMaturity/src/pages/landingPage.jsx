import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MeshGradientRenderer } from '@johnn-e/react-mesh-gradient';
import BeginButton from '../components/letsBeginButton';
export default function Landing(){
const navigate = useNavigate()
return (
<div className='container'>
<MeshGradientRenderer
    className="gradient"
    colors={[
        "#00183c", 
        "#003750", 
        "#00e6dc", 
        "#0cc", 
        "#099"
    ]}
    backgroundOpacity={1}
    speed={0.01}
/>
<div>
    <h1 className='welcomeHeader'>
        Welcome to the Siemens Marketing Maturity Assessment
    </h1>
    <p className='helperText'>
        Please answer the questions in the accompany tabs, reflecting your current marketing practices.
    </p>
</div>
<div className='beginButtonContainer'>
<BeginButton/>
</div>
</div>
)
}
