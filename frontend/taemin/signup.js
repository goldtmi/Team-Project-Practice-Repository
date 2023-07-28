// JS for the login page

function checkDuplicate() {
    // Function to check for duplicate student ID
    // You can implement this functionality here
  }
  
  // Additional JS code for validation (optional)
  document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      // Validate form fields here before submitting the form
      // For example, check if all required fields are filled, etc.
      // If any field fails validation, prevent the form submission with event.preventDefault()
    });
  });
  function validateStudentID(event) {
    const input = event.target;
    let onlyNumbers = input.value.replace(/\D/g, ''); // Remove all non-numeric characters
    
    // Ensure the student ID is 9 digits long
    if (onlyNumbers.length  > 9) {
      // Display an error message for an invalid student ID length
      alert('학번은 9자리여야 합니다.');
      input.value = '';
      return; // Stop further processing
    }
  
    // Ensure the student ID starts with the number 2
    if (onlyNumbers.length !== 0 &&!onlyNumbers.startsWith('2')) {
      // Display an error message for an invalid student ID prefix
      alert('가입가능한 학번이 아닙니다.');
      input.value = '';
      return; // Stop further processing
    }
  
    // Update the input field value to only contain numeric characters
    input.value = onlyNumbers;
  }
  
  
  function validatePassword(event) {
    const passwordInput = document.getElementById('password');
    const passwordVerifyInput = document.getElementById('passwordVerify');
    const password = passwordInput.value;
    const passwordVerify = passwordVerifyInput.value;
  
    if (password !== passwordVerify) {
      // Passwords don't match
      alert("비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
      event.preventDefault(); // Prevent form submission
    }
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', validatePassword);
  
  // signup.js 파일 예시

// 단과대학과 소속학과 옵션을 동적으로 변경하는 함수
function updateDepartments() {
  const collegeInput = document.getElementById('college');
  const departmentInput = document.getElementById('department');

  // 선택한 단과대학의 값을 가져옴
  const selectedCollege = collegeInput.value;

  // 기존의 옵션들을 모두 삭제
  departmentInput.innerHTML = '';

  // 선택한 단과대학에 따라 해당되는 소속학과 옵션 추가
  if (selectedCollege === '공과대학') {
    const engineeringDepartments = [
      '공과대학 시스템경영공학부 산업경영공학전공',
      // 공과대학 다른 소속학과 옵션들...
    ];
    engineeringDepartments.forEach((department) => {
      const option = document.createElement('option');
      option.value = department;
      option.textContent = department;
      departmentInput.appendChild(option);
    });
  } else if (selectedCollege === '인문사회대학') {
    const humanitiesDepartments = [
      '인문사회대학 국어국문학과',
      // 인문사회대학 다른 소속학과 옵션들...
    ];
    humanitiesDepartments.forEach((department) => {
      const option = document.createElement('option');
      option.value = department;
      option.textContent = department;
      departmentInput.appendChild(option);
    });
  }
  // 다른 단과대학에 대한 조건 분기도 추가 가능

  // 첫 번째 소속학과 옵션을 기본으로 선택하도록 설정
  departmentInput.selectedIndex = 0;
}

// 나머지 기능들은 이전과 동일하게 유지합니다.
// (유효성 검사 함수, 중복확인 함수, 폼 제출 처리 함수 등)
