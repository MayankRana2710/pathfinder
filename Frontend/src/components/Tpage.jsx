import React from 'react'
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const Tpage = ({ node, edge }) => {
    return (
        <div>
            <div className='Tpage' >
                <div className='Tpage_about text-white '>
                    <ol>
                        <li>topic 1</li>
                        <li>topic 2</li>
                        <li>topic 3</li>
                        <li>topic 4</li>
                        <li>topic 5</li>
                        <li>topic 6</li>
                    </ol>
                </div>
                <hr className='vertical' />
                <div className='Tpage_content' style={{ color: "black" }}>
                    <ReactFlow nodes={node} edges={edge}>
                        <Background
                            variant='dots'
                            color="#8e44ad"
                            size={1}
                        />
                        <Controls />
                    </ReactFlow>
                </div>
            </div>
        </div>
    )
}

export default Tpage
