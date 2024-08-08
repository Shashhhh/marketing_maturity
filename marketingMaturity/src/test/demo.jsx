import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import './demo.css';
import FormComponent from './FormComponent';

function Demo() {
    const [socket, setSocket] = useState(null);
    const [response, setResponse] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [loading, setLoading] = useState(false);
    const assistantChoice = "Marketing_Assistant";

    useEffect(() => {
        const ws = new WebSocket(`wss://backend-ckmm.onrender.com/ws/stream/${assistantChoice}/`);
        ws.onopen = () => {
            console.log('WebSocket connection opened');
        };

        ws.onmessage = (event) => {
            const responseData = JSON.parse(event.data);
            console.log('Received WebSocket message:', responseData);
            if (responseData.delta) {
                updateResponse(responseData.delta.replace(/<br>/g, '\n'));
            } else if (responseData.error) {
                alert('Error: ' + responseData.error);
            }
            setLoading(false);
        };

        ws.onerror = (error) => {
            alert('Error: WebSocket error occurred');
            console.error('WebSocket error:', error);
            setLoading(false);
        };

        ws.onclose = () => {
            console.log('WebSocket connection closed');
            setLoading(false);
        };

        setSocket(ws);

        return () => {
            ws.close();
        };
    }, [assistantChoice]);

    const onSend = (text) => {
        if (socket) {
            setLoading(true);
            socket.send(text);
        } else {
            alert('Error: WebSocket connection is not open');
        }
    };

    const updateResponse = (deltaText) => {
        setResponse(prev => prev + deltaText);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            if (inputValue.trim() !== '') {
                onSend(inputValue);
            }
        }
    };


    return (
        <Container maxWidth="lg" className="demo">
            <div className="banner">
                <Typography variant="h5" component="h1">
                    Reporting and Analysis
                </Typography>
            </div>
            <FormComponent 
                inputValue={inputValue}
                setInputValue={setInputValue}
                response={response}
                handleKeyPress={handleKeyPress}
            />
        </Container>
    );
}

export default Demo;
