import React from 'react';

import Card from './Card';

const Cards = (props) => {
    return (
        <div style={styles}>
            <div style={divStyles}>
                {
                    props.assets.map((asset, index) => {
                        return <Card asset={asset} card_size={props.card_size} />
                    })
                }
            </div>
        </div>
    )
}

const styles = {
    flex: "4",
    margin: "2% 2%",
    paddingLeft: "1%"
}

const divStyles = {
    display: "flex",
    flexDirection: "row",
    flexFlow: "row wrap",
    position: "relative"
}
export default Cards;