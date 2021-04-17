import Tilt from 'react-tilt';

const tilitOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            20,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.05,      // 2 = 200%, 1.5 = 150%, etc..
    speed:          300,    // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,   // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

export default function Card({...props}) {
    return(
        <div key={props.i} className="no-padding base-card">
            <Tilt options={tilitOptions} className="tilt">
                <div className="card-project" style={{ padding: '1.25em', width: '100%', height: '100%', borderRadius: 'inherit', display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'column' }}>
                    <h1 className="montserrat white-title-color" style={{ fontSize: '.65rem', textTransform: 'uppercase' }}>
                        {props.item.dv_address}
                    </h1>
                    <span className="montserrat white-title-color" style={{ fontSize: '1.55rem' }}>
                        {props.item.name}
                    </span>
                    <span className="montserrat white-title-color" style={{ marginTop: '1.75em', fontSize: '.85rem', textTransform: 'uppercase' }}>
                        {`Cashback: ${props.item.dv_cashback}`}
                    </span>
                    <span className="montserrat white-title-color" style={{ fontSize: '.85rem', textTransform: 'uppercase' }}>
                        {`Expiración: ${props.item.dv_expires}`}
                    </span>
                </div>
            </Tilt>
        </div>
    )
}