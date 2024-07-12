import { Fragment, useState } from "react";
import { Header } from "../layout/Header";
import {
  Autocomplete,
  Button,
  Checkbox,
  Container,
  Dialog,
  FormControlLabel,
  FormGroup,
  TextField,
  Typography,
} from "@mui/material";
import classes from "./Home.module.css";
import { CancelPresentation, CloudUpload } from "@mui/icons-material";
import { clients } from "../../Data/Clients";
import { ClientPopup } from "./ClientPopup";

export const Home = () => {
  const [AuditFormVisibility, setAuditFormVisibility] = useState(false);
  const [openClientPopup, setOpenClientPopup] = useState(false);

  const handleChangeAudit = () => {
    setAuditFormVisibility((prev) => !prev);
  };

  return (
    <Fragment>
      {openClientPopup == true ? (
        <Fragment>
          <ClientPopup setOpenClientPopup={setOpenClientPopup} />
        </Fragment>
      ) : (
        <Fragment>
          <div className={classes.home}>
            <div className={classes.headline}>
              <div className={classes.mainText}>
                <Typography variant="h2">
                  Step into the <span>Future of Innovation</span> with Us
                </Typography>
              </div>
              <div className={classes.subText}>
                <Typography variant="p">
                  A tool that translates Contract Terms & Conditions to "Process
                  language/code" and interfaces with the Pricing Database to
                  create the most reliable source of data for PBM Ops
                </Typography>
              </div>
            </div>
            <div className={classes.form}>
              <div className={classes.formNormal}>
                <Autocomplete
                  freeSolo
                  id="free-solo-2-demo"
                  disableClearable
                  options={clients}
                  sx={{ width: 200 }}
                  onChange={() => {
                    setOpenClientPopup(true);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Search input"
                      size="small"
                      InputProps={{
                        ...params.InputProps,
                        type: "search",
                      }}
                    />
                  )}
                />
                <TextField size="small" placeholder="Agreement Number" />
                <FormGroup>
                  <FormControlLabel
                    size="small"
                    control={<Checkbox />}
                    label="Signed Contract*"
                  />
                </FormGroup>
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUpload />}
                >
                  Upload file
                </Button>
              </div>
              <FormGroup sx={{width: '10%'}}>
                <FormControlLabel
                  size="small"
                  control={<Checkbox onChange={handleChangeAudit} />}
                  label="Audit"
                  sx={{ mb: 2 }}
                />
              </FormGroup>
              {AuditFormVisibility && (
                <div className={classes.formAudit}>
                  <TextField
                    size="small"
                    placeholder="Service Now Task Number"
                  />
                  <TextField size="small" placeholder="PDFID##" />
                  <TextField size="small" placeholder="PDF Version ID" />
                </div>
              )}
              <Button
                variant="contained"
                sx={{ backgroundColor: "#002277", my: 4 }}
              >
                Submit
              </Button>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};
