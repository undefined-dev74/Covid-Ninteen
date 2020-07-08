import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import styles from './Cards.module.css';
import cx from 'classname'
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
	if (!confirmed) {
		return 'Loading Data....';
	}
	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid item component={Card} className={cx(styles.card, styles.infected)} xs={12} md={3}>
					<CardContent>
						<Typography color="textPrimary" gutterBottom>
							Infected
						</Typography>
						<Typography varient="h5">
							<CountUp
								start={0}
								end={confirmed.value}
								duration={2.5}
								separator=","
							/>
						</Typography>
						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography varient="body2">
							Number of active cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card}  className={cx(styles.card, styles.recovered)} xs={12} md={3}>
					<CardContent>
						<Typography color="textPrimary" gutterBottom>
							Recovered
						</Typography>
						<Typography varient="h5">
                        <CountUp
								start={0}
								end={recovered.value}
								duration={2.5}
								separator=","
							/>
                        </Typography>
						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography varient="body2">
							Number of recovered cases from COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid item component={Card}  className={cx(styles.card, styles.deaths)} xs={12} md={3}>
					<CardContent>
						<Typography color="textPrimary" gutterBottom>
                        Deaths
						</Typography>
                       
						<Typography varient="h5">
                        <CountUp
								start={0}
								end={deaths.value}
								duration={2.5}
								separator=","
							/>
                        </Typography>
						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography varient="body2">
							Number of death caused by COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
