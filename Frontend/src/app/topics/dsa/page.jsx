import DomainPage from '@/components/domainpage'


const topics = {
    "Easy": ['Arrays', 'Strings'],
    'Easy to Medium': ['Sorting', 'Searching'],
    "Medium": ['Linked List', 'Stack', 'Queue'],
    'Medium to Hard': ['Heaps'],
    "Hard": ['Hashing', 'Trees', 'Graphs', 'Greedy Algorithms'],
    'Very Hard': ['Dynamic Programming']
};

import React from 'react'

const page = () => {
    return (
        <div>
            <DomainPage
                domain={"Data Structure & Algorithm"}
                topic={topics}
            />
        </div>
    )
}

export default page



