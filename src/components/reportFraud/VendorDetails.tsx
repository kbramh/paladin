import { useState } from "react";

export default function reportFraudVendorDetailsPage() {
  return (
    <main>
      {step === Step.VendorDetails && (
        <div>
          <span>
            <i></i>
            <label></label>
            <label></label>
          </span>
          <div>
            <input></input>
            <span></span>
          </div>
        </div>
      )}
    </main>
  );
}
