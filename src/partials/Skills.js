import React from 'react'

import { FaPalette } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa';

function Skills() {
  return (
    <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
    <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
      <FaCode className="text-4xl mx-auto inline-block" />
      <p className="text-xl font-semibold mt-4">
        Frontend
      </p>
    </div>
      <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
        <FaPalette className="text-4xl mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Design/UX
        </p>
      </div>
      <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
        <FaReact className="text-4xl mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          ReactJS
        </p>
      </div>
    </div>
  )
}

export default Skills
