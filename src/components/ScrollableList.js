import * as React from 'react';

const ScrollableList = (props) => 
{
    return (
        <div style={{ overflowY: "scroll", height: "800px"  }}>
            {props.children}
        </div>
    );
}

export default ScrollableList