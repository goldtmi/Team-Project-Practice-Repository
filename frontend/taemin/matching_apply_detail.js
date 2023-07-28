// JavaScript for 페이지 8: 매칭 현황 페이지

// Sample data for my posts, comments, and replies (you can modify this to fit your actual data)
const myPosts = [
    {
      title: "게시글 1",
      content: "내용 1",
      comments: [
        { author: "사용자1", comment: "댓글 1-1", replies: [{ author: "사용자2", reply: "답댓글 1-1-1" }] },
        { author: "사용자3", comment: "댓글 1-2", replies: [] },
      ],
    },
    {
      title: "게시글 2",
      content: "내용 2",
      comments: [
        { author: "사용자1", comment: "댓글 2-1", replies: [] },
        { author: "사용자4", comment: "댓글 2-2", replies: [{ author: "사용자1", reply: "답댓글 2-2-1" }] },
      ],
    },
  ];
  
  // Function to display my posts
  function displayMyPosts() {
    const matchStatusDiv = document.querySelector('.match-status');
    matchStatusDiv.innerHTML = '<h3>내 게시물</h3>';
  
    const myPostsList = document.createElement('ul');
    myPosts.forEach(post => {
      const listItem = document.createElement('li');
      listItem.textContent = post.title;
      listItem.addEventListener('click', () => displayPostDetails(post));
      myPostsList.appendChild(listItem);
    });
  
    matchStatusDiv.appendChild(myPostsList);
  }
  
  // Function to display post details (title, content, comments, and replies)
  function displayPostDetails(post) {
    const matchStatusDiv = document.querySelector('.match-status');
    matchStatusDiv.innerHTML = `
      <h3>${post.title}</h3>
      <p><strong>내용:</strong> ${post.content}</p>
      <h4>댓글</h4>
    `;
  
    const commentsList = document.createElement('ul');
    post.comments.forEach(comment => {
      const listItem = document.createElement('li');
      listItem.textContent = comment.comment;
      listItem.addEventListener('click', () => displayCommentDetails(comment));
      commentsList.appendChild(listItem);
    });
  
    matchStatusDiv.appendChild(commentsList);
  }
  
  // Function to display comment details (comment and replies)
  function displayCommentDetails(comment) {
    const matchStatusDiv = document.querySelector('.match-status');
    matchStatusDiv.innerHTML = `
      <h3>${comment.comment}</h3>
      <h4>답댓글</h4>
    `;
  
    const repliesList = document.createElement('ul');
    comment.replies.forEach(reply => {
      const listItem = document.createElement('li');
      listItem.textContent = reply.reply;
      repliesList.appendChild(listItem);
    });
  
    matchStatusDiv.appendChild(repliesList);
  }
  
  // Function to display my comments
  function displayMyComments() {
    const matchStatusDiv = document.querySelector('.match-status');
    matchStatusDiv.innerHTML = '<h3>내 댓글</h3>';
  
    const myCommentsList = document.createElement('ul');
    myPosts.forEach(post => {
      post.comments.forEach(comment => {
        if (comment.author === "내 사용자 이름") { // Replace "내 사용자 이름" with your actual username
          const listItem = document.createElement('li');
          listItem.textContent = comment.comment;
          listItem.addEventListener('click', () => displayCommentDetails(comment));
          myCommentsList.appendChild(listItem);
        }
      });
    });
  
    matchStatusDiv.appendChild(myCommentsList);
  }
  
  // Add event listener to the sidebar buttons
  const sidebarButtons = document.querySelectorAll('.sidebar-btn');
  sidebarButtons.forEach(button => {
    button.addEventListener('click', function () {
      // Remove active class from all buttons
      sidebarButtons.forEach(btn => btn.classList.remove('active'));
  
      // Add active class to the clicked button
      this.classList.add('active');
  
      // Display appropriate content based on the clicked button
      if (this.textContent === '내 게시물') {
        displayMyPosts();
      } else if (this.textContent === '내 댓글') {
        displayMyComments();
      }
    });
  });
  
  // Initial display when the page loads (display '내 게시물' by default)
  displayMyPosts();
  