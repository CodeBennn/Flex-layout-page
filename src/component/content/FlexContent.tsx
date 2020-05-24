import React from 'react';
import './FlexContent.css';

function FlexContent() {
    return (
        <React.Fragment>
            <section className="section-layout-start">
                <div className="layout-start-top"> </div>
                <div className="layout-start-bottom"> </div>
            </section>
            <section className="section-layout-middle" />
            <section className="section-layout-end" />
        </React.Fragment>
    );
}

export default FlexContent;
