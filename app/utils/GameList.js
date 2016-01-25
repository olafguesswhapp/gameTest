import axios from 'axios';

function getGameData() {
	return axios({
		url: 'http://localhost:3000/api/games',
		method: 'get',
	})
}

export default function getGameList(){
	return getGameData()
};