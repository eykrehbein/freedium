# Freedium

Freedium is a chromium extension that allows you to read unlimited medium.com premium articles (and those of its subsidiary sites such as towardsdatascience.com) for free.

### How it works

The founder of Medium.com announced on Twitter in early 2019 that the paywall for all articles will be lifted if you are redirected from Twitter to this article. The extension does nothing other than modifying the 'Referer' header on medium.com pages to `https://t.co` (that's Twitter's redirecting service).
Furthermore, the founder stressed that there will be no loss of income for the authors.

Sources:

https://twitter.com/ev/status/1100899021621583872

https://twitter.com/ev/status/1100907341732405248

### Installation

1. Get the latest release from here https://github.com/eykrehbein/freedium/releases

2. Unpack it
3. Go to chrome://extensions/ in your browser
4. Enable Developer Mode
5. Click `Load unpacked extension`
6. Select the unpacked folder
