function download(type) {
  let video = document.getElementById("url").value;
  try {
    let id = getId(video);
	console.log(`downloading ${id}`);
	window.open('/youtube/download/' + id)
  } catch (err) {
    /* todo: use custom error dialog */
    alert(err);
  }
}

/* stolen from https://github.com/fent/node-ytdl-core/tree/master/lib/util.js */
const idRegex = /^[a-zA-Z0-9-_]{11}$/;
const validateID = (id) => idRegex.test(id);

function getId(url) {
  if (validateID(url)) {
    return url;
  }
  try {
    let parsedUrl = new URL(url);
    console.log(parsedUrl);
    switch (parsedUrl.hostname.replace("www.", "")) {
      case "youtu.be":
        return parsedUrl.pathname.replace("/", "");
      case "youtube.com":
        return parsedUrl.searchParams.get("v");
    }
  } catch (err) {
    console.log(err);
    throw new Error("Invalid URL");
  }
}
