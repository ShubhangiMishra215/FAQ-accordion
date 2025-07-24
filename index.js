document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll('.faq__items');

  faqItems.forEach(item => {
    const header = item.querySelector('.faq__header');
    const answer = item.querySelector('.ans');
    const icon = item.querySelector('.icon img');

    header.addEventListener('click', () => {
      const isOpen = answer.style.display === 'block';

      document.querySelectorAll('.ans').forEach(ans => ans.style.display = 'none');
      document.querySelectorAll('.icon img').forEach(img => {
        img.src = 'assets/images/icon-plus.svg';
      });

      
      if (!isOpen) {
        answer.style.display = 'block';
        icon.src = 'assets/images/icon-minus.svg';
      }
    });
  });
});
