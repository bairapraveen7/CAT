import { Circle, Delete, Download, DownloadForOffline } from "@mui/icons-material";
import { Box, CircularProgress, Grid, InputLabel, List, ListItem, ListItemText, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import { Fragment } from "react";
import classes from "./XpageComponent.module.css";

const LabelAnswerComponent = ({ label, subText, bigGrid }) => {
  return (
    <Fragment>
      <Typography component="p" color={bigGrid ? 'secondary' : '#020202'}>{label}</Typography>
      <Typography component="p" color={bigGrid ? 'secondary' : 'primary'}>
        {subText}
      </Typography>
    </Fragment>
  );
};

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}`}
        </Typography>
      </Box>
    </Box>
  );
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
};

const NestedGridItem = () => {
  return (
    <div className={classes.nestedGridItem}>
      <div className={classes.nestedGridItemOne}>
        <LabelAnswerComponent label="SECTION" subText="Contract Term" />
      </div>
      <div className={classes.nestedGridItemTwo}>
        <DownloadForOffline />
      </div>
      <div className={classes.nestedGridItemThree}>
        <LabelAnswerComponent label="STATUS" subText="Digitized" />
      </div>
      <div className={classes.nestedGridItemFour}>
        <LabelAnswerComponent label="AUDIT VERSION" subText="0013" />
      </div>
    </div>
  );
};

const DownGridItem = () => {
  return (
    <div className={classes.downGridItem}>
      <div className={classes.downGridItemOne}>
        <Typography component="p" color="primary">Brand Definition</Typography>
        <Typography component="p" color="primary"><CircularProgressWithLabel value={67} /> Similarity %</Typography>
      </div>
      <div className={classes.downGridItemTwo}>
        <div className={classes.downGridItemTwoHeading}>
          <Typography component="p" color="primary">Contract</Typography>
          <Typography component="p" color="primary">Page No. 30</Typography>
        </div>
        <Typography component="p">Brand Products will be defined as all drugs and supplies with a valid NDC that meet all of the following criteria: (i) Medi-Span Multi-Source Code of 'M', 'N', or a valid NDC that meet all of the following criteria: (i) Medi-Span Multi-Source Code of "M", "N"</Typography>
      </div>
      <div className={classes.downGridItemThree}>
        <Typography component="p" color="primary">CPM</Typography>
        <Typography component="p">Brand Drug(s)" or"Brand" means single-source brand or source brand drugs determined brand drugs determined. means single-source brand or source brand drugs determined brand drugs determined</Typography>
      </div>
      <div className={classes.downGridItemFour}>
        <Typography component="p">ADJ_MULTI_SOURCE_OVERRIDE IN (M,N,O) ADJ_MULTI_SOURCE_OVERRIDE IN (M,N,O)ADJ_MULTI_SOURCE_OVERRIDE IN (M,N,O)</Typography>
      </div>
      <div className={classes.downGridItemFive}>
        <Typography component="p">ADJ_MULTI_SOURCE_OVERRIDE IN (M,N,O) ADJ_MULTI_SOURCE_OVERRIDE IN (M,N,O) ADJ_MULTI_SOURCE_OVERRIDE IN (M,N,0)</Typography>
      </div>
    </div>
  )
}

export const XpageComponent = () => {
  return (
    <div className={classes.xPage}>
      <div className={classes.gridContainer}>
        <div className={classes.gridItemOne}>
          <div className={classes.gridItemOneInside}>
            <div className={classes.gridItemOneInsideOne}>
              <LabelAnswerComponent label="Client Name" subText="Eternal Health Corporation" bigGrid={true} />
            </div>
            <div>
              <DownloadForOffline />
            </div>
            <div>
              <LabelAnswerComponent label="File Name" subText="123456.PDF" bigGrid={true} />
            </div>
            <div>
              <LabelAnswerComponent label="Agreement Number" subText="985674839301123" bigGrid={true} />
            </div>
            <div>
              <LabelAnswerComponent label="PDF ID" subText="1234" bigGrid={true} />
            </div>
            <div>
              <LabelAnswerComponent label="Version ID" subText="030" bigGrid={true} />
            </div>
          </div>
        </div>
        <div className={classes.gridItemTwo}>
          <NestedGridItem />
        </div>
        <div className={classes.gridItemThree}>
          <NestedGridItem />
        </div>
        <div className={classes.gridItemFour}>
          <NestedGridItem />
        </div>
        <div className={classes.gridItemFive}>
          <NestedGridItem />
        </div>
        <div className={classes.gridItemSix}>
          <NestedGridItem />
        </div>
        <div className={classes.gridItemSeven}>
          <NestedGridItem />
        </div>
      </div>
      <div className={classes.secondPart}>
        <DownGridItem />
        <DownGridItem />
      </div>
      <div className={classes.lastRow}>
        <Typography component="p" sx={{mx: 2, color: 'orange'}}><Circle sx={{ fontSize: '0.5rem'}} /> Custom</Typography>
        <Typography component="p" sx={{mx: 2, color: 'green'}}><Circle sx={{ fontSize: '0.5rem'}} /> Medispan</Typography>
      </div>
    </div>
  );
};
