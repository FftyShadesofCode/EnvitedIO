import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='homepage'>
            <div className='wrapper'>
                <div className='image-wrapper'>

                </div>

                <div className='text-wrapper'>
                    <h1 className='title-1'>Imagine if <br /> </h1>
                        <h2 className='text gradient'>Snapchat</h2><br />
                    <h1 className='title-2'>
                        had  events.
                    </h1>

                    <p className='tagline'>
                        Easily host and share events with your friends <br />
                        across any social media.
                    </p>

                    <Link to='/create' className='createEvent'>
                        <button className='createEventButton' >Create my event</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};