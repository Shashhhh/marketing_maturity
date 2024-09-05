import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
import '@styles/chartPage.css';

const BarChart = ({ formData, chartId }) => {
    const splitData = (data, chartId) => {
        const entries = Object.entries(data);
        const mid = Math.ceil(entries.length / 2);
        if (chartId === 'chart1') {
            return entries.slice(0, mid);
        }
        return entries.slice(mid);
    };

    const data = splitData(formData, chartId).map(([key, value]) => ({
        id: key,
        value: parseInt(value, 10),
    }));

    return (
        <div className='barChart'>
            <ResponsiveBar
                layout='vertical'
                data={data}
                keys={['value']}
                indexBy="id"
                margin={{ top: 50, right: 50, bottom: 50, left: 50 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                colors={{ scheme: 'nivo' }}
                colorBy='indexValue'
                borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                axisTop={null}
                axisRight={null}
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
                axisBottom={{
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Category',
                    legendPosition: 'middle',
                    legendOffset: 38,
                }}
                axisLeft={{
                    tickSize: 0,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Score',
                    legendPosition: 'middle',
                    legendOffset: -40,
                    tickValues: [1, 2, 3, 4, 5]
                }}
                isInteractive={false}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                enableLabel={false}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
        </div>
    );
};

export default BarChart;
