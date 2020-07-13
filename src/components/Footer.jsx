import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer class="border-top text-center small text-muted py-3 fixed-bottom bg-dark">
        <p class="m-0">
          Copyright &copy; 2020{" "}
          <Link to="/" className="text-muted ">
            <span className="text-primary">Readers Club Migrant Solution</span>
          </Link>
          . All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
