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
import { CloudUpload } from "@mui/icons-material";
import { clients } from "../../Data/Clients";
import { ClientPopup } from "./ClientPopup";

export const Home = () => {
  const [AuditFormVisibility, setAuditFormVisibility] = useState(false);
  const [openClientPopup, setOpenClientPopup] = useState(false);

  const OpenClientPopup = ({ children }) => openClientPopup == true && <Fragment>{children}</Fragment>;
  const CloseClientPopup = ({ children }) => openClientPopup == false && <Fragment>{children}</Fragment>

  const handleChangeAudit = () => {
    setAuditFormVisibility((prev) => !prev);
  };

  return (
    <Fragment>
      <OpenClientPopup>
        <ClientPopup setOpenClientPopup={setOpenClientPopup} />
      </OpenClientPopup>
      <CloseClientPopup>
        <div className={classes.home}>
          <div className={classes.form}>
            <Grid container>
              <Grid container className={classes.formNormal}>
                <Grid item xs={2}>
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
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField size="small" placeholder="Agreement Number" className={classes.formField} />
                </Grid>
                <Grid item xs={2}>
                  <FormGroup>
                    <FormControlLabel
                      size="small"
                      control={<Checkbox />}
                      className={classes.formCheckbox}
                      label={
                        <Typography>Signed Contract*</Typography>
                      }
                    />
                  </FormGroup>
                </Grid>
                 
              </Grid>
              <Grid item xs={12}>
                <FormGroup sx={{ width: '15%' }}>
                  <FormControlLabel
                    size="small"
                    control={<Checkbox checked={AuditFormVisibility} onChange={handleChangeAudit} />}
                    label={
                      <Typography>
                        Audit
                      </Typography>
                    }
                  />
                </FormGroup>
              </Grid>
              {AuditFormVisibility && (
                <>
                  <Grid item xs={2}>
                    <TextField
                      size="small"
                      placeholder="Service Now Task Number"
                      className={classes.formField}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField size="small" placeholder="PDFID##" className={classes.formField} />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField size="small" placeholder="PDF Version ID" className={classes.formField} />
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
      </CloseClientPopup>
    </Fragment>
  );
};
