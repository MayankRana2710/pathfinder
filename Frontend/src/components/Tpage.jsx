'use client'

import React from 'react'
import axios from 'axios';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
const Tpage = (topics) => {
    const [responseText, setResponseText] = useState("");


    const path = usePathname();
    const heading = {
        "/topics/dsa": "Data Structure and Algorithm",
        "/topics/devops": "Dev Operations",
        "/topics/blockchain": "Blockchain",
        "/topics/cs": "Cyber Security",
        "/topics/webdev": "Web Development"
    };
    const content = async (mood) => {
        try {
            const response = await axios.post("http://127.0.0.1:5000/api/aiquery/query", {
                mood: mood,
                topic: topics,
                field: heading[path]
            }, {
                headers: {                       /*bhai axios json parse output de toh deta hai par, isse bhi json parse karna jaruri hai*/
                    "Content-Type": "application/json" /*, warna yaad rakhio kitna dimag kharab hua tha pehle din backend me problem dhoondne me*/
                }
            })
            setResponseText(response.data.content);
            console.log(response.data);
        }
        catch (error) {
            console.log("Error occured at core functioning");
        }


        
    };
    return (
        <div>
            <div className='Tpage' >
                {/* <div className='Tpage_about text-white '>
                    <ol>
                        <li>topic 1</li>
                        <li>topic 2</li>
                        <li>topic 3</li>
                        <li>topic 4</li>
                        <li>topic 5</li>
                        <li>topic 6</li>
                    </ol>
                </div>
                <hr className='vertical' /> */}
                <div className='Tpage_content' style={{ color: "white" }}>
                    <div>
                        <button className='Tpage_button' onClick={() => content("Happy")}>Happy</button>
                        <button className='Tpage_button' onClick={() => content("Sad")}>Sad</button>
                        <button className='Tpage_button' onClick={() => content("Motivated")}>Motivated</button>
                    </div>
                    <div className='Tpage_res'>{responseText}</div>
                </div>
            </div>
        </div>
    )
}

export default Tpage
