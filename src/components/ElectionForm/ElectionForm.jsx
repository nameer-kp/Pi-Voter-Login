import Button from '@restart/ui/esm/Button'
import React from 'react'
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function ElectionForm(props) {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <label style={{paddingTop:'13px'}}>
            &nbsp;Candidate:
          </label>
        <input id="candidate" className="form-content" type="text"  autocomplete="on" required />
        <label style={{paddingTop:'13px'}}>
            &nbsp;Candidate:
          </label>
        <input id="candidate" className="form-content" type="text"  autocomplete="on" required />
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <Button as="input" type="submit" value="Back" className="col-md-12  text-right" onClick={()=>{props.setViewForm(false)}}/>{' '}
    </div>
  )
}

