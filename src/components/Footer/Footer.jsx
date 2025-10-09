import React from "react";
import "./Footer.css";


export default function Footer() {
  return (
    <div className="footer">
        <p>Designed by <strong>Shahrbanoo Sasanipour</strong></p>
        <div class="footer-links">
          <a href="https://github.com/BanooSasanipour" target="_blank" rel="noopener noreferrer">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" class="icon" />
          GitHub
          </a>
          <a href="mailto:sasanipourbanoo@gmail.com">
          <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" class="icon" />
          Email
          </a>
        </div>
    </div>
  );
}


