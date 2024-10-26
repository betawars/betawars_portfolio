import { GitHub } from '@mui/icons-material'
import {LinkedIn} from '@mui/icons-material'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target="_blank">
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                aria-label='github'
                className='link link--icon'
              >
                <GitHub />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedIn />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About