'use client'

import React from 'react'
import Tnav from '@/components/Tnav'
import Tpage from '@/components/Tpage';

const topics = {
  "Easy": ['Arrays', 'Strings'],
  'Easy to Medium': ['Sorting', 'Searching'],
  "Medium": ['Linked List', 'Stack', 'Queue'],
  'Medium to Hard': ['Heaps'],
  "Hard": ['Hashing', 'Trees', 'Graphs', 'Greedy Algorithms'],
  'Very Hard': ['Dynamic Programming']
};
const page = () => {
    return (
        <div>
            <Tnav />
            <Tpage
                topics={topics}
            />
        </div>
    )
}

export default page
