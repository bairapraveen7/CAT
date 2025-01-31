import { Fragment, useContext, useState } from "react";
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
  Link,
  TextField,
  Typography,
  makeStyles,
  styled,
} from "@mui/material";
import classes from "./Home.module.css";
import { CloudUpload } from "@mui/icons-material";
import { clients } from "../../Data/Clients";
import { ClientPopup } from "./ClientPopup";
import Appclasses from '../../App.module.css'
import { BackgroundContext } from "../../Hooks/BackgroundContext";
import { SELECT_HOME, SELECT_POPUP } from "../../Data/Config";

export const Home = () => {
  const [AuditFormVisibility, setAuditFormVisibility] = useState(false);
  const [openClientPopup, setOpenClientPopup] = useState(false);
  const {value,setValue} = useContext(BackgroundContext);

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
                      setValue(SELECT_POPUP);
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
                <Grid item xs={2.5}>
                  <TextField size="small" placeholder="Agreement Number" className={classes.formField} />
                </Grid>
                <Grid item xs={2.5}>
                  <FormGroup>
                    <FormControlLabel
                      size="small"
                      control={<Checkbox />}
                      className={classes.formField}
                      label={
                        <Typography>Signed Contract*</Typography>
                      }
                    />
                  </FormGroup>
                </Grid>
                 <Grid item xs={2.5} className={classes.uploadDiv}>
                  <div className={classes.uploadImage}>
                    <input type="file" className={classes.uploadFile} hidden />
                  </div>
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
                  <Grid item xs={2.5}>
                    <TextField
                      size="small"
                      placeholder="Service Now Task Number"
                      className={classes.formField}
                    />
                  </Grid>
                  <Grid item xs={2.5}>
                    <TextField size="small" placeholder="PDFID##" className={classes.formField} />
                  </Grid>
                  <Grid item xs={2.5}>
                    <TextField size="small" placeholder="PDF Version ID" className={classes.formField} />
                  </Grid>
                </>
              )}
            </Grid>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#002277", my: 8 }}
              >
              Submit
            </Button>
          </div>
        </div>
      </CloseClientPopup>
    </Fragment>
  );
};
