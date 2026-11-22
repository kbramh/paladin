import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import Breadcrumbs from "./Breadcrumbs";

export default function reportFraudVendorDetailsPage() {
  return (
    <main>
      <Breadcrumbs />
      <div>
        <span>
          <i></i>
          <label></label>
          <label></label>
        </span>
        <div className="vendor_details">
          <span>Vendor Details</span>
          <Box className="vendor_details_field" sx={{ maxWidth: "100%", width: 1500 }}>
            <TextField fullWidth label="" id="fullWidth" />
          </Box>
        </div>
      </div>
    </main>
  );
}
