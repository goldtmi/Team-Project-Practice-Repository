// JavaScript for 페이지 7: 매칭 신청 페이지

// Function to handle the form submission
function handleSubmit(event) {
    event.preventDefault();
  
    // Get the selected board type (1-2인 게시판 or 3인 이상 게시판)
    const boardType = document.querySelector('input[name="boardType"]:checked').value;
  
    // Get the post title and content
    const postTitle = document.getElementById('postTitle').value;
    const postContent = document.getElementById('postContent').value;
  
    // Get the number of participants
    const participants = parseInt(document.getElementById('participants').value);
  
    // Perform any additional processing or validation here if needed
  
    // Display the submitted data (you can modify this to do something else with the data)
    alert(`매칭 신청 완료!\n게시판: ${boardType}\n제목: ${postTitle}\n내용: ${postContent}\n상세 인원: ${participants}명`);
  }
  
  // Add event listener to the form for submission
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);
  