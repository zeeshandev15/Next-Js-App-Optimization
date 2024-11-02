"use client";

import { useEffect } from "react";
import Swal from "sweetalert2";

const Error = ({ error }) => {
  useEffect(() => {
    if (error) {
      console.log("Response:", error.response); // If applicable
      console.log("Status:", error.status); // If applicable
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
        confirmButtonText: "Okay",
      });
    }
  }, [error]);

  return null;
};

export default Error;
