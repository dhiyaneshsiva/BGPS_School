import React from 'react';

const BoldSpecificWord = (data) => {
    const words = data.text.split(' ');
    const wordsse = [
        'Adichunchanagiri'
    ]
    return (
        <p>
            {words.map((word, index) => {
                const isBold = word === wordsse;

                return isBold ? <b style={{ color: 'red' }} key={index}>{word} </b> : <span key={index}>{word} </span>;
            })}
        </p>
    );
};

export default BoldSpecificWord;