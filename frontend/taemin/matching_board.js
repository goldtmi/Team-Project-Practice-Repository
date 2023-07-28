// JS for the 페이지 4: 매칭을 신청한 사람들이 올려놓은 글들이 포스트잇의 형태로 들어가있는 페이지

// Function to handle comment button click
function handleCommentClick() {
    // Replace this with the logic to handle comment button click
    // For example, you can redirect the user to the comment section or
    // open a modal for adding comments.
    console.log("Comment button clicked!");
  }
  
  // Handle button clicks
  const sidebarButtons = document.querySelectorAll('.sidebar-btn');
  const commentButtons = document.querySelectorAll('.comment-btn');
  
  sidebarButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Handle sidebar button clicks here if needed
      // For example, you can highlight the active button.
      console.log(`Clicked on ${button.textContent}`);
    });
  });
  
  commentButtons.forEach(button => {
    button.addEventListener('click', handleCommentClick);
  });
  