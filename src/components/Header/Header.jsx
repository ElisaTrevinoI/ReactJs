

import logo from './logo.jpg'


export const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img width={180} height={195} src={logo} alt="imagenLogo" />
            </div>
            <h1 className="encabezado1">TODO PARA TEJER</h1>
            <div></div>
        </div>
    );
}

