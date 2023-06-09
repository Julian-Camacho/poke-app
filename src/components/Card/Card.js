import React from 'react';
import typeColors from '../../helpers/typeColors'
import './style.css';

function Card({ pokemon }) {
    const num = pokemon.id;
    const hp = pokemon.stats[0].base_stat;
    const pokeName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const statAttack = pokemon.stats[1].base_stat;
    const statDefense = pokemon.stats[2].base_stat;
    const statSpeed = pokemon.stats[5].base_stat;
    // const tape = pokemon.type.type.name;
    console.log(num)
    return(
            <div id='card'>
                <div className='top'>
                <p class="number"><span>{num}</span></p>
                <p class="hp">
                <span>HP </span>
                    {hp}
                </p>
                </div>
                <div id='fondo' style={{ backgroundColor: 'black' }}>
                </div>
                <img src={pokemon.sprites.front_default} alt="" />
                <h2 class="poke-name">{pokeName}</h2>
                <div class="types">
                    {
                        pokemon.types.map(type => {
                            return (
                                <span style={{ backgroundColor: typeColors[type.type.name] }}>
                                    {type.type.name}
                                </span>
                            )
                        })
                    }   
                </div>
                <div class="stats">
                    <div>
                        <h3>{statAttack}</h3>
                        <p>Attack</p>
                    </div>
                    <div>
                        <h3>{statDefense}</h3>
                        <p>Defense</p>
                    </div>
                    <div>
                        <h3>{statSpeed}</h3>
                        <p>Speed</p>
                    </div>
                </div>
            </div>
            
    );
}
    
    

export default Card;