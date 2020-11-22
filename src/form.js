import React, { useState, useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

const Form = () => {
  const [url, setUrl] = useState("");
  const [finalUrl, setFinalUrl] = useState("");
  // eslint-disable-next-line
  const [shortenUrls, setShortenUrls] = useLocalStorageState("links", []);
  // eslint-disable-next-line
  const [maps, setMaps] = useState(["hello", "www.example.com"]);
  const [copied, setCopied] = useState("false");
  const [copiedLink, setCopiedLink] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    var errorText = document.querySelector(".small");
    var input = document.querySelector(".form-input");
    if (!url || !regexp.test(url)) {
      input.classList.add("input-error");
      errorText.classList.remove("visibility-toggle");
    } else {
      input.classList.remove("input-error");
      errorText.classList.add("visibility-toggle");
      setFinalUrl(url);
    }
  };

  useEffect(() => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${finalUrl}`)
      .then((response) => response.json())
      .then((response) => {
        if (response.ok) {
          console.log(response.result.short_link);
          localStorage.setItem(finalUrl, response.result.short_link);
          setShortenUrls([...shortenUrls, finalUrl]);
        }
      })
      .catch((e) => console.log(e));
  }, [finalUrl]);

  const copyUrl = (url) => {
    const el = document.createElement("textarea");
    el.value = url;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied("true");
    setCopiedLink(url);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <div>
          <input
            type="text"
            name="link"
            id="link"
            placeholder="Shorten a link here..."
            className="form-input"
            onChange={(e) => setUrl(e.target.value)}
          />
          <small className="small visibility-toggle">please add a link</small>
        </div>

        <button type="submit">Shorten It!</button>
      </form>

      <div className="shorten-link">
        {shortenUrls
          .filter((item) => item !== "")
          .map((item, index) => (
            <div key={index} className="links">
              <p>{item}</p>
              <p>{localStorage.getItem(item)}</p>
              <button
                onClick={() => copyUrl(localStorage.getItem(item))}
                className={
                  copied === "true" && copiedLink === localStorage.getItem(item)
                    ? "copy-background"
                    : ""
                }
              >
                {copied === "true" && copiedLink === localStorage.getItem(item)
                  ? "Copied!"
                  : "Copy"}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Form;
