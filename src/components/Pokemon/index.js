import React, { Component } from 'react';
import PokemonData from "../../Constants/allPokemons/pokemons.json";
import PlayerContent from '../PlayerContent/PlayerContent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pokemon.css';


class PokemonGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonData: PokemonData,
            team1: [],
            team2: [],
        };
    };

    startGame = () => {
        let data = this.state.pokemonData
        let randomTeam1 = [];
        let randomTeam2 = [...data.pokemon];

        // console.log(data.pokemon[0].name, randomTeam1, randomTeam2);
        // console.log(randomTeam1);
        // console.log(randomTeam2);

        while (randomTeam1.length < randomTeam2.length) {
            let randomNum = Math.floor(Math.random() * randomTeam2.length);

            let randomDeletePlayer = randomTeam2.splice(randomNum, 1)[0];
            randomTeam1 = [...randomTeam1, randomDeletePlayer];
        }
        this.setState({ team1: randomTeam1, team2: randomTeam2 })
    }



    render() {

        let teamPoint1 = this.state.team1.reduce((sum, pokemonData) => sum + pokemonData.base_experience, 0)
        let teamPoint2 = this.state.team2.reduce((sum, pokemonData) => sum + pokemonData.base_experience, 0)
        console.log(teamPoint1);
        return (
            <React.Fragment>
                <div>
                    <button className="btn btn-primary" onClick={() => this.startGame()}>Start fight</button>
                </div>
                <main className="content">
                    <div className="team1">
                        <PlayerContent
                            text={teamPoint1 > teamPoint2 ? "Winner" : "Loser"}
                            points={teamPoint1}
                            data={this.state.team1} />
                    </div>
                    <div className="team2">
                        <PlayerContent
                            text={teamPoint1 < teamPoint2 ? "Winner" : "Loser"}
                            points={teamPoint2}
                            data={this.state.team2} />
                    </div>
                </main>





            </React.Fragment>
        );
    };
};

export default PokemonGame;