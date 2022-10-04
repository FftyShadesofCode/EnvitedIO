import React, { useState, useEffect, useRef } from 'react'
import { DateRange } from 'react-date-range'
import format from 'date-fns/format'
import { addDays } from 'date-fns'

import AddressLookup from '../components/AddressLookup'

import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

export default function CreateEvent() {
    const [disable, setDisable]= useState(true);
    const [todate, setTodate]= useState([]);
    const [fromdate, setFromdate]= useState([]);

    const [todateformat, setTodateformat]= useState('');
    const [fromdateformat, setFromdateformat]= useState('');

    const handletodate= (e)=>{
        const gettodatevalue= e.target.value;
        const setdateformat= gettodatevalue.split('-');
        const settoyear= setdateformat[0];
        const settomonth= setdateformat[1];
        const settodate= setdateformat[2];
        const settodateformat= settoyear+""+settomonth+""+settodate;
        setTodate(gettodatevalue);
        setTodateformat(settodateformat);
        setDisable(false);
        //console.log(settodateformat);

    }

    const handlefromdate= (e)=>{
        const getfromdatevalue= e.target.value;
        const setfromformat= getfromdatevalue.split("-");
        const setfromyear= setfromformat[0];
        const setfrommonth= setfromformat[1];
        const setfromdate= setfromformat[2];
        const setfromformatdate= setfromyear+""+setfrommonth+""+setfromdate;
        setFromdate(getfromdatevalue);
        setFromdateformat(setfromformatdate);
        // console.log(setfromformatdate);

    }
    const handleSubmit= (e)=>{
        e.preventDefault();

        //alert("todate " + todate + "form date" + fromdate);

        if(todateformat > fromdateformat )
        {
            alert("Please select valid date");
        } else  {

            alert("Successful ! Please set API URL");
        }

    }


    return (
        <div className='create-event'>

            <form onSubmit={ handleSubmit}>
                <label htmlFor='eventName'>Event Name:
                    <input type='text' placeholder='Name of Event...' onChange={(e)=>handlename(e)} />
                </label>

                <label htmlFor='hostName'>Host Name:
                    <input type='text' placeholder='Name of Host...'/>
                </label>

                <div className='date-wrapper'>

                    <label htmlFor='fromdate'>From: </label>
                    <input type="date" className="form-control" name="fromdate" placeholder="dd-mm-yyyy" disabled={disable}  onChange={(e)=>handlefromdate(e)}  />

                    <label htmlFor='todate'>To:</label>
                    <input type="date" className="form-control" name="todate" placeholder="dd-mm-yyyy" onChange={(e)=>handletodate(e)}   />
                </div>

                <div className='address-wrapper'>
                    <label htmlFor='addressLookup'>Location: </label>
                    <AddressLookup />
                </div>

            </form>

        </div>
    );
};