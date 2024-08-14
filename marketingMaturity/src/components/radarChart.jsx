import React from 'react';
import { ResponsiveRadar } from '@nivo/radar';

const RadarChart = ({ formData }) => {
    const chartData = Object.keys(formData).map((key) => {
        return {
            "criteria": key,
            "score": formData[key],
        };
    });

    return (
        <div style={{ height: '400px' }}>
            <ResponsiveRadar
                data={chartData}
                keys={['score']}
                indexBy="criteria"
                maxValue={5}
                margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
                curve="linearClosed"
                borderWidth={2}
                borderColor={{ from: 'color' }}
                gridLevels={5}
                gridShape="circular"
                gridLabelOffset={36}
                enableDots={true}
                dotSize={8}
                dotColor={{ theme: 'background' }}
                dotBorderWidth={2}
                dotBorderColor={{ from: 'color' }}
                colors={{ scheme: 'nivo' }}
                fillOpacity={0.25}
                blendMode="multiply"
                animate={true}
                motionConfig="wobbly"
                isInteractive={true}
            />
        </div>
    );
};

export default RadarChart;