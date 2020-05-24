import React from 'react';
import './FlexLayout.css';
import FlexContent from './content/FlexContent';

function Flex() {
    return (
        <React.Fragment>
            <header />
            <main className="main-layout">
                <FlexContent />
            </main>
            <footer>
                <button className="footer-btn">Click here!</button>
            </footer>
        </React.Fragment>
    );
}

export default Flex;
