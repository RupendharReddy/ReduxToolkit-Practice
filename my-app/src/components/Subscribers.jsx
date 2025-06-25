import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newSubscriber } from '../redux/subscriberSlice';

const Subscribers = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const subscribers = useSelector((state) => state.Subscriber.subscriberName);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {  // Only dispatch if name is not empty
            dispatch(newSubscriber(name));
            setName('');  // Clear input after submission
        }
    };

    return (
        <div className="subscribers-container">
            <h2>Subscribers</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter subscriber name"
                />
                <button type="submit">Add Subscriber</button>
            </form>
            
            <ul className="subscribers-list">
                {subscribers.map((subscriber, index) => (
                    <li key={index}>{subscriber}</li>
                ))}
            </ul>
        </div>
    );
};

export default Subscribers;