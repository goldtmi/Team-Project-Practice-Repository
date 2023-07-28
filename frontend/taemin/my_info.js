// JS for the 페이지 6: 내 정보 확인 및 수정 페이지

// Function to enable edit mode
function enableEditMode() {
    const form = document.querySelector('form');
    form.classList.add('edit-mode');
  
    // Enable input fields for editing
    form.querySelectorAll('input, select').forEach(input => {
      input.removeAttribute('disabled');
    });
  }
  
  // Function to save changes
  function saveChanges() {
    const form = document.querySelector('form');
    form.classList.remove('edit-mode');
  
    // Disable input fields after saving changes
    form.querySelectorAll('input, select').forEach(input => {
      input.setAttribute('disabled', true);
    });
  }
  
  // Function to cancel changes
  function cancelChanges() {
    const form = document.querySelector('form');
    form.classList.remove('edit-mode');
    
    // Reset form values to their original state
    form.reset();
  }
  
  // Handle button clicks
  const editBtn = document.querySelector('.edit-btn');
  const saveBtn = document.querySelector('.save-btn');
  const cancelBtn = document.querySelector('.cancel-btn');
  
  editBtn.addEventListener('click', enableEditMode);
  saveBtn.addEventListener('click', saveChanges);
  cancelBtn.addEventListener('click', cancelChanges);
  