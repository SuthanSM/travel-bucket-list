import React, { useState } from 'react';
import travelPlansData from '../../data/travel-bucket-list.json'
import './AddTravelPlan.css';

function AddTravelPlans() {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [description, setDescription] = useState('');
  const [hashtags, setHashtags] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!title) {
      alert('Title is mandatory');
      return;
    }

    const newEntry = {
      title: title,
      link: link,
      description: description,
      hashtags: hashtags,
      isdone: 'no'
    };

    console.log('Form submitted:', { title, link, description, hashtags });
    const updatedData = [...travelPlansData, newEntry];
    console.log('Updated JSON:', updatedData);

    //update JSON file

    setTitle('');
    setLink('');
    setDescription('');
    setHashtags('');

    alert('Data submitted successfully!');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="title">Title*</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className='form-control form-control-lg'
          />
        </div>

        <div className="form-group">
          <label htmlFor="link">Link</label>
          <input
            type="text"
            id="link"
            value={link}
            onChange={e => setLink(e.target.value)}
            className='form-control form-control-lg'
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className='form-control form-control-lg'
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="hashtags">Hash Tags</label>
          <input
            type="text"
            id="hashtags"
            value={hashtags}
            onChange={e => setHashtags(e.target.value)}
            className='form-control form-control-lg'
          />
        </div>

        <button type="submit" className='btn btn-lg btn-success'>Add Travel Plan</button>
      </form>
    </div>
  );
}

export default AddTravelPlans;
