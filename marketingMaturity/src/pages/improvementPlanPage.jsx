import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import BasicButton from '../components/buttons/basicButton';
import { motion } from 'framer-motion';
import '@styles/improvementPlan.css';
import transition from '@components/transition';
const resourcesData = [
    {
      id: 'resource1',
      name: 'How to Build a Strategic Marketing Plan - presentation for Siemens Partners',
      url: 'https://siemens.highspot.com/spots/5c34f3daa2e3a968a8dc96e3?list=637e2480c8ce218c1b784e6e&overview=false',
      topics: ['Business Goals, Strategy, and Brand', 'Lead Management', 'Marketing Execution Plan']
    },
    {
      id: 'resource2',
      name: 'Sales Interview Questions for Partners',
      url: 'https://siemens.highspot.com/items/62b9f0e04568893e987c2cd6?lfrm=rhp-ft.1',
      topics: ['Business Goals, Strategy, and Brand', 'Customer Definition', 'Marketing Execution Plan']
    },
    {
      id: 'resource3',
      name: 'Siemens Partners\' Marketing Jumpstart Guide',
      url: 'https://siemens.highspot.com/items/6398b90ee70a235a53ae548e?lfrm=rhp-ft.0',
      topics: ['Marketing Capacity', 'Database Building', 'Content Development', 'Campaign Execution', 'Outbound Marketing', 'Inbound Marketing']
    },
    {
      id: 'resource4',
      name: 'Marketing in a SaaS world with LAER and buyers journey in mind',
      url: 'https://siemens.highspot.com/spots/5c34f3daa2e3a968a8dc96e3?list=640a0b165f737e738dd45c74&overview=false',
      topics: ['Customer Satisfaction']
    },
    {
      id: 'resource5',
      name: 'Understanding the Buyers Journey',
      url: 'https://siemens.highspot.com/spots/5c34f3daa2e3a968a8dc96e3?list=637666263c4fa9b68dca3dd4&overview=false',
      topics: ['Lead Management', 'Reporting & Analysis']
    },
    {
      id: 'resource6',
      name: 'Staying top of mind with customers - Digital Marketing Best Practices',
      url: 'https://siemens.highspot.com/items/61e85237b021c1fc92fae13c?lfrm=rhp.5',
      topics: []
    },
    {
      id: 'resource7',
      name: 'PowerPaths Marketing Onboarding',
      url: 'https://siemens.highspot.com/spots/5c0ac58466bbaa1d7d322351',
      topics: ['New Partner Marketers Start here']
    },
    {
      id: 'resource8',
      name: 'Partner Academy for Marketers',
      url: 'https://siemens.highspot.com/spots/5bec86db81171706f918034d?list=5bec8b8e81171706d11849c7',
      topics: ['Siemens Strategic Marketing Readiness Video']
    },
    {
      id: 'resource9',
      name: 'Email & Database Marketing Best Practices',
      url: 'https://siemens.highspot.com/spots/5c34f3daa2e3a968a8dc96e3?list=63766045fe561fae0dc10b4e&overview=false',
      topics: []
    },
    {
      id: 'resource10',
      name: 'How to Navigate Highspot for Marketers',
      url: 'https://siemens.highspot.com/items/652719507e79cfdee601cc72?lfrm=rhp-ft.0',
      topics: ['Marketing Campaign Execution Resources']
    },
    {
      id: 'resource11',
      name: 'Demand generation content development and delivery best practices',
      url: 'https://siemens.highspot.com/items/6349e39f817e97d71a68bbdb?lfrm=rhp.0',
      topics: ['Marketing Campaign Execution Resources']
    },
    {
      id: 'resource12',
      name: 'Digital Thread Overviews',
      url: 'https://siemens.highspot.com/spots/5c34f3daa2e3a968a8dc96e3?list=63c6f1b06167834f4fd2258e&overview=false',
      topics: ['Marketing Campaign Execution Resources']
    },
    {
      id: 'resource13',
      name: 'Website Design for Demand Gen',
      url: 'https://siemens.highspot.com/spots/5c34f3daa2e3a968a8dc96e3?q=%22Website++Design+for+Demand+Gen%22',
      topics: ['SEO Best Practices & Resources']
    },
    {
      id: 'resource14',
      name: 'AI for Marketing Tips for content creation',
      url: 'https://siemens.highspot.com/spots/5c34f3daa2e3a968a8dc96e3?list=661daf67d31d6a916451c204&overview=false',
      topics: []
    },
    {
      id: 'resource15',
      name: 'Social Media Marketing Best Practices',
      url: 'https://siemens.highspot.com/spots/5c34f3daa2e3a968a8dc96e3?list=633b02cfb6886466a116dd55&overview=false',
      topics: []
    },
    {
      id: 'resource16',
      name: 'Email Marketing Best Practices',
      url: 'https://siemens.highspot.com/spots/5c34f3daa2e3a968a8dc96e3?list=63766045fe561fae0dc10b4e&overview=false',
      topics: ['AB Testing Introduction for Marketers']
    }
  ];
  
const container = {
    beginning: {},
    final: { 
        transition: { 
            staggerChildren: 0.3
        } 
    },
    exit: { opacity: 0 }
};

const item = {
    beginning: { opacity: 0, y: -20 },
    final: { 
        opacity: 1, 
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut' 
        }
    }
};

function ImprovementPlan({formData}) {
    const navigate = useNavigate();
    
    return (
        <motion.div 
            className='improvementContainer' 
            variants={container}
            initial="beginning"
            animate="final"
            exit="exit"
        >
        <h1 className='welcomeHeader'>
            Improvement Plan
        </h1>
        <div>
            Here's some resources 
        </div>
        </motion.div>

    );
}
export default transition(ImprovementPlan);