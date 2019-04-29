import React, { Component } from 'react';

class TesteEvento extends Component {
    render() {
        return (
            <div onMouseMove={(event) => render(Object.assign({}, event), show)}
                onMouseEnter={(event) => render(Object.assign({}, event), true)}
                onMouseLeave={(event) => render(Object.assign({}, event), false)}
                style={style}>
                {show &&
                    <div style={{ position: 'fixed', top: event.clientY, left: event.clientX }}>
                        clientX: {event.clientX}<br />
                        clientY: {event.clientY}<br />
                        pageX: {event.pageX}<br />
                        pageY: {event.pageY}<br />
                        screenX: {event.screenX}<br />
                        screenY: {event.screenY}<br />
                    </div>}
            </div>
        );
    }
}


export default TesteEvento;