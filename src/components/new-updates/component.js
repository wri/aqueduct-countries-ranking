import React, { useEffect, useState } from 'react';

const NewUpdatesModal = () => {

  const [show, setShow] = useState(false)

  const closeUpdatesModal = () => {
    localStorage.setItem('updateModal', 'true')
    setShow(false)
  }

  useEffect(() => {
    if (!localStorage.getItem('updateModal')) {
      setShow(true)
    }
  }, [])

  return show ? (
    <div className='updates-modal'>
      <header>
        <h3>New Updates!</h3>
        <button onClick={closeUpdatesModal}>X</button>
      </header>
      <p>We launched the latest version of Aqueduct, Aqueduct 4.0, on August 16, 2023. This includes changes to the baseline data now using updated inputs to the hydrological model. In addition, we now include future projections data for 2030, 2050 and 2080 based on the latest climate models.</p>
      <p>For instructions on how to download the data and interpret the CSV colums please see <a target='_blank' href='https://github.com/wri/Aqueduct40/blob/master/data_dictionary_water-risk-atlas.md' rel="noreferrer">this Github link</a>.</p>
      <p><a target='_blank' href='https://www.eventbrite.com/e/aqueduct-water-risk-atlas-future-projections-a-tool-demonstration-tickets-692074833457?utm_source=aqueduct-tools&utm_medium=banner&utm_campaign=launch&utm_id=launch-webinar' rel="noreferrer"> Register for our Aqueduct 4.0 webinar</a> to learn more</p>
      <a className='button-link' target='_blank' href='https://doi.org/10.46830/writn.23.00061' rel="noreferrer">READ FULL DOCUMENTATION</a>
    </div>
  ) : null
}

export default NewUpdatesModal;