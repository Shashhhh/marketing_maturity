import React from 'react';
import { TextField } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import './FormComponent.css';

function FormComponent({ inputValue, setInputValue, response, handleKeyPress }) {
    return (
        <form>
            {/* Goal Setting and Performance Management */}
            <TextField
                label="Which KPI/indicators do you use to measure marketing performance? How often are these measures reviewed within managerial executive levels?"
                variant="outlined"
                margin="normal"
                fullWidth
                multiline
                required
                className="form_control"
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
            />
            <div className='responseBox'>
                <SmartToyIcon className='robotIcon'></SmartToyIcon>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {response}
                </ReactMarkdown>
            </div>
            {/* Lead Generation */}
            <TextField
                label="How many leads were generated from your marketing activities in the last 12 months?"
                id="outlined-number"
                type="number"
                fullWidth
                multiline
                margin="normal"
                required
                className="form_control"
            />
            {/* Lead Quality */}
            <TextField
                label="What percentage of leads were converted to opportunities in this period?"
                variant="outlined"
                fullWidth
                multiline
                margin="normal"
                required
                className="form_control"
            />

            {/* Marketing Contribution */}
            <TextField
                label="What percentage of your company's pipelines and revenue in the past 12 months was sourced from marketing activities?"
                variant="outlined"
                fullWidth
                multiline
                margin="normal"
                required
                className="form_control"
            />

            {/* Marketing Sources */}
            <TextField
                label="Which marketing campaign activities and/or tactics were the best performing in the past 12 months and how did you measure this?"
                variant="outlined"
                fullWidth
                multiline
                margin="normal"
                required
                className="form_control"
            />

            {/* Marketing ROI */}
            <TextField
                label="What is your overall marketing ROI over the last 12 months (revenue sourced from marketing-generated leads / funds spent on marketing activities)?"
                variant="outlined"
                fullWidth
                multiline
                margin="normal"
                required
                className="form_control"
            />
        </form>
    );
}

export default FormComponent;
