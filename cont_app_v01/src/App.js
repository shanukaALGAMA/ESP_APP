import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: ''
  });
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const checkUnlockCode = (value) => {
    return value === '123456';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitClicked(true);
    setTimeout(() => setIsSubmitClicked(false), 300); // Reset after 300ms
    alert(`Form submitted with:\nField 1: ${formData.field1}\nField 2: ${formData.field2}\nField 3: ${formData.field3}`);
  };

  return (
    <div style={{
      backgroundColor: '#808080',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <form 
        onSubmit={handleSubmit}
        style={{
          backgroundColor: '#000000',
          padding: '40px',
          borderRadius: '10px',
          width: '100%',
          maxWidth: '500px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
        }}
      >
        <h2 style={{ color: '#fff', textAlign: 'center', marginBottom: '30px' }}>Unlock Form</h2>
        
        {/* Field 1 */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: '#fff', display: 'block', marginBottom: '8px' }}>Field 1:</label>
          <div style={{ display: 'flex' }}>
            <input
              type="text"
              name="field1"
              value={formData.field1}
              onChange={(e) => setFormData({...formData, field1: e.target.value})}
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '4px 0 0 4px',
                border: 'none'
              }}
            />
            <button 
              type="button"
              style={{
                padding: '10px 15px',
                backgroundColor: checkUnlockCode(formData.field1) ? '#4CAF50' : '#757575',
                color: 'white',
                border: 'none',
                borderRadius: '0 4px 4px 0',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
            >
              {checkUnlockCode(formData.field1) ? 'Unlocked' : 'Locked'}
            </button>
          </div>
          {!checkUnlockCode(formData.field1) && (
            <small style={{ color: '#bdbdbd', display: 'block', marginTop: '4px' }}>
              Enter "123456" to unlock
            </small>
          )}
        </div>
        
        {/* Field 2 */}
        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: '#fff', display: 'block', marginBottom: '8px' }}>Field 2:</label>
          <div style={{ display: 'flex' }}>
            <input
              type="text"
              name="field2"
              value={formData.field2}
              onChange={(e) => setFormData({...formData, field2: e.target.value})}
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '4px 0 0 4px',
                border: 'none'
              }}
            />
            <button 
              type="button"
              style={{
                padding: '10px 15px',
                backgroundColor: checkUnlockCode(formData.field2) ? '#2196F3' : '#757575',
                color: 'white',
                border: 'none',
                borderRadius: '0 4px 4px 0',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
            >
              {checkUnlockCode(formData.field2) ? 'Unlocked' : 'Locked'}
            </button>
          </div>
          {!checkUnlockCode(formData.field2) && (
            <small style={{ color: '#bdbdbd', display: 'block', marginTop: '4px' }}>
              Enter "123456" to unlock
            </small>
          )}
        </div>
        
        {/* Field 3 */}
        <div style={{ marginBottom: '30px' }}>
          <label style={{ color: '#fff', display: 'block', marginBottom: '8px' }}>Field 3:</label>
          <div style={{ display: 'flex' }}>
            <input
              type="text"
              name="field3"
              value={formData.field3}
              onChange={(e) => setFormData({...formData, field3: e.target.value})}
              style={{
                flex: 1,
                padding: '10px',
                borderRadius: '4px 0 0 4px',
                border: 'none'
              }}
            />
            <button 
              type="button"
              style={{
                padding: '10px 15px',
                backgroundColor: checkUnlockCode(formData.field3) ? '#f44336' : '#757575',
                color: 'white',
                border: 'none',
                borderRadius: '0 4px 4px 0',
                cursor: 'pointer',
                transition: 'background-color 0.3s'
              }}
            >
              {checkUnlockCode(formData.field3) ? 'Unlocked' : 'Locked'}
            </button>
          </div>
          {!checkUnlockCode(formData.field3) && (
            <small style={{ color: '#bdbdbd', display: 'block', marginTop: '4px' }}>
              Enter "123456" to unlock
            </small>
          )}
        </div>
        
        <button 
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: isSubmitClicked ? '#6A1B9A' : '#9C27B0', // Darker purple when clicked
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.2s ease-out',
            transform: isSubmitClicked ? 'scale(0.98)' : 'scale(1)',
            boxShadow: isSubmitClicked ? 'inset 0 2px 4px rgba(0,0,0,0.3)' : 'none'
          }}
          disabled={!(
            checkUnlockCode(formData.field1) && 
            checkUnlockCode(formData.field2) && 
            checkUnlockCode(formData.field3)
          )}
          onMouseDown={() => setIsSubmitClicked(true)}
          onMouseUp={() => setIsSubmitClicked(false)}
          onMouseLeave={() => setIsSubmitClicked(false)}
        >
          {(
            checkUnlockCode(formData.field1) && 
            checkUnlockCode(formData.field2) && 
            checkUnlockCode(formData.field3)
          ) ? 'Submit Form' : 'Complete all fields to submit'}
        </button>
      </form>
    </div>
  );
};

export default App;