chrome.omnibox.onInputEntered.addListener((input) => {
  try {
    const inputUrl = new URL(input);
    const newUrl = `${inputUrl.origin}${inputUrl.pathname}`;
    console.log(`New URL: ${newUrl}`);
  } catch (error) {
    console.error('Error:', error);
  }
});
