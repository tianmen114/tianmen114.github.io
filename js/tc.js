function share() {
    const url = window.location.href;
    const title = document.title;
    const text = `Check out this article: ${title}`;
  
    if (navigator.share) {
      navigator.share({
        title: title,
        text: text,
        url: url,
      }).then(() => {
        console.log('Thanks for sharing!');
      }).catch((error) => {
        console.error('Something went wrong sharing the article', error);
      });
    } else {
      // Fallback for browsers that do not support the Web Share API
      prompt('Copy this link to share:', url);
    }
  }
  