import { useTheme } from "../../../ThemeContext";

export default function MainHeader () {

    const themeState = useTheme(); 

    return(
        <div className="main-header">
            <img src="https://reworth-public-assets.s3-us-west-2.amazonaws.com/img/reworth-logo-white.png" alt="ReWorth rewards" style={{ width: '18em' }} />
            <div style={{ marginTop: '1.25em', color: 'white', fontSize: '1.25rem', fontWeight: 600 }}>
                <h1>Rodrigo Salmerón García</h1>
            </div>
            <button className="accent-cta" onClick={() => themeState.toggle()} style={{ marginTop: '1em' }}>
                <span className="white-title-color" style={{ fontSize: '1rem' }}>
                    {themeState.dark === false ? 'Dark' : 'Light'}
                </span>  
            </button>
        </div>
    )
}