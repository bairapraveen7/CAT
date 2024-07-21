import { Delete, Download, DownloadForOffline } from "@mui/icons-material";
import { Grid, InputLabel, Typography } from "@mui/material";
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
        <Typography component="p" color="primary">Similarity %</Typography>
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
    </div>
  );
};
