import React from 'react';
import './SinglePlayer.css'

const SinglePlayer = ({ player, cart, setCart }) => {
    console.log(player)
    const { strCutout, strPosition, strNationality, idPlayer } = player

    const handleAddCart = () => {
        const info = {
            strCutout,
            strPosition,
            strNationality,
            idPlayer
        }
        if(cart){
            const newPlayer = [...cart, info]
            setCart(newPlayer)
            return;
        }
        else{
            setCart([info])
            return;
        }
    }
    console.log(cart)
    return (
        <div className='card'>
            <img className='player-img' src={strCutout} alt="" />
            <p>Nationality: {strNationality}</p>
            <p><small>Position: {strPosition}</small></p>
            <button className='card-btn'>Details</button>
            <button onClick={handleAddCart} className='card-btn'>Add to cart</button>
            <button className='card-btn'>Bookmark</button>
        </div>
    );
};

export default SinglePlayer;