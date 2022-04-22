import Button from '@restart/ui/esm/Button'
import React from 'react'

export default function ElectionForm(props) {
  return (
    <div>
        <input >
      <Button as="input" type="submit" value="Back" className="col-md-12  text-right" onClick={()=>{props.setViewForm(false)}}/>{' '}
    </div>
  )
}

