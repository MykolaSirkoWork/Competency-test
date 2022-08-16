import logo from "../logo.svg";


export const Header = (props) =>  {
    const showNav = {
        alignItems: props.mobileVersion ? 'center' : 'start'
    }


    return(
        <header className="App-header" style={showNav}>
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    )
}