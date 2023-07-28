// JS for the 페이지 5: 포스트잇 클릭시 글이 나오고 제목, 인원, 학과, 내용이 보이게 되고 사용자는 댓글을 달아서 매칭을 원한다고 표시할 수 있게 되는 페이지

// Function to handle comment button click
function handleCommentClick() {
    // Replace this with the logic to handle comment button click
    // For example, you can show a comment input box or perform any other action.
    console.log("Comment button clicked!");
  }
  
  // Function to handle apply button click
  function handleApplyClick() {
    // Replace this with the logic to handle apply button click
    // For example, you can display a confirmation message or perform any other action.
    console.log("Apply button clicked!");
  }
  
  // Handle button clicks
  const sidebarButtons = document.querySelectorAll('.sidebar-btn');
  const commentButtons = document.querySelectorAll('.comment-btn');
  const postits = document.querySelectorAll('.postit');
  
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
  
  postits.forEach(postit => {
    postit.addEventListener('click', () => {
      // Show details when a postit is clicked
      const details = postit.nextElementSibling;
      details.classList.toggle('show');
    });
  });
  
  const applyBtns = document.querySelectorAll('.apply-btn');
  applyBtns.forEach(btn => {
    btn.addEventListener('click', handleApplyClick);
  });
  