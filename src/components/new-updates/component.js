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
      <p>The latest version of Aqueduct, Aqueduct 4.0, launched on August 16, 2023 with updated inputs to the hydrological model, providing more accurate baseline data, as well as future projections data for 2030, 2050 and 2080, based on the latest climate models.</p>
        <p>Find instructions on downloading the data and interpreting the CSV columns at <a target="_blank" href="https://github.com/wri/Aqueduct40/blob/master/data_dictionary_water-risk-atlas.md" rel="noreferrer">this Github link</a>.</p>
        <p><a target="_blank" href="https://wri.zoom.us/webinar/register/WN_pBPBSJQcQPmaYzhFAC3tGg#/registration%5D" rel="noreferrer"> Register for our webinar</a> on September 7, 2023 to learn more</p>
      <a className='button-link' target='_blank' href='https://doi.org/10.46830/writn.23.00061' rel="noreferrer">READ FULL DOCUMENTATION</a>
    </div>
  ) : null
}

export default NewUpdatesModal;