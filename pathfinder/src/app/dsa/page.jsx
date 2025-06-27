import React from 'react'
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';


const nodes = [
    { id: '1', data: { label: 'Arrays' }, position: { x: 50, y: 50 } },
    { id: '2', data: { label: 'Linked List' }, position: { x: 250, y: 50 } },
    { id: '3', data: { label: 'Stack' }, position: { x: 450, y: 50 } },
    { id: '4', data: { label: 'Queue' }, position: { x: 650, y: 50 } },
    { id: '5', data: { label: 'Hashing' }, position: { x: 50, y: 200 } },
    { id: '6', data: { label: 'Trees' }, position: { x: 250, y: 200 } },
    { id: '7', data: { label: 'Graphs' }, position: { x: 450, y: 200 } },
    { id: '8', data: { label: 'Heaps' }, position: { x: 650, y: 200 } },
    { id: '9', data: { label: 'Sorting' }, position: { x: 150, y: 350 } },
    { id: '10', data: { label: 'Searching' }, position: { x: 450, y: 350 } },
    { id: '11', data: { label: 'Dynamic Programming' }, position: { x: 300, y: 500 } },
    { id: '12', data: { label: 'Greedy Algorithms' }, position: { x: 500, y: 500 } }
];
const edges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3' },
    { id: 'e3-4', source: '3', target: '4' },
    { id: 'e5-6', source: '5', target: '6' },
    { id: 'e6-7', source: '6', target: '7' },
    { id: 'e7-8', source: '7', target: '8' },
    { id: 'e9-10', source: '9', target: '10' },
    { id: 'e11-12', source: '11', target: '12' }
];

const page = () => {
    return (
        <div className='flex h-[100vh] w-[100vw] justify-center items-center' >
            <div className='h-[80vh] w-[80vw]  border-4' style={{borderColor:"var(--second-color)"}}>
                <ReactFlow nodes={nodes} edges={edges}>
                    <Background
                        variant='dots'
                        color='#0b635b'
                        size={2}
                    />
                    <Controls />
                </ReactFlow>
            </div>
        </div>
    )
}

export default page
