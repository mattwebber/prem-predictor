// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type TeamStats = {
	name: string;
	gamesPlayed: number;
	gamesWon: number;
	gamesDrawn: number;
	gamesLost: number;
	goalsFor: number;
	goalsAgainst: number;
};

type Data = {
	standings: TeamStats[];
};

const tempValues: TeamStats[] = [
	{
		name: 'Manchester City',
		gamesPlayed: 0,
		gamesWon: 0,
		gamesDrawn: 0,
		gamesLost: 0,
		goalsFor: 0,
		goalsAgainst: 0,
	},
	{
		name: 'Liverpool',
		gamesPlayed: 0,
		gamesWon: 0,
		gamesDrawn: 0,
		gamesLost: 0,
		goalsFor: 0,
		goalsAgainst: 0,
	},
	{
		name: 'Chelsea',
		gamesPlayed: 0,
		gamesWon: 0,
		gamesDrawn: 0,
		gamesLost: 0,
		goalsFor: 0,
		goalsAgainst: 0,
	},
	{
		name: 'Manchester United',
		gamesPlayed: 0,
		gamesWon: 0,
		gamesDrawn: 0,
		gamesLost: 0,
		goalsFor: 0,
		goalsAgainst: 0,
	},
];

// This endpoint returns the current league table data.
export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
	res.status(200).json({ standings: tempValues });
}
