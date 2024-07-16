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
  Grid,
  TextField,
  Typography,
  makeStyles,
  styled,
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
              <Grid container>
              <Grid container className={classes.formNormal}>
                <Grid item xs={2.5}>
                  <Autocomplete
                    freeSolo
                    id="free-solo-2-demo"
                    disableClearable
                    options={clients}
                    className={classes.formField}
                    onChange={() => {
                      setOpenClientPopup(true);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Client Name"
                        size="small"
                        InputProps={{
                          ...params.InputProps,
                          type: "search",
                          classes: {
                            input: classes.homeInput
                          }
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={2.5}>
                  <TextField size="small" placeholder="Agreement Number" className={classes.formField} InputProps={{
                    classes: {
                      input: classes.homeInput
                    }
                  }} />
                </Grid>
                <Grid item xs={2.5}>
                  <FormGroup>
                    <FormControlLabel
                      size="small"
                      control={<Checkbox />}
                      className={classes.formCheckbox}
                      label={
                        <Typography sx={{fontFamily: "Quicksand",fontSize: '0.8rem'}}>Signed Contract*</Typography>
                      }
                    />
                  </FormGroup>
                </Grid>
                <Grid item xs={2.5}>
                  <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    startIcon={<CloudUpload />}
                  >
                    Upload file
                  </Button>
                </Grid>
                </Grid>
                <Grid item xs={12}>
                  <FormGroup sx={{ width: '10%' }}>
                    <FormControlLabel
                      size="small"
                      control={<Checkbox onChange={handleChangeAudit} />}
                      label={
                        <Typography sx={{fontFamily: "Quicksand",fontSize: '0.8rem'}}>
                          Audit
                        </Typography>
                      }
                    />
                  </FormGroup>
                </Grid>
                {AuditFormVisibility && (
                  <>
                    <Grid item xs={2.5}>
                      <TextField
                        size="small"
                        placeholder="Service Now Task Number"
                        className={classes.formField}
                        InputProps={{
                          classes: {
                            input: classes.homeInput
                          }
                        }}
                      />
                    </Grid>
                    <Grid item xs={2.5}>
                      <TextField size="small" placeholder="PDFID##" className={classes.formField} InputProps={{
                    classes: {
                      input: classes.homeInput
                    }
                  }} />
                    </Grid>
                    <Grid item xs={2.5}>
                      <TextField size="small" placeholder="PDF Version ID" className={classes.formField} InputProps={{
                    classes: {
                      input: classes.homeInput
                    }
                  }} />
                    </Grid>
                  </>
                )}
              </Grid>
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
