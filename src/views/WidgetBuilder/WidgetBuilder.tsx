import React, { useState, FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
  Checkbox,
  Container,
  FormControlLabel,
  Typography,
} from '@material-ui/core';
import CardChip from 'components/Chip/CardChip';
import intentsData from '../../assets/json/intents.json';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const WidgetBuilder: FC = () => {
  const [selectedCards, setSelectedCard] = useState<string[]>([]);

  const onSelectCard = (id: string): void => {
    setSelectedCard([...selectedCards, id]);
  };

  const unSelectCard = (id: string): void => {
    const remaingCards = selectedCards.filter((sCardId) => sCardId !== id);
    setSelectedCard(remaingCards);
  };

  const classes = useStyles();
  return (
    <Container>
      <Grid className={classes.root} container spacing={3} direction="column">
        <Grid item container justify="space-between" direction="row">
          <Grid item>
            <Typography variant="h5" component="h2">
              General Intentions
            </Typography>
            <Typography component="p" color="textSecondary">
              Select intentions by selecting cards
            </Typography>
          </Grid>
          <FormControlLabel
            control={
              <Checkbox
                id="check-all-cards"
                checked={selectedCards.length === intentsData.length}
                onClick={(): void => {
                  if (selectedCards.length !== intentsData.length) {
                    setSelectedCard(intentsData.map((intent) => intent.id));
                  } else {
                    setSelectedCard([]);
                  }
                }}
                name="checked_intents"
                color="primary"
              />
            }
            label={
              selectedCards.length !== intentsData.length
                ? 'Select All'
                : 'Clear Selection'
            }
          />
        </Grid>
        <Grid item container spacing={3}>
          {intentsData.map((intent) => (
            <Grid item md={4} xs={12} sm={6} key={intent.id}>
              <CardChip
                id="card-chip-widget"
                intent={intent}
                isCardSelected={selectedCards.some(
                  (cardId) => cardId === intent.id
                )}
                onSelectCard={onSelectCard}
                unSelectCard={unSelectCard}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default WidgetBuilder;
