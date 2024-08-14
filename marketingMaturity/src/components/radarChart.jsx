import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';
import '@styles/chartPage.css'
const RadarChart = ({ formData }) => {
    const chartData = Object.keys(formData).map((key) => {
        return {
            "criteria": key,
            "score": formData[key],
        };
    });

    return (
        <div className='radarChart'>
            <ResponsiveRadar
                data={chartData}
                keys={['score']}
                indexBy="criteria"
                maxValue={5}
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                curve="linearClosed"
                borderWidth={2}
                borderColor={{ from: 'color' }}
                gridLevels={5}
                gridLabelOffset={25}
                enableDots={true}
                dotSize={8}
                dotColor='#ffffff'
                dotBorderWidth={2}
                dotBorderColor={{ from: 'color' }}
                colors='#099'
                fillOpacity={0.55}
                blendMode="multiply"
                animate={true}
                motionConfig="wobbly"
                gridShape="linear"
                isInteractive={false}
                theme={{
                    "axis": {
                        "legend": {
                            "text": {
                                "fontFamily": 'Quicksand',
                                "fontSize": 16,
                                "fill": "rgba(255, 255, 255, 0.75)",
                            }
                        },
                        "ticks": {
                            "text": {
                                "fontFamily": 'Quicksand',
                                "fontSize": 16  ,
                                "fill": "rgba(255, 255, 255, 0.75)",
                            }
                        },
                    }
                }}
            />
        </div>
    );
};

export default RadarChart;