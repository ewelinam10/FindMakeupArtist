import * as React from 'react';

const NavBar = () => {
    return (
        <div className="navBar">
            <button type="button" className="collapsible">Open Collapsible</button>
            <div className="settingsList">
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;


