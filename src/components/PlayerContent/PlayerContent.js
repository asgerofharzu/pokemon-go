import React, { Component } from 'react';
import Card from '../Card/Card'
class PlayerContent extends Component {
    state = {}
    render() {
        return (
            <>
                <h1 >{this.props.text}: {this.props.points}</h1>
                {this.props.data.map((pokemon, index) =>
                    <div key={index}>
                        {" "}
                        <Card img={pokemon.img_link} name={pokemon.name} power={pokemon.base_experience} type={pokemon.type}/>
                    </div>)}
            </>
        );
    }
}

export default PlayerContent;