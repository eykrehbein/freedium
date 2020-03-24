const settings = {
  requestFilter: {
    urls: [
      // Medium.com
      "https://medium.com/*",
      "https://medium.com/*/*",
      // *.medium.com
      "https://*.medium.com/*",
      "https://*.medium.com/*/*",
      // Towardsdatascience.com (Data Science, AI and ML)
      "https://towardsdatascience.com/*",
      "https://towardsdatascience.com/*/*"
    ]
  },
  extraInfoSpec: ["requestHeaders", "blocking", "extraHeaders"]
};

const listener = details => {
  let headers = details.requestHeaders;
  let isRefererSet = false;
  const blockingResponse = {};

  for (const header of headers) {
    if (header.name == "Referer") {
      header.value = "https://t.co";

      isRefererSet = true;

      break;
    }
  }

  if (!isRefererSet) {
    headers.push({
      name: "Referer",
      value: "https://t.co"
    });
  }

  blockingResponse.requestHeaders = headers;
  return blockingResponse;
};

chrome.webRequest.onBeforeSendHeaders.addListener(
  listener,
  settings.requestFilter,
  settings.extraInfoSpec
);
