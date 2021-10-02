import React from 'react'
import GitHubButton from 'react-github-btn'

function Footer({github}) {
  return (
    <div className="text-center w-full mt-16">
      <p className="text-gray-600 mb-4">
        Made with <span role="img" aria-label="heart">💙</span> by <a className="text-blue-500 hover:underline" href="https://github.com/BraydenTW">Brayden W</a>
      </p>
      <GitHubButton href={github+"/react-tailwind-portfolio"} data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>
      &nbsp;&nbsp;
      <GitHubButton href={github+"/react-tailwind-portfolio/fork"} data-color-scheme="no-preference: light; light: light; dark: light;" data-icon="octicon-repo-forked" data-size="large" data-show-count="true" aria-label="Fork ntkme/github-buttons on GitHub">Fork</GitHubButton>
    </div>
  )
}

export default Footer