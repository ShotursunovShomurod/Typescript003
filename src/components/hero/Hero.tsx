import React, { Component } from "react";

interface Props {
    title: string;
    price: number;
    children: JSX.Element;
}

class Hero extends Component<Props> {
    render() {
        const { title, price, children } = this.props;

        return (
            <div>
                <p>{title}</p>
                <p>{price}</p>
                {children}
            </div>
        );
    }
}

export default Hero;