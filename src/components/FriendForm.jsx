import React from 'react'

export default function FriendForm(props) {
  // 🔥 MAKE SURE THE PARENT IS INJECTING ALL NECESSARY PROPS
  const {
    values,
    onInputChange,
    onSubmit,
    // 🔥🔥🔥 ADDITIONAL PROPS NEEDED 🔥🔥🔥
    disabled,
    errors,
    onCheckboxChange,
  } = props

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Friend</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <button disabled={disabled}>submit</button>

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.username}</div>
          <div>{errors.email}</div>
          <div>{errors.role}</div>
          <div>{errors.civil}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Username&nbsp;
          <input
            value={values.username}
            onChange={onInputChange}
            name='username'
            type='text'
          />
        </label>

        <label>Email
          <input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='email'
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Role
          <select
            onChange={onInputChange}
            value={values.role}
            name='role'
          >
            <option value=''>- Select an option -</option>
            <option value='Student'>Student</option>
            <option value='Alumni'>Alumni</option>
            <option value='Instructor'>Instructor</option>
            <option value='TL'>Team Lead</option>
          </select>
        </label>

        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        <label>Single
          <input
            type='radio'
            name='civil'
            value='Single'
            onChange={onInputChange}
          // checked={values.civil === 'Single'}
          />
        </label>

        <label>Married
          <input
            type='radio'
            name='civil'
            value='Married'
            onChange={onInputChange}
          // checked={values.civil === 'Married'}
          />
        </label>
      </div>

      <div className='form-group checkboxes'>
        <h4>Hobbies</h4>

        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        <label>Hiking
          <input
            type='checkbox'
            name='hiking'
            checked={values.hobbies.hiking}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Reading
        <input
            type='checkbox'
            name='reading'
            checked={values.hobbies.reading}
            onChange={onCheckboxChange}
          />
        </label>

        <label>Coding
        <input
            type='checkbox'
            name='coding'
            checked={values.hobbies.coding}
            onChange={onCheckboxChange}
          />
        </label>
      </div>
    </form>
  )
}
