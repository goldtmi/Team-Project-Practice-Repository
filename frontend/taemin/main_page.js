// JS for the 페이지 3: 게시판으로 들어가는 기본 창

// Handle button clicks
const boardButtons = document.querySelectorAll('.board-btn');

boardButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Replace this with the logic to handle the board button clicks
    // For example, you can redirect the user to the selected board page.
    console.log(`Clicked on ${button.textContent}`);
  });
});
