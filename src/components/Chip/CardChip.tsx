import React, { FC } from 'react';
import { makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Tooltip from '@material-ui/core/Tooltip';

import { Intent } from 'types/Intent';

const useStyles = makeStyles({
  chip: {
    height: 'auto',
    minHeight: '150px',
    maxWidth: '100%',
    minWidth: '100%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  cardContentArea: {
    width: '320px',
    margin: '0px',
  },
  t1: {
    whiteSpace: 'initial',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  popoverTitle: {
    fontSize: '18px',
  },
  popoverBody: {
    fontSize: '14px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
    fontSize: 22,
  },
});

const HtmlTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}))(Tooltip);

type CardChipProps = {
  /**
   * @type(Intent)
   * what the user intends to do
   * */
  intent: Intent;
  /**
   * @type(boolean)
   * check if the card is selected
   * */
  isCardSelected: boolean;
  /**
   * @type(Function)
   * unselect a selected card by passing id
   * */
  unSelectCard: (id: string) => void;
  /**
   * @type(Function)
   * select a selected card by passing id
   * */
  onSelectCard: (id: string) => void;
  id: string;
};

const CardChip: FC<CardChipProps> = ({
  intent,
  isCardSelected,
  unSelectCard,
  onSelectCard,
}: CardChipProps) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <Chip
      id="card-chip"
      clickable
      component={Card}
      color={isCardSelected ? 'primary' : undefined}
      onClick={(): void =>
        isCardSelected ? unSelectCard(intent.id) : onSelectCard(intent.id)
      }
      variant="outlined"
      label={
        <>
          <CardContent className={classes.cardContentArea}>
            <Grid container justify="space-between">
              <Typography variant="h5" component="h2" gutterBottom>
                {intent.name}
              </Typography>
              <Chip
                size="small"
                color={isCardSelected ? 'primary' : 'secondary'}
                label={` ${intent.trainingData.expressionCount} expressions`}
              />
            </Grid>

            <Typography
              color={isCardSelected ? 'inherit' : 'textSecondary'}
              gutterBottom
            >
              {intent.trainingData.expressions[0].text}
              <br />
            </Typography>
            <Typography variant="body2" className={classes.t1} component="p">
              {intent.description}
              <br />
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            {/* incase of many expression, we can implement infinite scroll on the popover */}
            <HtmlTooltip
              placement="bottom-end"
              title={
                <>
                  <Typography className={classes.popoverTitle} color="inherit">
                    User Expressions
                  </Typography>

                  {intent.trainingData.expressions.map((expression) => (
                    <Typography
                      className={classes.popoverBody}
                      key={expression.id}
                      gutterBottom
                    >
                      {bull}
                      {expression.text}
                    </Typography>
                  ))}
                </>
              }
            >
              <Button
                color={isCardSelected ? 'primary' : 'secondary'}
                size="small"
                id="more-button"
              >
                More Details
              </Button>
            </HtmlTooltip>
          </CardActions>
        </>
      }
      className={classes.chip}
    />
  );
};

export default CardChip;
